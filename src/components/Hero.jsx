export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
            Our Properties
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Dream Home Here
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover a wide range of properties that suit your lifestyle and
            preferences. From modern apartments to spacious family homes, we
            have the perfect property waiting for you.
          </p>
          <a
            href="#"
            className="hidden md:inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
          >
            View All Properties
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
