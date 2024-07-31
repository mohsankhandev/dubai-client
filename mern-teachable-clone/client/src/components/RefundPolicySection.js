import React from 'react';
import contactDetails from '../config'; // Import the contact details if needed

const RefundPolicySection = () => {
  return (
    <section className="container mx-auto my-12 px-4">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="flex-1 mb-6 md:mb-0 md:mr-6">
          <img 
            src="https://cdn.fs.teachablecdn.com/9zGzDrDyT7iZ0v0pdGTG" 
            alt="Refund Policy" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">
            Satisfied or Refunded
          </h3>
          <p className="text-base mb-4">
            At Ajitfham Academy, we are committed to providing superior quality education and an exceptional learning experience. We strongly believe in the effectiveness of our courses and the satisfaction of our students. That is why we offer a partial "Satisfied or Refunded" guarantee, adapted to the duration of your package.
          </p>
          <strong className="block mb-2">Our Engagement:</strong>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Annual Pack:</strong> If you are not completely satisfied with your purchase, you can request a refund within 30 days of purchase. You will be refunded for the remainder of the unused period, less the cost of the past 30 days.</li>
            <li><strong>Semester Pack:</strong> For semester packs, the guarantee period is 7 days. If you request a refund within this period, you will be refunded for the remainder of the unused semester, after deduction of the cost of the 7 days spent.</li>
            <li><strong>Monthly Pack:</strong> For monthly packs, the warranty period is 48 hours. If you request a refund within this period, you will be refunded without deduction of the cost of the 48 hours spent.</li>
          </ul>
          <strong className="block mb-2">How it Works?</strong>
          <p className="mb-4">
            If you wish to request a refund, simply contact our support via WhatsApp at {contactDetails.whatsappNumber}. We will process your request quickly and efficiently.
          </p>
          <p>
            Join Ajitfham Academy with confidence and discover teaching that makes a difference!
          </p>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicySection;
