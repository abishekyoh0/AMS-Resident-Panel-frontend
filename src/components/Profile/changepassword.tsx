import React, { useState } from "react";
import { X, Eye, EyeOff, Lightbulb } from "lucide-react";
import lock from "../../assets/profile/lock.png"
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";

type Props = {
  onClose: () => void;
};

const ChangePasswordModal: React.FC<Props> = ({ onClose }) => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="fixed inset-0 bg-[#FFFFFF66]  flex items-center justify-center z-50">
      <div className="w-full max-w-md bg-linear-to-r from-[#101828]  to-[#000000] border border-[#FFFFFF33] rounded-2xl shadow-2xl overflow-hidden">

        <div className="mt-2 ml-2 mr-2 px-6 py-4 bg-linear-to-r from-[#AD46FF33] to-[#F6339A33] border border-[#FFFFFF33]">
  
  <div className="flex items-center justify-between">
    <div className={`flex items-center  text-white font-semibold text-lg  ${FONTSIZE[24]}`}
              style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}>
      <img
        src={lock}
        alt="profile"
        className="w-12 h-12 p-2"
      />
      Change Password
    </div>

    <button onClick={onClose}>
      <X className="text-white cursor-pointer  rounded-full
    hover:opacity-70  transition
    shadow-md hover:text-gray-200 " />
    </button>
  </div>

  <p className={`text-white  ${FONTSIZE[14]}`}
            style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}>
    Update your account password
  </p>

</div>
        

        <div className="p-6 space-y-4">

          <div>
            <label className={`text-sm text-gray-300 ${FONTSIZE[14]}`}
            style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}>Current Password *</label>
            <div className="relative mt-1">
              <input
                type={showCurrent ? "text" : "password"}
                placeholder="Enter current password"
                className="w-full px-4 py-2 rounded-lg bg-[#FFFFFF1A] border border-[#FFFFFF33] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className={`text-sm text-gray-300 ${FONTSIZE[14]}`}
            style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}>New Password *</label>
            <div className="relative mt-1">
              <input
                type={showNew ? "text" : "password"}
                placeholder="Enter new password"
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
            <p className={`text-xs text-[#6A7282] mt-1 ${FONTSIZE[12]}`}
            style={{ fontWeight: WEIGHT.four }}>Minimum 8 characters</p>
          </div>

          <div>
            <label className={`text-sm text-gray-300 ${FONTSIZE[14]}`}
            style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}>Confirm New Password *</label>
            <div className="relative mt-1">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter new password"
                className="w-full px-4 py-2 rounded-lg bg-[#FFFFFF1A] border border-[#FFFFFF33] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="bg-[#2B7FFF1A] border border-[#51A2FF4D] rounded-lg p-3 text-xs text-gray-400">
            
           
             <div className={`flex items-center  text-[#51A2FF]  ${FONTSIZE[14]}`}
            style={{ fontWeight: WEIGHT.four }}>
     <Lightbulb size={18}/>
      Password Requirements:
    </div>
            <ul className={`list-disc ml-4 space-y-1 ${FONTSIZE[12]}`}
            style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}>
              <li>At least 8 characters long</li>
              <li>Mix of uppercase and lowercase letters</li>
              <li>Include numbers and special characters</li>
            </ul>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              className={`flex-1 py-2 cursor-pointer rounded-lg bg-[#FFFFFF1A] text-white hover:bg-gray-600 transition ${FONTSIZE[16]}`}
            style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
            >
              Cancel
            </button>

            <button className={`flex-1 py-2 cursor-pointer rounded-lg bg-linear-to-r from-[#AD46FF] to-[#E60076] text-white font-medium hover:opacity-90 transition ${FONTSIZE[16]}`}
            style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}>
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;