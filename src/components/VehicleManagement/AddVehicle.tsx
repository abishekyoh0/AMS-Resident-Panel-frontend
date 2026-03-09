import { useState } from "react";
import car from "../../assets/VehicleManagement/car.png"
import { X } from "lucide-react";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import doc from "../../assets/Invoices/download.png"

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

    const handleFileChange = (e: any) => {
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
                    <h2 className={`mb-6 flex items-center gap-4 ${FONTSIZE[30]}`} style={{fontWeight: WEIGHT.seven}}>
                        <img src={car} alt="" /> Add Vehicle
                    </h2>
                    <button onClick={() => setOpenModal(false)}
                        className="text-gray-400 hover:text-white cursor-pointer mb-6">
                        <X />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className={`${FONTSIZE[16]} space-y-6`} style={{fontWeight: WEIGHT.seven}}>

                    <div>
                        <label>Vehicle Number *</label><br />
                        <input name="vehicleNumber" value={formData.vehicleNumber}
                            onChange={handleChange} placeholder="E.G., TN38 CW 2286"
                            className="input mt-2 p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl w-full" required />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label>Vehicle Type *</label><br />
                            <input name="vehicleType" value={formData.vehicleType}
                                onChange={handleChange} className="input mt-2 p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl w-full" required />
                        </div>

                        <div>
                            <label>Year *</label><br />
                            <input name="year" type="number" value={formData.year}
                                onChange={handleChange} placeholder="2020"
                                className="input mt-2 p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl w-full" required />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label>Make *</label><br />
                            <input name="make" value={formData.make}
                                onChange={handleChange} placeholder="e.g., Honda"
                                className="input mt-2 p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl w-full" required />
                        </div>

                        <div>
                            <label>Model *</label><br />
                            <input name="model" value={formData.model}
                                onChange={handleChange} placeholder="e.g., Civic"
                                className="input mt-2 p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl w-full" required />
                        </div>
                    </div>

                    <div>
                        <label>Color *</label><br />
                        <input name="color" value={formData.color}
                            onChange={handleChange} placeholder="e.g., Silver"
                            className="input mt-2 p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl w-full" required />
                    </div>

                    <div>
                        <label> Upload Documents (Optional) </label><br />

                        <label className="upload-box">
                            <input type="file" hidden onChange={handleFileChange} />

                            <div className="flex flex-col justify-center items-center h-35 p-2 bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-2xl"  style={{color: COLORS.secoundy_gray}}>
                                <img src={doc} alt="" className="w-8 h-8"/>
                                <p className={`mt-2 ${FONTSIZE[14]}`}>
                                    Registration & Insurance
                                </p>
                                <p className={`mt-1 ${FONTSIZE[12]}`}>
                                    Click to upload
                                </p>
                                
                            </div>
                        </label><br />
                    </div>

                    <div className="bg-[#2B7FFF1A] border border-[#51A2FF4D] text-[#8EC5FF] p-3 rounded-xl text-center">
                        Admin will assign parking slot after verification.
                        Security will be notified of vehicle registration.
                    </div>

                    <div className={`grid grid-cols-2 gap-4 pt-4 ${FONTSIZE[16]}`} style={{fontWeight: WEIGHT.seven}}>

                        <button type="button" onClick={() => setOpenModal(false)}
                            className="px-6 py-3 bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-full cursor-pointer">
                            Cancel
                        </button>

                        <button type="submit"
                            className="px-6 py-3 bg-linear-to-r from-[#2B7FFF] to-[#0092B8] rounded-full cursor-pointer"
                            style={{boxShadow: "0px 8px 10px -6px #2B7FFF40,0px 20px 25px -5px #2B7FFF40"}}>
                            Add Vehicle
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}