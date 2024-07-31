

import React from 'react';

const Hero = () => {
  return (
    <section class="bg-gray-800 text-white h-screen flex flex-col justify-center bg-cover bg-center" style="background-image: url('your-hero-image.jpg');">
    <div class="text-center">
      <h1 class="text-4xl sm:text-6xl font-bold mb-4">Welcome to Teachable Clone</h1>
      <p class="text-lg sm:text-2xl mb-6">Create and sell online courses with ease.</p>
      <a href="/signup" class="bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-medium hover:bg-blue-700">Get Started</a>
    </div>
  </section>
  );
};

export default Hero;
