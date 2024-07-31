import React from 'react';
import contactDetails from '../config'; // Adjust the path as needed

const FAQSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              How can I pay?
            </h3>
            <p className="text-gray-600 text-base">
              You can pay online on the Ajitfham Academy platform or by transfer through the bank or cash plus and wafacash.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              How can I access the courses and exercises after purchase?
            </h3>
            <p className="text-gray-600 text-base">
              After the online purchase, you will have direct access to the locked content of the platform.
              But if you pay by transfer, send the receipt by WhatsApp and you will have access the same day.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              How do the live sessions work?
            </h3>
            <p className="text-gray-600 text-base">
              Live sessions are interactive classes where you can ask questions in real time to the teacher. The links for the live sessions are sent by the teachers in the WhatsApp groups.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              How will I join the WhatsApp groups and get the teacher's contact details?
            </h3>
            <p className="text-gray-600 text-base">
              Simply, after registering, send a WhatsApp message to the number {contactDetails.whatsappNumber} which contains your account name (or email).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              How can I contact support if I have a problem?
            </h3>
            <p className="text-gray-600 text-base">
              You can contact our support via WhatsApp at {contactDetails.whatsappNumber}. For more information and assistance, contact us on WhatsApp.
            </p>
            <p className="text-center mt-4">
              <a 
                href={`https://wa.me/${contactDetails.whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block py-2 px-4 text-white bg-green-500 rounded-lg text-base font-medium hover:bg-green-600"
              >
                Contact us on WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
