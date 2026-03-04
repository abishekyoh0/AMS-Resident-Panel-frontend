import React, { useState } from "react";
import type { Tenant } from "../../components/FamilyTenants/TenantCard";
// import home from "../../assets/FamilyTenants/home.png"
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (tenant: Tenant) => void;
}

const AddTenantModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    rent: "",
    deposit: "",    
    leaseStart: "",
    leaseEnd: "",
  });

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (
      !form.name ||
      !form.mobile ||
      !form.email ||
      !form.rent ||
      !form.deposit ||
      !form.leaseStart ||
      !form.leaseEnd
    ) {
      alert("Please fill all required fields");
      return;
    }

    const newTenant: Tenant = {
      id: `TEN-${Date.now()}`,
      name: form.name,
      mobile: form.mobile,
      email: form.email,
      rent: Number(form.rent),
      deposit: Number(form.deposit),
      leaseStart: form.leaseStart,
      leaseEnd: form.leaseEnd,
      status: "Pending",
    };

    onAdd(newTenant);
    onClose();
  };

  return (
<div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto">
<div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-linear-to-br from-[#0f0c29] via-[#1a1a3a] to-[#0f0c29] shadow-2xl relative max-h-[90vh] overflow-y-auto p-8">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          🏠 Add Tenant
        </h2> 
       
        <div className="flex flex-col mb-6">
          <label className="text-sm text-gray-400 mb-2">
            Tenant Name *
          </label>
          <input
            placeholder="e.g., Jane Smith"
            className="w-full bg-[#11142a] border border-[#2c2f4a] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/40 transition"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>
          
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1 flex flex-col">
            <label className="text-sm text-gray-400 mb-2">
              Mobile *
            </label>
            <input
              placeholder="+1-555-0101"
            className="w-full bg-[#11142a] border border-[#2c2f4a] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/40 transition"

              value={form.mobile}
              onChange={(e) =>
                setForm({ ...form, mobile: e.target.value })
              }
            />
          </div> 

          <div className="flex-1 flex flex-col">
            <label className="text-sm text-gray-400 mb-2">
              Email *
            </label>
            <input
              type="email"
              placeholder="tenant@email.com"
            className="w-full bg-[#11142a] border border-[#2c2f4a] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/40 transition"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1 flex flex-col">
            <label className="text-sm text-gray-400 mb-2">
              Lease Start Date *
            </label>
            <input
              type="date"
            className="w-full bg-[#11142a] border border-[#2c2f4a] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/40 transition"
              value={form.leaseStart}
              onChange={(e) =>
                setForm({ ...form, leaseStart: e.target.value })
              }
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="text-sm text-gray-400 mb-2">
              Lease End Date *
            </label>
            <input
              type="date"
            className="w-full bg-[#11142a] border border-[#2c2f4a] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/40 transition"
              value={form.leaseEnd}
              onChange={(e) =>
                setForm({ ...form, leaseEnd: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1 flex flex-col">
            <label className="text-sm text-gray-400 mb-2">
              Monthly Rent *
            </label>
            <input
              type="number"
              placeholder="e.g., 3500"
            className="w-full bg-[#11142a] border border-[#2c2f4a] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/40 transition"
              value={form.rent}
              onChange={(e) =>
                setForm({ ...form, rent: e.target.value })
              }
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="text-sm text-gray-400  mb-2">
              Security Deposit *
            </label>
            <input
              type="number"
              placeholder="e.g., 7000"
            className="w-full bg-[#11142a] border border-[#2c2f4a] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/40 transition"
              value={form.deposit}
              onChange={(e) =>
                setForm({ ...form, deposit: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex flex-col mb-6">
          <label className="text-sm text-gray-400 mb-2">
            Upload Documents
          </label>

          <div className="border border-white/10 rounded-xl h-32 flex flex-col items-center justify-center text-gray-500 bg-black/20 cursor-pointer hover:bg-black/30 transition">
            📄
            <p className="text-sm mt-2">
              ID Proof & Lease Agreement
            </p>
            <span className="text-xs text-gray-400">
              Click to upload
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm mb-8">
          ⚠ Admin verification required. Tenant will receive access after document approval.
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="flex-1 py-3 rounded-full bg-linear-to-br from-purple-500 to-pink-500 hover:opacity-90 transition font-medium"
          >
            Add Tenant
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTenantModal;  
