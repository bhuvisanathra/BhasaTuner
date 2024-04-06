import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

function ProfileEditPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Just showing a toast message without any data storage
    toast.success("Profile updated successfully!");
    navigate("/profile");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Edit Profile</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center mb-4">
              <img
                className="w-32 h-32 rounded-full object-cover"
                src={photo || "https://via.placeholder.com/150"}
                alt="Profile"
              />
              <label
                htmlFor="photo"
                className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
              >
                Change Photo
              </label>
              <input
                id="photo"
                type="file"
                className="hidden"
                onChange={handlePhotoChange}
              />
            </div>
            <input
              name="name"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="description"
              placeholder="Description"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white font-bold py-2 rounded-md focus:outline-none focus:bg-blue-600 hover:bg-blue-600 transition-colors duration-300"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default ProfileEditPage;
