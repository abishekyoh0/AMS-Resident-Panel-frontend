import { useState } from "react";
import { Eye, Pencil, Trash2, CarFront, Plus } from "lucide-react";
import Car from "../../assets/VehicleManagement/car.png"
import Mark from "../../assets/VehicleManagement/mark.png"
import Parking from "../../assets/VehicleManagement/parking.png"
import Timer from "../../assets/VehicleManagement/timer.png"
import { COLORS } from "../../constent/uiconstent";
import AddVehicleModal from "../../components/VehicleManagement/AddVehicle";

type Vehicle = {
    id: string;
    number: string;
    vehicleId: string;
    status: "Active" | "Pending";
    type: string;
    model: string;
    color: string;
    year: number;
    parking?: string;
};

const vehicles: Vehicle[] = [
    {
        id: "1",
        number: "NY-1234-ABC",
        vehicleId: "VEH-001",
        status: "Active",
        type: "Car",
        model: "Honda Civic",
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
        model: "bbb tftfgv",
        color: "gdsgxgd",
        year: 2026,
    },
];

export default function VehicleManagement() {
    const [openModal, setOpenModal] = useState(false);
    const totalVehicles = vehicles.length;
    const activeVehicles = vehicles.filter((v) => v.status === "Active").length;
    const withParking = vehicles.filter((v) => v.parking).length;
    const pending = vehicles.filter((v) => v.status === "Pending").length;

    return (
        <div style={{color: COLORS.primary_white}}>

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
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
            </div>
            {openModal && <AddVehicleModal setOpenModal={setOpenModal} />}
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

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
    return (
        <div className="bg-[#0E1215] border border-gray-700 rounded-xl p-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div className="flex items-center gap-4">
                    <CarFront className="text-cyan-400" />

                    <div>
                        <h2 className="font-semibold text-lg flex items-center gap-2">
                            {vehicle.number}

                            <span
                                className={`text-xs px-2 py-1 rounded-full ${vehicle.status === "Active"
                                        ? "bg-green-600"
                                        : "bg-yellow-600"
                                    }`}
                            >
                                {vehicle.status}
                            </span>
                        </h2>

                        <p className="text-gray-400 text-sm">{vehicle.vehicleId}</p>
                    </div>
                </div>

                <div className="flex gap-3">

                    <button className="flex items-center gap-1 bg-cyan-600 px-3 py-2 rounded-lg text-sm">
                        <Eye size={14} />
                        View
                    </button>

                    <button className="flex items-center gap-1 bg-blue-600 px-3 py-2 rounded-lg text-sm">
                        <Pencil size={14} />
                        Edit
                    </button>

                    <button className="flex items-center gap-1 bg-red-600 px-3 py-2 rounded-lg text-sm">
                        <Trash2 size={14} />
                        Remove
                    </button>

                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-sm">

                <Info label="Type" value={vehicle.type} />
                <Info label="Make & Model" value={vehicle.model} />
                <Info label="Color" value={vehicle.color} />
                <Info label="Year" value={vehicle.year.toString()} />

            </div>

            <div className="mt-6">

                {vehicle.parking ? (
                    <div className="bg-green-900/30 border border-green-600 p-4 rounded-xl flex items-center gap-3">
                        <span className="text-xl">
                            <img src={Parking} alt="" />
                        </span>
                        <div>
                            <p className="text-green-400 text-sm">Parking Assigned</p>
                            <p className="font-semibold">{vehicle.parking}</p>
                        </div>
                    </div>
                ) : (
                    <div className="bg-yellow-900/30 border border-yellow-600 p-4 rounded-xl flex items-center justify-between">

                        <span className="text-yellow-400 text-sm">
                            ⚠️ No parking slot assigned
                        </span>

                        <button className="bg-yellow-600 px-4 py-2 rounded-lg text-sm">
                            Request Parking
                        </button>

                    </div>
                )}

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