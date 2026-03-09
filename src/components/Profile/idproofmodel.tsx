import React from "react";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import documentt from "../../assets/profile/documentt.png"

type Props = {
  title: string;
  file: string;
  onClose: () => void;
};

const DocumentPreviewModal: React.FC<Props> = ({ title, file, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFFFFF66] ">
      
      <div className="w-full max-w-2xl rounded-2xl p-6 bg-linear-to-r from-[#0A0A1E]  to-[#0F0520] border border-[#00D3F280] shadow-2xl">

        <h2
          className={`text-white mb-4 ${FONTSIZE[24]}`}
          style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
        >
          {title}
        </h2>

        <div className="rounded-xl border border-[#FFFFFF1A] bg-[#FFFFFF0D] h-56 flex flex-col items-center justify-center text-center p-4">
          
  <img
            src={documentt}
            alt="profile"
            className="w-16 h-16 p-2"
          />
          <p
            className={`${FONTSIZE[16]}`}
            style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
          >
            Document preview would appear here
          </p>

          <p
            className={`${FONTSIZE[14]} mt-1 text-[#6A7282]`}
            style={{ fontWeight: WEIGHT.four }}
          >
            {file}
          </p>
        </div>

        <div className="flex  gap-4 mt-6">
          
          <button className="flex-1 py-3 rounded-full bg-[#2B7FFF33] border border-[#51A2FF4D] text-[#51A2FF] cursor-pointer hover:bg-[#00D3F255] transition">
            Download
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-3 cursor-pointer rounded-full bg-linear-to-r from-[#00B8DB] to-[#7F22FE] text-white hover:opacity-90 transition"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
};

export default DocumentPreviewModal;