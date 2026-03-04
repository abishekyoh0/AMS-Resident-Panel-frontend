import React from "react";
export interface StatCardProps {
  title: string;
  value: number;
  color: "cyan" | "green" | "yellow" | "pink";
  icon: React.ReactNode; 
}

const StatCard: React.FC<StatCardProps> = ({  
  title,
  value,
  color,
  icon,
}) => {  
  const colorStyles = {   
    cyan: { 
      number: "text-cyan-400",
      bg: "from-cyan-500/10",
    },
    green: {
      number: "text-green-400",
      bg: "from-green-500/10",
    },
    yellow: {
      number: "text-yellow-400",
      bg: "from-yellow-500/10",
    },
    pink: {
      number: "text-pink-400",
      bg: "from-pink-500/10",
    },
  };

  return (
    <div
      className={`relative overflow-hidden
        bg-[#0f172a]
        bg-linear-to-br ${colorStyles[color].bg} to-transparent
        border border-white/10
        rounded-2xl p-5
        backdrop-blur-md
        hover:border-white/20
        transition`}
    >
      <h3 className={`text-3xl font-bold ${colorStyles[color].number}`}>
        {value}
      </h3>

      <p className="text-gray-400 text-sm mt-4">{title}</p>

      <div className="absolute top-4 right-4 opacity-80">
  {icon}
</div>
    </div>
  );
};

export default StatCard;