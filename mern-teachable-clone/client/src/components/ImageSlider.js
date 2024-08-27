// import React, { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// const ImageSlider = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Navigate to the next slide
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Navigate to the previous slide
//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   // Handle slider box click
//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative h-screen w-full bg-black">
//       {/* Image and Content */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         {/* Content */}
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 md:px-8">
//           <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
//             {slides[currentIndex].title}
//           </h2>
//           <p className="text-lg md:text-2xl text-center mb-8">
//             {slides[currentIndex].description}
//           </p>
//           <button
//             onClick={() => slides[currentIndex].onClick()}
//             className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg"
//           >
//             {slides[currentIndex].buttonText}
//           </button>
//         </div>

//         {/* Navigation Buttons */}
//         <button
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2"
//           onClick={prevSlide}
//         >
//           <FaArrowLeft className="h-6 w-6" />
//         </button>
//         <button
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2"
//           onClick={nextSlide}
//         >
//           <FaArrowRight className="h-6 w-6" />
//         </button>
//       </div>

//       {/* Slider Boxes */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-3 w-3 md:h-4 md:w-4 rounded-full cursor-pointer ${
//               index === currentIndex
//                 ? 'bg-blue-600'
//                 : 'bg-white bg-opacity-50 hover:bg-opacity-75'
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;





















// import React from 'react';
// import ImageSlider from './ImageSlider';

// const App = () => {
//   const slides = [
//     {
//       image: 'https://source.unsplash.com/random/1920x1080?nature',
//       title: 'Breathtaking Nature',
//       description: 'Explore the beauty of untouched landscapes and serene vistas.',
//       buttonText: 'Discover More',
//       onClick: () => {
//         console.log('Breathtaking Nature clicked');
//       },
//     },
//     {
//       image: 'https://source.unsplash.com/random/1920x1080?city',
//       title: 'Urban Exploration',
//       description: 'Dive into the heart of the city and uncover its secrets.',
//       buttonText: 'Learn More',
//       onClick: () => {
//         console.log('Urban Exploration clicked');
//       },
//     },
//     {
//       image: 'https://source.unsplash.com/random/1920x1080?technology',
//       title: 'Futuristic Tech',
//       description: 'Discover the cutting-edge technologies shaping our world.',
//       buttonText: 'Explore Now',
//       onClick: () => {
//         console.log('Futuristic Tech clicked');
//       },
//     },
//     {
//       image: 'https://source.unsplash.com/random/1920x1080?ocean',
//       title: 'Ocean Wonders',
//       description: 'Dive deep into the mysteries of the ocean.',
//       buttonText: 'Dive In',
//       onClick: () => {
//         console.log('Ocean Wonders clicked');
//       },
//     },
//   ];

//   return <ImageSlider slides={slides} />;
// };

// export default App;










































// import React from 'react';
// import mmmm from '../asset/mm2.png'


// const HeroSection = () => {
//   return (
//     <section
//       className="bg-gray-800 text-white flex flex-col items-center justify-center bg-cover bg-center min-h-screen pt-20 sm:pt-0"
//       style={{ backgroundImage: `url(${mmmm})` }}
//     >
//       <div className="text-center w-full px-4 md:w-[50%]">
//         <h3 className="text-2xl sm:text-3xl font-bold mb-4">
//           Your Moroccan Online Educational Platform for Excellence in Learning
//         </h3>
//         <p className="text-base sm:text-lg mb-6">
//           Create and sell online courses with ease.
//         </p>
//         <a
//           href="/signup"
//           className="bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-medium hover:bg-blue-700"
//         >
//           Get Started
//         </a>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;