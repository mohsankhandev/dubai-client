import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import exampleImage from '../asset/bgabout.png'; // Adjust the path according to the location of your component
import agri from '../asset/agri.png'; // Adjust the path according to the location of your component
import ImageSection from './ImageSection';

const FirstSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [activeSection, setActiveSection] = useState(0); // New state for active section


    const slides = [
      {
        image: `${agri}`,
        title: 'Breathtaking Nature',
        description: 'Explore the beauty of untouched landscapes and serene vistas.',
        buttonText: 'Discover More',
        onClick: () => {
          console.log('Breathtaking Nature clicked');
        },
      },
      {
        image: 'https://source.unsplash.com/random/1920x1080?city',
        title: 'Urban Exploration',
        description: 'Dive into the heart of the city and uncover its secrets.',
        buttonText: 'Learn More',
        onClick: () => {
          console.log('Urban Exploration clicked');
        },
      },
      {
        image: 'https://source.unsplash.com/random/1920x1080?technology',
        title: 'Futuristic Tech',
        description: 'Discover the cutting-edge technologies shaping our world.',
        buttonText: 'Explore Now',
        onClick: () => {
          console.log('Futuristic Tech clicked');
        },
      },
      {
        image: 'https://source.unsplash.com/random/1920x1080?ocean',
        title: 'Ocean Wonders',
        description: 'Dive deep into the mysteries of the ocean.',
        buttonText: 'Dive In',
        onClick: () => {
          console.log('Ocean Wonders clicked');
        },
      },
    ];
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };
  
    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

  return (
    <>
      {/* First Section */}
        
      <div id='aboutus'
        className="relative bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8 mt-[100px]"
        style={{ backgroundImage: `url(${exampleImage})` }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white">
            OM SHREE INTERNATIONAL
          </h1>
          <h2 className="text-xl font-semibold text-white">
            a 3-Star Export House
          </h2>
          <p className="text-base text-white">
            Our mission is to have a presence in every country around the world
            by leaving an essence of India in the form of agricultural products
            - the heart of the Indian economy. Using our vast portfolio of
            products sourced from all corners of India, we ensure that
            commodities of the highest quality are delivered to our customers.
            We understand the responsibility that comes with representing our
            country on the global scale and we take it very seriously.
          </p>
        </div>
      </div>
     
      {/* Second Section */}
      <div
        className="relative bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${agri})` }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white">
            OM SHREE INTERNATIONAL
          </h1>
          <h2 className="text-xl font-semibold text-white">
            a 3-Star Export House
          </h2>
          <p className="text-base text-white">
            Our mission is to have a presence in every country around the world
            by leaving an essence of India in the form of agricultural products
            - the heart of the Indian economy. Using our vast portfolio of
            products sourced from all corners of India, we ensure that
            commodities of the highest quality are delivered to our customers.
            We understand the responsibility that comes with representing our
            country on the global scale and we take it very seriously.
          </p>
          <p className="text-base text-white">
            Our mission is to have a presence in every country around the world
            by leaving an essence of India in the form of agricultural products
            - the heart of the Indian economy. Using our vast portfolio of
            products sourced from all corners of India, we ensure that
            commodities of the highest quality are delivered to our customers.
            We understand the responsibility that comes with representing our
            country on the global scale and we take it very seriously.
          </p>
          <p className="text-base text-white">
            Our mission is to have a presence in every country around the world
            by leaving an essence of India in the form of agricultural products
            - the heart of the Indian economy. Using our vast portfolio of
            products sourced from all corners of India, we ensure that
            commodities of the highest quality are delivered to our customers.
            We understand the responsibility that comes with representing our
            country on the global scale and we take it very seriously.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div id='testimonial' className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            WHAT OUR FANTASTIC CUSTOMERS SAY
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-base text-gray-700 mb-4">
              We want you to know that we are very pleased with the quality
              supplied by Om Shree International Pvt Ltd. We sincerely appreciate
              your responsiveness and the way you conduct business. We are highly
              pleased with your company because of our satisfaction with your
              product supplies. We look forward to doing business with you for
              years to come.
            </p>
            <button className="font-bold text-blue-500">
              Read More
            </button>
          </div>
          {/* Second Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-base text-gray-700 mb-4">
              Thank you for your timely deliveries of ordered products. In our
              business we must get our products to our warehouses on a regular
              schedule. We rely on dependable service from suppliers like OM
              SHREE to help us keep our schedule and satisfy our customers. We
              want you to know that we appreciate your efforts and look forward
              to continuing our business relationship.
            </p>
            <button className="font-bold text-blue-500">
              Read More
            </button>
          </div>
          {/* Third Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-base text-gray-700 mb-4">
              We are regularly importing Coffee Seeds from OM SHREE INTERNATIONAL
              and appreciate their quality of goods delivered. We are glad to
              work with them as OMSHREE products are having good demand and
              response in the international market as well as on local markets
              also.
            </p>
            <p className="font-bold text-gray-800">REPUTED BUYER FROM JORDAN</p>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div  className="text-center py-12 bg-gradient-to-r from-indigo-600 to-purple-800 text-white mb-2">
          <h2 className="text-4xl font-bold text-Black">Awards</h2>
        </div>
      <div id='award' className="relative h-screen w-full bg-red">
        {/* <div className="text-center py-12">
          <h2 className="text-4xl font-bold text-Black">Awar</h2>
        </div> */}

        <div
          className="absolute inset-0 bg-cover bg-center md:mx-[20%] mt-6"
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        >
          <div className="absolute inset-0 bg-red-300 bg-opacity-50"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
              {slides[currentIndex].title}
            </h2>
            <p className="text-lg md:text-2xl mb-8 text-center">
              {slides[currentIndex].description}
            </p>
            <button
              className="px-6 py-2 bg-blue-500 rounded-md text-white font-semibold"
              onClick={slides[currentIndex].onClick}
            >
              {slides[currentIndex].buttonText}
            </button>
          </div>

          {/* Arrows */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 cursor-pointer">
            <FaArrowLeft
              className="text-white text-2xl"
              onClick={prevSlide}
            />
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 cursor-pointer">
            <FaArrowRight
              className="text-white text-2xl"
              onClick={nextSlide}
            />
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 w-full flex justify-center space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-500'
                }`}
                onClick={() => goToSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div id='certf' className=' mt-[200px] text-black'>

      </div>
      <ImageSection  />
    </>
  );
};

export default FirstSection;
