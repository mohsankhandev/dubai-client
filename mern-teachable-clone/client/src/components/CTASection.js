import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Join us today and start building your online courses with ease.</p>
        <a href="/signup" className="bg-white text-blue-600 py-2 px-6 rounded-lg text-lg font-medium hover:bg-gray-100">Sign Up Now</a>
      </div>
    </section>
  );
};

export default CTASection;
