import type { Visitor } from "../../pages/VisitorManagement/VisitorManagement";
import { FONTSIZE, WEIGHT } from "../../constent/uiconstent";

import person from "../../assets/Visitor/person.png";
import calendar from "../../assets/Visitor/calendar.png";
import clock from "../../assets/Visitor/clock.png";
import green from "../../assets/Visitor/green.png";
import white from "../../assets/Visitor/white.png";

const TodayVisitors = ({ visitors }: { visitors: Visitor[] }) => {

  const expected = visitors.filter(v => v.status === "EXPECTED");
  const inside = visitors.filter(v => v.status === "INSIDE");
  const exited = visitors.filter(v => v.status === "EXITED");

  return (
    <div className="space-y-6">


      <div>

        <h3
          className={`flex items-center gap-2 text-gray-300 mb-3 ${FONTSIZE[18]}`}
          style={{ fontWeight: WEIGHT.seven }}
        >
          <img src={calendar} alt="calendar" className="w-4 h-4 mb-1.5" />
          Expected Visitors ({expected.length})
        </h3>

        <div className="space-y-3">

          {expected.map(v => (
            <div
              key={v.id}
              className="rounded-xl border border-[#51A2FF4D] p-4 
              bg-linear-to-r from-[#2B7FFF1A] to-[#00B8DB1A]"
            >

              <div className="flex justify-between items-center flex-wrap gap-2">

                <div className="flex items-start gap-3">

                  <img
                    src={v.image || person}
                    alt={v.name}
                    className="w-8 h-8 rounded-full object-cover mt-1"
                  />

                  <div>
                    <p
                      className={`${FONTSIZE[20]}`}
                      style={{ fontWeight: WEIGHT.seven }}
                    >
                      {v.name}
                    </p>

                    <p
                      className={`text-[#99A1AF] ${FONTSIZE[14]}`}
                      style={{ fontWeight: WEIGHT.four }}
                    >
                      {v.type} • Expected at {v.time}
                    </p>
                  </div>

                </div>

                <span
                  className={`flex items-center gap-1 px-3 py-1 rounded-full border border-[#51A2FF4D]
                  bg-[#2B7FFF33] text-[#51A2FF] ${FONTSIZE[14]}`}
                  style={{ fontWeight: WEIGHT.seven }}
                >
                  <img src={clock} alt="clock" className="w-5 h-5" />
                  Waiting to Arrive
                </span>

              </div>

              {v.note && (
                <div
                  className={`mt-3 bg-white/5 rounded-lg px-3 py-2 text-[#D1D5DC] ${FONTSIZE[14]}`}
                  style={{ fontWeight: WEIGHT.four }}
                >
                  {v.image1 && (
                    <img
                      src={v.image1}
                      alt="note"
                      className="w-4 h-4 inline-block ml-2 mr-2"
                    />
                  )}
                  {v.note}
                </div>
              )}

            </div>
          ))}

        </div>
      </div>


      <div>

        <h3
          className={`flex items-center gap-2 text-gray-300 mb-3 ${FONTSIZE[18]}`}
          style={{ fontWeight: WEIGHT.seven }}
        >
          <img src={green} alt="inside" className="w-4 h-4" />
          Currently Inside ({inside.length})
        </h3>

        <div className="space-y-3">

          {inside.map(v => (
            <div
              key={v.id}
              className="rounded-xl border border-[#05DF724D] p-4
              bg-linear-to-r from-[#00C9501A] to-[#00BC7D1A]"
            >

              <div className="flex justify-between items-center flex-wrap">

                <div className="flex items-start gap-3">

                  <img
                    src={v.image || person}
                    alt={v.name}
                    className="w-8 h-8 rounded-full object-cover mt-1"
                  />

                  <div>
                    <p
                      className={`${FONTSIZE[20]}`}
                      style={{ fontWeight: WEIGHT.seven }}
                    >
                      {v.name}
                    </p>

                    <p
                      className={`text-[#99A1AF] ${FONTSIZE[14]}`}
                      style={{ fontWeight: WEIGHT.four }}
                    >
                      {v.type} • Entered at {v.entryTime}
                    </p>
                  </div>

                </div>

                <span
                  className={`flex items-center gap-1 px-3 py-1 rounded-full 
                  bg-[#00C95033] text-[#05DF72] ${FONTSIZE[14]}`}
                  style={{ fontWeight: WEIGHT.seven }}
                >
                  <img src={green} alt="inside" className="w-3 h-3" />
                  Inside
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>


      <div>

        <h3
          className={`flex items-center gap-2 text-gray-300 mb-3 ${FONTSIZE[18]}`}
          style={{ fontWeight: WEIGHT.seven }}
        >
          <img src={white} alt="exited" className="w-4 h-4" />
          Exited Today ({exited.length})
        </h3>

        <div className="space-y-3">

          {exited.map(v => (
            <div
              key={v.id}
              className="rounded-xl border border-[#05DF724D] p-4 
              bg-linear-to-r from-[#00C9501A] to-[#00BC7D1A]"
            >

              <div className="flex justify-between items-center flex-wrap">

                <div>

                  <p
                    className={`${FONTSIZE[20]}`}
                    style={{ fontWeight: WEIGHT.seven }}
                  >
                    {v.name}
                  </p>

                  <p
                    className={`text-[#99A1AF] ${FONTSIZE[14]}`}
                    style={{ fontWeight: WEIGHT.four }}
                  >
                    {v.entryTime} - {v.exitTime} • {v.type}
                  </p>

                </div>

                <span
                  className={`flex items-center gap-1 px-3 py-1 rounded-full 
                  bg-[#6A728233] text-[#99A1AF] ${FONTSIZE[14]}`}
                  style={{ fontWeight: WEIGHT.seven }}
                >
                  <img src={white} alt="exited" className="w-3 h-3" />
                  Exited
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default TodayVisitors;