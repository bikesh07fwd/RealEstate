// import { useState } from "react";
// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// import gsap from "gsap";
// const PropertyTabs = () => {
//   const [activeTab, setActiveTab] = useState("apartment");

//   const propertyData = {
//     apartment: [
//       {
//         id: 1,
//         title: "Luxury Apartment",
//         price: "$250,000",
//         beds: 3,
//         baths: 2,
//         sqft: 1200,
//         image:
//           "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
//       },
//       {
//         id: 2,
//         title: "City View Apartment",
//         price: "$180,000",
//         beds: 2,
//         baths: 1,
//         sqft: 950,
//         image:
//           "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg",
//       },
//       {
//         id: 3,
//         title: "Modern Studio",
//         price: "$150,000",
//         beds: 1,
//         baths: 1,
//         sqft: 600,
//         image:
//           "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
//       },
//       {
//         id: 4,
//         title: "Cozy Loft",
//         price: "$200,000",
//         beds: 2,
//         baths: 2,
//         sqft: 1100,
//         image:
//           "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
//       },
//     ],
//     forRent: [
//       {
//         id: 3,
//         title: "Downtown Rental",
//         price: "$1,800/mo",
//         beds: 2,
//         baths: 1,
//         sqft: 850,
//         image:
//           "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
//       },
//       {
//         id: 4,
//         title: "Suburban Rental",
//         price: "$1,200/mo",
//         beds: 1,
//         baths: 1,
//         sqft: 650,
//         image:
//           "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
//       },
//       {
//         id: 5,
//         title: "Luxury Condo for Rent",
//         price: "$2,500/mo",
//         beds: 3,
//         baths: 2,
//         sqft: 1400,
//         image:
//           "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
//       },
//       {
//         id: 6,
//         title: "Beachfront Apartment",
//         price: "$2,000/mo",
//         beds: 2,
//         baths: 2,
//         sqft: 1200,
//         image:
//           "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
//       },
//     ],
//     villa: [
//       {
//         id: 5,
//         title: "Beachfront Villa",
//         price: "$1,200,000",
//         beds: 4,
//         baths: 3,
//         sqft: 2800,
//         image:
//           "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
//       },
//       {
//         id: 6,
//         title: "Mountain Villa",
//         price: "$950,000",
//         beds: 3,
//         baths: 2,
//         sqft: 2200,
//         image:
//           "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg",
//       },
//       {
//         id: 7,
//         title: "Luxury Villa",
//         price: "$3,500,000",
//         beds: 5,
//         baths: 4,
//         sqft: 4000,
//         image:
//           "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
//       },
//       {
//         id: 8,
//         title: "Countryside Villa",
//         price: "$750,000",
//         beds: 4,
//         baths: 3,
//         sqft: 3000,
//         image:
//           "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
//       },
//     ],
//   };

