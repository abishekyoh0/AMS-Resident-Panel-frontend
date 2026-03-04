import React from "react";
import type { Tenant } from "../../components/FamilyTenants/TenantCard";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  tenant: Tenant | null;
}

const LeaseAgreementModal: React.FC<Props> = ({
  isOpen,
  onClose,
  tenant,
}) => {
  if (!isOpen || !tenant) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">

      <div className="w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-3xl bg-linear-to-br from-[#0f0c29] via-[#1a1a3a] to-[#0f0c29] border border-cyan-500/30 shadow-2xl p-8">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              📄 Lease Agreement
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Tenant: {tenant.name}
            </p>
          </div>

          <button className="px-5 py-2 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition">
            Download PDF
          </button>
        </div>

        <div className="bg-white/5 rounded-2xl p-10 space-y-8">

          <div className="text-center">
            <div className="text-4xl mb-3">📜</div>
            <h1 className="text-2xl font-bold tracking-wide">
              RESIDENTIAL LEASE AGREEMENT
            </h1>
            <p className="text-gray-400 mt-2">
              SkylineRentals Apartment Complex
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="font-semibold mb-4">Parties</h3>

            <div className="space-y-2 text-gray-300">
              <p><strong>Landlord:</strong> SkylineRentals LLC</p>
              <p><strong>Tenant:</strong> {tenant.name}</p>
              <p>
                <strong>Property:</strong> Flat A-304, Tower A,
                SkylineRentals, New York
              </p>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="font-semibold mb-6">Lease Terms</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <p className="text-gray-400 text-xs mb-1">Start Date</p>
                <p className="font-semibold">{tenant.leaseStart}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs mb-1">End Date</p>
                <p className="font-semibold">{tenant.leaseEnd}</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs mb-1">Monthly Rent</p>
                <p className="text-green-400 font-bold text-lg">
                  ${tenant.rent.toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xs mb-1">Security Deposit</p>
                <p className="text-cyan-400 font-bold text-lg">
                  ${tenant.deposit.toLocaleString()}
                </p>
              </div>

            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="font-semibold mb-4">
              Terms & Conditions
            </h3>

            <ul className="space-y-2 text-gray-300 list-disc pl-6">
              <li>Rent is due on the 1st of each month</li>
              <li>Late fee of $50 applies after 5 days grace period</li>
              <li>No subletting without written consent</li>
              <li>Tenant responsible for utilities except water</li>
              <li>30 days notice required for lease termination</li>
              <li>Security deposit refundable upon move-out inspection</li>
              <li>Maximum 2 vehicles allowed with registered parking</li>
              <li>No pets without prior approval</li>
              <li>Smoking not permitted inside the premises</li>
              <li>All amenities usage subject to building rules</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="font-semibold mb-4">
              Maintenance & Repairs
            </h3>

            <p className="text-gray-300">
              Tenant agrees to maintain the premises in good condition.
              Landlord responsible for structural repairs and major
              appliance replacements. Tenant must report any damages
              within 24 hours.
            </p>
          </div>

          <div className="border border-green-500/30 bg-green-500/5 rounded-2xl p-6">
            <h3 className="text-green-400 font-semibold mb-6">
              Signatures
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              <div>
                <p className="text-gray-400 text-sm mb-2">
                  Landlord Signature
                </p>
                <p className="text-lg">Skyline Rentals LLC</p>
                <div className="border-b border-gray-600 mt-4 mb-2"></div>
                <p className="text-xs text-gray-400">
                  Date: {tenant.leaseStart}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-2">
                  Tenant Signature
                </p>
                <p className="text-lg">{tenant.name}</p>
                <div className="border-b border-gray-600 mt-4 mb-2"></div>
                <p className="text-xs text-gray-400">
                  Date: {tenant.leaseStart}
                </p>
              </div>

            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm p-4 rounded-xl">
             This is a legally binding document. Both parties have
            received and acknowledged a copy of this agreement.
          </div> 

        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-8">

          <button className="flex-1 py-3 rounded-full bg-white/10 hover:bg-white/20 transition">
            Print
          </button>

          <button className="flex-1 py-3 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition">
            Email Copy
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-full bg-linear-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition font-medium"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
};

export default LeaseAgreementModal;

