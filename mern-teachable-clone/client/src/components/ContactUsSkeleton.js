import React from 'react';

const ContactUsSkeleton = () => {
  return (
    <div>
      {/* Top Div Skeleton with Contact Us Text */}
      <div className="relative bg-gray-300 h-[210px] flex items-center justify-center animate-pulse">
        <div className="flex items-center">
          <div className="w-16 h-2 bg-gray-400 mr-4"></div>
          <div className="w-48 h-8 bg-gray-400"></div>
          <div className="w-16 h-2 bg-gray-400 ml-4"></div>
        </div>
      </div>

      {/* Responsive Layout for Form and Image */}
      <div className="flex flex-col lg:flex-row bg-gray-200 lg:p-16">
        {/* Image Section Skeleton */}
        <div className="lg:w-1/2 text-center flex flex-col items-center justify-center">
          <div className="w-5/6 h-60 bg-gray-300 animate-pulse"></div>
        </div>

        {/* Form Section Skeleton */}
        <div className="lg:w-1/2 w-full p-8">
          <div className="space-y-6 bg-gray-100 p-8 rounded-lg shadow-xl animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-6"></div>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
            <div className="h-20 bg-gray-300 rounded w-full"></div>
            <div className="h-12 bg-gray-400 rounded w-full"></div>
          </div>
        </div>
      </div>

      {/* Visit Us Section Skeleton */}
      <div className="relative">
        {/* Header for Visit Us Section Skeleton */}
        <div className="relative bg-gray-300 h-[210px] flex items-center justify-center animate-pulse">
          <div className="flex items-center">
            <div className="w-16 h-2 bg-gray-400 mr-4"></div>
            <div className="w-48 h-8 bg-gray-400"></div>
            <div className="w-16 h-2 bg-gray-400 ml-4"></div>
          </div>
        </div>

        {/* Main Container for Google Map and Info Boxes Skeleton */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 p-8 lg:p-16 bg-gray-200">
          {/* Google Map Section Skeleton */}
          <div className="lg:w-1/2 w-full h-80 lg:h-[500px] bg-gray-300 animate-pulse mb-8 lg:mb-0"></div>

          {/* Info Boxes Section Skeleton */}
          <div className="lg:w-1/2 w-full flex flex-col space-y-4 lg:space-y-8 mb-4 lg:mb-0">
            {/* Address Box Skeleton */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg animate-pulse">
              <div className="h-6 bg-gray-300 rounded mb-2 w-1/3"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-2/3"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
            </div>

            {/* Contact Box Skeleton */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg animate-pulse">
              <div className="h-6 bg-gray-300 rounded mb-2 w-1/3"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-2/3"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-1/3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Careers Section Skeleton */}
      <div className="relative bg-gray-300 h-[200px] flex items-center justify-center animate-pulse">
        <div className="flex items-center">
          <div className="w-16 h-2 bg-gray-400 mr-4"></div>
          <div className="w-48 h-8 bg-gray-400"></div>
          <div className="w-16 h-2 bg-gray-400 ml-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSkeleton;
