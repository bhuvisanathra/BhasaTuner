import React, { useState } from "react";
import { database } from "../../firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "../css/Login.css";
import { useNavigate } from "react-router";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

function RegisterAndLogin() {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (type == "Register") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.code);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data.user.accessToken, "authData");
          localStorage.setItem("authToken", data.user.accessToken);
          navigate("/homepage");
        })
        .catch((error) => toast.error(error.code));
    }
  };
  const handleReset = () => {};

  return (
    <>
      <ToastContainer
        position="top-right"
        className="min-w-fit"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div
              className={`${
                !login
                  ? "text-blue-500 font-bold border-b-2 border-blue-500"
                  : "text-gray-500"
              } cursor-pointer mr-4 pb-2`}
              onClick={() => setLogin(false)}
            >
              Register
            </div>
            <div
              className={`${
                login
                  ? "text-blue-500 font-bold border-b-2 border-blue-500"
                  : "text-gray-500"
              } cursor-pointer pb-2`}
              onClick={() => setLogin(true)}
            >
              Sign In
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-6 text-center">
            {login ? "Sign In" : "Register"}
          </h1>
          <form
            onSubmit={(e) => handleSubmit(e, login ? "signin" : "Register")}
            className="space-y-4"
          >
            <input
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white font-bold py-2 rounded-md focus:outline-none focus:bg-blue-600 hover:bg-blue-600 transition-colors duration-300"
            >
              {login ? "Sign In" : "Register"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterAndLogin;