//   return (
//     <div className="w-full bg-[#232323] py-16">
//       <div className="px-4 max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row items-center justify-between mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-0">
//             Property Listings
//           </h2>
//           <div className="bg-[#403c3c] rounded-lg p-1">
//             {["apartment", "forRent", "villa"].map((tab) => (
//               <button
//                 key={tab}
//                 className={`py-2 px-6 font-medium capitalize text-sm md:text-base transition-colors ${
//                   activeTab === tab
//                     ? "text-black bg-white rounded-lg"
//                     : "text-gray-400 hover:text-gray-200"
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab.replace(/([A-Z])/g, " $1").replace("for Rent", "For Rent")}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {propertyData[activeTab].map((property) => (
//             <div
//               key={property.id}
//               className="group relative h-[400px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
//             >
//               <img
//                 src={property.image}
//                 alt={property.title}
//                 className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <h3 className="text-xl font-bold text-white">
//                   {property.title}
//                 </h3>
//               </div>

//               <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/50 p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100">
//                 <div className="text-center text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
//                   <p className="text-2xl font-bold mb-2">{property.price}</p>
//                   <div className="flex flex-wrap gap-3 text-sm mb-4">
//                     <span className="bg-white/10 px-3 py-1 rounded-full">
//                       {property.beds} beds
//                     </span>
//                     <span className="bg-white/10 px-3 py-1 rounded-full">
//                       {property.baths} baths
//                     </span>
//                     <span className="bg-white/10 px-3 py-1 rounded-full">
//                       {property.sqft} sqft
//                     </span>
//                   </div>
//                   <button className="mt-4 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Properties Button */}
//         <div className="flex justify-center mt-16">
//           <Link to="/all-property">
//             <button className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center gap-2">
//               View All Properties
//               <i className="fa-solid fa-arrow-right text-sm"></i>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyTabs;

import { useState } from "react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
const PropertyTabs = () => {
  const [activeTab, setActiveTab] = useState("apartment");

  const propertyData = {
    apartment: [
      {
        id: 1,
        title: "Luxury Apartment",
        price: "$250,000",
        beds: 3,
        baths: 2,
        sqft: 1200,
        image:
          "https://images.pexels.com/photos/7031593/pexels-photo-7031593.jpeg",
      },
      {
        id: 2,
        title: "City View Apartment",
        price: "$180,000",
        beds: 2,
        baths: 1,
        sqft: 950,
        image:
          "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg",
      },
      {
        id: 3,
        title: "Modern Studio",
        price: "$150,000",
        beds: 1,
        baths: 1,
        sqft: 600,
        image:
          "https://images.pexels.com/photos/5824517/pexels-photo-5824517.jpeg",
      },
      {
        id: 4,
        title: "Cozy Loft",
        price: "$200,000",
        beds: 2,
        baths: 2,
        sqft: 1100,
        image:
          "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      },
    ],
    forRent: [
      {
        id: 3,
        title: "Downtown Rental",
        price: "$1,800/mo",
        beds: 2,
        baths: 1,
        sqft: 850,
        image:
          "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg",
      },
      {
        id: 4,
        title: "Suburban Rental",
        price: "$1,200/mo",
        beds: 1,
        baths: 1,
        sqft: 650,
        image:
          "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg",
      },
      {
        id: 5,
        title: "Luxury Condo for Rent",
        price: "$2,500/mo",
        beds: 3,
        baths: 2,
        sqft: 1400,
        image:
          "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
      },
      {
        id: 6,
        title: "Beachfront Apartment",
        price: "$2,000/mo",
        beds: 2,
        baths: 2,
        sqft: 1200,
        image:
          "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg",
      },
    ],
    villa: [
      {
        id: 5,
        title: "Beachfront Villa",
        price: "$1,200,000",
        beds: 4,
        baths: 3,
        sqft: 2800,
        image:
          "https://images.pexels.com/photos/2525899/pexels-photo-2525899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 6,
        title: "Mountain Villa",
        price: "$950,000",
        beds: 3,
        baths: 2,
        sqft: 2200,
        image:
          "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
      },
      {
        id: 7,
        title: "Luxury Villa",
        price: "$3,500,000",
        beds: 5,
        baths: 4,
        sqft: 4000,
        image:
          "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
      },
      {
        id: 8,
        title: "Countryside Villa",
        price: "$750,000",
        beds: 4,
        baths: 3,
        sqft: 3000,
        image:
          "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
      },
    ],
  };

  return (
    <div className="w-full bg-[#232323] py-16">
      <div className="px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-0">
            Property Listings
          </h2>
          <div className="bg-[#403c3c] rounded-lg p-1">
            {["apartment", "forRent", "villa"].map((tab) => (
              <button
                key={tab}
                className={`py-2 px-6 font-medium capitalize text-sm md:text-base transition-colors ${
                  activeTab === tab
                    ? "text-black bg-white rounded-lg"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.replace(/([A-Z])/g, " $1").replace("for Rent", "For Rent")}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyData[activeTab].map((property) => (
            <div
              key={property.id}
              className="group relative h-[400px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  {property.title}
                </h3>
              </div>

              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/50 p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100">
                <div className="text-center text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-2xl font-bold mb-2">{property.price}</p>
                  <div className="flex flex-wrap gap-3 text-sm mb-4">
                    <span className="bg-white/10 px-3 py-1 rounded-full">
                      {property.beds} beds
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-full">
                      {property.baths} baths
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-full">
                      {property.sqft} sqft
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Properties Button */}
        <div className="flex justify-center mt-16">
          <Link to="/all-property">
            <button className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center gap-2">
              View All Properties
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyTabs;
