import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Form_sans from "./component/pages/Form_sans";
import Form_eng from "./component/pages/Form_eng";
import Form_guj from "./component/pages/Form_guj";
import Form_hindi from "./component/pages/Form_hindi";
import Homepage from "./component/pages/Homepage";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/sanskrit" exact element={<Form_sans />} />
          <Route path="/english" exact element={<Form_eng />} />
          <Route path="/gujarati" exact element={<Form_guj />} />
          <Route path="/hindi" exact element={<Form_hindi />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
