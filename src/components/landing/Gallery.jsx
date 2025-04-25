// import React from 'react';
// const images = [
//   'https://images.pexels.com/photos/3893788/pexels-photo-3893788.jpeg?auto=compress&cs=tinysrgb&w=600',
//   'https://images.pexels.com/photos/706352/pexels-photo-706352.jpeg?auto=compress&cs=tinysrgb&w=600',
//   'https://images.pexels.com/photos/15528021/pexels-photo-15528021/free-photo-of-cars-on-mumbai-street.jpeg?auto=compress&cs=tinysrgb&w=600',
//   'https://images.pexels.com/photos/2661922/pexels-photo-2661922.jpeg?auto=compress&cs=tinysrgb&w=600',
//   'https://images.pexels.com/photos/160087/pexels-photo-160087.jpeg?auto=compress&cs=tinysrgb&w=600',
//   'https://images.pexels.com/photos/2445545/pexels-photo-2445545.jpeg?auto=compress&cs=tinysrgb&w=600',
//   'https://images.pexels.com/photos/2589693/pexels-photo-2589693.jpeg?auto=compress&cs=tinysrgb&w=600',
//   'https://images.pexels.com/photos/1462641/pexels-photo-1462641.jpeg?auto=compress&cs=tinysrgb&w=600',
// ];

// const ImageGallery = () => {
//   return (
//     <>
//     <div className="p-4 w-[90%] mx-auto">
//       <h2 className="text-2xl font-bold mb-6 text-center">Property Image Gallery</h2>
//       <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`Gallery image ${index + 1}`}
//             className="w-full rounded-lg hover:opacity-90 break-inside-avoid transform transition-transform duration-300 hover:scale-105 shadow-md"
//             loading="lazy"
//           />
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default ImageGallery;

import React, { useState, useEffect } from "react";

const images = [
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
  "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg",
  "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
  "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(goToNext, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, currentIndex]);

  return (
    <div className="p-4 w-[90%] mx-auto relative group">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Property Image Carousel
      </h2>

      <div className="relative overflow-hidden rounded-lg shadow-xl">
        {/* Main Image */}
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={images[currentIndex]}
            alt={`Carousel image ${currentIndex + 1}`}
            className="w-full h-[500px] object-cover rounded-lg transition-opacity duration-500"
            loading="lazy"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-all duration-300"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex overflow-x-auto mt-4 space-x-2 py-2 scrollbar-hide">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden transition-all duration-300 ${
              currentIndex === index
                ? "ring-2 ring-blue-500"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
