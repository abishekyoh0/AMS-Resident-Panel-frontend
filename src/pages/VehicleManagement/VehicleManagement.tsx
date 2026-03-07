import { useState } from "react";
import { Eye, Pencil, Trash2, CarFront, Plus, X } from "lucide-react";
import Car from "../../assets/VehicleManagement/car.png";
import Mark from "../../assets/VehicleManagement/mark.png";
import Parking from "../../assets/VehicleManagement/parking.png";
import Timer from "../../assets/VehicleManagement/timer.png";
import { COLORS } from "../../constent/uiconstent";
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
        <h1 className="text-3xl font-bold">Vehicle Management</h1>
        <p className="text-gray-400">
          Manage your vehicles and parking assignments
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Vehicles" value={totalVehicles} image={Car} />
        <StatCard label="Active" value={activeVehicles} image={Mark} />
        <StatCard label="With Parking" value={withParking} image={Parking} />
        <StatCard label="Pending" value={pending} image={Timer} />
      </div>

<div className="flex justify-end mb-6">
                <button onClick={() => setOpenModal(true)}
                className="flex items-center gap-2 bg-linear-to-r from-blue-500 to-cyan-400 px-6 py-3 rounded-full shadow-lg">
                    <Plus size={18} />
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
}: {
  label: string;
  value: number;
  image: string;
}) {
  return (
    <div className="bg-[#0E1215] border border-gray-700 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-cyan-400">{value}</p>
        <img src={image} alt="" />
      </div>
      <p className="text-gray-400 text-sm">{label}</p>
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
    <div className="bg-[#0E1215] border border-gray-700 rounded-xl p-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <CarFront className="text-cyan-400" />

          <div>
            <h2 className="font-semibold text-lg">{vehicle.number}</h2>
            <p className="text-gray-400 text-sm">{vehicle.vehicleId}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onView}
            className="flex items-center gap-1 bg-cyan-600 px-3 py-2 rounded-lg text-sm"
          >
            <Eye size={14} />
            View
          </button>

          <button
            onClick={onEdit}
            className="flex items-center gap-1 bg-blue-600 px-3 py-2 rounded-lg text-sm"
          >
            <Pencil size={14} />
            Edit
          </button>

          <button
            onClick={onDelete}
            className="flex items-center gap-1 bg-red-600 px-3 py-2 rounded-lg text-sm"
          >
            <Trash2 size={14} />
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
      <p className="text-gray-400">{label}</p>
      <p className="font-medium">{value}</p>
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