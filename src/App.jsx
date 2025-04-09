import { useState } from "react";
import "./App.css";
import Landing from "./components/Landing.jsx";
import { Routes, Route } from "react-router-dom";
import Property from "./components/Property.jsx";
import RealEstateApp from "./components/RealEstateApp";
import SignupPage from "./components/Signup-page";
import SigninPage from "./components/Signin-page";
import SellerDashboard from "./components/sellerDashboard.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/property" element={<Property />} />
        <Route path="/all-property" element={<RealEstateApp />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
      </Routes>
    </>
  );
}

export default App;
