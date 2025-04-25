// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// export default function AdminDashboard() {
//   const [pending, setPending] = useState([]);
//   const [approved, setApproved] = useState([]);
//   const [all, setAll] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState("pending");
//   const [changePropStatus, setChangePropStatus] = useState(0);

//   const fetchProperties = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:8080/get_all_props.php");
//       const data = await res.json();
//       console.log(data);
//       const allProps = data.properties || [];
//       setAll(allProps);
//       setPending(allProps.filter((p) => p.verified === "pending"));
//       setApproved(allProps.filter((p) => p.verified === "true"));
//     } catch (err) {
//       console.error("Failed to fetch properties:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Demo data for properties
//   useEffect(() => {
//     fetchProperties();
//   }, [changePropStatus]);

//   const approveProperty = async (id) => {
//     try {
//       const token = localStorage.getItem("token") || "";
//       const res = await axios.post(
//         "http://localhost:8080/verify_prop.php",
//         { propertyId: id, status: "true" },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       console.log(res);
//       if (res.data.success) {
//         toast.dismiss();
//         toast.success("Property Approved");
//         setChangePropStatus(changePropStatus + 1);
//       } else {
//         toast.dismiss();
//         toast.error(`${res.data.message}`);
//       }
//     } catch (error) {
//       toast.dismiss();
//       toast.error("some Error Occoured");
//       console.log(error);
//     }
//   };

//   const rejectProperty = async (id) => {
//     try {
//       const token = localStorage.getItem("token") || "";
//       const res = await axios.post(
//         "http://localhost:8080/verify_prop.php",
//         { propertyId: id, status: "false" },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       console.log(res);
//       if (res.data.success) {
//         toast.dismiss();
//         toast.success("Property Rejected");
//         setChangePropStatus(changePropStatus + 1);
//       } else {
//         toast.dismiss();
//         toast.error(`${res.data.message}`);
//       }
//     } catch (error) {
//       toast.dismiss();
//       toast.error("some Error Occoured");
//       console.log(error);
//     }
//   };

//   const getUniqueSellerCount = () => {
//     const allSellerIds = all.map((p) => p.sellerId);
//     const uniqueSellers = new Set(allSellerIds);
//     return uniqueSellers.size;
//   };

//   const PropertyCard = ({ property, showActions = true }) => (
//     <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
//       <div className="relative h-48 overflow-hidden">
//         <img
//           src={property.image}
//           alt={property.name}
//           className="w-full h-full object-cover"
//         />
//         <span
//           className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${
//             property.verified === "true"
//               ? "bg-green-100 text-green-800"
//               : "bg-yellow-100 text-yellow-800"
//           }`}
//         >
//           {property.verified === "true" ? "Approved" : "Pending"}
//         </span>
//       </div>
//       <div className="p-4">
//         <h2 className="text-xl font-bold text-gray-800 mb-1">
//           {property.name}
//         </h2>
//         <p className="text-gray-600 text-sm mb-3">{property.location}</p>
//         <p className="text-gray-700 mb-3 line-clamp-2">
//           {property.description}
//         </p>

//         <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
//           <div className="bg-gray-50 p-2 rounded text-center">
//             <span className="block font-semibold">
//               {property.noOfBedrooms || "-"}
//             </span>
//             <span className="text-gray-500">Beds</span>
//           </div>
//           <div className="bg-gray-50 p-2 rounded text-center">
//             <span className="block font-semibold">
//               {property.noOfBathrooms || "-"}
//             </span>
//             <span className="text-gray-500">Baths</span>
//           </div>
//           <div className="bg-gray-50 p-2 rounded text-center">
//             <span className="block font-semibold">
//               {property.carpetArea || "-"}
//             </span>
//             <span className="text-gray-500">Sqft Area</span>
//           </div>
//         </div>

//         <p className="text-lg font-bold text-[#232323] mb-4">
//           ₹{Number(property.price).toLocaleString()}
//         </p>

