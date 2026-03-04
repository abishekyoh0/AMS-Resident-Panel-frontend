import React from "react";
import type { Tenant } from "../../components/FamilyTenants/TenantCard";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  tenant: Tenant | null;
  onOpenAgreement: () => void;
}

const TenantDetailsModal: React.FC<Props> = ({
  isOpen,
  onClose,
  tenant,
  onOpenAgreement,
}) => {
  if (!isOpen || !tenant) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto">

      <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 bg-linear-to-br from-[#0f0c29] via-[#1a1a3a] to-[#0f0c29] border border-white/10">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">
              Tenant Details
            </h2>
            <p className="text-xs text-gray-400">
              {tenant.id}
            </p>
          </div>

          <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">
            {tenant.status}
          </span>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 mb-6">
          <h3 className="font-semibold mb-4">
            Personal Information
          </h3>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-gray-400 text-xs">Name</p>
              <p>{tenant.name}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Added Date</p>
              <p>{tenant.leaseStart}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Mobile</p>
              <p>{tenant.mobile}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Email</p>
              <p>{tenant.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-900/30 rounded-2xl p-6 mb-6 border border-purple-500/20">
          <h3 className="font-semibold mb-4">
            Lease Information
          </h3>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-gray-400 text-xs">Lease Start</p>
              <p>{tenant.leaseStart}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Lease End</p>
              <p>{tenant.leaseEnd}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Monthly Rent</p>
              <p className="text-green-400 font-semibold">
                ${tenant.rent}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">
                Security Deposit
              </p>
              <p className="text-cyan-400 font-semibold">
                ${tenant.deposit}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/20 rounded-2xl p-6 border border-blue-500/20 mb-6">
          <h3 className="font-semibold mb-4">Documents</h3>

          <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl mb-4">
            <div>
              <p>ID Proof</p>
              <p className="text-xs text-gray-400">
                tenant-id.pdf
              </p>
            </div>

            <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm">
              View
            </button>
          </div>

          <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
            <div>
              <p>Lease Agreement</p>
              <p className="text-xs text-gray-400">
                lease-agreement.pdf
              </p>
            </div>

            <button
              onClick={onOpenAgreement}
              className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm"
            >
              View Agreement
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-full bg-linear-to-br from-cyan-500 to-purple-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TenantDetailsModal;