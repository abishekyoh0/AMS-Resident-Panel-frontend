import React, { useState } from "react";
import hand from "../../assets/Dashboard/hand.png";
import add from "../../assets/Dashboard/add.png";
import calendar from "../../assets/Dashboard/calendar.png";
import clock from "../../assets/Dashboard/clock.png";
import dollar from "../../assets/Dashboard/dollar.png";
import home from "../../assets/Dashboard/Home.png";
import notes from "../../assets/Dashboard/notes.png";
import StatCard from "../../components/Dashboard/StatCard";
import { useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import person from "../../assets/Dashboard/person.png";
const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [openCard, setOpenCard] = useState(false);

  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1
            className={`flex items-center gap-2 ${FONTSIZE[30]}`}
            style={{ fontWeight: WEIGHT.seven }}
          >
            Welcome back, Sarah Johnson!
            <img src={hand} alt="hand" className="w-8 h-8 object-contain" />
          </h1>

          <p
            className={`text-gray-400 ${FONTSIZE[16]}`}
            style={{ fontWeight: WEIGHT.four }}
          >
            Here's what's happening with your apartment
          </p>
        </div>

        <button
          onClick={() => setOpenCard(true)}
          className={`mt-4 md:mt-0 flex items-center gap-2 cursor-pointer 
          bg-linear-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg 
          ${FONTSIZE[16]}`}
          style={{ fontWeight: WEIGHT.six }}
        >
          <img src={add} alt="download" className="w-4 h-4" />
          Download access card
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          icon={home}
          title="Your Unit"
          value="Tower A - A-304"
          status="Active"
          statusColor="bg-green-900 text-green-400"
          gradient="bg-[#FFFFFF0D]"
        />

        <StatCard
          icon={dollar}
          title="Next Payment: 2026-02-05"
          value="$4200"
          status="Due Soon"
          statusColor="bg-yellow-900 text-yellow-400"
          gradient="bg-[#FFFFFF0D]"
        />

        <StatCard
          icon={notes}
          title="Total Complaints"
          value="8"
          status="3 Active"
          statusColor="bg-blue-900 text-blue-400"
          gradient="bg-[#FFFFFF0D]"
        />

        <StatCard
          icon={hand}
          title="Scheduled Visitors"
          value="2"
          status="Upcoming"
          statusColor="bg-purple-900 text-purple-400"
          gradient="bg-[#FFFFFF0D]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <SectionCard title="Recent Complaints" actionText="View All">
          <ComplaintItem
            title="AC not working"
            category="📁 Electrical"
            date="2026-01-18"
            status="IN PROGRESS"
            color="bg-[#2B7FFF33]"
          />

          <ComplaintItem
            title="Water leakage"
            category="📁 Plumbing"
            date="2026-01-18"
            status="RESOLVED"
            color="bg-[#00C95033]"
          />

          <ComplaintItem
            title="Door lock issue"
            category="📁 Carpentry"
            date="2026-01-18"
            status="OPEN"
            color="bg-[#F0B10033]"
          />

          <button
            onClick={() => navigate("/my-complaints")}
            className="w-full mt-4 bg-linear-to-r from-[#00B8DB] to-[#7F22FE] py-2 rounded-full cursor-pointer"
          >
            + Raise New Complaint
          </button>
        </SectionCard>

        <SectionCard title="Upcoming Visitors" actionText="Manage">
          <VisitorItem
            name="John Doe"
            date="2026-01-22"
            time="14:00"
            status="Approved"
            color="bg-[#00C95033]"
          />

          <VisitorItem
            name="Jane Smith"
            date="2026-01-23"
            time="10:00"
            status="Pending"
            color="bg-[#F0B10033]"
          />

          <button
            onClick={() => navigate("/visitors")}
            className="w-full mt-4 bg-linear-to-r from-[#00C950] to-[#009966] py-2 rounded-full cursor-pointer"
          >
            + Create Visitor Pass
          </button>
        </SectionCard>
      </div>

      <div
        className="bg-linear-to-r from-[#8E51FF33] to-[#AD46FF33] 
rounded-2xl border border-[#A684FF4D] px-6 py-5 
flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h3
            className={`${FONTSIZE[18]} text-white`}
            style={{ fontWeight: WEIGHT.six }}
          >
            Next Invoice Due
          </h3>

          <p
            className={`text-gray-300 mt-1 ${FONTSIZE[14]}`}
            style={{ fontWeight: WEIGHT.four }}
          >
            Pay before 2026-02-05 to avoid late fees
          </p>

          <div className="flex items-center gap-10 mt-4">
            <div>
              <p
                className={`text-gray-400 ${FONTSIZE[12]}`}
                style={{ fontWeight: WEIGHT.four }}
              >
                Amount Due
              </p>

              <p
                className={`${FONTSIZE[24]} text-white`}
                style={{ fontWeight: WEIGHT.seven }}
              >
                $4200
              </p>
            </div>

            <div>
              <p
                className={`${FONTSIZE[12]} text-gray-400`}
                style={{ fontWeight: WEIGHT.four }}
              >
                Status
              </p>

              <p
                className={`text-yellow-400 ${FONTSIZE[14]} mt-2`}
                style={{ fontWeight: WEIGHT.six }}
              >
                Pending
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-5 md:mt-0">
          <button
            onClick={() => navigate("/invoices")}
            className={`bg-linear-to-r from-[#00B8DB] to-[#155DFC] text-white px-5 py-2 rounded-full flex items-center gap-2 cursor-pointer ${FONTSIZE[14]}`}
            style={{ fontWeight: WEIGHT.five }}
          >
            Pay Now →
          </button>

          <button
            className={`border border-white/20 text-white/90 px-5 py-2 rounded-full cursor-pointer ${FONTSIZE[14]}`}
            style={{ fontWeight: WEIGHT.five }}
          >
            View Details
          </button>
        </div>
      </div>

      <AccessCardModal isOpen={openCard} onClose={() => setOpenCard(false)} />
    </div>
  );
};

