import React from 'react';

const BecomeATeacherSection = () => {
  return (
    <section className="container mx-auto my-12 px-4">
      <div className="text-center">
        <a 
          href="https://ajitfhamacademy.teachable.com/p/offre-d-emploi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block"
        >
          <button 
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Become a Teacher at Ajitfham Academy
          </button>
        </a>
      </div>
    </section>
  );
};

export default BecomeATeacherSection;
