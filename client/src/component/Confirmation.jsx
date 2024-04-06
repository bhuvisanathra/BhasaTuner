import React from "react";

const Confirmation = ({ handleConfirmation }, setShowConfirmationDialog) => {
  return (
    <div className="confirmation-dialog">
      <p>Are you sure you want to upload the recorded audio?</p>
      <button onClick={handleConfirmation}>Yes</button>
      <button onClick={() => setShowConfirmationDialog(false)}>No</button>
    </div>
  );
};

export default Confirmation;
