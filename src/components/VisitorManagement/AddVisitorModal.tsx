import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const visitorTypes = [
  "Guest",
  "Delivery",
  "Service",
  "Cabdriver",
  "Contractor",
  "Real Estate",
];

const visitPurposes = [
  "Social visit",
  "Delivery pickup",
  "Food delivery",
  "Maintenance work",
  "Cleaning services",
];

const AddVisitorModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [openType, setOpenType] = useState(false);
  const [openPurpose, setOpenPurpose] = useState(false);

  const [selectedType, setSelectedType] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

      <div className="relative w-full max-w-3xl bg-[#0b0c10] border border-white/10 rounded-2xl p-6">

        <h2 className="text-xl font-semibold mb-6">
          ➕ Add Expected Visitor
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="text-sm text-gray-400">
              Visitor Name *
            </label>
            <input
              className="w-full mt-1 p-3 bg-white/5 border border-white/10 rounded-lg"
              placeholder="Enter visitor name"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">
              Mobile Number *
            </label>
            <input
              className="w-full mt-1 p-3 bg-white/5 border border-white/10 rounded-lg"
              placeholder="+91-XXXXX-XXXXX"
            />
          </div>

          <div className="relative">
            <label className="text-sm text-gray-400">
              Visitor Type *
            </label>

            <div
              onClick={() => setOpenType(!openType)}
              className="w-full mt-1 p-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer"
            >
              {selectedType || "Select visitor type"}
            </div>
          </div>

          <div className="relative">
            <label className="text-sm text-gray-400">
              Purpose of Visit *
            </label>

            <div
              onClick={() => setOpenPurpose(!openPurpose)}
              className="w-full mt-1 p-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer"
            >
              {selectedPurpose || "Select purpose"}
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400">
              Expected Time *
            </label>
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
          <label className="text-sm text-gray-400">
            Notes (Optional)
          </label>

          <textarea
            rows={3}
            className="w-full mt-1 p-3 bg-white/5 border border-white/10 rounded-lg"
            placeholder="Add any special instructions..."
          />
        </div>

        <div className="mt-4 text-sm bg-blue-500/10 border border-blue-500/30 p-3 rounded-lg text-blue-300">
          ℹ This visitor will be pre-approved. Security will automatically allow entry when they arrive.
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

        {openType && (
          <div className="absolute -left-55 top-28 w-52 bg-[#111827] border border-white/10 rounded-2xl p-4 space-y-3">

            {visitorTypes.map(type => (
              <button
                key={type}
                onClick={() => {
                  setSelectedType(type);
                  setOpenType(false);
                }}
                className="w-full py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10"
              >
                {type}
              </button>
            ))}

          </div>
        )}

        {openPurpose && (
          <div className="absolute -right-55 top-28 w-52 bg-[#111827] border border-white/10 rounded-2xl p-4 space-y-3">

            {visitPurposes.map(purpose => (
              <button
                key={purpose}
                onClick={() => {
                  setSelectedPurpose(purpose);
                  setOpenPurpose(false);
                }}
                className="w-full py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10"
              >
                {purpose}
              </button>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default AddVisitorModal; 