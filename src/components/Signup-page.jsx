"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    role: "buyer",
  });
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      role: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isPasswordStrong = (password) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10,}$/; // at least 10 digits, only numbers
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPasswordStrong(formData.password)) {
      alert(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (!isValidPhoneNumber(formData.phoneNumber)) {
      alert(
        "Please enter a valid phone number (at least 10 digits, numbers only)."
      );
      return;
    }

    console.log("Form submitted:", formData);
    if (formData.role == "buyer") {
      try {
        const res = await axios.post("http://localhost:8080/create_buyer.php", {
          email: formData.email,
          password: formData.password,
          name: formData.fullName,
          phone: formData.phoneNumber,
        });
        console.log(res);
        if (res.data.success) {
          await localStorage.setItem("token", res.data.token);
          navigate("/all-property");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios.post(
          "http://localhost:8080/create_seller.php",
          {
            email: formData.email,
            password: formData.password,
            name: formData.fullName,
            address: formData.address,
            phone: formData.phoneNumber,
          }
        );
        console.log(res);
        if (res.data.success) {
          await localStorage.setItem("token", res.data.token);
          navigate("/seller-dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Luxury Dubai Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          <div className="p-8 md:p-12 h-full flex flex-col justify-end text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              Luxury Real Estate
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-md">
              Discover exclusive properties in the world's most prestigious
              locations
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Create Your Account
            </h2>
            <p className="text-gray-600 mt-2">
              Join our exclusive network of luxury property buyers
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div className="relative">
              <label
                htmlFor="fullName"
                className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                  formData.fullName
                    ? "text-xs text-gray-500 -top-2 bg-gray-50 px-1"
                    : "text-gray-400 top-3"
                }`}
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label
                htmlFor="email"
                className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                  formData.email
                    ? "text-xs text-gray-500 -top-2 bg-gray-50 px-1"
                    : "text-gray-400 top-3"
                }`}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label
                htmlFor="password"
                className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                  formData.password
                    ? "text-xs text-gray-500 -top-2 bg-gray-50 px-1"
                    : "text-gray-400 top-3"
                }`}
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200 pr-10"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Phone Number Field */}
            <div className="relative">
              <label
                htmlFor="phoneNumber"
                className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                  formData.phoneNumber
                    ? "text-xs text-gray-500 -top-2 bg-gray-50 px-1"
                    : "text-gray-400 top-3"
                }`}
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            {/* Seller-specific fields */}
            {formData.role === "seller" && (
              <>
                <div className="relative">
                  <label
                    htmlFor="address"
                    className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                      formData.address
                        ? "text-xs text-gray-500 -top-2 bg-gray-50 px-1"
                        : "text-gray-400 top-3"
                    }`}
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </>
            )}

            {/* Role Dropdown (moved to the bottom) */}
            <div className="relative">
              <label
                htmlFor="role"
                className="absolute left-3 text-gray-400 top-3 transition-all duration-200"
              ></label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleRoleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-amber-700 to-amber-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Sign Up
            </button>

            {/* Login Link */}
            <div className="text-center mt-4">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/sign-in">
                  <button className="text-amber-700 hover:text-amber-800 font-medium transition-colors">
                    Log in
                  </button>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
