import React from "react";

interface StatCardProps {
  icon: string;
  title: string;
  value: string;
  status: string;
  statusColor: string;
  gradient: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  status,
  statusColor,
  gradient,
}) => {
  return (
    <div
      className={`relative rounded-xl border border-zinc-700 p-5 text-white overflow-hidden ${gradient}`}
    >
      <div className="flex justify-between items-center mb-4">
        <img src={icon} alt="" className="w-8 h-8" />

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor}`}
        >
          {status}
        </span>
      </div>

      <h2 className="text-xl font-bold mb-1">{value}</h2>


      <p className="text-sm mt-4 text-[#99A1AF]">{title}</p>
    </div>
  );
};

export default StatCard;