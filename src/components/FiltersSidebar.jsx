export default function FiltersSidebar({
  filters,
  handleFilterChange,
  isFilterOpen,
  toggleFilterPanel,
}) {
  // Property types for checkboxes - updated to match backend data
  const propertyTypes = [
    "Apartment",
    "Villa",
    "House",
    "Commercial",
    "Office Space",
    "Studio",
    "Penthouse",
    "Condo",
    "Townhouse",
    "Cottage",
    "Residential",
  ];

  // Bedroom options
  const bedroomOptions = ["1", "2", "3", "4+"];

  // Furnishing options
  const furnishingOptions = [
    { value: "fully", label: "Fully Furnished" },
    { value: "semi", label: "Semi Furnished" },
    { value: "unfurnished", label: "Unfurnished" },
  ];

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden md:block w-full md:w-1/4 lg:w-1/5">
        <div className="bg-white rounded-xl shadow-sm p-5 sticky top-24">
          <h2 className="text-xl font-semibold mb-6">Filters</h2>

          {/* Location Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">
              Location
            </h3>
            <input
              type="text"
              placeholder="Enter city or area"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
            />
          </div>

          {/* Property Category Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">
              Property Type
            </h3>
            <div className="space-y-2">
              {propertyTypes.map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-blue-500 focus:ring-blue-500"
                    checked={filters.propertyType.includes(type)}
                    onChange={() => handleFilterChange("propertyType", type)}
                  />
                  <span className="ml-2">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bedrooms Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">
              Bedrooms
            </h3>
            <div className="flex flex-wrap gap-2">
              {bedroomOptions.map((option) => (
                <label key={option} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={filters.bedrooms.includes(option)}
                    onChange={() => handleFilterChange("bedrooms", option)}
                  />
                  <div
                    className={`px-4 py-2 rounded-lg border ${
                      filters.bedrooms.includes(option)
                        ? "bg-blue-500 text-white border-blue-500"
                        : "border-gray-200 text-gray-700"
                    } cursor-pointer`}
                  >
                    {option} {option !== "4+" ? "BHK" : "+ BHK"}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter - Updated max value to 5M */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">
              Price Range
            </h3>
            <div className="space-y-4">
              <div>
                <input
                  type="range"
                  min="0"
                  max="5000000"
                  step="50000"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    handleFilterChange("priceRange", [
                      filters.priceRange[0],
                      Number.parseInt(e.target.value),
                    ])
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">
                  ${filters.priceRange[0].toLocaleString()}
                </span>
                <span className="text-sm text-gray-500">
                  ${filters.priceRange[1].toLocaleString()}
                </span>
              </div>
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Min"
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    value={filters.priceRange[0]}
                    onChange={(e) =>
                      handleFilterChange("priceRange", [
                        Number.parseInt(e.target.value) || 0,
                        filters.priceRange[1],
                      ])
                    }
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Max"
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    value={filters.priceRange[1]}
                    onChange={(e) =>
                      handleFilterChange("priceRange", [
                        filters.priceRange[0],
                        Number.parseInt(e.target.value) || 5000000,
                      ])
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Availability Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">
              Availability
            </h3>
            <div className="flex p-1 bg-gray-100 rounded-lg">
              <button
                className={`w-1/2 py-2 text-center rounded-lg text-sm font-medium ${
                  filters.availability === "sale"
                    ? "bg-white shadow-sm"
                    : "text-gray-500"
                }`}
                onClick={() => handleFilterChange("availability", "sale")}
              >
                For Sale
              </button>
              <button
                className={`w-1/2 py-2 text-center rounded-lg text-sm font-medium ${
                  filters.availability === "rent"
                    ? "bg-white shadow-sm"
                    : "text-gray-500"
                }`}
                onClick={() => handleFilterChange("availability", "rent")}
              >
                For Rent
              </button>
            </div>
          </div>

          {/* Area Filter - Using carpetArea from backend */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">
              Area (sq ft)
            </h3>
            <div className="space-y-4">
              <div>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={filters.areaRange[1]}
                  onChange={(e) =>
                    handleFilterChange("areaRange", [
                      filters.areaRange[0],
                      Number.parseInt(e.target.value),
                    ])
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">
                  {filters.areaRange[0]}
                </span>
                <span className="text-sm text-gray-500">
                  {filters.areaRange[1]}
                </span>
              </div>
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Min"
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    value={filters.areaRange[0]}
                    onChange={(e) =>
                      handleFilterChange("areaRange", [
                        Number.parseInt(e.target.value) || 0,
                        filters.areaRange[1],
                      ])
                    }
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Max"
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    value={filters.areaRange[1]}
                    onChange={(e) =>
                      handleFilterChange("areaRange", [
                        filters.areaRange[0],
                        Number.parseInt(e.target.value) || 10000,
                      ])
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Furnishing Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">
              Furnishing
            </h3>
            <div className="space-y-2">
              {furnishingOptions.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="furnishing"
                    className="text-blue-500 focus:ring-blue-500"
                    checked={filters.furnishing === option.value}
                    onChange={() =>
                      handleFilterChange("furnishing", option.value)
                    }
                  />
                  <span className="ml-2">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Apply Filters Button */}
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Mobile Filters Panel */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          isFilterOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={toggleFilterPanel}
        ></div>
        <div className="absolute inset-y-0 right-0 w-4/5 max-w-sm bg-white h-full overflow-y-auto">
          <div className="p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button onClick={toggleFilterPanel} className="text-gray-500">
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Location Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">
                Location
              </h3>
              <input
                type="text"
                placeholder="Enter city or area"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
              />
            </div>

            {/* Property Category Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">
                Property Type
              </h3>
              <div className="space-y-2">
                {propertyTypes.map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-blue-500 focus:ring-blue-500"
                      checked={filters.propertyType.includes(type)}
                      onChange={() => handleFilterChange("propertyType", type)}
                    />
                    <span className="ml-2">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Other mobile filters */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase text-gray-500 mb-3">
                Bedrooms
              </h3>
              <div className="flex flex-wrap gap-2">
                {bedroomOptions.map((option) => (
                  <label key={option} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={filters.bedrooms.includes(option)}
                      onChange={() => handleFilterChange("bedrooms", option)}
                    />
                    <div
                      className={`px-4 py-2 rounded-lg border ${
                        filters.bedrooms.includes(option)
                          ? "bg-blue-500 text-white border-blue-500"
                          : "border-gray-200 text-gray-700"
                      } cursor-pointer`}
                    >
                      {option} {option !== "4+" ? "BHK" : "+ BHK"}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Apply Filters Button */}
            <div className="sticky bottom-0 pt-4 pb-4 bg-white border-t mt-auto">
              <button
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
                onClick={toggleFilterPanel}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
