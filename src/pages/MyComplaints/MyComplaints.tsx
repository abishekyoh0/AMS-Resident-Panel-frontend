import React, { useState, type ChangeEvent } from "react";
import { COLORS, FONTSIZE, FONTWEIGHT, WEIGHT } from "../../constent/uiconstent";
import Notes from "../../assets/complaints/Notes.png"
import Tool from "../../assets/complaints/Tool.png"
import Graph from "../../assets/complaints/Graph.png"
import Tick from "../../assets/complaints/Tick.png"
import { EyeIcon, PlusIcon, Trash2Icon, X } from "lucide-react";
import Doc from "../../assets/Invoices/download.png"
import Calendar from "../../assets/Invoices/Calender.png"
import User from "../../assets/Invoices/timer.png"
import cam from "../../assets/Invoices/camera.png"
import CustomDropdown from "../../components/common/custormdropdown";

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

const complaintCategories = [
  { label: "Electrical", value: "ELECTRICAL" },
  { label: "Plumbing", value: "PLUMBING" },
  { label: "Carpentry", value: "CARPENTRY" },
  { label: "Cleaning", value: "CLEANING" },
  { label: "Other", value: "OTHER" },
]

const complaintTypes = [
  { label: "Common", value: "Common" },
  { label: "Individual", value: "Individual" },
]

const complaintPriority = [
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
  { label: "Critical", value: "Critical" },
]

