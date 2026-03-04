import React from "react";
import type { FamilyMember } from "../../pages/FamilyTenants/FamilyTenants";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  member: FamilyMember | null;
}

const ViewFamilyMemberModal: React.FC<Props> = ({
  isOpen,
  onClose,
  member,
}) => {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      
      <div className="w-full max-w-xl rounded-2xl border border-white/10 
                      bg-linear-to-br from-[#0A0A1E] to-[#0F0520] bg-[#000000CC]
                      p-6 md:p-8 text-white shadow-2xl">


<div className="flex justify-between items-start mb-6">
  <div>
    <h2 className="text-xl font-semibold">
      Family Member Details
    </h2>
    <p className="text-xs text-gray-400 mt-2">
      {member.id}
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
      {member.status}
    </span>

    <button
      onClick={onClose} 
      className="p-1 rounded-full hover:bg-gray-800 transition"
    >
      <X size={18} />
    </button>
  </div>
</div>

        <div className="grid grid-cols-2 gap-y-6 gap-x-10 text-sm">

          <Detail label="Name" value={member.name} />
          <Detail label="Relation" value={member.relation} />

          <Detail label="Age" value={`${member.age} years`} />
          <Detail label="Added Date" value={member.added} />

          {member.mobile && (
            <Detail label="Mobile" value={member.mobile} />
          )}

          <Detail label="Email" value="michael@email.com" />
        </div>

        <div className="mt-8 border border-[#51A2FF4D] rounded-xl p-4 bg-[#2B7FFF1A] flex items-center justify-between">
          <div>
            <p className="text-xs text-[#51A2FF] mb-1">ID Proof</p>
            <p className="text-sm">license-scan.pdf</p>
          </div>

          <button className="px-4 py-2 rounded-lg bg-[#2B7FFF33] text-[#51A2FF] border border-[#51A2FF4D] text-sm hover:bg-blue-500/30 transition">
            View Document
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full py-3 rounded-full 
                     bg-linear-to-r from-[#00B8DB] to-[#7F22FE]
                     font-medium shadow-lg transition-all duration-200"
        >
          Close
        </button>

      </div>
    </div>
  );
};

const Detail = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-gray-400 text-xs mb-1">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);

export default ViewFamilyMemberModal;