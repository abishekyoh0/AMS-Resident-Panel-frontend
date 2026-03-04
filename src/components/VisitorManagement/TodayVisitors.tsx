import type { Visitor } from "../../pages/VisitorManagement/VisitorManagement";
import person from "../../assets/Visitor/person.png"
import calendar from "../../assets/Visitor/calendar.png"
import clock from "../../assets/Visitor/clock.png"
import green from "../../assets/Visitor/green.png"
import white from "../../assets/Visitor/white.png"

const TodayVisitors = ({ visitors }: { visitors: Visitor[] }) => {

  const expected = visitors.filter(v => v.status === "EXPECTED");
  const inside = visitors.filter(v => v.status === "INSIDE");
  const exited = visitors.filter(v => v.status === "EXITED");

  return (
    <div className="space-y-6">

      <div>

        <h3 className="flex items-center  gap-2 text-sm text-gray-300 mb-3">
  <img src={calendar} alt="calendar" className="w-4 h-4 mb-1.5" />
  Expected Visitors ({expected.length})
</h3>

        <div className="space-y-3">

          {expected.map(v => (
            <div
              key={v.id}
              className="rounded-xl border border-blue-500/30 p-4 
              bg-linear-to-r from-blue-500/10 to-transparent"
            >

              <div className="flex justify-between items-center flex-wrap gap-2">

                <div className="flex items-start gap-3">
  <img
    src={v.image || person}
    alt={v.name}
    className="w-8 h-8 rounded-full object-cover mt-1"
  />

  <div>
    <p className="font-semibold">{v.name}</p>
    <p className="text-xs text-gray-400">
      {v.type} • Expected at {v.time}
    </p>
  </div>
</div>  

                <span className="flex items-center gap-1 px-3 py-1 text-xs rounded-full 
bg-blue-500/20 text-blue-300">
  <img src={clock} alt="clock" className="w-5 h-5" />
  Waiting to Arrive
</span>

              </div>

              {v.note && (
                <div className="mt-3 bg-white/5 rounded-lg px-3 py-2 text-xs text-gray-400">
                   {v.image1 && <img src={v.image1} alt="note" className="w-4 h-4 inline-block ml-2 mr-2" />}{v.note}
                </div>
              )}

            </div>
          ))}

        </div>
      </div>

      <div>

      <h3 className="flex items-center gap-2 text-sm text-gray-300 mb-3">
  <img src={green} alt="inside" className="w-4 h-4" />
  Currently Inside ({inside.length})
</h3>

        <div className="space-y-3">

          {inside.map(v => (
            <div
              key={v.id}
              className="rounded-xl border border-green-500/30 p-4
              bg-linear-to-r from-green-500/10 to-transparent"
            >

              <div className="flex justify-between items-center flex-wrap">

              
<div className="flex items-start gap-3">
  <img
    src={v.image || person}
    alt={v.name}
    className="w-8 h-8 rounded-full object-cover mt-1"
  />

  <div>
    <p className="font-semibold">{v.name}</p>
    <p className="text-xs text-gray-400">
      {v.type} • Entered at {v.entryTime}
    </p>
  </div>
</div>
                <span className="flex items-center gap-1 px-3 py-1 text-xs rounded-full 
bg-green-500/20 text-green-400">
  <img src={green} alt="inside" className="w-3 h-3" />
  Inside
</span>

              </div>

            </div>
          ))}

        </div>

      </div>

      <div>

      <h3 className="flex items-center gap-2 text-sm text-gray-300 mb-3">
  <img src={white} alt="exited" className="w-4 h-4" />
  Exited Today ({exited.length})
</h3>
        <div className="space-y-3">

          {exited.map(v => (
            <div
              key={v.id}
              className="rounded-xl border border-white/10 p-4 
              bg-linear-to-r from-white/5 to-transparent"
            >

              <div className="flex justify-between items-center flex-wrap">

                <div>
                  <p className="font-semibold">{v.name}</p>
                  <p className="text-xs text-gray-400">
                    {v.entryTime} - {v.exitTime} • {v.type}
                  </p>
                </div>

             <span className="flex items-center gap-1 px-3 py-1 text-xs rounded-full 
bg-gray-500/20 text-gray-300">
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