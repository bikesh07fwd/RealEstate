"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
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

            {/* Sign Up Button */}
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
                {/* <a
                  href="#"
                  className="text-amber-700 hover:text-amber-800 font-medium transition-colors"
                >
                  Log in
                </a> */}
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
