"use client"

import { useState } from "react"

export default function PropertyListing() {
  const [activeImage, setActiveImage] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const images = [
    "https://images.pexels.com/photos/14354538/pexels-photo-14354538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
   
  ]

  const seller = {
    name: "Sarah Thompson",
    email: "sarah@arunaestates.com",
    phone: "+62 812-3456-7890",
    profileImg: "/agent-profile.jpg",
    experience: "Senior  Property Consultant",
    yearsExperience: "12+ Years",
    propertiesSold: "245+ Sold",
    rating: "4.9/5 Stars"
  }

  const features = [
    { icon: "bed", text: "3 Bedroom" },
    { icon: "bath", text: "7 Bathroom" },
    { icon: "ruler-combined", text: "3,943ft²" },
    { icon: "chair", text: "All Furniture" },
    { icon: "car", text: "1 Car Garage" },
  ]

  const details = [
    { title: "Property ID", value: "63426" },
    { title: "Bedrooms", value: "11" },
    { title: "Year Built", value: "2022" },
  ]

  return (
    <div className="container mx-auto p-4 lg:p-8 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={images[activeImage]}
              alt="Property view"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30" />
            
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <i className={`${isLiked ? 'fas text-red-600' : 'far'} fa-heart text-lg`} />
            </button>
            
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-xl font-bold">Sinar Valley, Puncak Bogor</h2>
              <p className="text-sm flex items-center gap-2 mt-1">
                <i className="fas fa-map-marker-alt" />
                Prime Mountain Location
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
            <h1 className="text-3xl font-bold text-gray-900">Aruna Grandview Residences at Sinar Valley</h1>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <i className="fas fa-share-nodes text-gray-600 text-xl" />
            </button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
              <i className="fas fa-home text-gray-700" />
              <span className="text-sm font-medium">Premium Residence</span>
            </div>
            
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="border p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <i className={`fas fa-${feature.icon} text-gray-700 text-lg`} />
                  <span className="font-medium">{feature.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Luxury Mountain Retreat</h2>
            <p className="text-gray-600 leading-relaxed">
              Nestled in the heart of Puncak Bogor, Aruna Grandview Residences offers an unparalleled blend 
              of modern luxury and natural serenity. This architecturally stunning estate features panoramic 
              mountain vistas, state-of-the-art amenities, and eco-conscious design harmonizing with the lush 
              tropical surroundings.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each residence boasts floor-to-ceiling windows, smart home technology, and premium finishes. 
              The community features 24/7 security, infinity pools, spa facilities, and direct access to 
              nature trails through protected rainforests.
            </p>
          </div>

          {/* Details Section */}
          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Property Details</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {details.map((detail, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500 mb-1">{detail.title}</p>
                  <p className="font-medium">{detail.value}</p>
                </div>
              ))}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Parking Spaces</p>
                <p className="font-medium">4 Vehicles</p>
              </div>
            </div>
          </div>

          {/* Location Details */}
          
        </div>
      </div>
    </div>
  )
}