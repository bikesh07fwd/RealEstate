import { ParkingSquareIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function PropertyForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    img: "",
    name: "",
    description: "",
    price: "",
    location: "",
    type: "",
    carParking: "",
    carpetArea: "",
    noOfBedrooms: "",
    noOfBathrooms: "",
    typeOfProperty: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [Parking, setParking] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    const token = localStorage.getItem("token");

    const propertyData = {
      img: formData.img,
      name: formData.name,
      description: formData.description,
      price: parseInt(formData.price),
      location: formData.location,
      type: formData.type,
      carParking: Parking,
      carpetArea: parseInt(formData.carpetArea),
      noOfBedrooms: parseInt(formData.noOfBedrooms),
      noOfBathrooms: parseInt(formData.noOfBathrooms),
      typeOfProperty: formData.typeOfProperty,
      noOfParking: parseInt(formData.noOfParking),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/create_property.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(propertyData),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          img: "",
          name: "",
          description: "",
          price: 0,
          location: "",
          type: "",
          carpetArea: 0,
          noOfBedrooms: 0,
          noOfBathrooms: 0,
          typeOfProperty: "",
          noOfParking: "",
        });
        setTimeout(() => setSubmitSuccess(false), 3000);
        toast.success("property created");
        navigate("/seller-dashboard");
      } else {
        alert("Failed: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting property:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Group related fields together
  const fieldGroups = [
    {
      title: "Basic Information",
      fields: [
        { name: "name", placeholder: "Property Name", required: true },
        {
          name: "description",
          placeholder: "Description",
          type: "textarea",
          required: true,
        },
        { name: "img", placeholder: "Image URL", type: "url", required: true },
      ],
    },
    {
      title: "Pricing & Location",
      fields: [
        { name: "price", placeholder: "Price", type: "number", required: true },
        { name: "location", placeholder: "Location", required: true },
        { name: "type", placeholder: "Sale / Rent", required: true },
      ],
    },
    {
      title: "Property Details",
      fields: [
        {
          name: "typeOfProperty",
          placeholder: "Type of Property (e.g. Apartment)",
          required: true,
        },
        {
          name: "carpetArea",
          placeholder: "Carpet Area (e.g. 1200 sq ft)",
          type: "number",
          required: true,
        },
        {
          name: "noOfBedrooms",
          placeholder: "Number of Bedrooms",
          type: "number",
          required: true,
        },
        {
          name: "noOfBathrooms",
          placeholder: "Number of Bathrooms",
          type: "number",
          required: true,
        },
        {
          name: "noOfParking",
          placeholder: "Number of Parking",
          type: "number",
          required: true,
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-xl">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          List Your Property
        </h1>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          Property submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {fieldGroups.map((group, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
              {group.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.fields.map((field) => (
                <div key={field.name} className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    {field.placeholder}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                      required={field.required}
                    />
                  ) : (
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required={field.required}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <label className="block text-sm font-medium text-gray-700">
          Car Parking
        </label>
        <input
          type="checkbox"
          name="carParking"
          checked={Parking}
          onChange={() => {
            Parking ? setParking(false) : setParking(true);
          }}
          className=" border border-gray-300 px-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required={true}
        />

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-md font-medium text-white ${
              isSubmitting
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } transition-colors`}
          >
            {isSubmitting ? "Submitting..." : "Submit Property"}
          </button>
        </div>
      </form>
    </div>
  );
}
