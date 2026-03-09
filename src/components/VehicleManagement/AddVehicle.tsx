import { useState } from "react";
import car from "../../assets/VehicleManagement/car.png"
import { X } from "lucide-react";

type Props = {
    setOpenModal: (value: boolean) => void;
};

export default function AddVehicleModal({ setOpenModal }: Props) {
    const [formData, setFormData] = useState({
        vehicleNumber: "",
        vehicleType: "",
        year: "",
        make: "",
        model: "",
        color: "",
        document: null as File | null,
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFile = (e: any) => {
        setFormData({
            ...formData,
            document: e.target.files[0],
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Vehicle Data:", formData);

        setOpenModal(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">

            <div className="w-full max-w-3xl overflow-y-auto h-145 bg-linear-to-r from-[#0A0A1E] to-[#0F0520] rounded-2xl border border-gray-700 p-8 shadow-2xl">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-4">
                        <img src={car} alt="" /> Add Vehicle
                    </h2>
                    <button onClick={() => setOpenModal(false)}
                        className="text-gray-400 hover:text-white cursor-pointer mb-6">
                        <X />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label className="text-sm">Vehicle Number *</label><br /><br />
                        <input name="vehicleNumber" value={formData.vehicleNumber}
                            onChange={handleChange} placeholder="E.G., TN38 CW 2286"
                            className="input p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl w-full" required />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm">Vehicle Type *</label><br />
                            <input name="vehicleType" value={formData.vehicleType}
                                onChange={handleChange} className="input p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl w-full" required />
                        </div>

                        <div>
                            <label className="text-sm">Year *</label><br />
                            <input name="year" type="number" value={formData.year}
                                onChange={handleChange} placeholder="2020"
                                className="input p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl w-full" required />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm">Make *</label><br />
                            <input name="make" value={formData.make}
                                onChange={handleChange} placeholder="e.g., Honda"
                                className="input p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl w-full" required />
                        </div>

                        <div>
                            <label className="text-sm">Model *</label><br />
                            <input name="model" value={formData.model}
                                onChange={handleChange} placeholder="e.g., Civic"
                                className="input p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl w-full" required />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm">Color *</label><br />
                        <input name="color" value={formData.color}
                            onChange={handleChange} placeholder="e.g., Silver"
                            className="input p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl w-full" required />
                    </div>

                    <div>
                        <label className="text-sm"> Upload Documents (Optional) </label><br />

                        <label className="upload-box">
                            <input type="file" hidden onChange={handleFile} />

                            <div className="text-center p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33]  rounded-2xl">
                                📄
                                <p className="text-sm mt-2">
                                    Registration & Insurance
                                </p>
                                <p className="text-xs text-gray-400">
                                    Click to upload
                                </p>
                            </div>
                        </label><br />
                    </div>

                    <div className="bg-blue-900/30 border border-blue-600 text-sm p-3 rounded-lg text-center">
                        Admin will assign parking slot after verification.
                        Security will be notified of vehicle registration.
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">

                        <button type="button" onClick={() => setOpenModal(false)}
                            className="px-6 py-3 bg-gray-700 rounded-full">
                            Cancel
                        </button>

                        <button type="submit"
                            className="px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full">
                            Add Vehicle
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}