//         {showActions && property.verified === "pending" && (
//           <div className="flex space-x-2">
//             <button
//               onClick={() => approveProperty(property._id.$oid)}
//               className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
//             >
//               Approve
//             </button>
//             <button
//               onClick={() => rejectProperty(property._id.$oid)}
//               className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
//             >
//               Reject
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       ) : (
//         <>
//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
//               <div className="flex items-center">
//                 <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h2 className="text-sm font-medium text-gray-500">
//                     Total Properties
//                   </h2>
//                   <p className="text-2xl font-bold text-gray-800">
//                     {all.length}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
//               <div className="flex items-center">
//                 <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h2 className="text-sm font-medium text-gray-500">
//                     Approved Properties
//                   </h2>
//                   <p className="text-2xl font-bold text-gray-800">
//                     {approved.length}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
//               <div className="flex items-center">
//                 <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h2 className="text-sm font-medium text-gray-500">
//                     Active Sellers
//                   </h2>
//                   <p className="text-2xl font-bold text-gray-800">
//                     {getUniqueSellerCount()}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Tabs */}
//           <div className="border-b border-gray-200 mb-6">
//             <nav className="-mb-px flex space-x-8">
//               <button
//                 onClick={() => setActiveTab("pending")}
//                 className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                   activeTab === "pending"
//                     ? "border-blue-500 text-[#232323]"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 Pending Approval
//                 {pending.length > 0 && (
//                   <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">
//                     {pending.length}
//                   </span>
//                 )}
//               </button>
//               <button
//                 onClick={() => setActiveTab("approved")}
//                 className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                   activeTab === "approved"
//                     ? "border-blue-500 text-black"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 Approved Properties
//               </button>
//             </nav>
//           </div>

//           {/* Property Lists */}
//           {activeTab === "pending" ? (
//             <section>
//               <h2 className="sr-only">Pending Properties</h2>
//               {pending.length === 0 ? (
//                 <div className="text-center py-12">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="mx-auto h-12 w-12 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <h3 className="mt-2 text-lg font-medium text-gray-900">
//                     No pending properties
//                   </h3>
//                   <p className="mt-1 text-gray-500">
//                     All properties have been reviewed.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {pending.map((property) => (
//                     <PropertyCard
//                       key={property._id}
//                       property={property}
//                       showActions={true}
//                     />
//                   ))}
//                 </div>
//               )}
//             </section>
//           ) : (
//             <section>
//               <h2 className="sr-only">Approved Properties</h2>
//               {approved.length === 0 ? (
//                 <div className="text-center py-12">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="mx-auto h-12 w-12 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <h3 className="mt-2 text-lg font-medium text-gray-900">
//                     No approved properties
//                   </h3>
//                   <p className="mt-1 text-gray-500">
//                     Approve properties to see them listed here.
//                   </p>
//                 </div>
//               ) : (
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {approved.map((property) => (
//                     <PropertyCard
//                       key={property._id}
//                       property={property}
//                       showActions={false}
//                     />
//                   ))}
//                 </div>
//               )}
//             </section>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  const [pending, setPending] = useState([]);
  const [approved, setApproved] = useState([]);
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("pending");
  const [changePropStatus, setChangePropStatus] = useState(0);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/get_all_props.php");
      const data = await res.json();
      console.log("Fetched data:", data);
      const allProps = data.properties || [];

      // Filter pending and approved properties
      const pendingProps = allProps.filter((p) => p.verified === "pending");
      const approvedProps = allProps.filter((p) => p.verified === "true");

      // Log for debugging
      console.log(
        "Pending properties:",
        pendingProps.map((p) => ({ id: p._id.$oid, verified: p.verified }))
      );
      console.log(
        "Approved properties:",
        approvedProps.map((p) => ({ id: p._id.$oid, verified: p.verified }))
      );

      setAll(allProps);
      setPending(pendingProps);
      setApproved(approvedProps);
    } catch (err) {
      console.error("Failed to fetch properties:", err);
      toast.error("Failed to load properties");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [changePropStatus]);

  const approveProperty = async (id) => {
    try {
      const token = localStorage.getItem("token") || "";
      const res = await axios.post(
        "http://localhost:8080/verify_prop.php",
        { propertyId: id, status: "true" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) {
        toast.success("Property Approved");
        setChangePropStatus(changePropStatus + 1);
      } else {
        toast.error(`${res.data.message}`);
      }
    } catch (error) {
      toast.error("Some error occurred");
      console.log(error);
    }
  };

  const rejectProperty = async (id) => {
    try {
      const token = localStorage.getItem("token") || "";
      const res = await axios.post(
        "http://localhost:8080/verify_prop.php",
        { propertyId: id, status: "false" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) {
        toast.success("Property Rejected");
        setChangePropStatus(changePropStatus + 1);
      } else {
        toast.error(`${res.data.message}`);
      }
    } catch (error) {
      toast.error("Some error occurred");
      console.log(error);
    }
  };

  const getUniqueSellerCount = () => {
    const allSellerIds = all.map((p) => p.sellerId);
    const uniqueSellers = new Set(allSellerIds);
    return uniqueSellers.size;
  };

  const PropertyCard = ({ property, showActions = true }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <span
          className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${
            property.verified === "true"
              ? "bg-green-100 text-green-800"
              : property.verified === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {property.verified === "true"
            ? "Approved"
            : property.verified === "pending"
            ? "Pending"
            : "Rejected"}
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">
          {property.name}
        </h2>
        <p className="text-gray-600 text-sm mb-3">{property.location}</p>
        <p className="text-gray-700 mb-3 line-clamp-2">
          {property.description}
        </p>

        <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
          <div className="bg-gray-50 p-2 rounded text-center">
            <span className="block font-semibold">
              {property.noOfBedrooms || "-"}
            </span>
            <span className="text-gray-500">Beds</span>
          </div>
          <div className="bg-gray-50 p-2 rounded text-center">
            <span className="block font-semibold">
              {property.noOfBathrooms || "-"}
            </span>
            <span className="text-gray-500">Baths</span>
          </div>
          <div className="bg-gray-50 p-2 rounded text-center">
            <span className="block font-semibold">
              {property.carpetArea || "-"}
            </span>
            <span className="text-gray-500">Sqft Area</span>
          </div>
        </div>

        <p className="text-lg font-bold text-[#232323] mb-4">
          ${Number(property.price).toLocaleString()}
        </p>

        {showActions && property.verified === "pending" && (
          <div className="flex space-x-2">
            <button
              onClick={() => approveProperty(property._id.$oid)}
              className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Approve
            </button>
            <button
              onClick={() => rejectProperty(property._id.$oid)}
              className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-medium text-gray-500">
                    Total Properties
                  </h2>
                  <p className="text-2xl font-bold text-gray-800">
                    {all.length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-medium text-gray-500">
                    Approved Properties
                  </h2>
                  <p className="text-2xl font-bold text-gray-800">
                    {approved.length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-medium text-gray-500">
                    Active Sellers
                  </h2>
                  <p className="text-2xl font-bold text-gray-800">
                    {getUniqueSellerCount()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("pending")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "pending"
                    ? "border-blue-500 text-[#232323]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Pending Approval
                {pending.length > 0 && (
                  <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {pending.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab("approved")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "approved"
                    ? "border-blue-500 text-black"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Approved Properties
              </button>
            </nav>
          </div>

          {activeTab === "pending" ? (
            <section>
              <h2 className="sr-only">Pending Properties</h2>
              {pending.length === 0 ? (
                <div className="text-center py-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    No pending properties
                  </h3>
                  <p className="mt-1 text-gray-500">
                    All properties have been reviewed.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pending.map((property) => (
                    <PropertyCard
                      key={property._id.$oid}
                      property={property}
                      showActions={true}
                    />
                  ))}
                </div>
              )}
            </section>
          ) : (
            <section>
              <h2 className="sr-only">Approved Properties</h2>
              {approved.length === 0 ? (
                <div className="text-center py-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    No approved properties
                  </h3>
                  <p className="mt-1 text-gray-500">
                    Approve properties to see them listed here.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {approved.map((property) => (
                    <PropertyCard
                      key={property._id.$oid}
                      property={property}
                      showActions={false}
                    />
                  ))}
                </div>
              )}
            </section>
          )}
        </>
      )}
    </div>
  );
}
