import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Homepage = () => {
 let navigate = useNavigate();

 return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-bg-gray-200 to-bg-gray-500">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <button
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center"
              onClick={() => navigate("/sanskrit")}
            >
              <span className="text-7xl mb-1">क</span>
              Sanskrit
            </button>
            <button
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center"
              onClick={() => navigate("/english")}
            >
              <span className="text-7xl mb-1">A</span>
              English
            </button>
            <button
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center"
              onClick={() => navigate("/gujarati")}
            >
              <span className="text-7xl mb-1">ક</span>
              Gujarati
            </button>
            <button
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center"
              onClick={() => navigate("/hindi")}
            >
              <span className="text-7xl mb-1">क</span>
              Hindi
            </button>
          </div>
        </div>
      </div>
    </>
 );
};

export default Homepage;
