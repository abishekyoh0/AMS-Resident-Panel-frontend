import React, { useState, useEffect } from "react";
import type { FamilyMember } from "../../pages/FamilyTenants/FamilyTenants";
import family from "../../assets/FamilyTenants/family.png"
import { X } from "lucide-react";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  member: FamilyMember | null;
  onSave: (updated: FamilyMember) => void;
}

const EditFamilyMemberModal: React.FC<Props> = ({
  isOpen,
  onClose,
  member,
  onSave,
}) => {
  const [form, setForm] = useState<FamilyMember | null>(null);

  useEffect(() => {
    if (member) setForm(member);
  }, [member]);

  if (!isOpen || !form) return null;

  const handleSave = () => {
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      
     <div className="w-full max-w-2xl 
                max-h-[90vh] overflow-y-auto
                rounded-2xl border border-white/10 
                bg-linear-to-r from-[#0A0A1E] to-[#0F0520]
                p-6 md:p-8 text-white shadow-2xl">

<h2 className="text-2xl font-semibold mb-8 flex items-center justify-between">
  <div className="flex items-center gap-3">
    <img
      src={family}
      alt="family"
      className="w-7 h-7 object-contain"
    />
    Edit Family Member
  </div>

  <button
    onClick={onClose} 
    className="p-2 rounded-full hover:bg-gray-800 transition"
  >
    <X size={20} />
  </button>
</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="md:col-span-2">
            <Input
              label="Name *"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </div>

          <Input
            label="Relation *"
            value={form.relation}
            onChange={(e) =>
              setForm({ ...form, relation: e.target.value })
            }
          />

          <Input
            label="Age *"
            type="number"
            value={String(form.age)}
            onChange={(e) =>
              setForm({ ...form, age: Number(e.target.value) })
            }
          />

          <Input
            label="Mobile (Optional)"
            value={form.mobile || ""}
            onChange={(e) =>
              setForm({ ...form, mobile: e.target.value })
            }
          />

          <Input
            label="Email (Optional)"
            value={(form as any).email || ""}
            onChange={(e) =>
              setForm({ ...(form as any), email: e.target.value })
            }
          />
        </div>

        <div className="mt-8 border border-white/10 rounded-xl p-4 bg-white/5">
          <p className="text-xs text-cyan-400 mb-3">ID Proof</p>

          <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3">
            <span className="text-sm">license-scan.pdf</span>

            <button className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 text-sm hover:bg-blue-500/30 transition">
              upload document
            </button>
          </div>
        </div>

        <div className="mt-6 bg-blue-500/10 border border-blue-500/20 
                        text-blue-300 text-sm p-4 rounded-xl">
          Admin approval required for security access. Family member will be added to the system after verification.
        </div>

        <div className="mt-8 flex gap-4">

          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-full 
                       bg-linear-to-r from-[#2a2440] to-[#1c1a2e] 
                       border border-white/10 
                       font-medium hover:opacity-90 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="flex-1 py-3 rounded-full 
                       bg-linear-to-r from-green-500 to-emerald-500 
                       shadow-lg shadow-green-500/30 
                       font-semibold hover:from-green-600 hover:to-emerald-600 
                       transition-all duration-200"
          >
            Save the changes
          </button>
        </div>

      </div>
    </div>
  );
};


interface InputProps {
  label: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  type = "text",
  onChange,
}) => (
  <div>
    <label className="text-xs text-gray-400">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full mt-2 bg-white/5 border border-white/10 
                 rounded-xl px-4 py-3 
                 focus:outline-none focus:ring-2 
                 focus:ring-green-500 transition"
    />
  </div>
);

export default EditFamilyMemberModal;


