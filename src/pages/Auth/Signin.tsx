import { useState, useRef } from "react";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import { useAuth } from "../../components/Auth/AuthContext";
import { toast } from "react-toastify";
import admin from "../../assets/signin/home.png";
import tick from "../../assets/signin/tickadmin.png";
import homeIcon from "../../assets/signin/home1.png";
import { Mail, PhoneCall } from "lucide-react";
import MoveInForm from "../../components/Auth/MoveInForm";

export const SignIn = () => {
    const [usernumber, setUsernumber] = useState("");
    const [usermail, setUserMail] = useState("");
    const [keepSignedIn, setKeepSignedIn] = useState(false);
    const [error, setError] = useState("");
    const [step, setStep] = useState<"login" | "otp" | "movein">("login");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [showEmailInput, setShowEmailInput] = useState(false);
    const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
    const { login } = useAuth();

    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setStep("otp");
        setStep("movein");
        toast.success("OTP sent successfully!");
    };

    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < 5) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleOtpPaste = (
        e: React.ClipboardEvent<HTMLInputElement>,
        index: number,
    ) => {
        e.preventDefault();
        const pasted = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, 6);
        if (!pasted) return;
        const newOtp = [...otp];
        for (let i = 0; i < pasted.length; i++) {
            if (index + i < 6) newOtp[index + i] = pasted[i];
        }
        setOtp(newOtp);
        otpRefs.current[Math.min(index + pasted.length, 5)]?.focus();
    };

    const handleOtpKeyDown = (
        index: number,
        e: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    const handleOtpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        const otpValue = otp.join("");
        if (otpValue.length < 6) {
            setError("Please enter all 6 digits of the OTP");
            return;
        }

        toast.success("OTP verified successfully!");

        try {
            const mockResponse = {
                user: { id: 1, email: usermail, name: "Security User" },
                token: "mock-jwt-token",
            };
            login(mockResponse.user, mockResponse.token);
            setStep("movein");
        } catch (err) {
            setError("Invalid OTP");
            toast.error("Invalid OTP. Please try again.");
        }
    };

    const handleResendOtp = () => {
        setOtp(["", "", "", "", "", ""]);
        otpRefs.current[0]?.focus();
        toast.info("OTP has been resent to your email.");
    };

    const handleEmailSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setShowEmailInput(true);
    };

    const handlePhoneSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setShowEmailInput(false);
    };

    return (
        <div className="min-h-screen bg-[linear-gradient(#0F1A1E,#0F2A2E,#141E1E)] flex items-center justify-center px-4" style={{ color: COLORS.primary_white }}>
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
                <div className="flex-1 flex flex-col justify-between py-3 lg:py-3 px-4 lg:px-4 md:order-1">
                    <div>
                        <div className="flex items-center gap-3 mb-4 md:mb-3 lg:mb-2">
                            <div className="hidden lg:block absolute inset-0 pointer-events-none">
                                <div className="absolute top-10 border border-white w-125 h-125 bg-[#00B8DB33] rounded-full blur-[100px]" />
                            </div>
                            <div className="relative inline-block">
                                <div className="w-15 h-15 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-linear-to-br from-[#2B7FFF] to-[#00B8DB] rounded-2xl flex items-center justify-center">
                                    <img
                                        src={admin}
                                        alt="admin"
                                        className="w-8 h-8 md:w-6 md:h-6 lg:w-auto lg:h-auto"
                                    />
                                </div>
                            </div>
                            <div>
                                <h1
                                    className={`text-lg md:text-xl lg:text-4xl ${FONTSIZE[36]}`}
                                    style={{
                                        color: COLORS.primary_white,
                                        fontWeight: WEIGHT.seven,
                                    }}
                                >
                                    Skyline Rentals
                                </h1>
                                <p
                                    className={`text-[#53EAFD] lg:text-sm ${FONTSIZE[14]}`}
                                    style={{ fontWeight: WEIGHT.four }}
                                >
                                    Resident Portal
                                </p>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="mb-4 md:mb-3 lg:mb-2">
                                <div
                                    className={`${FONTSIZE[40]}`}
                                    style={{ fontWeight: WEIGHT.seven }}
                                >
                                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2">
                                        Welcome to Your
                                    </h2>
                                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3 lg:mb-2 bg-linear-to-r from-[#00D3F3] to-[#00D5BE] bg-clip-text text-transparent">
                                        Smart Home Portal
                                    </h2>
                                </div>
                                <p
                                    className={`text-sm md:text-xs lg:text-lg max-w-md ${FONTSIZE[16]}`}
                                    style={{
                                        color: COLORS.secoundy_gray,
                                        fontWeight: WEIGHT.four,
                                    }}
                                >
                                    Access your apartment dashboard, manage complaints, track
                                    visitors, and stay connected with your community.
                                </p>
                            </div>

                            <div className="space-y-3 md:space-y-1.5 lg:space-y-3 mb-4 md:mb-3 lg:mb-3">
                                {[
                                    "View and pay invoices online",
                                    "Submit and track maintenance requests",
                                    "Manage visitor approvals",
                                    "Access entry history and reports",
                                    "Receive real-time notifications",
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <img
                                            src={tick}
                                            alt=""
                                            className="w-4 h-4 lg:w-auto lg:h-auto shrink-0"
                                        />
                                        <span
                                            className={`text-gray-300 text-xs md:text-xs lg:text-base ${FONTSIZE[16]}`}
                                            style={{
                                                color: COLORS.smalltext,
                                                fontWeight: WEIGHT.four,
                                            }}
                                        >
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-1 hidden md:block border-t-[1.85px] border-t-[#FFFFFF1A] rounded-2xl p-3 md:p-3 lg:p-4 bg-[#FFFFFF0D] backdrop-blur-sm w-full lg:max-w-md lg:mx-0">
                        <div className="flex items-center gap-15 px-4">
                            <img src={homeIcon} alt="" />
                            <div>
                                <h3
                                    className={`font-semibold text-xs md:text-xs lg:text-base ${FONTSIZE[16]}`}
                                    style={{
                                        fontWeight: WEIGHT.seven,
                                        color: COLORS.primary_white,
                                    }}
                                >
                                    Your Digital Home
                                </h3>
                                <p
                                    className={`text-gray-400 text-xs ${FONTSIZE[14]}`}
                                    style={{
                                        fontWeight: WEIGHT.four,
                                        color: COLORS.secoundy_gray,
                                    }}
                                >
                                    Everything you need, right at your fingertips.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex-1 flex items-center justify-center p-4 md:p-3 lg:p-8 md:order-2">
                    <div className="w-full max-w-md md:max-w-sm lg:max-w-md bg-[#FFFFFF0D] rounded-xl border-t-[1.85px] border-t-[#FFFFFF1A]">
                        <div className="rounded-3xl p-5 md:p-5 lg:p-8 border border-[#00000040] shadow-2xl">
                            {step === "login" ? (
                                <>
                                    <div className="mb-5 lg:mb-6">
                                        <h3
                                            className={`text-xl lg:text-2xl font-semibold mb-2 ${FONTSIZE[30]}`}
                                            style={{
                                                fontWeight: WEIGHT.seven,
                                                color: COLORS.primary_white,
                                            }}
                                        >
                                            Sign in
                                        </h3>
                                        <p
                                            className={`text-gray-400 text-xs lg:text-sm ${FONTSIZE[16]}`}
                                            style={{
                                                fontWeight: WEIGHT.four,
                                                color: COLORS.smalltext,
                                            }}
                                        >
                                            Access your resident dashboard
                                        </p>
                                    </div>

                                    {error && (
                                        <div className="mb-6 rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-red-400 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <form
                                        onSubmit={handleLoginSubmit}
                                        className="space-y-4 md:space-y-4 lg:space-y-6"
                                    >
                                        {showEmailInput === true ? (
                                            <div className="mt-2">
                                                <label
                                                    className={`text-gray-300 text-sm font-medium mb-2 block ${FONTSIZE[14]}`}
                                                    style={{
                                                        color: COLORS.smalltext,
                                                        fontWeight: WEIGHT.seven,
                                                    }}
                                                >
                                                    Enter Email ID
                                                </label>
                                                <div className="relative" style={{ color: COLORS.inbox }}>
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6A7282]">
                                                        <Mail size={20} />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        value={usermail}
                                                        onChange={(e) => setUserMail(e.target.value)}
                                                        placeholder="Enter email address"
                                                        className="w-full bg-[#FFFFFF0D] border-t-[1.85px] border-t-[#FFFFFF1A] rounded-xl px-12 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFFFFF1A] transition-all text-sm lg:text-base border border-[#FFFFFF1A]"
                                                        required
                                                    />
                                                </div>
                                                <div className="flex justify-center">
                                                <button
                                                    type="button"
                                                    onClick={handlePhoneSubmit}
                                                    className={`mt-2 hover:text-[#0BA9E4] transition-colors font-medium cursor-pointer ${FONTSIZE[16]}`}>
                                                    Enter Phone Number
                                                </button>
                                                </div>
                                            </div>
                                        ) : (

                                            <div>
                                                <label
                                                    className={`text-gray-300 text-sm font-medium mb-2 block ${FONTSIZE[14]}`}
                                                    style={{
                                                        color: COLORS.smalltext,
                                                        fontWeight: WEIGHT.seven,
                                                    }}
                                                >
                                                    Enter Phone number
                                                </label>
                                                <div className="relative" style={{ color: COLORS.inbox }}>
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6A7282]">
                                                        <PhoneCall size={20} />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        value={usernumber}
                                                        onChange={(e) => setUsernumber(e.target.value)}
                                                        placeholder="Enter phone number"
                                                        className="w-full bg-[#FFFFFF0D] border-t-[1.85px] border-t-[#FFFFFF1A] rounded-xl px-12 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFFFFF1A] transition-all text-sm lg:text-base border border-[#FFFFFF1A]"
                                                        required
                                                    />
                                                </div>
                                                <div className="flex justify-center">
                                                <button
                                                    type="button"
                                                    onClick={handleEmailSubmit}
                                                    className={`mt-2 hover:text-[#0BA9E4] transition-colors font-medium cursor-pointer ${FONTSIZE[16]}`}>
                                                    Enter Email ID
                                                </button>
                                                </div>

                                            </div>)}

                                        <div className="flex items-center gap-3">
                                            <div className="relative">
                                                <input
                                                    type="checkbox"
                                                    id="keepSignedIn"
                                                    checked={keepSignedIn}
                                                    onChange={(e) => setKeepSignedIn(e.target.checked)}
                                                    className="peer sr-only"
                                                />
                                                <label
                                                    htmlFor="keepSignedIn"
                                                    className="flex h-5 w-5 cursor-pointer items-center justify-center rounded border border-[#00B8DBAA] bg-[#FFFFFF0D] backdrop-blur-sm transition-all peer-checked:border-[#00B8DB] peer-checked:bg-[#00B8DB]/10"
                                                >
                                                    <svg
                                                        className={`h-3 w-3 text-emerald-400 transition-opacity ${keepSignedIn ? "opacity-100" : "opacity-0"}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={3}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                </label>
                                            </div>
                                            <label
                                                htmlFor="keepSignedIn"
                                                className={`text-gray-400 text-xs lg:text-sm cursor-pointer select-none ${FONTSIZE[14]}`}
                                                style={{
                                                    fontWeight: WEIGHT.four,
                                                    color: COLORS.secoundy_gray,
                                                }}
                                            >
                                                Remember me
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            className={`w-full bg-linear-to-r from-[#00B8DB] to-[#00BBA7] hover:from-[#00B8DB]/80 hover:to-[#00BBA7]/70 font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-[#00B8DB40] text-sm lg:text-base cursor-pointer ${FONTSIZE[16]}`}
                                            style={{
                                                fontWeight: WEIGHT.four,
                                                color: COLORS.primary_white,
                                            }}
                                        >
                                            Submit
                                        </button>
                                    </form>


                                </>
                            ) : step === "otp" ? (
                                <MoveInForm />
                            ) : (
                                <>
                                    <div className="mb-4 md:mb-3 lg:mb-6">
                                        <h3
                                            className={`text-xl lg:text-2xl font-semibold mb-1 ${FONTSIZE[30]}`}
                                            style={{
                                                fontWeight: WEIGHT.seven,
                                                color: COLORS.primary_white,
                                            }}
                                        >
                                            Sign In
                                        </h3>
                                        <p
                                            className={`text-gray-400 text-xs lg:text-sm mb-4 lg:mb-6 ${FONTSIZE[16]}`}
                                            style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
                                        >
                                            Access your resident dashboard
                                        </p>

                                        <div className="rounded-2xl p-3 md:p-3 lg:p-5 text-center">
                                            <h4
                                                className={`font-semibold text-base mb-1 ${FONTSIZE[22]}`}
                                                style={{
                                                    fontWeight: WEIGHT.six,
                                                    color: COLORS.primary_white,
                                                }}
                                            >
                                                OTP Verification
                                            </h4>
                                            <p
                                                className={`text-gray-400 text-xs ${FONTSIZE[16]}`}
                                                style={{ color: COLORS.grey, fontWeight: WEIGHT.four }}
                                            >
                                                We will send you a One-Time password on this {showEmailInput ? "Email ID" : "Phone number"} 
                                            </p>
                                        </div>
                                    </div>

                                    {error && (
                                        <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-red-400 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <form
                                        onSubmit={handleOtpSubmit}
                                        className="space-y-4 md:space-y-4 lg:space-y-6"
                                    >
                                        <div>
                                            <label
                                                className={`text-gray-300 text-sm font-medium mb-3 block ${FONTSIZE[14]}`}
                                                style={{
                                                    color: COLORS.smalltext,
                                                    fontWeight: WEIGHT.seven,
                                                }}
                                            >
                                                Enter Otp
                                            </label>
                                            <div className="flex gap-1.5 md:gap-1.5 lg:gap-2 justify-between">
                                                {otp.map((digit, index) => (
                                                    <input
                                                        key={index}
                                                        ref={(el) => {
                                                            otpRefs.current[index] = el;
                                                        }}
                                                        type="text"
                                                        inputMode="numeric"
                                                        maxLength={1}
                                                        value={digit}
                                                        onChange={(e) =>
                                                            handleOtpChange(index, e.target.value)
                                                        }
                                                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                                        onPaste={(e) => handleOtpPaste(e, index)}
                                                        className="flex-1 min-w-0 aspect-square text-center text-base md:text-sm lg:text-lg font-semibold bg-[#FFFFFF0D] border border-[#FFFFFF1A] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00B8DB] transition-all"
                                                        style={{ caretColor: "#00B8DB" }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-center gap-2 text-xs">
                                            <span
                                                className={`${FONTSIZE[12]}`}
                                                style={{
                                                    fontWeight: WEIGHT.four,
                                                    color: COLORS.secoundy_gray,
                                                }}
                                            >
                                                Do not send OTP ?
                                            </span>
                                            <button
                                                type="button"
                                                onClick={handleResendOtp}
                                                className={`text-[#0BA9E4] hover:text-[#0BA9E4] transition-colors font-medium cursor-pointer ${FONTSIZE[12]}`}
                                                style={{ fontWeight: WEIGHT.four }}
                                            >
                                                ReSend OTP
                                            </button>
                                        </div>

                                        <div className="flex gap-3">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setStep("login");
                                                    setError("");
                                                    setOtp(["", "", "", "", "", ""]);
                                                }}
                                                className={`flex-1 border border-[#FFFFFF1A] bg-[#FFFFFF0D] hover:bg-[#FFFFFF1A] font-semibold py-3 rounded-xl transition-all duration-200 text-sm lg:text-base cursor-pointer ${FONTSIZE[16]}`}
                                                style={{
                                                    fontWeight: WEIGHT.seven,
                                                    color: COLORS.primary_white,
                                                }}
                                            >
                                                ← Sign In
                                            </button>
                                            <button
                                                type="submit"
                                                className={`flex-1 bg-linear-to-r from-[#00B8DB] to-[#00BBA7] hover:from-[#00B8DB]/80 hover:to-[#00BBA7]/70 font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-[#00B8DB40] text-sm lg:text-base cursor-pointer ${FONTSIZE[16]}`}
                                                style={{
                                                    fontWeight: WEIGHT.seven,
                                                    color: COLORS.primary_white,
                                                }}
                                            >
                                                Confirm OTP
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
