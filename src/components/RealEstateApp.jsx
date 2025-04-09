"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import PropertyListings from "./PropertyListings";
import { propertyData } from "./data/propertyData";

export default function RealEstateApp() {
  const [properties, setProperties] = useState(propertyData);
  const [filteredProperties, setFilteredProperties] = useState(propertyData);
  const [filters, setFilters] = useState({
    location: "",
    propertyType: [],
    bedrooms: [],
    priceRange: [0, 2000000],
    areaRange: [0, 10000],
    availability: "sale", // 'sale' or 'rent'
    furnishing: "", // 'fully', 'semi', 'unfurnished'
  });
  const [sortOption, setSortOption] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Apply filters and sorting whenever filters or sort option changes
  useEffect(() => {
    let results = [...properties];

    // Filter by location
    if (filters.location) {
      results = results.filter(
        (property) =>
          property.location
            .toLowerCase()
            .includes(filters.location.toLowerCase()) ||
          property.city.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by property type
    if (filters.propertyType.length > 0) {
      results = results.filter((property) =>
        filters.propertyType.includes(property.type)
      );
    }

    // Filter by bedrooms
    if (filters.bedrooms.length > 0) {
      results = results.filter((property) => {
        if (filters.bedrooms.includes("4+") && property.bedrooms >= 4) {
          return true;
        }
        return filters.bedrooms.includes(property.bedrooms.toString());
      });
    }

    // Filter by price range
    results = results.filter(
      (property) =>
        property.price >= filters.priceRange[0] &&
        property.price <= filters.priceRange[1]
    );

    // Filter by area range
    results = results.filter(
      (property) =>
        property.area >= filters.areaRange[0] &&
        property.area <= filters.areaRange[1]
    );

    // Filter by availability
    if (filters.availability) {
      results = results.filter(
        (property) =>
          (filters.availability === "sale" && property.forSale) ||
          (filters.availability === "rent" && !property.forSale)
      );
    }

    // Filter by furnishing
    if (filters.furnishing) {
      results = results.filter(
        (property) => property.furnishing === filters.furnishing
      );
    }

    // Apply sorting
    switch (sortOption) {
      case "price-low":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        results.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        results.sort((a, b) => new Date(b.listedDate) - new Date(a.listedDate));
        break;
      case "area":
        results.sort((a, b) => b.area - a.area);
        break;
      default:
        break;
    }

    setFilteredProperties(results);
  }, [filters, sortOption, properties]);

  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => {
      // Handle array-based filters (property type, bedrooms)
      if (filterName === "propertyType" || filterName === "bedrooms") {
        const updatedArray = prevFilters[filterName].includes(value)
          ? prevFilters[filterName].filter((item) => item !== value)
          : [...prevFilters[filterName], value];

        return {
          ...prevFilters,
          [filterName]: updatedArray,
        };
      }

      // Handle range filters (price, area)
      if (filterName === "priceRange" || filterName === "areaRange") {
        return {
          ...prevFilters,
          [filterName]: value,
        };
      }

      // Handle other filters
      return {
        ...prevFilters,
        [filterName]: value,
      };
    });
  };

  // Handle sort change
  const handleSortChange = (option) => {
    setSortOption(option);
  };

  // Toggle view mode
  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  // Toggle filter panel on mobile
  const toggleFilterPanel = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar toggleFilterPanel={toggleFilterPanel} />
      <Hero />
      <PropertyListings
        properties={filteredProperties}
        filters={filters}
        handleFilterChange={handleFilterChange}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
        viewMode={viewMode}
        toggleViewMode={toggleViewMode}
        isFilterOpen={isFilterOpen}
        toggleFilterPanel={toggleFilterPanel}
      />
    </div>
  );
}
