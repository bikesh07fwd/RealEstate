import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Verified } from "lucide-react";

const SellerProfile = () => {
  const [seller, setSeller] = useState({
    name: "",
    id: "",
    email: "",
  });
  const token = localStorage.getItem("token") || "";
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(token);
    async function userExsists() {}
    userExsists();
    const fetchData = async () => {
      try {
        if (!token) {
          navigate("/sign-up");
          return;
        }
        const decode = await jwtDecode(token);
        console.log(decode);
        const sellerdata = {
          name: decode.data.name,
          contact: decode.data.email,
          id: decode.data.id,
        };
        setSeller(sellerdata);
        setLoading(true);
        const res = await axios.get(
          `http://localhost:8080/getSellerProperties.php?sellerId=${decode.data.id}`
        );
        console.log(res);
        setProperties(res.data.properties);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!seller) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 text-lg">Error loading seller profile</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      {/* Seller Profile Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-[#232323] flex items-center justify-center shadow-md">
              <span className="text-3xl text-white font-bold">
                {seller.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          </div>
          <div className="text-center md:text-left w-full">
            <div className="text-3xl font-bold text-gray-900 mb-2 w-full flex items-center justify-between">
              <div>{seller.name}</div>

              <div
                className="cursor-pointer"
                onClick={() => {
                  navigate("/create-property");
                }}
              >
                <svg
                  fill="#000000"
                  height="30px"
                  width="30px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 490 490"
                  xml:space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M227.8,174.1v53.7h-53.7c-9.5,0-17.2,7.7-17.2,17.2s7.7,17.2,17.2,17.2h53.7v53.7c0,9.5,7.7,17.2,17.2,17.2 s17.1-7.7,17.1-17.2v-53.7h53.7c9.5,0,17.2-7.7,17.2-17.2s-7.7-17.2-17.2-17.2h-53.7v-53.7c0-9.5-7.7-17.2-17.1-17.2 S227.8,164.6,227.8,174.1z"></path>{" "}
                          <path d="M71.7,71.7C25.5,118,0,179.5,0,245s25.5,127,71.8,173.3C118,464.5,179.6,490,245,490s127-25.5,173.3-71.8 C464.5,372,490,310.4,490,245s-25.5-127-71.8-173.3C372,25.5,310.5,0,245,0C179.6,0,118,25.5,71.7,71.7z M455.7,245 c0,56.3-21.9,109.2-61.7,149s-92.7,61.7-149,61.7S135.8,433.8,96,394s-61.7-92.7-61.7-149S56.2,135.8,96,96s92.7-61.7,149-61.7 S354.2,56.2,394,96S455.7,188.7,455.7,245z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                      <g> </g> <g> </g> <g> </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="font-medium">{seller.contact}</span>
            </div>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <button className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Profile
              </button>
              <button
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
                className="px-5 py-2 cursor-pointer bg-[#232323] text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium flex items-center"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-[#232323] pl-3">
          Listed Properties ({properties.length})
        </h2>

        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-48 bg-blue-100 relative overflow-hidden">
                  <img src={property.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-[#232323] shadow-sm">
                    ${property.price.toLocaleString()}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {property.name}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {property.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        navigate(`/property/${property._id.$oid}`);
                      }}
                      className="px-4 py-2 bg-[#232323] cursor-pointer text-white rounded-lg  transition-colors duration-200 text-sm font-medium"
                    >
                      View Details
                    </button>
                    <span
                      className={`text-sm font-medium ${
                        property.verified === "true"
                          ? "text-green-600"
                          : "text-yellow-500"
                      }`}
                    >
                      {property.verified == "true"
                        ? "verified"
                        : "Verification Pending"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">No properties listed yet</p>
            <p className="text-gray-400 text-sm mt-2">
              Start listing your properties using the button above
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerProfile;
