import React, { useState } from "react";
import { X, Eye, EyeOff, TriangleAlert } from "lucide-react";
import email from "../../assets/profile/email.png";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";

type Props = {
  onClose: () => void;
};

const Updateemail: React.FC<Props> = ({ onClose }) => {
  const [showNew, setShowNew] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  return (
    <div className="fixed inset-0 bg-[#FFFFFF66] flex items-center justify-center z-50">
      <div className="w-full max-w-md bg-linear-to-r from-[#101828] to-[#000000] border border-[#FFFFFF33] rounded-2xl shadow-2xl overflow-hidden">

        <div className="mt-2 ml-2 mr-2 px-6 py-4 bg-linear-to-r from-[#2B7FFF33] to-[#00B8DB33] border border-[#FFFFFF33]">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center text-white font-semibold text-lg ${FONTSIZE[24]}`}
              style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
            >
              <img src={email} alt="profile" className="w-12 h-12 p-2" />
              Update Email
            </div>

            <button onClick={onClose}>
              <X className="text-white cursor-pointer rounded-full hover:opacity-70 transition shadow-md hover:text-gray-200" />
            </button>
          </div>

          <p
            className={`${FONTSIZE[14]}`}
            style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
          >
            Update your Email Address
          </p>
        </div>

        <div className="p-6 space-y-4">

          <div>
            <label
              className={`text-sm ${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
            >
              Current Email:
            </label>
            <input
              placeholder="Enter current Email"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FFFFFF1A] border border-[#FFFFFF33] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              className={`text-sm ${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
            >
              New Email Address *
            </label>
            <input
              placeholder="Enter New Email Address"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FFFFFF1A] border border-[#FFFFFF33] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              className={`text-sm ${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
            >
              Confirm Email Address *
            </label>
            <input
              placeholder="Re-Enter New Email Address"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FFFFFF1A] border border-[#FFFFFF33] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              className={`text-sm ${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
            >
              Password (for Verification) *
            </label>

            <div className="relative mt-1">
              <input
                type={showNew ? "text" : "password"}
                placeholder="Enter Your password"
                className="w-full px-4 py-2 rounded-lg bg-[#FFFFFF1A] border border-[#FFFFFF33] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {showVerification && (
            <div>
              <label
                className={`text-sm ${FONTSIZE[14]}`}
                style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
              >
                Enter Verification Code *
              </label>

              <input
                placeholder="000000"
                maxLength={6}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FFFFFF1A] border border-[#FFFFFF33] text-white text-start tracking-widest focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <p className="text-xs text-gray-400 mt-1">
                Enter the 6-digit code sent to your new email
              </p>
            </div>
          )}

          <div className="bg-[#F0B1001A] border border-[#FDC7004D] rounded-lg p-3 text-xs text-gray-400">
            <div
              className={`flex items-center gap-1 text-[#FDC700] ${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four }}
            >
              <TriangleAlert color="#FDC700" size={15} />
              Important:
            </div>

            <div
              className={`${FONTSIZE[12]}`}
              style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
            >
              <p>
                A verification email will be sent to your new email address.
                You'll need to verify it before the change takes effect.
              </p>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              className={`flex-1 py-2 cursor-pointer rounded-lg bg-[#FFFFFF1A] text-white hover:bg-gray-600 transition ${FONTSIZE[16]}`}
              style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
            >
              Cancel
            </button>

            <button
              onClick={() => setShowVerification(true)}
              className={`flex-1 py-2 cursor-pointer rounded-lg bg-linear-to-r from-[#2B7FFF] to-[#0092B8] text-white font-medium hover:opacity-90 transition ${FONTSIZE[16]}`}
              style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
            >
              ✔ Update Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updateemail;