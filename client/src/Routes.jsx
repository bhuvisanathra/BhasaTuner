import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Form_sans from "./component/pages/Form_sans";
import Login from "./component/pages/Login";
import Form_eng from "./component/pages/Form_eng";
import Form_guj from "./component/pages/Form_guj";
import Form_hindi from "./component/pages/Form_hindi";
import Homepage from "./component/pages/Homepage";
import AboutUs from "./component/pages/AboutUs";
import ContactUs from "./component/pages/contactUs.jsx";
import ProfilePage from "./component/pages/profile_page.jsx";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/homepage" exact element={<Homepage />} />
          <Route path="/sanskrit" exact element={<Form_sans />} />
          <Route path="/english" exact element={<Form_eng />} />
          <Route path="/gujarati" exact element={<Form_guj />} />
          <Route path="/hindi" exact element={<Form_hindi />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
          <Route path="/profile" exact element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
