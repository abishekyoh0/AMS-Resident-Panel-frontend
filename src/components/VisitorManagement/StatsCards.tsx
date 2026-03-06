import React from "react";
import type { Visitor } from "../../pages/VisitorManagement/VisitorManagement";
import calendar from "../../assets/Visitor/calendar.png";
import timer from "../../assets/Visitor/timer.png";
import tick from "../../assets/Visitor/tick.png";
import graph from "../../assets/Visitor/graph.png";

interface Props {
  visitors: Visitor[];
}

const StatsCards: React.FC<Props> = ({ visitors }) => {
  const expected = visitors.filter(v => v.status === "EXPECTED").length;
  const pending = visitors.filter(v => v.status === "PENDING").length;
  const inside = visitors.filter(v => v.status === "INSIDE").length;
  const total = visitors.length;

  return (
   <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

  <div className="p-4 rounded-xl bg-linear-to-r from-blue-500/20 to-blue-500/5 border border-blue-400/20">
    <img src={calendar} alt="calendar" className="w-8 h-8 mb-3" />
    <p className="text-2xl font-bold mb-1">{expected}</p>
    <p className="text-sm text-blue-300">Expected Today</p>
  </div>

  <div className="p-4 rounded-xl bg-linear-to-r from-orange-500/20 to-orange-500/5 border border-orange-400/20">
    <img src={timer} alt="timer" className="w-8 h-8 mb-3" />
    <p className="text-2xl font-bold mb-1">{pending}</p>
    <p className="text-sm text-orange-300">Pending Approval</p>
  </div>

  <div className="p-4 rounded-xl bg-linear-to-r from-green-500/20 to-green-500/5 border border-green-400/20">
    <img src={tick} alt="tick" className="w-8 h-8 mb-3" />
    <p className="text-2xl font-bold mb-1">{inside}</p>
    <p className="text-sm text-green-300">Currently Inside</p>
  </div>

  <div className="p-4 rounded-xl bg-linear-to-r from-purple-500/20 to-purple-500/5 border border-purple-400/20">
    <img src={graph} alt="graph" className="w-8 h-8 mb-3" />
    <p className="text-2xl font-bold mb-1">{total}</p>
    <p className="text-sm text-purple-300">Total Today</p>
  </div>

</div>
  );
};

export default StatsCards;