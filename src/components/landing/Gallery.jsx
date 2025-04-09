import React from 'react';
const images = [
  'https://images.pexels.com/photos/3893788/pexels-photo-3893788.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/706352/pexels-photo-706352.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/15528021/pexels-photo-15528021/free-photo-of-cars-on-mumbai-street.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2661922/pexels-photo-2661922.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/160087/pexels-photo-160087.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2445545/pexels-photo-2445545.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2589693/pexels-photo-2589693.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1462641/pexels-photo-1462641.jpeg?auto=compress&cs=tinysrgb&w=600',
];

const ImageGallery = () => {
  return (
    <>
    <div className="p-4 w-[90%] mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Property Image Gallery</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="w-full rounded-lg hover:opacity-90 break-inside-avoid transform transition-transform duration-300 hover:scale-105 shadow-md"
            loading="lazy"
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default ImageGallery;
