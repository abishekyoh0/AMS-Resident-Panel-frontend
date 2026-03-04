import type { Visitor } from "../../pages/VisitorManagement/VisitorManagement";
import person from "../../assets/Visitor/person.png";
import tick from "../../assets/Visitor/tick.png";
import notepad from "../../assets/Visitor/notepad.png";
const VisitorHistory = ({ visitors }: { visitors: Visitor[] }) => {
  const history = visitors.filter(v => v.status === "EXITED");

  return (
    <div className="rounded-xl border border-white/10 p-5 
    bg-linear-to-r from-white/5 to-transparent">

      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <img src={notepad} className="w-5 h-5" />
          <h2 className="font-semibold text-lg">Visitor History</h2>
        </div>

        <p className="text-xs text-gray-400 mt-1">
          Complete log of all visitor entries
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-white/5 text-gray-400">
            <tr>
              <th className="p-3 text-left">VISITOR</th>
              <th className="p-3 text-left">TYPE</th>
              <th className="p-3 text-left">PURPOSE</th>
              <th className="p-3 text-left">ENTRY TIME</th>
              <th className="p-3 text-left">EXIT TIME</th>
              <th className="p-3 text-left">STATUS</th>
            </tr>
          </thead>

          <tbody>

            {history.map(v => (
              <tr key={v.id} className="border-t border-white/10">

                {/* Visitor */}
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={v.image || person}
                      className="w-8 h-8 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-medium">{v.name}</p>
                      <p className="text-xs text-gray-400">{v.phone}</p>
                    </div>
                  </div>
                </td>

                {/* Type */}
                <td className="p-3">{v.type}</td>

                {/* Purpose */}
                <td className="p-3">{v.purpose}</td>

                {/* Entry */}
                <td className="p-3">{v.entryTime}</td>

                {/* Exit */}
                <td className="p-3">{v.exitTime}</td>

                {/* Status */}
                <td className="p-3">
                  <span className="flex items-center gap-1 w-fit 
                  bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">

                    <img src={tick} className="w-3 h-3" />

                    Completed
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default VisitorHistory;