export default Dashboard;

interface CardProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccessCardModal: React.FC<CardProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2  text-white/70 hover:text-white text-lg transition cursor-pointer"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-linear-to-r from-purple-600 to-cyan-500 rounded-2xl p-6 relative">
            <img
              src={person}
              alt="card holder"
              className="absolute top-6 right-6 w-18 h-20 object-contain"
            />

            <p
              className={`${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four }}
            >
              SkylineRentals Management
            </p>

            <h2
              className={`${FONTSIZE[18]}`}
              style={{ fontWeight: WEIGHT.six }}
            >
              Ownership Card
            </h2>

            <div className="mt-6">
              <p className={`${FONTSIZE[12]}`}>Card Holder</p>

              <h3
                className={`${FONTSIZE[18]}`}
                style={{ fontWeight: WEIGHT.six }}
              >
                Sara Johnson
              </h3>
            </div>

            <div className="flex justify-between mt-6">
              <div>
                <p className={`${FONTSIZE[12]}`}>Location</p>
                <p
                  className={`${FONTSIZE[16]}`}
                  style={{ fontWeight: WEIGHT.five }}
                >
                  Tower A - A-304
                </p>
              </div>

              <div>
                <p className={`${FONTSIZE[12]}`}>Card ID</p>
                <p
                  className={`${FONTSIZE[16]}`}
                  style={{ fontWeight: WEIGHT.five }}
                >
                  AC-001-2026
                </p>
              </div> 
            </div>
          </div>

          <div className="bg-linear-to-r from-purple-500 to-blue-500 rounded-2xl p-6">
            <h3
              className={`${FONTSIZE[16]}`}
              style={{ fontWeight: WEIGHT.six }}
            >
              Card Information
            </h3>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between">
                <span className={`text-black ${FONTSIZE[18]}`}>Card ID:</span>
                <span style={{ fontWeight: WEIGHT.six }}>AC-001-2026</span>
              </div>

              <div className="flex justify-between">
                <span className={`text-black ${FONTSIZE[18]}  `}  >Issue Date:</span>
                <span style={{ fontWeight: WEIGHT.six }}>2026-01-15</span>
              </div>

              <div className="flex justify-between">
                <span style={{fontWeight:WEIGHT.four}} className={`text-black ${FONTSIZE[18]}`}  >Expiry Date:</span>
                <span style={{ fontWeight: WEIGHT.six }}>2028-01-15</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
          <div className="flex gap-6">
            <div className="bg-[#FFFFFF14] px-4 py-3 rounded-xl">
              <p className={`${FONTSIZE[12]} text-gray-400`}>Card Type</p>

              <p
                className={`${FONTSIZE[14]} text-blue-400`}
                style={{ fontWeight: WEIGHT.six }}
              >
                Owner Card
              </p>
            </div>

            <div className="bg-[#FFFFFF14] px-4 py-3 rounded-xl">
              <p className={`${FONTSIZE[12]} text-gray-400`}>Access Level</p>

              <p
                className={`${FONTSIZE[14]} text-blue-400`}
                style={{ fontWeight: WEIGHT.six }}
              >
                Full Access
              </p>
            </div>

            <div className="bg-[#FFFFFF14] px-4 py-3 rounded-xl">
              <p className={`${FONTSIZE[12]} text-gray-400`}>Status</p>

              <p
                className={`${FONTSIZE[14]} text-green-400`}
                style={{ fontWeight: WEIGHT.six }}
              >
                ✓ Active
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="bg-linear-to-r from-[#00B8DB] to-[#155DFC] text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <img src={add} alt="download" className="w-4 h-4 mr-1 mb-1" />
              Download PDF
            </button>

            <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2">
              <img src={add} alt="print" className="w-4 h-4 mr-1 mb-1" />
              Print Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionCard: React.FC<{
  title: string;
  children: React.ReactNode;
  actionText: string;
}> = ({ title, children, actionText }) => (
  <div className="bg-[#FFFFFF0D] rounded-xl p-5">
    <div className="flex justify-between items-center mb-4">
      <h2 className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.six }}>
        {title}
      </h2>

      <button
        className={`flex items-center gap-1 text-blue-400 ${FONTSIZE[14]}`}
        style={{ fontWeight: WEIGHT.five }}
      >
        {actionText}
        <MoveRight size={12} color="#00D3F2" />
      </button>
    </div>

    <div className="space-y-3">{children}</div>
  </div>
);

const ComplaintItem = ({ title, category, date, status, color }: any) => (
  <div className="flex items-start justify-between bg-[#FFFFFF0D] p-4 rounded-xl border border-zinc-700">
    <div>
      <p
        className={`text-white ${FONTSIZE[18]}`}
        style={{ fontWeight: WEIGHT.six }}
      >
        {title}
      </p>

      <div className="flex items-center gap-3 mt-2 text-gray-400 text-xs">
        <div         style={{ fontWeight: WEIGHT.four }}
 className={`flex items-center gap-1 ${FONTSIZE[14]}`}>{category}</div>

        <div style={{ fontWeight: WEIGHT.four }} className={`flex items-center gap-1 ${FONTSIZE[14]}`}>
          <img src={calendar} className="w-3 h-3 mb-1" />
          {date}
        </div>
      </div>
    </div>

    <span className={`${color} px-3 py-1 rounded-full text-xs`}>{status}</span>
  </div>
);

const VisitorItem = ({ name, date, time, status, color }: any) => (
  <div className="flex items-start justify-between bg-[#FFFFFF0D] p-4 rounded-xl border border-zinc-700">
    <div>
      <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.six }}>
        {name}
      </p>

      <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
        <div style={{ fontWeight: WEIGHT.four }} className={`flex items-center gap-1 ${FONTSIZE[14]}`}>
          <img src={calendar} className="w-3 h-3 mb-1" />
          {date}
        </div>

        <div style={{ fontWeight: WEIGHT.four }} className={`flex items-center gap-1 ${FONTSIZE[14]}`}>
          <img src={clock} className="w-4 h-4 mb-1" />
          {time}
        </div>
      </div>
    </div>

    <span className={`${color} text-xs px-3 py-1 rounded-full`}>{status}</span>
  </div>
);
