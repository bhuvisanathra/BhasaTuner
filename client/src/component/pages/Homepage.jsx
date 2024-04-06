import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroimage from "../assets/hero.png";
import Footer from "../components/Footer";

const Homepage = () => {
  let navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="bg-white">
        <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                  Connect & learn
                </p>
                <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                  Learning WebApp
                </h1>
                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                  Status Code-404
                </p>

                <p className="mt-5 text-gray-600">
                  Already joined us?{" "}
                  <a
                    href="#"
                    title=""
                    className="text-black transition-all duration-200 hover:underline"
                  >
                    Log in
                  </a>
                </p>
              </div>

              <div>
                <img className="w-full" src={heroimage} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-white from-bg-gray-200 to-bg-gray-500">
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
      <Footer/>
    </>
  );
};

export default Homepage;
