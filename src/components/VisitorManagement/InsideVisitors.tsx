import type { Visitor } from "../../pages/VisitorManagement/VisitorManagement";
import { FONTSIZE, WEIGHT } from "../../constent/uiconstent";

import box from "../../assets/Visitor/box.png";
import green from "../../assets/Visitor/green.png";

const InsideVisitors = ({ visitors }: { visitors: Visitor[] }) => {
  const inside = visitors.filter(v => v.status === "INSIDE");

  return (
    <div className="space-y-6">
      {inside.map(v => (
        <div
          key={v.id}
          className="rounded-2xl border border-green-500/40 p-px
          bg-linear-to-r from-green-400/20 via-emerald-400/20 to-cyan-400/20"
        >
          <div className="rounded-2xl bg-[#0b0c10] p-5">

            <div className="flex justify-between items-start flex-wrap gap-3">

              <div className="flex items-start gap-3">

                <div className="p-2">
                  <img src={box} alt="box" className="w-10 h-10" />
                </div>

                <div>
                  <h3
                    className={`${FONTSIZE[24]} mt-1`}
                    style={{ fontWeight: WEIGHT.six }}
                  >
                    {v.name}
                  </h3>

                  <p
                    className={`text-gray-400 ${FONTSIZE[14]}`}
                    style={{ fontWeight: WEIGHT.four }}
                  >
                    ID: #{v.id}
                  </p>
                </div>

              </div>

              <span
                className={`px-3 py-1 rounded-full
                bg-green-500/20 text-green-400 border border-green-400/30
                ${FONTSIZE[14]}`}
                style={{ fontWeight: WEIGHT.seven }}
              >
                <img src={green} alt="green" className="w-3 h-3 inline-block mr-2" />
                Currently Inside
              </span>

            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-5">

              <div className="bg-white/5 p-3 rounded-lg">
                <p
                  className={`text-gray-400 ${FONTSIZE[12]}`}
                  style={{ fontWeight: WEIGHT.four }}
                >
                  Entry Time
                </p>

                <p
                  className={`${FONTSIZE[16]}`}
                  style={{ fontWeight: WEIGHT.seven }}
                >
                  {v.entryTime}
                </p>
              </div>

              <div className="bg-white/5 p-3 rounded-lg">
                <p
                  className={`text-gray-400 ${FONTSIZE[12]}`}
                  style={{ fontWeight: WEIGHT.four }}
                >
                  Purpose
                </p>

                <p
                  className={`${FONTSIZE[16]}`}
                  style={{ fontWeight: WEIGHT.seven }}
                >
                  {v.purpose}
                </p>
              </div>

              <div className="bg-white/5 p-3 rounded-lg">
                <p
                  className={`text-gray-400 ${FONTSIZE[12]}`}
                  style={{ fontWeight: WEIGHT.four }}
                >
                  Approved At
                </p>

                <p
                  className={`text-green-400 ${FONTSIZE[16]}`}
                  style={{ fontWeight: WEIGHT.seven }}
                >
                  02:29 PM
                </p>
              </div>

            </div>

            <p
              className={`text-gray-400 mt-4 ${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four }}
            >
              Security will record exit time when visitor leaves
            </p>

          </div>
        </div>
      ))}
    </div>
  );
};

export default InsideVisitors;