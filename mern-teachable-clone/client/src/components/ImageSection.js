import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa';
import exampleImage from '../asset/bgabout.png'; // Adjust the path according to the location of your component
import agri from '../asset/agri.png'; // Adjust the path according to the location of your component

const imageCards = [
 
  { src: agri, name: 'Image 3' },
  { src: exampleImage, name: 'Image 4' },
  { src: 'https://source.unsplash.com/random/600x400?sig=1', name: 'Image 1' },
  { src: 'https://source.unsplash.com/random/600x400?sig=2', name: 'Image 2' },
  // Add more images as needed
];

const ImageSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const popupRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  const getCurrentIndex = () => {
    return imageCards.findIndex((img) => img.src === selectedImage.src);
  };

  const handleNext = () => {
    const currentIndex = getCurrentIndex();
    const nextIndex = (currentIndex + 1) % imageCards.length;
    setSelectedImage(imageCards[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = getCurrentIndex();
    const prevIndex = (currentIndex - 1 + imageCards.length) % imageCards.length;
    setSelectedImage(imageCards[prevIndex]);
  };

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      handleClosePopup();
    }
  };

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [selectedImage]);

  return (
<>

<div  className="text-center py-12 bg-gradient-to-r from-indigo-600 to-purple-800 text-white mb-2 mt-4">
          <h2 className="text-4xl font-bold text-Black">Certifications</h2>
        </div>

        <div className="py-12 px-4 sm:px-6 lg:px-8">

{/* Image Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {imageCards.map((card, index) => (
    <div
      key={index}
      className="relative group cursor-pointer"
      onClick={() => handleImageClick(card)}
    >
      <img
        src={card.src}
        alt={card.name}
        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div className="text-white text-center">
          <p className="text-lg font-semibold mb-2">{card.name}</p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors duration-300">
              <FaSearch />
            </button>
            <button className="bg-red-600 p-2 rounded-full text-white hover:bg-red-700 transition-colors duration-300">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center p-2">{card.name}</div>
    </div>
  ))}
</div>

{/* Popup */}
{selectedImage && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
    <div
      ref={popupRef}
      className="relative bg-white p-6 rounded-lg max-w-lg"
    >
      <button
        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 text-2xl font-bold"
        onClick={handleClosePopup}
      >
        &times;
      </button>
      <img
        src={selectedImage.src}
        alt={selectedImage.name}
        className="w-full h-auto object-cover"
      />
      <p className="text-center mt-4">{selectedImage.name}</p>
      <div className="absolute inset-x-0 bottom-0 flex justify-between p-4">
        <button
          className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
        <button
          className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  </div>
)}
</div>


</>


  );
};

export default ImageSection;
