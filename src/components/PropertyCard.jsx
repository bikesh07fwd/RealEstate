import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-06%20072338-EFHbT7CNOfKu6kBMfM3aGnNypkHaFf.png" ||
            "/placeholder.svg"
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
        {property.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {property.description}
          </p>
        )}
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
        <button
          onClick={() => {
            navigate(`/property/${property.id}`);
          }}
          className="w-full py-2 bg-gray-800 hover:bg-black text-white font-medium rounded-lg transition duration-200"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
