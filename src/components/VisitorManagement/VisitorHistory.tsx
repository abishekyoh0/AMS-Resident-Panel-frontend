import type { Visitor } from "../../pages/VisitorManagement/VisitorManagement";
import { FONTSIZE, WEIGHT } from "../../constent/uiconstent";

import person from "../../assets/Visitor/person.png";
import tick from "../../assets/Visitor/tick.png";
import notepad from "../../assets/Visitor/notepad.png";

const VisitorHistory = ({ visitors }: { visitors: Visitor[] }) => {
  const history = visitors.filter(v => v.status === "EXITED");

  return (
    <div
      className="rounded-xl border border-white/10 p-5 
      bg-linear-to-r from-white/5 to-transparent"
    >

      <div className="mb-4">
        <div className="flex items-center gap-2">
          <img src={notepad} className="w-5 h-5" />

          <h2
            className={`${FONTSIZE[24]}`}
            style={{ fontWeight: WEIGHT.seven }}
          >
            Visitor History
          </h2>
        </div>

        <p
          className={`text-gray-400 mt-1 ${FONTSIZE[14]}`}
          style={{ fontWeight: WEIGHT.four }}
        >
          Complete log of all visitor entries
        </p>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-white/5 text-gray-400">
            <tr>

              <th
                className={`p-3 text-left ${FONTSIZE[12]}`}
                style={{ fontWeight: WEIGHT.seven }}
              >
                VISITOR
              </th>

              <th
                className={`p-3 text-left ${FONTSIZE[12]}`}
                style={{ fontWeight: WEIGHT.seven }}
              >
                TYPE
              </th>

              <th
                className={`p-3 text-left ${FONTSIZE[12]}`}
                style={{ fontWeight: WEIGHT.seven }}
              >
                PURPOSE
              </th>

              <th
                className={`p-3 text-left ${FONTSIZE[12]}`}
                style={{ fontWeight: WEIGHT.seven }}
              >
                ENTRY TIME
              </th>

              <th
                className={`p-3 text-left ${FONTSIZE[12]}`}
                style={{ fontWeight: WEIGHT.seven }}
              >
                EXIT TIME
              </th>

              <th
                className={`p-3 text-left ${FONTSIZE[12]}`}
                style={{ fontWeight: WEIGHT.seven }}
              >
                STATUS
              </th>

            </tr>
          </thead>

          <tbody>

            {history.map(v => (
              <tr key={v.id} className="border-t border-white/10">

                <td className="p-3">
                  <div className="flex items-center gap-3">

                    <img
                      src={v.image || person}
                      className="w-8 h-8 rounded-full object-cover"
                    />

                    <div>

                      <p
                        className={`${FONTSIZE[16]}`}
                        style={{ fontWeight: WEIGHT.seven }}
                      >
                        {v.name}
                      </p>

                      <p
                        className={`text-gray-400 ${FONTSIZE[12]}`}
                        style={{ fontWeight: WEIGHT.four }}
                      >
                        {v.phone}
                      </p>

                    </div>

                  </div>
                </td>

                <td
                  className={`p-3 ${FONTSIZE[14]}`}
                  style={{ fontWeight: WEIGHT.four }}
                >
                  {v.type}
                </td>

                <td
                  className={`p-3 ${FONTSIZE[14]}`}
                  style={{ fontWeight: WEIGHT.four }}
                >
                  {v.purpose}
                </td>

                <td
                  className={`p-3 ${FONTSIZE[14]}`}
                  style={{ fontWeight: WEIGHT.four }}
                >
                  {v.entryTime}
                </td>

                <td
                  className={`p-3 ${FONTSIZE[14]}`}
                  style={{ fontWeight: WEIGHT.four }}
                >
                  {v.exitTime}
                </td>

                <td className="p-3">

                  <span
                    className={`flex items-center gap-1 w-fit 
                    bg-green-500/20 text-green-400 px-3 py-1 rounded-full
                    ${FONTSIZE[12]}`}
                    style={{ fontWeight: WEIGHT.seven }}
                  >
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