const MyComplaints: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [showRaiseModal, setShowRaiseModal] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");

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

      <div className="flex flex-wrap gap-3 mb-6 ">
        <div className="flex gap-3 overflow-y-auto ">
          {filters.map((filter) => (
            <button key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-2xl cursor-pointer ${FONTSIZE[14]} ${activeFilter === filter
                ? "bg-[#00B8DB]" : "bg-[#FFFFFF0D] hover:bg-gray-700"}`}>
              {filter.replace("_", " ")}
            </button>
          ))}
        </div>

        <button onClick={() => setShowRaiseModal(true)}
          className={`ml-auto flex items-center gap-2 bg-linear-to-r from-[#00B8DB] to-[#7F22FE] px-4 py-2 rounded-full cursor-pointer ${FONTSIZE[18]}`}
          style={{ boxShadow: "0px 4px 6px -4px #00B8DB40,0px 10px 15px -3px #00B8DB40", fontWeight: WEIGHT.seven }}>
          <PlusIcon /> Raise New Complaint
        </button>
      </div>

      <div className="space-y-4 ">

        {filteredComplaints.map((complaint) => (
          <ComplaintCard key={complaint.id} complaint={complaint}
            onView={() => setSelectedComplaint(complaint)} />
        ))}

      </div>
      {showRaiseModal && (
        <RaiseComplaintModal
          onClose={() => setShowRaiseModal(false)}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedPriority={selectedPriority}
          setSelectedPriority={setSelectedPriority}
        />
      )}

      {selectedComplaint && (
        <ComplaintDetailsModal
          complaint={selectedComplaint}
          onClose={() => setSelectedComplaint(null)}
        />
      )}
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


const RaiseComplaintModal = ({
  onClose,
  selectedCategory,
  setSelectedCategory,
  selectedType,
  setSelectedType,
  selectedPriority,
  setSelectedPriority
}: {
  onClose: () => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  selectedPriority: string;
  setSelectedPriority: (value: string) => void;
}) => {
  function handleFile(_event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-linear-to-r from-[#0A0A1E] to-[#0F0520] border border-[#00D3F280] rounded-2xl p-4 w-140 h-145 overflow-y-auto">
        <div className="flex justify-between items-center mb-8 mt-2">
          <h2 className={`${FONTSIZE[30]}`} style={{ fontWeight: WEIGHT.seven }}>
            Raise New Complaint
          </h2>
          <button onClick={close} className=" p-2 rounded-full hover:bg-white/10 transition cursor-pointer">
            <X size={18} className="text-gray-300" />
          </button>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="complaint-title">Title *</label>
              <input type="text" id="complaint-title" placeholder="Title" className="w-full bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-lg px-3 py-2 mt-1" />
            </div>
            <CustomDropdown
              label="Type"
              required
              placeholder="Enter Type"
              options={complaintTypes}
              value={selectedType}
              onChange={setSelectedType}
            />
            <CustomDropdown
              label="Category"
              required
              placeholder="Select Category"
              options={complaintCategories}
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
            <CustomDropdown
              label="Priority"
              required
              placeholder="Select Priority"
              options={complaintPriority}
              value={selectedPriority}
              onChange={setSelectedPriority}
            />
          </div>
          <div>
            <label htmlFor="complaint-description">Description *</label>
            <textarea id="complaint-description" placeholder="Provide detailed information about the issue..."
              className="w-full bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-lg px-3 py-2"
              style={{ color: COLORS.primary_white }}></textarea>
          </div>
          <div>
            <label className="text-sm"> Upload Documents (Optional) </label><br />
            <label className="upload-box">
              <input type="file" hidden onChange={handleFile} />
              <div className="flex flex-col items-center py-8 border rounded-2xl" style={{ color: COLORS.secoundy_gray }}>
                <img src={cam} alt="" className="w-7 h-7 mb-2" />
                <p className={`mt-1 ${FONTSIZE[14]} ${FONTWEIGHT[400]}`}>
                  Click to upload or drag and drop
                </p>
                <p className={`mt-1 ${FONTSIZE[12]} ${FONTWEIGHT[400]}`}>
                  PNG, JPG up to 5MB
                </p>
              </div>
            </label><br />
          </div>
        </div>

        <div className="flex gap-3 mt-3" style={{ fontWeight: WEIGHT.seven }}>
          <button onClick={onClose} className="w-full bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-full px-4 py-2 cursor-pointer" >
            Cancel
          </button>
          <button onClick={onClose} className="w-full bg-linear-to-r from-[#00B8DB] to-[#7F22FE] rounded-full px-4 py-2 cursor-pointer"
            style={{ boxShadow: "0px 8px 10px -6px #00B8DB40,0px 20px 25px -5px #00B8DB40" }}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const ComplaintDetailsModal = ({ complaint, onClose }: { complaint: Complaint; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1A1A2E] border border-[#FFFFFF33] rounded-lg p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className={`${FONTSIZE[24]}`} style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}>
            Complaint Details
          </h2>
          <button onClick={onClose} className="text-[#FFFFFF99] text-2xl">×</button>
        </div>
        <div className="space-y-4">
          <div>
            <p className={`${FONTSIZE[12]}`} style={{ color: COLORS.secoundy_gray }}>ID</p>
            <p className={`${FONTSIZE[16]}`} style={{ color: COLORS.primary_white }}>{complaint.id}</p>
          </div>
          <div>
            <p className={`${FONTSIZE[12]}`} style={{ color: COLORS.secoundy_gray }}>Title</p>
            <p className={`${FONTSIZE[16]}`} style={{ color: COLORS.primary_white }}>{complaint.title}</p>
          </div>
          <div>
            <p className={`${FONTSIZE[12]}`} style={{ color: COLORS.secoundy_gray }}>Description</p>
            <p className={`${FONTSIZE[16]}`} style={{ color: COLORS.primary_white }}>{complaint.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className={`${FONTSIZE[12]}`} style={{ color: COLORS.secoundy_gray }}>Category</p>
              <p className={`${FONTSIZE[16]}`} style={{ color: COLORS.primary_white }}>{complaint.category}</p>
            </div>
            <div>
              <p className={`${FONTSIZE[12]}`} style={{ color: COLORS.secoundy_gray }}>Date</p>
              <p className={`${FONTSIZE[16]}`} style={{ color: COLORS.primary_white }}>{complaint.date}</p>
            </div>
            <div>
              <p className={`${FONTSIZE[12]}`} style={{ color: COLORS.secoundy_gray }}>Status</p>
              <span className={`${FONTSIZE[14]} px-3 py-1 rounded-full ${complaintColor(complaint.status)}`} style={{ fontWeight: WEIGHT.seven }}>
                {complaint.status.replace("_", " ")}
              </span>
            </div>
            <div>
              <p className={`${FONTSIZE[12]}`} style={{ color: COLORS.secoundy_gray }}>Priority</p>
              <p className={`${FONTSIZE[14]} px-3 py-1 rounded-full ${badgeColor(complaint.priority)}`} style={{ fontWeight: WEIGHT.seven }}>
                {complaint.priority}
              </p>
            </div>
          </div>
          {complaint.assignedTo && (
            <div>
              <p className={`${FONTSIZE[12]}`} style={{ color: COLORS.secoundy_gray }}>Assigned To</p>
              <p className={`${FONTSIZE[16]}`} style={{ color: COLORS.primary_white }}>{complaint.assignedTo}</p>
            </div>
          )}
        </div>
        <button onClick={onClose} className="mt-6 w-full bg-[#00B8DB] rounded-lg px-4 py-2" style={{ color: COLORS.primary_white, fontWeight: WEIGHT.seven }}>
          Close
        </button>
      </div>
    </div>
  );
};

const ComplaintCard = ({ complaint, onView, }: { complaint: Complaint; onView: () => void; }) => {
  return (
    <div className="bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl p-5 ">
      <div className="flex justify-between flex-wrap">
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
          <button onClick={onView}
            className={`flex items-center gap-2 bg-[#00B8DB33] border border-[#00D3F24D] text-[#00D3F2] px-4 py-1 rounded-lg cursor-pointer`}>
            <EyeIcon size={16} /> View
          </button>
          <button className={`flex items-center gap-2 bg-[#FB2C3633] border border-[#FB2C364D] text-[#FB2C36] px-3 py-1 rounded-lg cursor-pointer`}>
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