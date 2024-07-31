import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">"This platform is fantastic! It made creating and selling my courses a breeze."</p>
              <p className="font-semibold">John Doe</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">"The ease of use and support has been exceptional. Highly recommended!"</p>
              <p className="font-semibold">Jane Smith</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">"A great platform with lots of features to help me reach my audience."</p>
              <p className="font-semibold">Alex Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
