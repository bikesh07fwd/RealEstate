import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-1/2 p-8 lg:p-16 justify-center">
        {/* Top Content */}
        <div className="mb-12 max-w-2xl ml-auto">
          <p className="text-2xl md:text-3xl font-light text-gray-700 leading-snug">
            Transforming real estate experiences through innovative solutions
            and
            <span className="font-medium text-gray-900">
              {" "}
              trusted partnerships
            </span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl ml-auto">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-4xl font-bold text-gray-900 mb-2">35+</h3>
            <p className="text-gray-600 font-medium">
              Successful Transactions Monthly
            </p>
            <div className="w-12 h-1 bg-blue-100 mt-4 rounded-full" />
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-4xl font-bold text-gray-900 mb-2">95%</h3>
            <p className="text-gray-600 font-medium">
              Customer Satisfaction Rate
            </p>
            <div className="w-12 h-1 bg-blue-100 mt-4 rounded-full" />
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-4xl font-bold text-gray-900 mb-2">174</h3>
            <p className="text-gray-600 font-medium">Ready Properties</p>
            <div className="w-12 h-1 bg-blue-100 mt-4 rounded-full" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex p-8 lg:p-16">
        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg"
            alt="Real estate properties"
            className="w-full h-full object-cover absolute inset-0"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/30 to-transparent" />

          {/* Content Container */}
          <div className="relative h-full flex flex-col justify-between p-8 text-white">
            {/* Top Content */}
            <div className="flex justify-between items-start">
              <div className="max-w-[300px]">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  Discover Premium Properties
                </h2>
                <p className="text-gray-200 font-light">
                  Investments starting from $145k with 10% annual yield
                </p>
              </div>

              <div className="flex gap-4">
                <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <i className="fa-solid fa-arrow-up-right-from-square text-lg" />
                </button>
                <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <i className="fa-regular fa-heart text-lg" />
                </button>
              </div>
            </div>

            {/* Bottom Content */}
            {/* <div className="flex justify-end">
              <a 
                href="#"
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-full 
                          hover:bg-gray-100 transition-colors font-medium shadow-lg"
              >
                Download Catalog
                <i className="fa-solid fa-download text-sm" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
