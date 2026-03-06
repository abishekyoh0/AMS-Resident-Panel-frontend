import React, { useState } from "react";
import { COLORS, FONTSIZE, FONTWEIGHT, WEIGHT } from "../../constent/uiconstent";
import Notes from "../../assets/complaints/Notes.png"
import Tool from "../../assets/complaints/Tool.png"
import Graph from "../../assets/complaints/Graph.png"
import Tick from "../../assets/complaints/Tick.png"
import { EyeIcon, PlusIcon, Trash2Icon } from "lucide-react";
import Doc from "../../assets/Invoices/download.png"
import Calendar from "../../assets/Invoices/Calender.png"
import User from "../../assets/Invoices/timer.png"

type ComplaintStatus = "OPEN" | "ASSIGNED" | "IN_PROGRESS" | "RESOLVED";

interface Complaint {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  assignedTo?: string;
  status: ComplaintStatus;
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
}

const complaintsData: Complaint[] = [
  {
    id: "CM-1001",
    title: "AC not working in bedroom",
    description: "Air conditioner stopped cooling. Making strange noise.",
    category: "Electrical",
    date: "2026-01-18",
    assignedTo: "Mike Wilson",
    status: "IN_PROGRESS",
    priority: "HIGH",
  },
  {
    id: "CM-1002",
    title: "Water leakage in bathroom",
    description: "Water dripping from ceiling in main bathroom.",
    category: "Plumbing",
    date: "2026-01-15",
    assignedTo: "John Smith",
    status: "RESOLVED",
    priority: "CRITICAL",
  },
  {
    id: "CM-1003",
    title: "Door lock not working",
    description: "Main door lock is jammed. Cannot open from inside.",
    category: "Carpentry",
    date: "2026-01-20",
    status: "OPEN",
    priority: "MEDIUM",
  },
  {
    id: "CM-1004",
    title: "Kitchen sink clogged",
    description: "Water not draining properly from kitchen sink.",
    category: "Plumbing",
    date: "2026-01-19",
    assignedTo: "John Smith",
    status: "ASSIGNED",
    priority: "HIGH",
  },
];

const complaintColor = (status: ComplaintStatus) => {
  switch (status) {
    case "OPEN":
      return "bg-[#F0B10033] border border-[#F0B10066] text-[#FDC700]";
    case "ASSIGNED":
      return "bg-[#2B7FFF33] border border-[#2B7FFF66] text-[#51A2FF]";
    case "IN_PROGRESS":
      return "bg-[#AD46FF33] border border-[#AD46FF66] text-[#C27AFF]";
    case "RESOLVED":
      return "bg-[#00BC7D33] border border-[#00BC7D66] text-[#00D492]";
  }
};

const badgeColor = (priority?: string) => {
  switch (priority) {
    case "CRITICAL":
      return "bg-[#FB2C3633] text-[#FF6467]";
    case "HIGH":
      return "bg-[#FF690033] text-[#FF8904]";
    case "MEDIUM":
      return "bg-[#F0B10033] text-[#FDC700]";
    default:
      return "bg-[#2B7FFF33] text-[#00D492]";
  }
};

const filters = ["ALL", "OPEN", "ASSIGNED", "IN_PROGRESS", "RESOLVED"];

