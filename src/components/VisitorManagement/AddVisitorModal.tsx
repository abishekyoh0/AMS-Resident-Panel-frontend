import React, { useState } from "react";
import { CustomDropdown } from "../common/custormdropdown";

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
        <h2 className="text-xl font-semibold mb-6">➕ Add Expected Visitor</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-400">Visitor Name *</label>
            <input
              className="w-full mt-1 p-3 bg-white/5 border border-white/10 rounded-lg"
              placeholder="Enter visitor name"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Mobile Number *</label>
            <input
              className="w-full mt-1 p-3 bg-white/5 border border-white/10 rounded-lg"
              placeholder="+91-XXXXX-XXXXX"
            />
          </div>

          {/* ── Visitor Type dropdown ── */}
          <CustomDropdown
            label="Visitor Type"
            required
            placeholder="Select visitor type"
            options={visitorTypeOptions}
            value={selectedType}
            onChange={setSelectedType}
          />

          {/* ── Purpose of Visit dropdown ── */}
          <CustomDropdown
            label="Purpose of Visit"
            required
            placeholder="Select purpose"
            options={visitPurposeOptions}
            value={selectedPurpose}
            onChange={setSelectedPurpose}
          />

          <div>
            <label className="text-sm text-gray-400">Expected Time *</label>
            <input
              type="time"
              className="w-full mt-1 p-3 bg-white/5 border border-white/10 rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">
              Vehicle Number (Optional)
            </label>
            <input
              className="w-full mt-1 p-3 bg-white/5 border border-white/10 rounded-lg"
              placeholder="e.g., MH-01-AB-1234"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-sm text-gray-400">Notes (Optional)</label>
          <textarea
            rows={3}
            className="w-full mt-1 p-3 bg-white/5 border border-white/10 rounded-lg"
            placeholder="Add any special instructions..."
          />
        </div>

        <div className="mt-4 text-sm bg-blue-500/10 border border-blue-500/30 p-3 rounded-lg text-blue-300">
          ℹ This visitor will be pre-approved. Security will automatically allow
          entry when they arrive.
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20"
          >
            Cancel
          </button>
          <button className="flex-1 py-2 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500">
            ✔ Add Visitor
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVisitorModal;
