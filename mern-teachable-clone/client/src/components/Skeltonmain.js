import React from 'react';

const SkeletonLoader = () => (
  <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition duration-300 ease-in-out">
    <div className="w-full h-60 bg-gray-300 animate-pulse"></div>
    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
      <span className="text-lg font-semibold">Loading...</span>
    </div>
  </div>
);

export default SkeletonLoader;
