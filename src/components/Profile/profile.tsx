import React, { useState } from "react";
import profileIcon from "../../assets/profile/profile.png";
import home from "../../assets/profile/home.png"
import emergency from "../../assets/profile/emergency.png"
import document from "../../assets/profile/document.png"
import lock from "../../assets/profile/lock.png"
import email from "../../assets/profile/email.png"
import mobile from "../../assets/profile/mobile.png"
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import DocumentPreviewModal from "./idproofmodel";
import ChangePasswordModal from "./changepassword";
import Updateemail from "./updateemail";
import Updatemobile from "./updatemobile";

type QuickActionBtnProps = {
  label: string;
  icon: string;
};

type InfoItemProps = {
  label: string;
  value: string;
};





const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  <div>
    <p className={`text-gray-400 text-xs ${FONTSIZE[14]}`}
          style={{fontWeight:WEIGHT.seven,color:COLORS.grey}}>{label}</p>
    <p className={`text-white font-medium ${FONTSIZE[18]}`}
          style={{fontWeight:WEIGHT.four,color:COLORS.primary_white}}>{value}</p>
  </div>
);

type CardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: string;  
};

const Card: React.FC<CardProps> = ({ title, icon, children, className }) => (
  <div
    className={`rounded-2xl p-5 w-full flex flex-col border border-[#FFFFFF33] shadow-lg h-full bg-[#FFFFFF0D] ${className}`}
  >
    <div className="flex items-center gap-2 mb-5">
      
      {icon && (
        <div className="w-10 h-10 rounded-xl flex items-center justify-center">
          <img src={icon} alt={title} className="w-6 h-6 object-contain" />
        </div>
      )}

      <h2 className={`text-white text-lg font-semibold tracking-wide ${FONTSIZE[20]}`}
                style={{fontWeight:WEIGHT.seven,color:COLORS.primary_white}}>
        {title}
      </h2>
    </div>

    <div className="flex-1">{children}</div>
  </div>
);

const DocumentCard = ({
  title,
  file,
  onView,
}: {
  title: string;
  file: string;
  onView: () => void;
}) => (
  <div className="rounded-xl p-4 border border-[#FFFFFF1A] shadow-lg h-full bg-[#FFFFFF0D] flex flex-col gap-3">
    <div className="flex justify-between items-center">
      <div>
        <p className={`text-white text-sm font-medium ${FONTSIZE[16]}`}
                style={{fontWeight:WEIGHT.seven,color:COLORS.primary_white}}>{title}</p>
        <p className={`text-xs text-gray-400 ${FONTSIZE[16]}`}
                style={{fontWeight:WEIGHT.four,color:COLORS.grey}}>{file}</p>
      </div>
      <span className={`text-[#05DF72] text-xs font-semibold ${FONTSIZE[12]}`}
                style={{fontWeight:WEIGHT.four}}>✔ Verified</span>
    </div>

    <div className="flex gap-2">
      <button
  onClick={onView}
  className="flex-1 py-2 cursor-pointer text-[#00D3F2] rounded-lg bg-[#00B8DB33] border border-[#00D3F24D] hover:text-[#00D3F2] text-sm transition"
>
  View
</button>
      
      <button className={`flex-1 py-2 cursor-pointer text-[#51A2FF] rounded-lg bg-[#2B7FFF33] border border-[#51A2FF4D] hover:text-[#51A2FF] text-sm transition ${FONTSIZE[14]}`}
                style={{fontWeight:WEIGHT.seven}}>
        Update
      </button>
    </div>
  </div>
);


const QuickActionBtn: React.FC<QuickActionBtnProps> = ({ label, icon }) => (

  
  
  <button className="w-full flex items-center gap-2 px-4 py-3 rounded-xl 
  bg-[#FFFFFF1A] border-[#FFFFFF33] cursor-pointer 
  hover:bg-white/20 hover:border-purple-400/40 
  transition duration-300 group">

    <div className="w-9 h-9 rounded-lg  flex items-center justify-center  transition">
      <img src={icon} alt={label} className="w-5 h-5 object-contain" />
    </div>

    <span className={`text-white text-sm font-medium tracking-wide ${FONTSIZE[16]}`}
                style={{fontWeight:WEIGHT.seven,color:COLORS.primary_white}}>
      {label}
    </span>
  </button>
);

const ProfileDetails: React.FC = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);
    const [showUpdateemail, setShowUpdateemail] = useState(false);
    const [showUpdatemobile, setShowUpdatemobile] = useState(false);


  const [selectedDoc, setSelectedDoc] = useState<{
  title: string;
  file: string;
} | null>(null);
  return (
    
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      
      <div className="lg:col-span-2 flex flex-col gap-6">
        <Card title="Personal Information" icon={profileIcon}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoItem label="Full Name" value="Sarah Johnson" />
            <InfoItem label="Email" value="sarah.johnson@email.com" />
            <InfoItem label="Mobile" value="+1 (555) 123-4567" />
            <InfoItem label="Ownership Status" value="Owner" />
          </div>
        </Card>

        <Card title="Flat Details" icon={home}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <InfoItem label="Block" value="Tower A" />
            <InfoItem label="Floor" value="3" />
            <InfoItem label="Flat No" value="304" />
            <InfoItem label="Move-in Date" value="15/06/2024" />
          </div>
        </Card>

        <Card title="Emergency Contact" icon={emergency}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <InfoItem label="Name" value="Michael Johnson" />
            <InfoItem label="Relation" value="Spouse" />
            <InfoItem label="Mobile" value="+1 (555) 987-6543" />
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-6 h-full">
        <Card title="Documents" icon={document}>
          <div className="space-y-4">
           <DocumentCard
  title="ID Proof"
  file="passport-scan.pdf"
  onView={() =>
    setSelectedDoc({ title: "ID Proof", file: "passport-scan.pdf" })
  }
/>

<DocumentCard
  title="Address Proof"
  file="utility-bill.pdf"
  onView={() =>
    setSelectedDoc({ title: "Address Proof", file: "utility-bill.pdf" })
  }
/>
          </div>
        </Card>

        <Card
          title="Quick Actions"
          className="bg-linear-to-r from-[#AD46FF33] to-[#F6339A33] border border-[#C27AFF4D]"
        >
          <div className="space-y-3 ">
           <div onClick={() => setShowChangePassword(true)}>
  <QuickActionBtn label="Change Password" icon={lock} />
</div>
<div onClick={() => setShowUpdateemail(true)}>
            <QuickActionBtn label="Update Email" icon={email} />
            </div>
            <div  onClick={() => setShowUpdatemobile(true)}>
            <QuickActionBtn label="Update Mobile" icon={mobile} />
            </div>
          </div>
        </Card>
      </div>
                {selectedDoc && (
  <DocumentPreviewModal
    title={selectedDoc.title}
    file={selectedDoc.file}
    onClose={() => setSelectedDoc(null)}
  />
)}

{showChangePassword && (
  <ChangePasswordModal
    onClose={() => setShowChangePassword(false)}
  />
  
)}
{showUpdateemail && (
  <Updateemail
    onClose={() => setShowUpdateemail(false)}
  />
  
)}
{showUpdatemobile && (
  <Updatemobile
    onClose={() => setShowUpdatemobile(false)}
  />
  
)}
      
    </div>
    
    
  );
};

export default ProfileDetails;