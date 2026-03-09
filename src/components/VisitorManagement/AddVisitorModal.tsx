import React, { useState } from "react";
import { CustomDropdown } from "../common/custormdropdown";
import { FONTSIZE, WEIGHT } from "../../constent/uiconstent";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const visitorTypeOptions = [
  { value: "Guest", label: "Guest" },
  { value: "Delivery", label: "Delivery" },
  { value: "Service", label: "Service" },
  { value: "Cabdriver", label: "Cab Driver" },
  { value: "Contractor", label: "Contractor" },
  { value: "Real Estate", label: "Real Estate" },
];

const visitPurposeOptions = [
  { value: "Social visit", label: "Social Visit" },
  { value: "Delivery pickup", label: "Delivery Pickup" },
  { value: "Food delivery", label: "Food Delivery" },
  { value: "Maintenance work", label: "Maintenance Work" },
  { value: "Cleaning services", label: "Cleaning Services" },
];

const AddVisitorModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-3xl bg-[#0b0c10] border border-white/10 rounded-2xl p-6">
<div className="flex justify-between">
 <h2 className={`${FONTSIZE[28]} mb-6`} style={{ fontWeight: WEIGHT.seven }}>
          ➕ Add Expected Visitor
        </h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          ✖
        </button>
      </div>

        <div className="grid md:grid-cols-2 gap-4">

        
          <div>
            <label className={`${FONTSIZE[14]} text-gray-400`} style={{ fontWeight: WEIGHT.four }}>
              Visitor Name *
            </label>
            <input
              className={`w-full mt-1 p-3 bg-[#FFFFFF1A] border border-white/10 rounded-lg ${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four }}
              placeholder="Enter visitor name"
            />
          </div>

          <div>
            <label className={`${FONTSIZE[14]} text-gray-400`} style={{ fontWeight: WEIGHT.four }}>
              Mobile Number *
            </label>
            <input
              className={`w-full mt-1 p-3 bg-[#FFFFFF1A] border border-white/10 rounded-lg ${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four }}
              placeholder="+91-XXXXX-XXXXX"
            />
          </div>

          <div>
            <label className={`${FONTSIZE[14]} text-gray-400`} style={{ fontWeight: WEIGHT.four }}>
              Visitor Type *
            </label>
            <CustomDropdown
              placeholder="Select visitor type"
              options={visitorTypeOptions}
              value={selectedType}
              onChange={setSelectedType}
              className={`${FONTSIZE[14]}`}
            />
          </div>

          <div>
            <label className={`${FONTSIZE[14]} text-gray-400`} style={{ fontWeight: WEIGHT.four }}>
              Purpose of Visit *
            </label>
            <CustomDropdown
              placeholder="Select purpose"
              options={visitPurposeOptions}
              value={selectedPurpose}
              onChange={setSelectedPurpose}
              className={` ${FONTSIZE[14]}`}
            />
          </div>

          <div>
            <label className={`${FONTSIZE[14]} text-gray-400`} style={{ fontWeight: WEIGHT.four }}>
              Expected Time *
            </label>
            <input
              type="time"
              className={`w-full mt-1 p-3 bg-[#FFFFFF1A] border border-white/10 rounded-lg ${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four }}
            />
          </div>

          <div>
            <label className={`${FONTSIZE[14]} text-gray-400`} style={{ fontWeight: WEIGHT.four }}>
              Vehicle Number (Optional)
            </label>
            <input
              className={`w-full mt-1 p-3 bg-[#FFFFFF1A] border border-white/10 rounded-lg ${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four }}
              placeholder="e.g., MH-01-AB-1234"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className={`${FONTSIZE[14]} text-gray-400`} style={{ fontWeight: WEIGHT.four }}>
            Notes (Optional)
          </label>
          <textarea
            rows={3}
            className={`w-full mt-1 p-3 bg-[#FFFFFF1A] border border-white/10 rounded-lg ${FONTSIZE[14]}`}
            style={{ fontWeight: WEIGHT.four }}
            placeholder="Add any special instructions..."
          />
        </div>

        
        <div className={`mt-4 bg-blue-500/10 border border-blue-500/30 p-3 rounded-lg text-blue-300 ${FONTSIZE[14]}`} style={{ fontWeight: WEIGHT.four }}>
          ℹ This visitor will be pre-approved. Security will automatically allow
          entry when they arrive.
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={onClose}
            className={`flex-1 py-2 cursor-pointer rounded-xl bg-[#FFFFFF1A] hover:bg-white/20 ${FONTSIZE[16]}`}
            style={{ fontWeight: WEIGHT.seven }}
          >
            Cancel
          </button>

          <button
            className={`flex-1 cursor-pointer py-2 rounded-xl bg-linear-to-r from-[#2B7FFF] to-[#0092B8] ${FONTSIZE[16]}`}
            style={{ fontWeight: WEIGHT.seven }}
          >
            ✔ Add Visitor
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddVisitorModal;