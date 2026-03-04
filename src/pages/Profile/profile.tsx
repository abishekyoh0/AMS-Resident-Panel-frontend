import { useState } from "react";
import moveout from "../../assets/profile/moveout.png"
import profileIcon from "../../assets/profile/profile.png"
import DetailsForm from "../../components/Profile/detailsform";
import ProfileDetails from "../../components/Profile/profile";
import { COLORS, FONTSIZE, WEIGHT } from "../../constent/uiconstent";

export default function Profile() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="text-white">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
        <div>
          <h1
            className={`text-2xl sm:text-3xl font-semibold ${FONTSIZE[36]}`}
            style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
          >
            My Profile
          </h1>
          <p
            className={`text-gray-400 text-sm mt-1 ${FONTSIZE[16]}`}
            style={{ fontWeight: WEIGHT.four, color: COLORS.grey }}
          >
            View and manage your personal information
          </p>
        </div>

        {!isEditMode && (
          <button
            onClick={() => setIsFormOpen(true)}
            className={`flex items-center cursor-pointer justify-center gap-2 px-5 py-3 rounded-full bg-linear-to-r from-[#00B8DB] to-[#7F22FE] hover:opacity-90 transition shadow-lg ${FONTSIZE[16]}`}
            style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
          >
            <img src={moveout} alt="move" className="w-4 h-4" />
            Move-out
          </button>
        )}
      </div>

      {isFormOpen && <DetailsForm onClose={() => setIsFormOpen(false)} />}

      <div className="bg-linear-to-r from-[#00C95033] to-[#00BC7D33] border border-[#05DF724D] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-4">
          <img
            src={profileIcon}
            alt="profile"
            className="w-16 h-16 rounded-full bg-linear-to-r from-[#00B8DB] to-[#7F22FE] p-2"
          />
          <div>
            <h2
              className={`text-lg font-semibold ${FONTSIZE[24]}`}
              style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
            >
              Sarah Johnson
            </h2>
            <p
              className={`text-sm text-gray-200 ${FONTSIZE[16]}`}
              style={{ fontWeight: WEIGHT.four, color: COLORS.smalltext }}
            >
              Resident ID: RES-A304
            </p>
            <div className="flex gap-2 mt-2">
              <span
                className={`px-2 py-1 text-[#05DF72] text-xs bg-[#00C95033] border border-[#00C95066] rounded-full ${FONTSIZE[12]}`}
                style={{ fontWeight: WEIGHT.seven }}
              >
                Active
              </span>
              <span
                className={`px-2 py-1 text-[#C27AFF] text-xs bg-[#AD46FF33] border border-[#AD46FF66] rounded-full ${FONTSIZE[12]}`}
                style={{ fontWeight: WEIGHT.seven }}
              >
                Owner
              </span>
            </div>
          </div>
        </div>

        {!isEditMode && (
          <button
            onClick={() => setIsEditMode(true)}
            className={`px-4 cursor-pointer py-2 rounded-full bg-linear-to-r from-[#00B8DB] to-[#7F22FE] hover:opacity-90 transition ${FONTSIZE[16]}`}
            style={{ fontWeight: WEIGHT.seven, color: COLORS.primary_white }}
          >
            ✏️ Edit Profile
          </button>
        )}
      </div>

      <div className="mt-6">
        <ProfileDetails
          isEditMode={isEditMode}
          onCancel={() => setIsEditMode(false)}
          onSave={() => setIsEditMode(false)}
        />
      </div>
    </div>
  );
}