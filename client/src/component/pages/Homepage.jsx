import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Homepage = () => {
  let navigate = useNavigate();
  return (
    <>
      <Navbar />
      <button onClick={() => navigate("/sanskrit")}>Sanskrit</button>
      <button onClick={() => navigate("/english")}>English</button>
      <button onClick={() => navigate("/gujarati")}>Gujarati</button>
      <button onClick={() => navigate("/hindi")}>Hindi</button>
    </>
  );
};

export default Homepage;