const MyComplaints: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredComplaints =
    activeFilter === "ALL"
      ? complaintsData
      : complaintsData.filter((c) => c.status === activeFilter);

  const stats = {
    open: complaintsData.filter((c) => c.status === "OPEN").length,
    progress: complaintsData.filter((c) => c.status === "IN_PROGRESS").length,
    resolved: complaintsData.filter((c) => c.status === "RESOLVED").length,
    total: complaintsData.length,
  };

  return (
    <div style={{ color: COLORS.primary_white }}>

      <h1 className={`${FONTSIZE[36]}`} style={{ fontWeight: WEIGHT.seven }}>My Complaints</h1>
      <p className={`mb-4 ${FONTSIZE[16]} ${FONTWEIGHT[400]}`}
        style={{ color: COLORS.secoundy_gray }}>
        Track and manage your maintenance requests
      </p>

      <div className="grid grid-cols-4 gap-4 mb-6">

        <StatCard title="Open" icon={Notes} value={stats.open} gradient="from-[#F0B100] to-[#FF6900]" />
        <StatCard title="In Progress" icon={Tool} value={stats.progress} gradient="from-[#AD46FF] to-[#F6339A]" />
        <StatCard title="Resolved" icon={Tick} value={stats.resolved} gradient="from-[#00BC7D] to-[#00BBA7]" />
        <StatCard title="Total" icon={Graph} value={stats.total} gradient="from-[#00B8DB] to-[#2B7FFF]" />

      </div>

      <div className="flex gap-3 mb-6 flex-wrap">

        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-2xl ${FONTSIZE[14]} ${activeFilter === filter
              ? "bg-[#00B8DB]"
              : "bg-[#FFFFFF0D] hover:bg-gray-700"
              }`}
          >
            {filter.replace("_", " ")}
          </button>
        ))}

        <button className={`ml-auto flex items-center gap-2 bg-linear-to-r from-[#00B8DB] to-[#7F22FE] px-4 py-2 rounded-full ${FONTSIZE[18]}`}
          style={{ boxShadow: "0px 4px 6px -4px #00B8DB40,0px 10px 15px -3px #00B8DB40", fontWeight: WEIGHT.seven }}>
          <PlusIcon /> Raise New Complaint
        </button>

      </div>

      <div className="space-y-4">

        {filteredComplaints.map((complaint) => (
          <ComplaintCard key={complaint.id} complaint={complaint} />
        ))}

      </div>
    </div>
  );
};

export default MyComplaints;


const StatCard = ({ title, value, icon, gradient }: { title: string; value: number; icon?: string; gradient: string }) => (
  <div className="bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-lg p-4">
    <div className="flex justify-between items-center mb-5">
      <h2 className={`${FONTSIZE[30]} bg-linear-to-r ${gradient} bg-clip-text text-transparent`} style={{ fontWeight: WEIGHT.seven }}>{value}</h2>
      <img src={icon} alt="" />
    </div>
    <p className={`${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>{title}</p>
  </div>
);


const ComplaintCard = ({ complaint }: { complaint: Complaint }) => {
  return (
    <div className="bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl p-5 ">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-5 mb-3">
            <p className={`${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>{complaint.id}</p>
            <span className={`${FONTSIZE[12]} px-3 py-1 rounded-full ${complaintColor(complaint.status)}`} style={{ fontWeight: WEIGHT.seven }}>
              {complaint.status.replace("_", " ")}
            </span>
            <p className={`${FONTSIZE[12]} px-3 py-1 rounded-full ${badgeColor(complaint.priority)}`} style={{ fontWeight: WEIGHT.seven }}>
              {complaint.priority}
            </p>
          </div>
          <div>
            <h3 className={`${FONTSIZE[20]}`} style={{ fontWeight: WEIGHT.seven }}>{complaint.title}</h3>
            <p className={`${FONTSIZE[14]} mb-3`} style={{ color: COLORS.secoundy_gray }}>
              {complaint.description}
            </p>
          </div>
        </div>
        <div className={`space-y-4 ${FONTSIZE[14]}`} style={{ fontWeight: WEIGHT.seven }}>
          <button className={`flex items-center gap-2 bg-[#00B8DB33] border border-[#00D3F24D] text-[#00D3F2] px-4 py-1 rounded-lg`}>
            <EyeIcon size={16} /> View
          </button>
          <button className={`flex items-center gap-2 bg-[#FB2C3633] border border-[#FB2C364D] text-[#FB2C36] px-3 py-1 rounded-lg`}>
            <Trash2Icon size={16} /> Delete
          </button>
        </div>
      </div>

      <div className={`${FONTSIZE[14]} flex gap-4`} style={{ color: COLORS.secoundy_gray }}>
        <span className={`flex items-center gap-2`}><img src={Doc} alt="" className="w-4 h-4" />{complaint.category}</span>
        <span className={`flex items-center gap-2`}><img src={Calendar} alt="" className="w-4 h-4" />{complaint.date}</span>
        {complaint.assignedTo && <span className={`flex items-center gap-2`}><img src={User} alt="" className="w-4 h-4" />{complaint.assignedTo}</span>}
      </div>
    </div>
  );
};