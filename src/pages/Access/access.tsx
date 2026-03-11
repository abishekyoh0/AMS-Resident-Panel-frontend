import React, { useState } from "react";
import { FONTSIZE, WEIGHT } from "../../constent/uiconstent";
import add from "../../assets/Dashboard/add.png";
import AccessCardModal from "../../components/Access/AccessCardModal";

const AccessRequestCard: React.FC = () => {

  const [openModal, setOpenModal] = useState(false);
  const [submitted, setSubmitted] = useState(false); 

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 mt-36">

      <div className="w-full max-w-4xl rounded-xl border border-purple-500/30 bg-linear-to-r from-[#8E51FF33] to-[#AD46FF33] p-6 sm:p-8 md:p-10 text-center">

        {!submitted && (
          <>
            <button
              onClick={() => setOpenModal(true)}
              className="mx-auto flex items-center gap-2 px-5 sm:px-9 py-2.5 rounded-lg 
              bg-linear-to-r from-[#00B8DB] to-[#7F22FE] text-white transition hover:opacity-90"
            >
              <span>
                <img src={add} className="w-4 h-4" alt="add" />
              </span>

              <span
                className={`${FONTSIZE[16]}`}
                style={{ fontWeight: WEIGHT.six }}
              >
                Access request
              </span>
            </button>

            <p
              className={`text-gray-300 mt-5 sm:mt-6 ${FONTSIZE[14]} px-2 sm:px-10`}
              style={{ fontWeight: WEIGHT.four }}
            >
              After getting the access card, you will be able to access the entire panel
            </p>
          </>
        )}

        {submitted && (
          <>
            <h2
              className={`text-green-400 ${FONTSIZE[18]}`}
              style={{ fontWeight: WEIGHT.six }}
            >
              Access Request Submitted
            </h2>

            <p
              className={`text-gray-300 mt-4 ${FONTSIZE[14]}`}
              style={{ fontWeight: WEIGHT.four }}
            >
              Your access request has been successfully submitted.  
              Please wait for admin approval.
            </p>
          </>
        )}

      </div>

     <AccessCardModal
  isOpen={openModal}  
  onClose={() => setOpenModal(false)}
  onSubmit={() => {
    setSubmitted(true);
    setOpenModal(false);
  }}
/> 

    </div>
  );
};

export default AccessRequestCard;