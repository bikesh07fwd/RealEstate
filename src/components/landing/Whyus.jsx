import React from "react";

const Whyus = () => {
  const features = [
    // ... keep the same features array as before
    {
      title: "Unparalleled Service",
      description:
        "24/7 dedicated support with industry-leading response times",
      icon: "fa-headset",
    },
    {
      title: "Market Expertise",
      description: "20+ years combined experience in real estate investments",
      icon: "fa-chart-line",
    },
    {
      title: "Prime Locations",
      description:
        "Exclusive access to premium properties in emerging hotspots",
      icon: "fa-location-dot",
    },
    {
      title: "Transparent Process",
      description: "Full documentation and clear communication at every step",
      icon: "fa-file-contract",
    },
    {
      title: "Tech-Driven Solutions",
      description: "Virtual tours & AI-powered property matching",
      icon: "fa-rocket",
    },
    {
      title: "Global Network",
      description: "Partnerships with 150+ international brokers",
      icon: "fa-globe",
    },
    {
      title: "ROI Focused",
      description: "Average 12% annual returns on managed properties",
      icon: "fa-coins",
    },
    {
      title: "Legal Assurance",
      description: "100% compliant transactions with escrow protection",
      icon: "fa-scale-balanced",
    },
  ];

  return (
    <section className="py-20 bg-[#232323] relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10 [mask-image:linear-gradient(180deg,white,transparent)]">
        <div className="h-full w-full bg-grid-amber-900/[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-0 max-w-2xl">
            Why We're Unrivaled in <span className="">Real Estate</span>
          </h2>
          <a
            href="mailto:contact@realestate.com"
            className="flex items-center gap-3  text-white px-8 py-4 rounded-lg 
                      hover:bg-white hover:text-black transition-colors duration-300 group border border-amber-400/30
                      hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)] font-medium"
          >
            Contact Us Now
            <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl 
                        transition-all duration-300 group overflow-hidden border border-gray-800
                        hover:border-white"
            >
              {/* Icon */}
              <div className="mb-6 text-white">
                <i className={`fa-solid ${feature.icon} text-3xl`}></i>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-400/10 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whyus;
