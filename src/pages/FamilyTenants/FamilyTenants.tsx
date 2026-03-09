import React, { useState } from "react";
import AddFamilyMemberModal from "../../components/FamilyTenants/AddFamilyMemberForm";
import StatCard from "../../components/FamilyTenants/StatCard";
import ViewFamilyMemberModal from "../../components/FamilyTenants/ViewFamilyMemberModal";
import EditFamilyMemberModal from "../../components/FamilyTenants/EditFamilyMemberModal";
import AddTenantModal from "../../components/FamilyTenants/AddTenantModal";
import TenantCard, { type Tenant } from "../../components/FamilyTenants/TenantCard";
import TenantDetailsModal from "../../components/FamilyTenants/TenantDetailsModal";
import LeaseAgreementModal from "../../components/FamilyTenants/LeaseAgreementModal";
import human from "../../assets/FamilyTenants/human.png"
import tick from "../../assets/FamilyTenants/tick.png"
import timer from "../../assets/FamilyTenants/timer.png"
import person from "../../assets/FamilyTenants/person.png"
import family from "../../assets/FamilyTenants/family.png"
import home from "../../assets/FamilyTenants/home.png"
import { Eye, Pencil, Plus, Trash } from "lucide-react";
import { FONTSIZE, FONTWEIGHT } from "../../constent/uiconstent";
export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  age: number;
  mobile?: string;
  added: string;
  status: "Active" | "Pending";
  icon: string;
}

const FamilyManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"family" | "tenant">("family");

  const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [agreementOpen, setAgreementOpen] = useState(false);
  const [members, setMembers] = useState<FamilyMember[]>([
    {
      id: "FM-001",
      name: "Michael Johnson",
      relation: "Spouse",
      age: 35,
      mobile: "+1 (555) 987-6543",
      added: "15/06/2024",
      status: "Active",
      icon: person
    },
    {
      id: "FM-002",
      name: "Emma Johnson",
      relation: "Daughter",
      age: 8,
      added: "15/06/2024",
      status: "Active",
      icon: person
    },
  ]);


  const [tenants, setTenants] = useState<Tenant[]>([
    {
      id: "TEN-001",
      name: "David Smith",
      mobile: "+91 9876543210",
      email: "david@gmail.com",
      rent: 15000,
      deposit: 50000,
      leaseStart: "01/01/2025",
      leaseEnd: "31/12/2025",
      status: "Active",
    },
  ]);


  const [showFamilyModal, setShowFamilyModal] = useState(false);
  const [showTenantModal, setShowTenantModal] = useState(false);
  const [selectedMember, setSelectedMember] =
    useState<FamilyMember | null>(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const activeFamilyCount = members.filter(
    (m) => m.status === "Active"
  ).length;


  return (
    <div className="text-white">

      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Family & Tenant Management
        </h1>
        <p className="text-gray-400 text-sm">
          Manage family members and tenant information
        </p>
      </div>

      <div className="flex gap-3 mb-6 flex-wrap ">
        <button
          onClick={() => setActiveTab("family")}
          className={`flex items-center gap-2 px-4 py-3 rounded-full cursor-pointer
    text-[${FONTSIZE[16]}px] font-[${FONTWEIGHT[700]}] transition ${activeTab === "family"
              ? "bg-linear-to-r from-[#00B8DB] to-[#7F22FE] text-[#FFFFFF]"
              : "bg-[#FFFFFF0D] text-white  "
            }`}

        >
          <img
            src={family}
            alt="family"
            className="w-4 h-4 object-contain"
          />
          Family Members ({members.length})
        </button>

        <button
          onClick={() => setActiveTab("tenant")}
          className={`flex items-center gap-2 px-4 py-3  text-[${FONTSIZE[16]}px] font-[${FONTWEIGHT[700]}] rounded-full text-sm transition ${activeTab === "tenant"
              ? "bg-linear-to-r from-[#00B8DB] to-[#7F22FE] text-[#FFFFFF]"
              : "bg-[#FFFFFF0D] text-white cursor-pointer"
            }`}
        >
          <img
            src={home}
            alt="tenant"
            className="w-4 h-4 object-contain mb-1"
          />
          Tenants ({tenants.length})
        </button>
      </div>

      {activeTab === "family" && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard
              title="Total Members"
              value={members.length}
              color="cyan"
              icon={<img src={human} alt="total" className="w-8 h-8 object-contain" />}
            />

            <StatCard
              title="Active"
              value={activeFamilyCount}
              color="green"
              icon={<img src={tick} alt="active" className="w-8 h-8 object-contain" />}
            />

            <StatCard
              title="Pending"
              value={members.length - activeFamilyCount}
              color="yellow"
              icon={<img src={timer} alt="pending" className="w-8 h-8 object-contain" />}
            />

            <StatCard
              title="Adults"
              value={members.filter((m) => m.age >= 18).length}
              color="pink"
              icon={<img src={person} alt="adults" className="w-8 h-8 object-contain" />}
            />
          </div>

          <div className="flex justify-end mb-6">
            <button
              onClick={() => setShowFamilyModal(true)}
              className="flex items-center gap-2 bg-linear-to-r from-[#00C950] to-[#009966] px-6 py-3 cursor-pointer rounded-full font-medium shadow-lg shadow-purple-500/30"
            >
              <Plus color="#FFFFFF" size={18} />
              Add Family Member
            </button>
          </div>
          <div className="space-y-6">
            {members.map((member) => (
              <div
                key={member.id}
                className="w-full bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl p-5 flex flex-col lg:flex-row justify-between gap-6"
              >
                <div className="flex-1">

                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-[#99A1AF]">{member.id}</span>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${member.status === "Active"
                          ? "bg-[#00C95033] border border-[#00C95066] text-[#05DF72]"
                          : "bg-[#FFD70033] border border-[#FFD70066] text-[#FFD700]"
                        }`}
                    >
                      {member.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <img
                      src={person}
                      alt="person"
                      className="w-5 h-5 object-contain"
                    /> 
                    <h2 className="text-lg font-semibold">
                      {member.name}
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm mt-4">
                    <div>
                      <p className="text-[#6A7282] text-xs">Relation</p>
                      <p>{member.relation}</p>
                    </div>

                    <div>
                      <p className="text-[#6A7282] text-xs">Age</p>
                      <p>{member.age} years</p>
                    </div>

                    {member.mobile && (
                      <div>
                        <p className="text-[#6A7282] text-xs">Mobile</p>
                        <p>{member.mobile}</p>
                      </div>
                    )}

                    <div>
                      <p className="text-[#6A7282] text-xs">Added</p>
                      <p>{member.added}</p>
                    </div>
                  </div>
                </div>

                <div className=" justify-items-center flex lg:flex-col gap-3 lg:min-w-30">
                  <button
                    onClick={() => {
                      setSelectedMember(member);
                      setViewOpen(true);
                    }}
                    className="flex items-center justify-center cursor-pointer gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[#00B8DB33] border border-[#00D3F24D] text-[#00B8DB] hover:bg-cyan-500/30 transition"
                  >
                    <Eye size={16} />
                    View
                  </button>
                        
                  <button
                    onClick={() => {
                      setSelectedMember(member);
                      setEditOpen(true);
                    }}
                    className="flex items-center justify-center cursor-pointer gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[#2B7FFF33] border border-[#51A2FF4D] text-[#51A2FF] hover:bg-blue-500/30 transition"
                  >
                    <Pencil size={16} />
                    Edit
                  </button> 
                   <button
                    
                    className="flex items-center justify-center cursor-pointer gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[#FB2C3633] border border-[#FB2C364D] text-[#FB2C36] hover:bg-red-500/30 transition"
                  >
                    <Trash color="#FFFFFF" size={14} />
                    Delete 
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}


      {activeTab === "tenant" && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard
              title="Total Tenants"
              value={tenants.length}
              color="cyan"
              icon={<img src={human} alt="total" className="w-8 h-8 object-contain" />}
            />

            <StatCard
              title="Active"
              value={tenants.filter(t => t.status === "Active").length}
              color="green"
              icon={<img src={tick} alt="active" className="w-8 h-8 object-contain" />}
            />

            <StatCard
              title="Pending"
              value={tenants.filter(t => t.status === "Pending").length}
              color="yellow"
              icon={<img src={timer} alt="pending" className="w-8 h-8 object-contain" />}
            />

            <StatCard
              title="Adults"
              value={1}
              color="pink"
              icon={<img src={person} alt="adults" className="w-8 h-8 object-contain" />}
            />
          </div>

          <div className="flex justify-end mb-6">
            <button
              onClick={() => setShowTenantModal(true)}
              className="bg-linear-to-br from-purple-500 to-pink-500 px-6 py-3 rounded-full font-medium shadow-lg"
            >
              + Add Tenant
            </button>
          </div>

          <div className="space-y-6">
            {tenants.map((tenant) => (
              <TenantCard
                key={tenant.id}
                tenant={tenant}
                onRemove={() =>
                  setTenants(prev => prev.filter(t => t.id !== tenant.id))
                }
                onView={() => {
                  setSelectedTenant(tenant);
                  setDetailsOpen(true);
                }}
                onAgreement={() => {
                  setSelectedTenant(tenant);
                  setAgreementOpen(true);
                }}
              />
            ))}
          </div>
        </>
      )}

      <AddFamilyMemberModal
        isOpen={showFamilyModal}
        onClose={() => setShowFamilyModal(false)}
        onAdd={(data) => setMembers((prev) => [...prev, data])}
      />

      <ViewFamilyMemberModal
        isOpen={viewOpen}
        onClose={() => setViewOpen(false)}
        member={selectedMember}
      />

      <EditFamilyMemberModal
        isOpen={editOpen}
        onClose={() => setEditOpen(false)}
        member={selectedMember}
        onSave={(updated) =>
          setMembers((prev) =>
            prev.map((m) =>
              m.id === updated.id ? updated : m
            )
          )
        }
      />

      <AddTenantModal
        isOpen={showTenantModal}
        onClose={() => setShowTenantModal(false)}
        onAdd={(tenant) =>
          setTenants((prev) => [...prev, tenant])
        }
      />
      <TenantDetailsModal
        isOpen={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        tenant={selectedTenant}
        onOpenAgreement={() => {
          setDetailsOpen(false);
          setAgreementOpen(true);
        }}
      />

      <LeaseAgreementModal
        isOpen={agreementOpen}
        onClose={() => setAgreementOpen(false)}
        tenant={selectedTenant}
      />
    </div>
  );
};

export default FamilyManagement;