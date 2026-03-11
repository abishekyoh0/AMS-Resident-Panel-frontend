import React, { useState } from "react";
import { FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import CustomDropdown from "../../components/common/custormdropdown";
import key from "../../assets/Dashboard/key.png";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void; 
}

const AccessCardModal: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [accessCard, setAccessCard] = useState("");
  const [parking, setParking] = useState("yes");
  const [vehicles, setVehicles] = useState("1");
  const [amenities, setAmenities] = useState<string[]>([]);

  const accessOptions = [
    { value: "card", label: "Card" },
    { value: "biometric", label: "Biometric" },
    { value: "call", label: "Call" },
  ];

  const amenitiesList = [
    "Pool",
    "Gym",
    "Clubhouse",
    "Tennis Court",
    "Business Center",
    "Rooftop",
  ];

  const toggleAmenity = (item: string) => {
    if (amenities.includes(item)) {
      setAmenities(amenities.filter((a) => a !== item));
    } else {
      setAmenities([...amenities, item]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-2xl bg-black rounded-xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">

        <div className="mb-6 flex items-start justify-between">
          <div className="flex items-start gap-2">
            <div className="w-7 h-7 rounded-md bg-[#AD46FF1A] flex items-center justify-center">
              <img src={key} alt="key" className="w-4 h-4" />
            </div>

            <div>
              <h2
                className={`${FONTSIZE[16]} text-white`}
                style={{ fontWeight: WEIGHT.six }}
              >
                Access Card Request
              </h2>

              <p
                className={`text-gray-400 mt-1 ${FONTSIZE[12]}`}
                style={{ fontWeight: WEIGHT.four }}
              >
                Request a multi-property access card for gates and amenities
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-lg transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="bg-[#FFFFFF33] rounded-xl p-5 mb-6 border border-white/10">
          <p
            className={`${FONTSIZE[14]} text-white mb-5`}
            style={{ fontWeight: WEIGHT.five }}
          >
            Personal Information
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex flex-col gap-2">
              <label className={`text-gray-300 ${FONTSIZE[12]}`}>
                Full Name <span className="text-purple-400">*</span>
              </label>

              <input
                type="text"
                defaultValue="Sarajohnson"
                className="bg-[#FFFFFF33] rounded-lg px-4 py-2.5 text-white outline-none border border-transparent focus:border-purple-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className={`text-gray-300 ${FONTSIZE[12]}`}>
                Email <span className="text-purple-400">*</span>
              </label>

              <input
                type="email"
                defaultValue="Sarajohnson@gmail.com"
                className="bg-[#FFFFFF33] rounded-lg px-4 py-2.5 text-white outline-none border border-transparent focus:border-purple-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className={`text-gray-300 ${FONTSIZE[12]}`}>
                Phone Number <span className="text-purple-400">*</span>
              </label>

              <input
                type="text"
                defaultValue="9876543210"
                className="bg-[#FFFFFF33] rounded-lg px-4 py-2.5 text-white outline-none border border-transparent focus:border-purple-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className={`text-gray-300 ${FONTSIZE[12]}`}>
                Primary Unit Number <span className="text-purple-400">*</span>
              </label>

              <input
                type="text"
                defaultValue="Tower A - A-304"
                className="bg-[#FFFFFF33] rounded-lg px-4 py-2.5 text-white outline-none border border-transparent focus:border-purple-500"
              />
            </div>

          </div>

          <div className="mt-5 ">
            <CustomDropdown
              label="Access card"
              required
              placeholder="Choose your Access Card"
              options={accessOptions}
              value={accessCard}
              onChange={setAccessCard}
            />
          </div>
        </div>

        <div className="bg-[#3B3B3B] rounded-xl p-5 border border-white/10">

          <p
            className={`${FONTSIZE[14]} text-white mb-4`}
            style={{ fontWeight: WEIGHT.five }}
          >
            Additional Access Options
          </p>

          <p className="text-[#99A1AF] text-sm mb-2">Parking Access</p>

          <div className="flex gap-3 mb-4">
            {["yes", "no"].map((item) => (
              <button
                key={item}
                onClick={() => setParking(item)}
                className={`flex-1 py-2 rounded-md text-sm cursor-pointer ${
                  parking === item
                    ? "bg-[#C27AFF] text-[#000000]"
                    : "bg-[#FFFFFF33] text-[#FFFFFF]"
                }`}
              >
                {item === "yes" ? "Yes" : "No"}
              </button>
            ))}
          </div>

          <p className="text-[#99A1AF] text-sm mb-2">Number of Vehicles</p>

          <div className="grid grid-cols-4 gap-2 mb-4">
            {["1", "2", "3", "4+"].map((v) => (
              <button
                key={v}
                onClick={() => setVehicles(v)}
                className={`py-2 rounded-md text-sm cursor-pointer ${
                  vehicles === v
                      ? "bg-[#C27AFF] text-[#000000]"
                    : "bg-[#FFFFFF33] text-[#FFFFFF]"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <p className="text-[#99A1AF] text-sm mb-2">Amenities Access</p>

          <div className="grid grid-cols-2 gap-2 mb-6">
            {amenitiesList.map((item) => (
              <button
                key={item}
                onClick={() => toggleAmenity(item)}
                className={`py-2 rounded-md text-sm cursor-pointer ${
                  amenities.includes(item)
                     ? "bg-[#C27AFF] text-[#000000]"
                    : "bg-[#FFFFFF33] text-[#FFFFFF]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          
          <div className="flex justify-end gap-3">

            <button
              onClick={onSubmit}   
              className="px-5 py-2 rounded-md cursor-pointer bg-[#C27AFF] text-white text-sm"
            >
              Submit Request
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-md cursor-pointer border border-gray-500 text-gray-300 text-sm"
            >
              Cancel
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AccessCardModal;