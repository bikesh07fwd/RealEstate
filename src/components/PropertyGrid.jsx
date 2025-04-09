"use client";

import { useState } from "react";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid({ properties, viewMode }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div
      className={`grid ${
        viewMode === "grid"
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1"
      } gap-6`}
    >
      {properties.length > 0 ? (
        properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            isFavorite={favorites.includes(property.id)}
            toggleFavorite={toggleFavorite}
            viewMode={viewMode}
          />
        ))
      ) : (
        <div className="col-span-full py-10 text-center">
          <div className="text-5xl mb-4">🏠</div>
          <h3 className="text-xl font-semibold mb-2">No properties found</h3>
          <p className="text-gray-500">
            Try adjusting your filters to see more results
          </p>
        </div>
      )}
    </div>
  );
}
