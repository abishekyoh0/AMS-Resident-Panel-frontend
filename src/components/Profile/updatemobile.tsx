import { X, Lightbulb } from "lucide-react";
import { useState } from "react";
import mobile from "../../assets/profile/mobile.png";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";

type Props = {
  onClose: () => void;
};

const Updatemobile: React.FC<Props> = ({ onClose }) => {

  const [otpSent, setOtpSent] = useState(false);

  return (
    <div className="fixed inset-0 bg-[#FFFFFF66] flex items-center justify-center z-50">
      <div className="w-full max-w-md bg-linear-to-r from-[#101828] to-[#000000] border border-[#FFFFFF33] rounded-2xl shadow-2xl overflow-hidden">

        <div className="mt-2 ml-2 mr-2 px-6 py-4 bg-linear-to-r from-[#00C95033] to-[#00BC7D33] border border-[#FFFFFF33]">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center text-white font-semibold text-lg ${FONTSIZE[24]}`}
              style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
            >
              <img src={mobile} alt="profile" className="w-10 h-10 p-2" />
              Update Mobile
            </div>

            <button onClick={onClose}>
              <X className="text-white cursor-pointer rounded-full hover:opacity-70 transition shadow-md hover:text-gray-200" />
            </button>
          </div>

          <p
            className={`${FONTSIZE[14]}`}
            style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
          >
            Change Your Mobile Number
          </p>
        </div>

        <div className="p-6 space-y-4">

          <div>
            <label
              className={`text-sm ${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
            >
              Current Mobile:
            </label>

            <div className="relative mt-1">
              <input
                placeholder="Enter current Mobile Number"
                className="w-full px-4 py-2 rounded-lg bg-[#FFFFFF1A] border border-[#FFFFFF33] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label
              className={`text-sm ${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
            >
              New Mobile Number *
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
              <input
                placeholder="Enter new Mobile Number"
                className="sm:col-span-2 w-full px-4 py-2 rounded-lg bg-[#FFFFFF1A] border border-[#FFFFFF33] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                type="button"
                onClick={() => setOtpSent(true)}
                className="w-full cursor-pointer px-4 py-2 text-sm bg-[#00C95033] hover:bg-[#00C95055] text-white rounded-lg"
              >
                {otpSent ? "Sent ✓" : "Send OTP"}
              </button>
            </div>
          </div>

          {otpSent && (
            <div>
              <label
                className={`text-sm ${FONTSIZE[14]}`}
                style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
              >
                Enter OTP *
              </label>

              <input
                placeholder="000000"
                maxLength={6}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FFFFFF1A] border border-[#FFFFFF33] text-white text-start tracking-widest focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}

          <div className="bg-[#2B7FFF1A] border border-[#51A2FF4D] rounded-lg p-3 text-xs text-gray-400">
            <div
              className={`flex items-center text-[#51A2FF] ${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four }}
            >
              <Lightbulb color="#51A2FF" size={18} />
              Verification Process:
            </div>

            <ul
              className={`list-disc ml-4 space-y-1 ${FONTSIZE[12]}`}
              style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
            >
              <li>1.Enter Your New Mobile Number</li>
              <li>2.Click "Send Otp" to receive verification code</li>
              <li>3.Enter 6-digit OTP from SMS</li>
              <li>4.Click Update Mobile to confirm</li>
            </ul>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              className={`flex-1 py-2 cursor-pointer rounded-lg bg-[#6A728233] text-white hover:bg-gray-600 transition ${FONTSIZE[16]}`}
              style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
            >
              Cancel
            </button>

            <button
              className={`flex-1 py-2 justify-between cursor-pointer rounded-lg bg-[#6A728233] text-white font-medium hover:opacity-90 transition ${FONTSIZE[16]}`}
              style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
            >
              ✔ Update
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Updatemobile;