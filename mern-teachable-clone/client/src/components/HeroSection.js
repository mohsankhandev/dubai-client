import React from 'react';
import mmmm from '../asset/mm2.png'


const HeroSection = () => {
  return (
    <section
      className="bg-gray-800 text-white flex flex-col items-center justify-center bg-cover bg-center min-h-screen pt-20 sm:pt-0"
      style={{ backgroundImage: `url(${mmmm})` }}
    >
      <div className="text-center w-full px-4 md:w-[50%]">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Your Moroccan Online Educational Platform for Excellence in Learning
        </h3>
        <p className="text-base sm:text-lg mb-6">
          Create and sell online courses with ease.
        </p>
        <a
          href="/signup"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-medium hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
