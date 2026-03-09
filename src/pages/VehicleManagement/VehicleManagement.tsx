import { useState } from "react";
import { Eye, Pencil, Trash2, Plus, X } from "lucide-react";
import Car from "../../assets/VehicleManagement/car.png";
import Mark from "../../assets/VehicleManagement/mark.png";
import Parking from "../../assets/VehicleManagement/parking.png";
import Timer from "../../assets/VehicleManagement/timer.png";
import { COLORS, FONTSIZE, FONTWEIGHT, WEIGHT } from "../../constent/uiconstent";
import AddVehicleModal from "../../components/VehicleManagement/AddVehicle";

type Vehicle = {
  id: string;
  number: string;
  vehicleId: string;
  status: "Active" | "Pending";
  type: string;
  make: string;
  model: string;
  color: string;
  year: number;
  parking?: string;
};

const initialVehicles: Vehicle[] = [
  {
    id: "1",
    number: "NY-1234-ABC",
    vehicleId: "VEH-001",
    status: "Active",
    type: "Car",
    make: "Honda",
    model: "Civic",
    color: "Silver",
    year: 2023,
    parking: "P-A-101",
  },
  {
    id: "2",
    number: "TY45R",
    vehicleId: "VEH-002",
    status: "Pending",
    type: "Car",
    make: "Toyota",
    model: "Corolla",
    color: "Black",
    year: 2022,
  },
];

export default function VehicleManagement() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);
  const [viewVehicle, setViewVehicle] = useState<Vehicle | null>(null);
  const [editVehicle, setEditVehicle] = useState<Vehicle | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const totalVehicles = vehicles.length;
  const activeVehicles = vehicles.filter((v) => v.status === "Active").length;
  const withParking = vehicles.filter((v) => v.parking).length;
  const pending = vehicles.filter((v) => v.status === "Pending").length;

  const deleteVehicle = (id: string) => {
    if (confirm("Are you sure you want to delete this vehicle?")) {
      setVehicles((prev) => prev.filter((v) => v.id !== id));
    }
  };

  const updateVehicle = (updated: Vehicle) => {
    setVehicles((prev) =>
      prev.map((v) => (v.id === updated.id ? updated : v))
    );
    setEditVehicle(null);
  };

  return (
    <div style={{ color: COLORS.primary_white }}>
      <div className="mb-8">
        <h1 className={`${FONTSIZE[36]}`} style={{ fontWeight: WEIGHT.seven }}>Vehicle Management</h1>
        <p className={`${FONTSIZE[16]} ${FONTWEIGHT[400]}`}
          style={{ color: COLORS.secoundy_gray }}>
          Manage your vehicles and parking assignments
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total Vehicles" value={totalVehicles} image={Car} text="from-[#2B7FFF] to-[#00B8DB]" />
        <StatCard label="Active" value={activeVehicles} image={Mark} text="from-[#00C950] to-[#00BC7D]" />
        <StatCard label="With Parking" value={withParking} image={Parking} text="from-[#AD46FF] to-[#F6339A]" />
        <StatCard label="Pending" value={pending} image={Timer} text="from-[#FF6B6B] to-[#FF8E53]" />
      </div>

      <div className="flex justify-end mb-6" style={{ fontWeight: WEIGHT.seven }}>
        <button onClick={() => setOpenModal(true)}
          className={`flex items-center gap-2 bg-linear-to-r from-[#2B7FFF] to-[#0092B8] px-6 py-3 rounded-full shadow-lg ${FONTSIZE[20]}`}
          style={{ boxShadow: "0px 4px 6px -4px #2B7FFF40,0px 10px 15px -3px #2B7FFF40" }}>
          <Plus size={24} />
          Add Vehicle
        </button>
      </div>

      <div className="space-y-6">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            onView={() => setViewVehicle(vehicle)}
            onEdit={() => setEditVehicle(vehicle)}
            onDelete={() => deleteVehicle(vehicle.id)}
          />
        ))}
      </div>
      {openModal && <AddVehicleModal setOpenModal={setOpenModal} />}

      {viewVehicle && (
        <ViewVehicleModal
          vehicle={viewVehicle}
          close={() => setViewVehicle(null)}
        />
      )}

      {editVehicle && (
        <EditVehicleModal
          vehicle={editVehicle}
          close={() => setEditVehicle(null)}
          updateVehicle={updateVehicle}
        />
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  image,
  text,
}: {
  label: string;
  value: number;
  image: string;
  text: string;
}) {
  return (
    <div className="bg-[#0E1215] border border-gray-700 rounded-xl p-5">
      <div className="flex justify-between items-center mb-6">
        <p className={`bg-linear-to-r ${text} bg-clip-text text-transparent ${FONTSIZE[30]}`} style={{fontWeight: WEIGHT.seven}}>
          {value}
        </p>
        <img src={image} alt="" />
      </div>
      <p className={`${FONTSIZE[16]}`} style={{ color: COLORS.secoundy_gray }}>
        {label}
      </p>
    </div>
  );
}

