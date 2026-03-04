import type { Visitor } from "../../pages/VisitorManagement/VisitorManagement";
import tools from "../../assets/Visitor/tools.png"  
import timer from "../../assets/Visitor/timer.png"
import tick from "../../assets/Visitor/tick.png"
import close from "../../assets/Visitor/close.png"

const PendingApproval = ({ visitors }: { visitors: Visitor[] }) => {
  const pending = visitors.filter(v => v.status === "PENDING");

  return (
    <div className="space-y-6">

      {pending.map(v => (
        <div
          key={v.id}
          className="rounded-2xl border border-yellow-500/40 p-px
          bg-linear-to-r from-green-400/20 via-yellow-400/20 to-red-400/20"
        >
          <div className="rounded-2xl bg-[#0b0c10] p-5">

            <div className="flex justify-between items-start flex-wrap gap-3">

              <div className="flex items-start gap-3">

                <div className="p-2 ">
                  <img src={tools} alt="tools" className="w-10 h-8" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{v.name}</h3>
                  <p className="text-xs text-gray-400">
                    is waiting at the gate
                  </p>
                </div>

              </div>

              <span className="text-xs px-3 py-1 rounded-full
              bg-yellow-500/20 text-yellow-300 border border-yellow-400/30">
                <img src={timer} alt="timer" className="w-4 h-4 inline-block mr-2" />
                 Awaiting Your Approval
              </span> 

            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-5">

              <div className="bg-white/5 p-3 rounded-lg">
                <p className="text-xs text-gray-400">Visitor Type</p>
                <p className="text-sm">{v.type}</p>
              </div>

              <div className="bg-white/5 p-3 rounded-lg">
                <p className="text-xs text-gray-400">Mobile Number</p>
                <p className="text-sm text-cyan-400">{v.phone}</p>
              </div>

              <div className="bg-white/5 p-3 rounded-lg">
                <p className="text-xs text-gray-400">Request Time</p>
                <p className="text-sm">{v.requestTime}</p>
              </div>

            </div>

            <div className="bg-white/5 p-3 rounded-lg mt-4">
              <p className="text-xs text-gray-400">Purpose of Visit</p>
              <p className="text-sm">{v.purpose}</p>
            </div>

            <div className="mt-4 rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-3 text-xs text-gray-300">
              <span className="text-cyan-400 font-semibold">
                Security Note:
              </span>{" "}
              This visitor has been verified by Security-1. They are currently
              waiting at the main gate for your approval.
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-5">

              <button
                className="flex-1 py-2 rounded-xl font-medium
                bg-linear-to-r from-red-500 to-pink-500
                hover:opacity-90 transition cursor-pointer"
              >
                <img src={close} alt="close" className="w-4 h-4 inline-block mr-2" />
                Reject Entry
              </button>

              <button
                className="flex-1 py-2 rounded-xl font-medium
                bg-linear-to-r from-green-500 to-emerald-500
                hover:opacity-90 transition cursor-pointer"
              >
                <img src={tick} alt="tick" className="w-4 h-4 inline-block mr-2" />
                Allow Entry
              </button>

            </div>

          </div>
        </div>
      ))}

    </div>
  );
};

export default PendingApproval;