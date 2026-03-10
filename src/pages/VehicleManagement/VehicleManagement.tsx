import { useState, type ReactNode } from "react";
import { Eye, Pencil, Trash2, Plus, X } from "lucide-react";
import Car from "../../assets/VehicleManagement/car.png";
import Mark from "../../assets/VehicleManagement/mark.png";
import Parking from "../../assets/VehicleManagement/parking.png";
import Timer from "../../assets/VehicleManagement/timer.png";
import { COLORS, FONTSIZE, FONTWEIGHT, WEIGHT } from "../../constent/uiconstent";
import AddVehicleModal from "../../components/VehicleManagement/AddVehicle";

type Vehicle = {
  documentName: ReactNode;
  documentUrl: string | undefined;
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
    documentName: undefined,
    documentUrl: undefined
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
    documentName: undefined,
    documentUrl: undefined
  },
];

type DocumentType = {
  name: string;
  url: string;
};

export default function VehicleManagement() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);
  const [viewVehicle, setViewVehicle] = useState<Vehicle | null>(null);
  const [editVehicle, setEditVehicle] = useState<Vehicle | null>(null);
  const [documents, setDocuments] = useState<DocumentType[]>([]);
  const [fileName, setFileName] = useState('');
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setFileName(file.name);

      const newDocument = {
        name: file.name,
        url: URL.createObjectURL(file),
      };

      setDocuments((prev) => [...prev, newDocument]);
    }
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
          documents={documents}
          handleFileChange={handleFileChange}
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
        <p className={`bg-linear-to-r ${text} bg-clip-text text-transparent ${FONTSIZE[30]}`} style={{ fontWeight: WEIGHT.seven }}>
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
              <h2 className={`${FONTSIZE[24]}`} style={{ fontWeight: WEIGHT.seven }}>{vehicle.number}</h2>
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
          <button onClick={onView} className="flex items-center gap-1 bg-[#00B8DB33] border border-[#00D3F24D] text-[#00D3F2] px-3 py-2 rounded-lg cursor-pointer">
            <Eye size={16} />
            View
          </button>

          <button onClick={onEdit} className="flex items-center gap-1 bg-[#2B7FFF33] border border-[#51A2FF4D] text-[#51A2FF] px-3 py-2 rounded-lg cursor-pointer">
            <Pencil size={16} />
            Edit
          </button>

          <button onClick={onDelete} className="flex items-center gap-1 bg-[#FF6B6B33] border border-[#FF6B6B4D] text-[#FF6B6B] px-3 py-2 rounded-lg cursor-pointer">
            <Trash2 size={16} />
            Remove
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-sm">
        <div>
          <p className={`mb-1 ${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>
            Type
          </p>
          <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven }}>
            {vehicle.type}
          </p>
        </div>
        <div>
          <p className={`mb-1 ${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>
            Make & Model
          </p>
          <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven }}>
            {vehicle.make} {vehicle.model}
          </p>
        </div>
        <div>
          <p className={`mb-1 ${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>
            Color
          </p>
          <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven }}>
            {vehicle.color}
          </p>
        </div>
        <div>
          <p className={`mb-1 ${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>
            Year
          </p>
          <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven }}>
            {vehicle.year.toString()}
          </p>
        </div>
      </div>

      {vehicle.status === "Active" ? (
        <div className="bg-[#00C9501A] border border-[#05DF724D] rounded-xl py-2 px-5 mt-4 w-3xl">
          <div className="flex items-center gap-3">
            <img src={Parking} alt="" className="w-10 h-10" />

            <div>
              <p
                className={FONTSIZE[18]}
                style={{ color: "#05DF72", fontWeight: WEIGHT.seven }}
              >
                Parking Assignment
              </p>

              <p
                className={FONTSIZE[24]}
                style={{ fontWeight: WEIGHT.seven }}
              >
                {vehicle.parking
                  ? vehicle.parking
                  : "No parking assigned yet."}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#F0B1001A] border border-[#FDC7004D] rounded-xl py-3 px-5 mt-4 w-3xl">

          <div className="flex justify-between items-center gap-5">
            <p className={FONTSIZE[18]}
              style={{ color: "#FDC700" }} >
              ⚠ No parking assigned yet.
            </p>

            <p className={`bg-[#F0B10033] border-2 border-[#FDC7004D] text-[#FDC700] px-2 py-1 rounded-lg  animate-pulse ${FONTSIZE[14]}`} style={{ fontWeight: WEIGHT.seven }} >
              Request Parking
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function ViewVehicleModal({
  vehicle,
  close,
  documents,
  handleFileChange,
}: {
  vehicle: Vehicle;
  close: () => void;
  documents: { name: string; url: string }[];
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
      <div className="w-full max-w-3xl overflow-y-auto h-145 bg-linear-to-r from-[#0A0A1E] to-[#0F0520] rounded-2xl border border-gray-700 p-4 shadow-2xl">
        <div className="flex justify-between items-center px-4 py-3">
          <h2 className={`flex items-center gap-4 ${FONTSIZE[30]}`} style={{ fontWeight: WEIGHT.seven }}>
            <img src={Car} alt="" /> Vehicle Details
          </h2>
          <button onClick={() => (close())}
            className="text-gray-400 hover:text-white cursor-pointer mr-5">
            <X />
          </button>
        </div>
        <p className={`mb-3 px-4 ${FONTSIZE[14]}`} style={{ fontWeight: WEIGHT.seven }}>
          {vehicle.vehicleId}
        </p>

        <div className={`bg-[#FFFFFF0D] border border-[#FFFFFF1A] rounded-xl p-5 mt-4 ${FONTSIZE[16]}`}>
          <p className={`mb-4 ${FONTSIZE[20]}`} style={{ fontWeight: WEIGHT.seven }}>
            {vehicle.number}
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <p className={`mb-1 ${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>
                Type
              </p>
              <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven }}>
                {vehicle.type}
              </p>
            </div>
            <div>
              <p className={`mb-1 ${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>
                Make & Model
              </p>
              <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven }}>
                {vehicle.make} {vehicle.model}
              </p>
            </div>
            <div>
              <p className={`mb-1 ${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>
                Color
              </p>
              <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven }}>
                {vehicle.color}
              </p>
            </div>
            <div>
              <p className={`mb-1 ${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>
                Year
              </p>
              <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven }}>
                {vehicle.year.toString()}
              </p>
            </div>
            <div>
              <p className={`mb-1 ${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>
                Status
              </p>
              <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven }}>
                {vehicle.status}
              </p>
            </div>
            <div>
              <p className={`mb-1 ${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>
                Added Date
              </p>
              <p className={`${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven }}>
                {vehicle.status === "Active" ? "2024-01-15" : "2024-06-10"}
              </p>
            </div>
          </div>
        </div>

        <div className={`bg-[#00C9501A] border border-[#05DF724D] rounded-xl p-5 mt-4`}>
          <p className={`mb-1 ${FONTSIZE[18]}`} style={{ color: "#05DF72", fontWeight: WEIGHT.seven }}>
            Parking Assignment
          </p>
          <div className="flex items-center gap-3">
            <img src={Parking} alt="" className="w-10 h-10" />
            <div>
              <label htmlFor="" className={`${FONTSIZE[14]}`} style={{ color: COLORS.secoundy_gray }}>Assigned Slot</label>
              <p className={`${FONTSIZE[24]}`} style={{ fontWeight: WEIGHT.seven }}>
                {vehicle.parking ? ` ${vehicle.parking}` : "No parking assigned yet."}
              </p>
            </div>
          </div>
        </div>

        <div className="my-6 bg-[#2B7FFF1A] border border-[#51A2FF4D] rounded-xl p-5">
          <h3 className={`mb-4 ${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven, color: "#51A2FF" }}> Documents</h3>

          <ul className="space-y-2">
            {documents.map((doc, index) => (
              <li key={index} className={`flex justify-between gap-3 bg-[#FFFFFF0D] rounded-lg p-3 items-center `}>
                <span className={` ${FONTSIZE[16]}`}>{doc.name}</span>

                <button className={`bg-[#2B7FFF33] border border-[#51A2FF4D] text-[#51A2FF] px-3 py-2 rounded-lg ${FONTSIZE[14]}`} style={{ fontWeight: WEIGHT.seven }}>
                  <a href={doc.url} target="_blank" rel="document">
                    View
                  </a>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button onClick={close}
          className="px-6 py-3 w-full bg-linear-to-r from-[#2B7FFF] to-[#0092B8] rounded-full cursor-pointer"
          style={{ boxShadow: "0px 8px 10px -6px #2B7FFF40,0px 20px 25px -5px #2B7FFF40" }}>
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
      <div className="w-full max-w-3xl overflow-y-auto h-145 bg-linear-to-r from-[#0A0A1E] to-[#0F0520] rounded-2xl border border-gray-700 p-8 shadow-2xl">
        <div className="flex justify-between items-center">
          <h2 className={`mb-6 flex items-center gap-4 ${FONTSIZE[30]}`} style={{ fontWeight: WEIGHT.seven }}>
            <img src={Car} alt="" /> Edit Vehicle
          </h2>
          <button onClick={() => (close())}
            className="text-gray-400 hover:text-white cursor-pointer mb-6">
            <X />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label>Vehicle Number *</label><br />
            <input value={form.number} onChange={(e) => handleChange("number", e.target.value)}
              className="w-full bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl mt-2 p-2"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label>Vehicle Type *</label><br />
              <input name="vehicleType" value={form.type}
                onChange={(e) => handleChange("type", e.target.value)} className="mt-2 p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl w-full" required />
            </div>
            <div>
              <label>Year *</label><br />
              <input name="year" type="number" value={form.year}
                onChange={(e) => handleChange("year", parseInt(e.target.value))} placeholder="2020"
                className="mt-2 p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl w-full" required />
            </div>
            <div>
              <label>Make *</label><br />
              <input
                value={form.make}
                onChange={(e) => handleChange("make", e.target.value)}
                className="w-full bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl mt-2 p-2"
              />
            </div>
            <div>
              <label>Model *</label><br />
              <input
                value={form.model}
                onChange={(e) => handleChange("model", e.target.value)}
                className="w-full bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl mt-2 p-2"
              />
            </div>
          </div>
          <div>
            <label>Color *</label><br />
            <input
              value={form.color}
              onChange={(e) => handleChange("color", e.target.value)}
              className="w-full bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl mt-2 p-2"
            />
          </div>
        </div>

        <div className="my-6 bg-[#2B7FFF1A] border border-[#51A2FF4D] rounded-xl p-5">
          <h3 className={`mb-4 ${FONTSIZE[18]}`} style={{ fontWeight: WEIGHT.seven, color: "#51A2FF" }}> Documents</h3>

          <ul className="space-y-2">
            <li className={`flex justify-between gap-3 bg-[#FFFFFF0D] rounded-lg p-3 items-center `}>
              <span className={` ${FONTSIZE[16]}`}>{form.documentName}</span>

              <button className={`bg-[#2B7FFF33] border border-[#51A2FF4D] text-[#51A2FF] px-3 py-2 rounded-lg cursor-pointer ${FONTSIZE[14]}`} style={{ fontWeight: WEIGHT.seven }}>
                <a href={form.documentUrl} target="_blank" rel="document">
                  Upload
                </a>
              </button>
            </li>
          </ul>
        </div>

        <div className="flex gap-4 mt-6">
          <button onClick={close} className="w-full px-6 py-3 bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-full cursor-pointer">
            Cancel
          </button>

          <button onClick={submit} className="w-full px-6 py-3 bg-linear-to-r from-[#2B7FFF] to-[#0092B8] rounded-full cursor-pointer"
            style={{ boxShadow: "0px 8px 10px -6px #2B7FFF40,0px 20px 25px -5px #2B7FFF40" }}>
            Update Vehicle
          </button>
        </div>
      </div>
    </div>
  );
}