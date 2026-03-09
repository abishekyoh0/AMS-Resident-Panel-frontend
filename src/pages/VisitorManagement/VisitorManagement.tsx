import  { useState } from "react";
import StatsCards from "../../components/VisitorManagement/StatsCards";
import PendingApproval from "../../components/VisitorManagement/PendingApproval";
import InsideVisitors from "../../components/VisitorManagement/InsideVisitors";
import VisitorHistory from "../../components/VisitorManagement/VisitorHistory";
import TodayVisitors from "../../components/VisitorManagement/TodayVisitors";
import AddVisitorModal from "../../components/VisitorManagement/AddVisitorModal";
import hand from "../../assets/Visitor/hand.png"
import calendar from "../../assets/Visitor/calendar.png"
import timer from "../../assets/Visitor/timer.png"
import tick from "../../assets/Visitor/tick.png"
import notepad from "../../assets/Visitor/notepad.png"
import { Plus } from "lucide-react";
import person from "../../assets/Visitor/person.png"
import tools from "../../assets/Visitor/tools.png"
import paper from "../../assets/Visitor/paper.png"
import box from "../../assets/Visitor/box.png"

export type Visitor = {
  id: number;
  name: string;
  phone?: string;
  type: string;
  purpose: string;
  time?: string;
  entryTime?: string;
  exitTime?: string;
  requestTime?: string;
  note?: string;
  image?: string;   
  image1?: string;
  status: "EXPECTED" | "PENDING" | "INSIDE" | "EXITED";
};

const visitors: Visitor[] = [
  {
    id: 1,
    name: "Suresh Kumar",
    type: "Social Visit",
    purpose: "Family Visit",
    time: "04:00 PM",
    note: "Family friend visiting for dinner",
    status: "EXPECTED",
    image: person,
    image1: paper
  },
  {
    id: 2,
    name: "AC Repair - Urban Clap",
    type: "Repair Work",
    purpose: "AC Servicing",
    time: "02:00 PM",
    note: "AC servicing appointment",
    status: "EXPECTED",
    image:tools, 
    image1: paper
  },
  {
    id: 3,
    name: "Ramesh (Plumber)",
    phone: "+91-99995-54321",
    type: "Service",
    purpose: "Repair Work",
    requestTime: "03:45 PM",
    status: "PENDING",
  },
  {
    id: 4,
    name: "Amazon Delivery",
    type: "Delivery",
    purpose: "Package Delivery",
    entryTime: "02:30 PM",
    status: "INSIDE",
    image:box,
  },
  {
    id: 5,
    name: "Raj Kumar",
    phone: "+91-98765-43210",
    type: "Guest",
    purpose: "Social Visit",
    entryTime: "10:15 AM",
    exitTime: "11:00 AM",
    status: "EXITED",
    image: person,
  },
];

const VisitorManagement = () => {
  const [tab, setTab] = useState<
    "TODAY" | "PENDING" | "INSIDE" | "EXITED"
  >("TODAY");
const [openModal, setOpenModal] = useState(false);

  return (
    <div className="text-white">

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">

  <div>
    <h1 className="flex items-center gap-2 text-2xl font-bold">
      <img src={hand} alt="hand" className="w-7 h-7" />
      Visitor Management
    </h1>

    <p className="text-gray-400 text-sm mt-1">
      Pre-register visitors and manage entry approvals
    </p>
  </div>

  <button
    onClick={() => setOpenModal(true)}
    className="flex items-center gap-2 px-6 py-2.5 rounded-lg
    bg-linear-to-r from-blue-500 to-cyan-400
    hover:from-blue-600 hover:to-cyan-500
    text-white font-medium shadow-lg shadow-blue-500/30 transition"
  >
    <Plus size={18} />
    Add Expected Visitor
  </button>

</div>

      <StatsCards visitors={visitors} />

      <div className="flex flex-wrap gap-3 mt-8">

  {[
    { label: "Today's Visitors", value: "TODAY", icon: calendar,bg: "from-[#00B8DB] to-[#7F22FE] border-blue-400/20" },
    { label: "Pending Approval", value: "PENDING", icon: timer,bg: "from-[#F0B100] to-[#F54900] border-yellow-400/20" },
    { label: "Inside", value: "INSIDE", icon: tick,bg: "from-[#00C950] to-[#009966] border-green-400/20" },
    { label: "History", value: "EXITED", icon: notepad,bg: "from-[#6A7282] to-[#45556C] border-gray-400/20" },
  ].map(t => (
    <button
      key={t.value}
      onClick={() => setTab(t.value as any)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition border cursor-pointer
      ${
        tab === t.value
          ? `bg-linear-to-r ${t.bg}`
          : "bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer"
      }`}
    >
      <img src={t.icon} alt={t.label} className="w-4 h-4" />
      {t.label}
    </button>
  ))}

</div>

      <div className="mt-8">

        {tab === "TODAY" && (
          <TodayVisitors visitors={visitors} />
        )}

        {tab === "PENDING" && (
          <PendingApproval
            visitors={visitors.filter(v => v.status === "PENDING")}
          />
        )}

        {tab === "INSIDE" && (
          <InsideVisitors
            visitors={visitors.filter(v => v.status === "INSIDE")}
          />
        )}

        {tab === "EXITED" && (
          <VisitorHistory
            visitors={visitors.filter(v => v.status === "EXITED")}
          />
        )}

      </div>
<AddVisitorModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
/>
    </div>
  );
};

export default VisitorManagement;