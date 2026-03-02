import { useState } from "react";

import {  COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import { X } from "lucide-react";

type Props = {
  onClose: () => void;
};

const DetailsForm = ({ onClose }: Props) => {
  const [formData, setFormData] = useState({
    residentName: "",
    flatNumber: "",
    entryType: "",
    purpose: "",
    vehicleNumber: "",
    entryTime: "",
    securityGuard: "Security-1 (You)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#FFFFFF66] z-50 flex items-center justify-center p-4 overflow-auto">
      <div
        className="relative bg-[#1D1B21] rounded-3xl w-full max-w-2xl  p-6 sm:p-8
                   max-h-[90vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="
    absolute top-4 right-4
    sm:top-6 sm:right-6
    w-8 h-8 sm:w-10 sm:h-10
    flex items-center justify-center
    rounded-full
    hover:opacity-70
   
    text-white font-bold
    cursor-pointer
    transition
    shadow-md
  "
          aria-label="Close"
        >
          <X />
        </button>

        <h2
          className={`flex items-center gap-2 text-white text-xl sm:text-2xl font-bold mb-6 ${FONTSIZE[18]}`}
        style={{fontWeight:WEIGHT.four,color:COLORS.primary_white}}>
        Tenant & Property Details
        </h2>

        <form onSubmit={handleSubmit}>
        

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={`text-gray-300 text-sm mb-2 block ${FONTSIZE[14]}`}
        style={{fontWeight:WEIGHT.four,color:COLORS.primary_white}}>
                Tenant Name <span className="text-[#D1D5DC]">*</span>
              </label>
              <input
                type="text"
                 placeholder="Enter tenant name"
                value={formData.flatNumber}
                onChange={(e) =>
                  setFormData({ ...formData, flatNumber: e.target.value })
                }
                className="w-full  text-white rounded-xl px-4 py-3 bg-[#FFFFFF33] border border-[#FFFFFF1A] focus:border-green-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className={`text-gray-300 text-sm mb-2 block  ${FONTSIZE[14]}`}
        style={{fontWeight:WEIGHT.four,color:COLORS.primary_white}}>
                Move-Out Date<span className="text-[#D1D5DC]">*</span>
              </label>
              <input
                type="text"
                value={formData.flatNumber}
                onChange={(e) =>
                  setFormData({ ...formData, flatNumber: e.target.value })
                }
                className="w-full bg-[#FFFFFF33] border border-[#FFFFFF1A] text-white rounded-xl px-4 py-3  focus:border-green-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className={`text-gray-300 text-sm mb-2 block  ${FONTSIZE[14]}`}
        style={{fontWeight:WEIGHT.four,color:COLORS.primary_white}}>Property Address <span className="text-[#D1D5DC]">*</span></label>
            <input
              type="text"
              placeholder="123 Main St,Apt 4B,New York, NY 10001"
              value={formData.purpose}
              onChange={(e) =>
                setFormData({ ...formData, purpose: e.target.value })
              }
              className="w-full bg-[#FFFFFF33] border border-[#FFFFFF1A] text-white rounded-xl px-4 py-3  focus:border-green-500 focus:outline-none "
            />
          </div>

          <div className="mb-4">
            <label className={`text-gray-300 text-sm mb-2 block  ${FONTSIZE[14]}`}
        style={{fontWeight:WEIGHT.four,color:COLORS.primary_white}}>
             Original Deposite ($) <span className="text-[#D1D5DC]">*</span>
            </label>
            <input
              type="text"
              placeholder="5000"
              value={formData.vehicleNumber}
              onChange={(e) =>
                setFormData({ ...formData, vehicleNumber: e.target.value })
              }
              className="w-full bg-[#FFFFFF33] border border-[#FFFFFF1A] text-white rounded-xl px-4 py-3 focus:border-green-500 focus:outline-none "
            />
          </div>

        
          <div className="flex  justify-end w-full px-2 sm:px-0">
          

            <button
              type="submit"
              className={`flex items-center justify-center gap-2 sm:gap-4 text-white cursor-pointer transition hover:opacity-90 w-full sm:max-w-50 h-12 sm:h-12.5  ${FONTSIZE[16]}`}
       
              style={{
                borderRadius: "10px",
                background: "#2B7FFF",
                fontWeight:WEIGHT.four,color:COLORS.primary_white
              
              }}
            >
              Submit Form
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default DetailsForm;
