import React, { useState } from "react";
import { COLORS, FONTSIZE, FONTWEIGHT, WEIGHT } from "../../constent/uiconstent";
import Notes from "../../assets/complaints/Notes.png"
import Tool from "../../assets/complaints/Tool.png"
import Graph from "../../assets/complaints/Graph.png"
import Tick from "../../assets/complaints/Tick.png"

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
        <StatCard title="In Progress" icon={Tool} value={stats.progress} gradient="from-[#F0B100] to-[#FF6900]" />
        <StatCard title="Resolved" icon={Tick} value={stats.resolved} gradient="from-[#F0B100] to-[#FF6900]" />
        <StatCard title="Total" icon={Graph} value={stats.total} gradient="from-[#F0B100] to-[#FF6900]" />

      </div>

      <div className="flex gap-3 mb-6 flex-wrap">

        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm ${activeFilter === filter
              ? "bg-cyan-500"
              : "bg-gray-800 hover:bg-gray-700"
              }`}
          >
            {filter.replace("_", " ")}
          </button>
        ))}

        <button className="ml-auto bg-cyan-500 px-4 py-2 rounded-lg">
          + Raise New Complaint
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
    <div className="flex justify-between items-center">
      <h2 className={`${FONTSIZE[30]}`} style={{ fontWeight: WEIGHT.seven, color: gradient }}>{value}</h2>
      <img src={icon} alt="" />
    </div>
    <p className="text-gray-400 text-sm">{title}</p>
  </div>
);


const ComplaintCard = ({ complaint }: { complaint: Complaint }) => {
  return (
    <div className="bg-linear-to-r from-gray-900 to-purple-900 border border-gray-800 rounded-xl p-5 flex justify-between items-start">

      <div>
        <p className="text-xs text-gray-400 mb-1">{complaint.id}</p>

        <h3 className="text-lg font-semibold">{complaint.title}</h3>

        <p className="text-gray-400 text-sm mb-3">
          {complaint.description}
        </p>

        <div className="text-xs text-gray-400 flex gap-4">
          <span>{complaint.category}</span>
          <span>{complaint.date}</span>
          {complaint.assignedTo && <span>{complaint.assignedTo}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-2 items-end">

        <span className="text-xs px-3 py-1 rounded-full bg-gray-700">
          {complaint.status.replace("_", " ")}
        </span>

        <button className="bg-cyan-500 px-4 py-1 rounded-md text-sm">
          View
        </button>
        <button className="bg-red-500 px-4 py-1 rounded-md text-sm">
          Delete
        </button>

      </div>
    </div>
  );
};