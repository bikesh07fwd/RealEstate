// Replace the entire file with this adapter for your backend data

/**
 * Adapter function to transform backend data to the format expected by the frontend
 * @param {Array} backendData - The data from the backend API
 * @returns {Array} - Transformed data for the frontend
 */
export function adaptPropertyData(backendData) {
  if (!backendData || !Array.isArray(backendData)) return [];

  return backendData.map((item) => ({
    id: item._id?.$oid || item._id || String(Math.random()),
    title: item.name || "Unnamed Property",
    description: item.description || "",
    location: item.location?.split(",")[0]?.trim() || "",
    city: item.location?.split(",")[1]?.trim() || item.location || "",
    price: item.price || 0,
    bedrooms: item.noOfBedrooms || 0,
    bathrooms: item.noOfBathrooms || 0,
    area: item.carpetArea || 0,
    type: item.typeOfProperty || item.type || "Unknown",
    forSale: true, // Assuming all properties are for sale unless specified
    furnishing: "unfurnished", // Default value
    features: [
      item.carParking ? "Car Parking" : null,
      item.verified === "true" ? "Verified Property" : null,
    ].filter(Boolean),
    image:
      item.image ||
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-06%20072338-EFHbT7CNOfKu6kBMfM3aGnNypkHaFf.png",
    listedDate: item.createdAt?.$date?.$numberLong
      ? new Date(Number.parseInt(item.createdAt.$date.$numberLong))
          .toISOString()
          .split("T")[0]
      : new Date().toISOString().split("T")[0],
    verified: item.verified === "true",
    sellerId: item.sellerId || "",
  }));
}

// Sample data for development/testing
export const propertyData = [
  {
    _id: {
      $oid: "67f91a2f4699ac20c0035c03",
    },
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-06%20072338-EFHbT7CNOfKu6kBMfM3aGnNypkHaFf.png",
    name: "Luxury Villa",
    description: "A beautiful villa near the beach.",
    price: 2500000,
    location: "Miami, FL",
    verified: "true",
    type: "Residential",
    carParking: true,
    carpetArea: 3500,
    noOfBedrooms: 4,
    noOfBathrooms: 3,
    typeOfProperty: "Villa",
    sellerId: "67e51391bfc2e92057005253",
    createdAt: {
      $date: {
        $numberLong: "1744378415561",
      },
    },
  },
  {
    _id: {
      $oid: "67f91a2f4699ac20c0035c04",
    },
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-06%20072338-EFHbT7CNOfKu6kBMfM3aGnNypkHaFf.png",
    name: "Modern Apartment",
    description: "Spacious apartment in downtown area.",
    price: 850000,
    location: "New York, NY",
    verified: "true",
    type: "Residential",
    carParking: true,
    carpetArea: 1200,
    noOfBedrooms: 2,
    noOfBathrooms: 2,
    typeOfProperty: "Apartment",
    sellerId: "67e51391bfc2e92057005254",
    createdAt: {
      $date: {
        $numberLong: "1744378415562",
      },
    },
  },
  {
    _id: {
      $oid: "67f91a2f4699ac20c0035c05",
    },
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-06%20072338-EFHbT7CNOfKu6kBMfM3aGnNypkHaFf.png",
    name: "Family Home",
    description: "Perfect home for a growing family.",
    price: 1200000,
    location: "Chicago, IL",
    verified: "true",
    type: "Residential",
    carParking: true,
    carpetArea: 2800,
    noOfBedrooms: 5,
    noOfBathrooms: 3,
    typeOfProperty: "House",
    sellerId: "67e51391bfc2e92057005255",
    createdAt: {
      $date: {
        $numberLong: "1744378415563",
      },
    },
  },
];
