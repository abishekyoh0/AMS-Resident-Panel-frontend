import React, { useState } from "react";
import type { FamilyMember } from "../../pages/FamilyTenants/FamilyTenants";
import family from "../../assets/FamilyTenants/family.png"
import document from "../../assets/FamilyTenants/document.png"
import { X } from "lucide-react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (data: FamilyMember) => void;
}

const AddFamilyMemberModal: React.FC<Props> = ({
    isOpen,
    onClose,
    onAdd,
}) => {
    const [form, setForm] = useState({
        name: "",
        relation: "",
        age: "",
        mobile: "",
        email: "",
    });

    if (!isOpen) return null;

   const handleSubmit = () => {
  if (!form.name || !form.relation || !form.age) return;

  const newMember: FamilyMember = {
      id: `FM-${Date.now()}`,
      name: form.name,
      relation: form.relation,
      age: Number(form.age),
      mobile: form.mobile,
      added: new Date().toLocaleDateString(),
      status: "Active",
      icon: ""
  };

  onAdd(newMember);

  setForm({
    name: "",
    relation: "",
    age: "",
    mobile: "",
    email: "",
  });
};

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">


            <div className="relative w-full max-w-2xl 
                      max-h-[90vh] overflow-y-auto
                      rounded-2xl border border-white/10 
                      bg-linear-to-br from-[#0f0c29] via-[#14143c] to-[#302b63]
                      p-6 md:p-8 text-white shadow-2xl">

                {/* <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                    👨‍👩‍👧 Add Family Member
                </h2> */}

<h2 className="text-2xl font-semibold mb-8 flex items-center justify-between">
  <div className="flex items-center gap-3">
    <img
      src={family}
      alt="family"
      className="w-7 h-7 object-contain"
    />
    Add Family Member
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
                            placeholder="e.g., John Doe"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                        />
                    </div>

                    <Input
                        label="Relation *"
                        // placeholder="e.g., Spouse"
                        value={form.relation}
                        onChange={(e) =>
                            setForm({ ...form, relation: e.target.value })
                        }
                    />

                    <Input
                        label="Age *"
                        type="number"
                        placeholder="Age"
                        value={form.age}
                        onChange={(e) =>
                            setForm({ ...form, age: e.target.value })
                        }
                    />

                    <Input
                        label="Mobile (Optional)"
                        placeholder="+1-555-0101"
                        value={form.mobile}
                        onChange={(e) =>
                            setForm({ ...form, mobile: e.target.value })
                        }
                    />

                    <Input
                        label="Email (Optional)"
                        placeholder="email@example.com"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />
                </div>

                <div className="mt-8">
                    <p className="text-sm text-gray-400 mb-3">Upload Documents</p>

                    <div className="border border-dashed border-white/20 
                          rounded-xl p-8 text-center 
                          bg-white/5 hover:bg-white/10 
                          transition cursor-pointer">

<div className="flex justify-center mb-2">
  <img
    src={document}
    alt="document"
    className="w-10 h-10 object-contain"
  />
</div>                       <p className="text-sm font-medium">ID Proof</p>
                        <p className="text-xs text-gray-500 mt-1">
                            Click to upload
                        </p>

                        <input type="file" className="hidden" />
                    </div>
                </div>

                <div className="mt-6 bg-[#2B7FFF1A] border border-[#51A2FF4D] 
                        text-[#8EC5FF] text-sm p-4 rounded-xl">
                    Admin approval required for security access. Family member will be added to the system after verification.
                </div>

               <div className="mt-8 flex gap-4">

  <button
    onClick={onClose}
    className="flex-1 py-3 bg-linear-to-r from-[#2a2440] to-[#1c1a2e] rounded-full border border-white/10 text-white font-medium hover:opacity-90 transition-all duration-200"
  >
    Cancel
  </button>

  <button
    onClick={handleSubmit}
    className="flex-1 py-3 rounded-full bg-linear-to-r from-[#00C950] to-[#009966] text-white font-semibold shadow-lg shadow-green-500/30 hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
  >
    Add Member
  </button>

</div>
            </div>
        </div>
    );
};



interface InputProps {
    label: string;
    type?: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    label,
    type = "text",
    value,
    placeholder,
    onChange,
}) => (
    <div className="flex flex-col">
        <label className="text-sm text-gray-400 mb-2">
            {label}
        </label>
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="bg-white/5 border border-white/10 
                 rounded-xl px-4 py-3
                 placeholder:text-gray-500
                 focus:outline-none focus:ring-2 
                 focus:ring-green-500 transition"
        />
    </div>
);

export default AddFamilyMemberModal;