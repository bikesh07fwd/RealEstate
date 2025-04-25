"use client";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function PropertyListing() {
  const { id } = useParams();
  const [property, setProperty] = useState([]);
  const navigate = useNavigate();
  const [seller, setSeller] = useState({});

  useEffect(() => {
    async function verifyuser() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/sign-up");
        }
      } catch (error) {
        toast.error("some error occoured");
        console.log(error);
        navigate("/sign-up");
      }
    }
    async function getPropInfo() {
      try {
        const res = await axios.get(
          `http://localhost:8080/get_propinfo.php?propertyId=${id}`
        );
        console.log(res.data);
        console.log("email", res.data.property.sellerId);
        const sellerres = await axios.get(
          `http://localhost:8080/get_seller.php?sellerId=${res.data.property.sellerId}`
        );
        console.log(sellerres);
        if (sellerres.data.success) {
          setSeller(sellerres.data.seller);
        }
        setProperty(res.data.property);
      } catch (error) {
        toast.error("some error occoured see console for more detail");
        console.log(error);
      }
    }
    verifyuser();
    getPropInfo();
  }, []);

  return (
    <div className="container mx-auto p-4 lg:p-8 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={property.image}
              alt="Property view"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30" />

            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-xl font-bold">{property.name}</h2>
              <p className="text-sm flex items-center gap-2 mt-1">
                <i className="fas fa-map-marker-alt" />
                {property.location}
              </p>
            </div>
          </div>

          {/* Thumbnails */}

          {/* Seller Profile */}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-gray-900">
              {property.name} at {property.location}
            </h1>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `http://localhost:5173/property/${id}`
                );
              }}
              className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
            >
              <i className="fas fa-share-nodes text-gray-600 text-xl" />
            </button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
              <i className="fas fa-home text-gray-700" />
              <span className="text-sm font-medium">{property.type}</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="border p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <i className={`fas fa-bed text-gray-700 text-lg`} />
                <span className="font-medium">
                  {property.noOfBedrooms} Bedrooms
                </span>
              </div>
            </div>
            <div className="border p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <i className={`fas fa-bath text-gray-700 text-lg`} />
                <span className="font-medium">
                  {property.noOfBathrooms} Bathrooms
                </span>
              </div>
            </div>
            <div className="border p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <i className={`fas fa-ruler-combined text-gray-700 text-lg`} />
                <span className="font-medium">{property.carpetArea} ft²</span>
              </div>
            </div>
            {property.carParking ? (
              <div className="border p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <i className={`fas fa-car text-gray-700 text-lg`} />
                  <span className="font-medium">Car Parking Available</span>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">About Property</h2>
            <p className="text-gray-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Details Section */}
          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-900">
              Property Details
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Property Id</p>
                <p className="font-medium">{id.slice(0, 5)}...</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Bedrooms</p>
                <p className="font-medium">{property.noOfBedrooms}</p>
              </div>
              {property.carParking ? (
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">Parking Spaces</p>
                  <p className="font-medium">{property.noOfParking} Vehicles</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* Location Details */}
          <div className="text-xl font-bold text-gray-900">
            <div>Owner Contact Details:</div>
            <h1 className="text-sm font-normal px-2 pt-2">
              Phone No: {seller.phone ? seller.phone : " "}
            </h1>
            <h1 className="text-sm font-normal p-2">
              Email: {seller.email ? seller.email : " "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
