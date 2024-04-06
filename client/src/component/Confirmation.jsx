import React from "react";

const Confirmation = ({ handleConfirmation, setShowConfirmationDialog }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Confirmation</h2>
        <p className="text-gray-700 mb-6 text-center">
          Are you sure you want to upload the recorded audio?
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleConfirmation}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-4 transition-colors duration-300"
          >
            Yes
          </button>
          <button
            onClick={() => setShowConfirmationDialog(false)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md transition-colors duration-300"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;