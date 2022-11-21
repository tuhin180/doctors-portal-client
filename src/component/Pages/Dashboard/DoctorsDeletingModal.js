import React from "react";

const DoctorsDeletingModal = ({
  title,
  message,
  closeModal,
  successAction,
  modalData,
  buttonName,
}) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="deletingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="deletingModal"
              className="btn btn-primary text-white"
            >
              {buttonName}
            </label>
            <button onClick={closeModal} className="btn btn-error text-white">
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsDeletingModal;