function VehicleCard({
  vehicle,
  onView,
  onEdit,
  onDelete,
}: {
  vehicle: Vehicle;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl p-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img src={Car} alt="" className="w-10 h-10" />
          <div>
            <div className="flex items-center gap-4">
            <h2 className={`${FONTSIZE[24]}`} style={{fontWeight: WEIGHT.seven}}>{vehicle.number}</h2>
            <p className={`${FONTSIZE[16]}`} style={{ fontWeight: WEIGHT.seven }}>
              {vehicle.status === "Active" ? (
                <span className="bg-[#00C95033] border border-[#00C95066] text-[#05DF72] rounded-full px-3 py-1">Active</span>
              ) : (
                <span className="bg-[#F0B10033] border border-[#F0B10066] text-[#FDC700] rounded-full px-3 py-1">Pending</span>
              )}
            </p>
            </div>
            <p className={`${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>
              {vehicle.vehicleId}
            </p>
          </div>
        </div>

        <div className={`flex gap-3 ${FONTSIZE[14]}`} style={{ fontWeight: WEIGHT.seven }}>
          <button onClick={onView} className="flex items-center gap-1 bg-[#00B8DB33] border border-[#00D3F24D] text-[#00D3F2] px-3 py-2 rounded-lg">
            <Eye size={16} />
            View
          </button>

          <button onClick={onEdit} className="flex items-center gap-1 bg-[#2B7FFF33] border border-[#51A2FF4D] text-[#51A2FF] px-3 py-2 rounded-lg">
            <Pencil size={16} />
            Edit
          </button>

          <button onClick={onDelete} className="flex items-center gap-1 bg-[#FF6B6B33] border border-[#FF6B6B4D] text-[#FF6B6B] px-3 py-2 rounded-lg">
            <Trash2 size={16} />
            Remove
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-sm">
        <Info label="Type" value={vehicle.type} />
        <Info label="Make & Model" value={`${vehicle.make} ${vehicle.model}`} />
        <Info label="Color" value={vehicle.color} />
        <Info label="Year" value={vehicle.year.toString()} />
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className={`mb-1 ${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>
        {label}
      </p>
      <p className={`${FONTSIZE[16]}`} style={{ fontWeight: WEIGHT.seven }}>
        {value}
      </p>
    </div>
  );
}

function ViewVehicleModal({
  vehicle,
  close,
}: {
  vehicle: Vehicle;
  close: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-[#0E1215] w-125 p-6 rounded-xl border border-gray-700">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Vehicle Details</h2>
          <X onClick={close} className="cursor-pointer" />
        </div>

        <div className="space-y-3 text-sm">
          <Info label="Number" value={vehicle.number} />
          <Info label="Type" value={vehicle.type} />
          <Info label="Make & Model" value={`${vehicle.make} ${vehicle.model}`} />
          <Info label="Color" value={vehicle.color} />
          <Info label="Year" value={vehicle.year.toString()} />
        </div>

        <button
          onClick={close}
          className="mt-6 w-full bg-linear-to-r from-blue-500 to-cyan-400 py-2 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function EditVehicleModal({
  vehicle,
  close,
  updateVehicle,
}: {
  vehicle: Vehicle;
  close: () => void;
  updateVehicle: (v: Vehicle) => void;
}) {
  const [form, setForm] = useState(vehicle);

  const handleChange = (key: keyof Vehicle, value: any) => {
    setForm({ ...form, [key]: value });
  };

  const submit = () => {
    updateVehicle(form);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-[#0E1215] w-125 p-6 rounded-xl border border-gray-700">
        <h2 className="text-xl font-bold mb-4">Edit Vehicle</h2>

        <div className="space-y-4">
          <input
            value={form.number}
            onChange={(e) => handleChange("number", e.target.value)}
            className="w-full bg-black border border-gray-700 p-2 rounded"
          />

          <input
            value={form.make}
            onChange={(e) => handleChange("make", e.target.value)}
            className="w-full bg-black border border-gray-700 p-2 rounded"
          />

          <input
            value={form.model}
            onChange={(e) => handleChange("model", e.target.value)}
            className="w-full bg-black border border-gray-700 p-2 rounded"
          />

          <input
            value={form.color}
            onChange={(e) => handleChange("color", e.target.value)}
            className="w-full bg-black border border-gray-700 p-2 rounded"
          />
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={close}
            className="flex-1 bg-gray-700 py-2 rounded-full"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            className="flex-1 bg-linear-to-r from-blue-500 to-cyan-400 py-2 rounded-full"
          >
            Update Vehicle
          </button>
        </div>
      </div>
    </div>
  );
}