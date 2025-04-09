"use client";
import FiltersSidebar from "./FiltersSidebar";
import PropertyGrid from "./PropertyGrid";
import Pagination from "./Pagination";

export default function PropertyListings({
  properties,
  filters,
  handleFilterChange,
  sortOption,
  handleSortChange,
  viewMode,
  toggleViewMode,
  isFilterOpen,
  toggleFilterPanel,
}) {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <FiltersSidebar
          filters={filters}
          handleFilterChange={handleFilterChange}
          isFilterOpen={isFilterOpen}
          toggleFilterPanel={toggleFilterPanel}
        />

        {/* Property Listings */}
        <div className="w-full md:w-3/4 lg:w-4/5">
          {/* Sorting and View Options */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">{properties.length}</span>{" "}
              Properties
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <label htmlFor="sort" className="text-sm mr-2">
                  Sort By:
                </label>
                <select
                  id="sort"
                  className="text-sm border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={sortOption}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="area">Area</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className={`p-2 ${
                    viewMode === "grid"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-500"
                  } rounded-lg`}
                  onClick={() => toggleViewMode("grid")}
                >
                  <i className="fas fa-th-large"></i>
                </button>
                <button
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-500"
                  } rounded-lg`}
                  onClick={() => toggleViewMode("list")}
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
              <button
                className="md:hidden px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={toggleFilterPanel}
              >
                <i className="fas fa-filter mr-2"></i>
                Filters
              </button>
            </div>
          </div>

          {/* Property Grid */}
          <PropertyGrid properties={properties} viewMode={viewMode} />

          {/* Pagination */}
          {properties.length > 0 && <Pagination />}
        </div>
      </div>
    </section>
  );
}
