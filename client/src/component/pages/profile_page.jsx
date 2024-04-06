import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  const [showToast, setShowToast] = useState(false);


  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
              Your Profile
            </h2>
            
          </div>
        </div>
        {showToast && (
          <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4">
            <div className="max-w-sm w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-lg">
              <p>Message sent successfully!</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
