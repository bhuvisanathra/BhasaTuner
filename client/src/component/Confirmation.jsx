import React from "react";

const Confirmation = ({ handleConfirmation, setShowConfirmationDialog }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold">Confirmation</h3>
          <button
            type="button"
            onClick={() => setShowConfirmationDialog(false)}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="text-gray-700 mb-6">
          Are you sure you want to reset the recorded audio?
        </p>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleConfirmation}
            className="px-4 py-2 mr-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => setShowConfirmationDialog(false)}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
