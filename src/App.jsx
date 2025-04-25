import { useState } from "react";
import "./App.css";
import Landing from "./components/Landing.jsx";
import { Routes, Route } from "react-router-dom";
import Property from "./components/Property.jsx";
import RealEstateApp from "./components/RealEstateApp";
import SignupPage from "./components/Signup-page";
import SigninPage from "./components/Signin-page";
import { Toaster } from "react-hot-toast";
import SellerProfile from "./components/sellerProfile.jsx";
import PropertyForm from "./components/uploadProperty.jsx";
import AdminDashboard from "./components/adminDasboard.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/all-property" element={<RealEstateApp />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/seller-dashboard" element={<SellerProfile />} />
        <Route path="/create-property" element={<PropertyForm />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
