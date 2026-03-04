import React from "react";
import home from "../../assets/FamilyTenants/home.png"
import { Eye, FileText, Trash2 } from "lucide-react";
export interface Tenant {
  id: string;
  name: string;
  mobile: string;
  email: string;
  rent: number;
  deposit: number;
  leaseStart: string;
  leaseEnd: string;
  status: "Active" | "Pending";
  icon?: string;
}

interface Props {
  tenant: Tenant;
  onRemove?: () => void;
  onView?: () => void;
  onAgreement?: () => void;
}

const TenantCard: React.FC<Props> = ({
  tenant,
  onRemove,
  onView,
  onAgreement,
}) => {
  return (
    <div className="w-full bg-linear-to-br from-[#0f0c29] to-[#302b63] border border-white/10 rounded-2xl p-6 flex flex-col lg:flex-row justify-between gap-6">

      <div className="flex-1">

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-gray-400">
            {tenant.id}
          </span>

          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${
              tenant.status === "Active"
                ? "bg-green-500/20 text-green-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            {tenant.status}
          </span>
        </div>

        <div className="flex items-center gap-2">
  <img
    src={home}
    alt="person"
    className="w-5 h-5 object-contain"
  />
  <h2 className="text-lg font-semibold">
    {tenant.name}
  </h2>
</div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10 text-sm">

          <div>
            <p className="text-gray-500 text-xs mb-1">Mobile</p>
            <p>{tenant.mobile}</p>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-1">Email</p>
            <p>{tenant.email}</p>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-1">Rent</p>
            <p className="text-green-400 font-semibold">
              ${tenant.rent}/mo
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-1">Lease Start</p>
            <p>{tenant.leaseStart}</p>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-1">Lease End</p>
            <p>{tenant.leaseEnd}</p>
          </div>

          <div>
            <p className="text-gray-500 text-xs mb-1">
              Security Deposit
            </p>
            <p className="text-cyan-400 font-semibold">
              ${tenant.deposit}
            </p>
          </div>

        </div>
      </div>

     <div className="flex lg:flex-col gap-3 lg:min-w-35">

  <button
    onClick={onView}
    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition"
  >
    <Eye size={16} />
    View
  </button>

  <button
    onClick={onAgreement}
    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition"
  >
    <FileText size={16} />
    Agreement
  </button>

  <button
    onClick={onRemove}
    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
  >
    <Trash2 size={16} />
    Remove
  </button>

</div>
    </div>
  );
};

export default TenantCard;