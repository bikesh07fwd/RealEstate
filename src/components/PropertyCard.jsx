"use client";

export default function PropertyCard({
  property,
  isFavorite,
  toggleFavorite,
  viewMode,
}) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      className={`property-card bg-white rounded-xl shadow-sm overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-md ${
        viewMode === "list" ? "flex flex-col md:flex-row" : ""
      }`}
    >
      <div className={`relative ${viewMode === "list" ? "md:w-2/5" : ""}`}>
        <img
          src={
            property.image ||
            "data:image/jpeg;base64,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"
          }
          alt={property.title}
          className="w-full h-56 object-cover"
        />
        <div
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-100"
          onClick={() => toggleFavorite(property.id)}
        >
          <i
            className={`${
              isFavorite
                ? "fas text-red-500"
                : "far text-gray-500 hover:text-red-500"
            } fa-heart`}
          ></i>
        </div>
        <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-md">
          {property.forSale ? "For Sale" : "For Rent"}
        </div>
        <div className="absolute bottom-4 right-4 bg-white text-blue-600 text-lg font-bold px-3 py-1 rounded-md shadow-md">
          {formatPrice(property.price)}
        </div>
      </div>
      <div className={`p-4 ${viewMode === "list" ? "md:w-3/5" : ""}`}>
        <div className="text-xs text-gray-500 mb-1">{property.location}</div>
        <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <i className="fas fa-map-marker-alt mr-1"></i>
          <span>{property.city}</span>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <i className="fas fa-bed text-blue-500 mr-1"></i>
            <span className="text-sm">
              {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
            </span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-bath text-blue-500 mr-1"></i>
            <span className="text-sm">
              {property.bathrooms} {property.bathrooms === 1 ? "Bath" : "Baths"}
            </span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-vector-square text-blue-500 mr-1"></i>
            <span className="text-sm">{property.area} sq ft</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features &&
            property.features.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
              >
                {feature}
              </span>
            ))}
        </div>
        <button className="w-full py-2 bg-gray-800 hover:bg-black text-white font-medium rounded-lg transition duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}
