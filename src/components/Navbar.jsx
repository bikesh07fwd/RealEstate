"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ toggleFilterPanel }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <svg
              className="h-8 w-8 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L1 12h3v9h16v-9h3L12 2zm0 2.8L19.2 11H4.8L12 4.8z" />
            </svg>
            <span className="ml-2 text-xl font-bold text-gray-800">
              DreamHome
            </span>
          </a>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search by city or area..."
              className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>

        {/* Nav Icons */}
        <div className="flex items-center space-x-4">
          <button className="md:hidden text-gray-600 hover:text-blue-500">
            <i className="fas fa-search text-lg"></i>
          </button>
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/sign-up");
            }}
            className="relative cursor-pointer text-gray-600 hover:text-blue-500"
          >
            Logout
          </button>
          <button className="text-gray-600 hover:text-blue-500">
            <i className="far fa-user text-lg"></i>
          </button>
          <button
            id="filter-toggle"
            className="md:hidden text-gray-600 hover:text-blue-500"
            onClick={toggleFilterPanel}
          >
            <i className="fas fa-sliders-h text-lg"></i>
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden container mx-auto px-4 pb-3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search by city or area..."
            className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
