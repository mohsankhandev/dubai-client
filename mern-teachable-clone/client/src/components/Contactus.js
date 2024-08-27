// import React from 'react';
// import exampleImage from '../asset/contacta.png';  // Adjust the path according to the location of your component

// const ContactUs = () => {
//   return (
//     <div>
//       {/* Top Div with Contact Us Text */}
//       <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mt-[96px] h-[210px] flex items-center justify-center text-white">
//         <div className="flex items-center">
//           <hr className="w-16 border-white mr-4" />
//           <div className="text-3xl font-bold">Contact Us</div>
//           <hr className="w-16 border-white ml-4" />
//         </div>
//       </div>

//       {/* Responsive Layout for Form and Image */}
//       <div className="flex flex-col lg:flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 lg:p-16">
//         {/* Image Section */}
//         <div className="lg:w-1/2 w-full h-auto flex items-center justify-center mb-8 lg:mb-0">
//           <img
//             src={exampleImage}
//             alt="Contact"
//             className="object-cover w-full h-full rounded-lg shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
//             style={{ maxWidth: '350px', maxHeight: '400px' }}
//           />
//         </div>

//         {/* Form Section */}
//         <div className="lg:w-1/2 w-full bg-white p-10 rounded-lg shadow-lg">
//           <p className="text-center mb-6 text-lg font-semibold text-gray-700">
//             We would love to hear from you! Please fill out the form below, and our team will get in touch with you shortly.
//           </p>

//           <form className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Your Name</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Company</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Enter your company name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Country</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Enter your country"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Enquiry Details</label>
//               <textarea
//                 className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 rows="4"
//                 placeholder="Enter your enquiry details"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Visit Us Section with Google Map and Info Boxes */}
//       <div className="relative">
//         {/* Header for Visit Us Section */}
//         <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 h-[210px] flex items-center justify-center text-white">
//           <div className="flex items-center">
//             <hr className="w-16 border-white mr-4" />
//             <div className="text-3xl font-bold">Visit Us </div>
//             <hr className="w-16 border-white ml-4" />
//           </div>
//         </div>

//         {/* Main Container for Google Map and Info Boxes */}
//         <div className="flex flex-col lg:flex-row lg:space-x-8 p-8 lg:p-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//           {/* Google Map Section */}
//           <div className="lg:w-1/2 w-full h-80 lg:h-[500px] mb-8 lg:mb-0">
//             <iframe
//               className="w-full h-full rounded-lg shadow-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.275107578!2d72.753873!3d19.072831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c66b1c3f88bb%3A0x4b8c9b0e1f85ff!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689151139123!5m2!1sen!2sin"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>

//           {/* Info Boxes Section */}
//           <div className="lg:w-1/2 w-full flex flex-col space-y-4 lg:space-y-8 mb-4 lg:mb-0">
//             {/* Address Box */}
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
//               <h3 className="text-lg font-semibold mb-2">📍 Our Address</h3>
//               <p className="mb-2">702, Orion Business Park,</p>
//               <p className="mb-2">7th Floor, Nehru Road, Santacruz (E),</p>
//               <p className="mb-2">Mumbai - 400055, India</p>
//             </div>

//             {/* Contact Box */}
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow mt-4 duration-300 ease-in-out">
//               <h3 className="text-lg font-semibold mb-2">📞 Contact Us</h3>
//               <p className="mb-2">Phone: +91-22-68393200</p>
//               <p>
//                 Email:{' '}
//                 <a href="mailto:adm@omshreegroup.com" className="text-indigo-600">
//                   adm@omshreegroup.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Careers Section */}
//       <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 h-[210px] flex items-center justify-center text-white mt-16">
//         <div className="flex items-center">
//           <hr className="w-16 border-white mr-4" />
//           <div className="text-3xl font-bold">Careers</div>
//           <hr className="w-16 border-white ml-4" />
//         </div>
//       </div>

//       <div className="max-w-3xl mx-auto mt-12 p-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-extrabold mb-6 text-center">🌟 Careers @OMSHREE</h2>

//         <div className="space-y-6">
//           <p className="leading-relaxed text-lg">
//             Come join our team and help Indian produce reach every corner of the world. The spirit of our company has always been our people. We believe growth and success of business is based on the professional and personal growth of the employee. We recognize and encourage skills, professional intelligence, and abilities. We provide a congenial working environment and motivate genuine and appropriate manpower.
//           </p>

//           <p className="leading-relaxed text-lg">
//             We are on a constant hunt for talented professionals. If you are an experienced professional who is skilled, talented, and a hard performer, and if you are one of those who redeem challenges to meet success with cutting-edge innovative ideas and growth in life, OM Shree Group is the place for you.
//           </p>

//           <div className="flex justify-center">
//             <a
//               href="mailto:careers@omshreegroup.com"
//               className="inline-block bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-indigo-600 hover:text-white"
//             >
//               Email Your CV
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;















// import React from 'react';
// import exampleImage from '../asset/contacta.png'; // Adjust the path according to the location of your component

// const ContactUs = () => {
//   return (
//     <div>
//       {/* Top Div with Contact Us Text */}
//       <div className="relative bg-gradient-to-r from-cyan-800 to-blue-900 mt-[96px] h-[210px] flex items-center justify-center text-white">
//         <div className="flex items-center">
//           <hr className="w-16 border-white mr-4" />
//           <div className="text-3xl font-bold">📞 Contact Us</div>
//           <hr className="w-16 border-white ml-4" />
//         </div>
//       </div>

//       {/* Responsive Layout for Form and Image */}
//       <div className="flex flex-col lg:flex-row bg-gradient-to-r from-blue-700 to-cyan-600 p-8 lg:p-16">
//         {/* Image Section */}
//         <div className="lg:w-1/2 w-full h-auto flex items-center justify-center mb-8 lg:mb-0">
//           <img
//             src={exampleImage}
//             alt="Contact"
//             className="object-cover w-full h-full rounded-lg shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
//             style={{ maxWidth: '350px', maxHeight: '400px' }} // Increased max width and height for a more prominent image
//           />
//         </div>

//         {/* Form Section */}
//         <div className="lg:w-1/2 w-full bg-white p-10 rounded-lg shadow-lg">
//           <p className="text-center mb-6 text-lg font-semibold text-gray-700">
//             We would love to hear from you! Please fill out the form below, and our team will get in touch with you shortly.
//           </p>

//           <form className="space-y-6 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg shadow-xl">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Your Name</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition ease-in-out duration-150"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Company</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition ease-in-out duration-150"
//                 placeholder="Enter your company name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition ease-in-out duration-150"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Country</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition ease-in-out duration-150"
//                 placeholder="Enter your country"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Enquiry Details</label>
//               <textarea
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition ease-in-out duration-150"
//                 rows="4"
//                 placeholder="Enter your enquiry details"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-cyan-700 transition duration-300 ease-in-out"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Visit Us Section with Google Map and Info Boxes */}
//       <div className="relative">
//         {/* Header for Visit Us Section */}
//         <div className="relative bg-gradient-to-r from-cyan-800 to-blue-900 h-[210px] flex items-center justify-center text-white">
//           <div className="flex items-center">
//             <hr className="w-16 border-white mr-4" />
//             <div className="text-3xl font-bold">🌍 Visit Us</div>
//             <hr className="w-16 border-white ml-4" />
//           </div>
//         </div>

//         {/* Main Container for Google Map and Info Boxes */}
//         <div className="flex flex-col lg:flex-row lg:space-x-8 p-8 lg:p-16 bg-gradient-to-r from-blue-600 to-cyan-500">
//           {/* Google Map Section */}
//           <div className="lg:w-1/2 w-full h-80 lg:h-[500px] mb-8 lg:mb-0">
//             <iframe
//               className="w-full h-full rounded-lg shadow-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.275107578!2d72.753873!3d19.072831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c66b1c3f88bb%3A0x4b8c9b0e1f85ff!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689151139123!5m2!1sen!2sin"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>


//           {/* Info Boxes Section */}
//           <div className="lg:w-1/2 w-full flex flex-col space-y-4 lg:space-y-8 mb-4 lg:mb-0">
//             {/* Address Box */}
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
//               <h3 className="text-lg font-semibold mb-2">📍 Our Address</h3>
//               <p className="mb-2">702, Orion Business Park,</p>
//               <p className="mb-2">7th Floor, Nehru Road, Santacruz (E),</p>
//               <p className="mb-2">Mumbai - 400055, India</p>
//             </div>

//             {/* Contact Box */}
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
//               <h3 className="text-lg font-semibold mb-2">📞 Contact Us</h3>
//               <p className="mb-2">Phone: +91-22-68393200</p>
//               <p>
//                 Email:{' '}
//                 <a href="mailto:adm@omshreegroup.com" className="text-indigo-600">
//                   adm@omshreegroup.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>


//       <div className="relative bg-gradient-to-r from-cyan-800 to-blue-900 h-[210px] flex items-center justify-center text-white">
//   <div className="flex items-center">
//     <hr className="w-16 border-white mr-4" />
//     <div className="text-3xl font-bold">💼 Careers @ OM Shree</div>
//     <hr className="w-16 border-white ml-4" />
//   </div>
// </div>



//       {/* Careers Section */}

//       <div className=" bg-gradient-to-r from-blue-600 to-cyan-500">




//       <div className="max-w-3xl mx-auto  p-8 bg-gradient-to-r from-cyan-700 to-blue-600 text-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-extrabold mb-6 text-center">🌟 Careers @ OM Shree 🌟</h2>

//         <div className="space-y-6">
//           <p className="leading-relaxed text-lg">
//             At OM Shree, we are dedicated to expanding our global presence while embodying the rich essence of Indian agriculture. Our mission is to connect the world with India's finest agricultural products, showcasing the heart of our economy on a global stage. We are looking for passionate and driven individuals to join our team and contribute to our mission.
//           </p>

//           <p className="leading-relaxed text-lg">
//             As a member of OM Shree, you'll have the opportunity to work in a dynamic and international environment where your contributions will directly impact our global reach and success. We value innovation, dedication, and excellence, and we offer an environment where your career can thrive.
//           </p>

//           <p className="leading-relaxed text-lg">
//             Explore our career opportunities and discover how you can be part of a team that is making a significant difference in the international marketplace while staying true to the heart of Indian agriculture. If you are driven, innovative, and eager to make a difference, we would love to hear from you!
//           </p>

//           <p className="leading-relaxed text-lg">
//             Explore our current openings and find a role that matches your passion and expertise. Be a part of a team that is making a significant impact in the global marketplace while staying true to the heart of Indian agriculture.
//           </p>

//           <div className="text-center mt-8">
//             <a
//               href="/careers"
//               className="inline-block py-3 px-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold rounded-lg shadow-lg hover:bg-teal-800 transition duration-300 ease-in-out"
//             >
//               View Openings
//             </a>
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;









// import React from 'react';
// import exampleImage from '../asset/contacta.png'; // Adjust the path according to the location of your component

// const ContactUs = () => {
//   return (
//     <div>
//       {/* Top Div with Contact Us Text */}
//       <div className="relative bg-gradient-to-r from-teal-800 to-teal-900 mt-[96px] h-[210px] flex items-center justify-center text-white">
//         <div className="flex items-center">
//           <hr className="w-16 border-white mr-4" />
//           <div className="text-3xl font-bold">📞 Contact Us</div>
//           <hr className="w-16 border-white ml-4" />
//         </div>
//       </div>

//       {/* Responsive Layout for Form and Image */}
//       <div className="flex flex-col lg:flex-row bg-gradient-to-r from-teal-600 to-teal-400 p-8 lg:p-16">
//         {/* Image Section */}
//         <div className="lg:w-1/2 w-full h-auto flex items-center justify-center mb-8 lg:mb-0">
//           <img
//             src={exampleImage}
//             alt="Contact"
//             className="object-cover w-full h-full rounded-lg shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
//             style={{ maxWidth: '350px', maxHeight: '400px' }} // Increased max width and height for a more prominent image
//           />
//         </div>

//         {/* Form Section */}
//         <div className="lg:w-1/2 w-full bg-white p-10 rounded-lg shadow-lg">
//           <p className="text-center mb-6 text-lg font-semibold text-gray-700">
//             We would love to hear from you! Please fill out the form below, and our team will get in touch with you shortly.
//           </p>

//           <form className="space-y-6 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg shadow-xl">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Your Name</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition ease-in-out duration-150"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Company</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition ease-in-out duration-150"
//                 placeholder="Enter your company name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition ease-in-out duration-150"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Country</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition ease-in-out duration-150"
//                 placeholder="Enter your country"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Enquiry Details</label>
//               <textarea
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition ease-in-out duration-150"
//                 rows="4"
//                 placeholder="Enter your enquiry details"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 px-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold rounded-lg shadow-lg hover:bg-teal-800 transition duration-300 ease-in-out"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Visit Us Section with Google Map and Info Boxes */}
//       <div className="relative">
//         {/* Header for Visit Us Section */}
//         <div className="relative bg-gradient-to-r from-teal-800 to-teal-900 h-[210px] flex items-center justify-center text-white">
//           <div className="flex items-center">
//             <hr className="w-16 border-white mr-4" />
//             <div className="text-3xl font-bold">🌍 Visit Us</div>
//             <hr className="w-16 border-white ml-4" />
//           </div>
//         </div>

//         {/* Main Container for Google Map and Info Boxes */}
//         <div className="flex flex-col lg:flex-row lg:space-x-8 p-8 lg:p-16 bg-gradient-to-r from-teal-600 to-teal-400">
//           {/* Google Map Section */}
//           <div className="lg:w-1/2 w-full h-80 lg:h-[500px] mb-8 lg:mb-0">
//             <iframe
//               className="w-full h-full rounded-lg shadow-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.275107578!2d72.753873!3d19.072831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c66b1c3f88bb%3A0x4b8c9b0e1f85ff!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689151139123!5m2!1sen!2sin"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>

//           {/* Info Boxes Section */}
//           <div className="lg:w-1/2 w-full flex flex-col space-y-4 lg:space-y-8 mb-4 lg:mb-0">
//             {/* Address Box */}
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
//               <h3 className="text-lg font-semibold mb-2">📍 Our Address</h3>
//               <p className="mb-2">702, Orion Business Park,</p>
//               <p className="mb-2">7th Floor, Nehru Road, Santacruz (E),</p>
//               <p className="mb-2">Mumbai - 400055, India</p>
//             </div>

//             {/* Contact Box */}
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
//               <h3 className="text-lg font-semibold mb-2">📞 Contact Us</h3>
//               <p className="mb-2">Phone: +91-22-68393200</p>
//               <p>
//                 Email:{' '}
//                 <a href="mailto:adm@omshreegroup.com" className="text-indigo-600">
//                   adm@omshreegroup.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Careers Section */}
//       <div className="bg-gradient-to-r from-teal-600 to-teal-400 p-8 lg:p-16">
//         <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-teal-700 to-teal-500 text-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-extrabold mb-6 text-center">🌟 Careers @ OM Shree 🌟</h2>

//           <div className="space-y-6">
//             <p className="leading-relaxed text-lg">
//               At OM Shree, we are dedicated to expanding our global presence while embodying the rich essence of Indian agriculture. Our mission is to connect the world with India's finest agricultural products, showcasing the heart of our economy on a global stage. We are looking for passionate and driven individuals to join our team and contribute to our mission.
//             </p>

//             <p className="leading-relaxed text-lg">
//               As a member of OM Shree, you'll have the opportunity to work in a dynamic and international environment where your contributions will directly impact our global reach and success. We value innovation, dedication, and excellence, and we offer an environment where your skills and efforts are recognized and rewarded.
//             </p>

//             <p className="text-lg font-semibold">
//               Interested candidates can reach out to us with their resume and a brief cover letter detailing their passion and suitability for a role at OM Shree. We look forward to hearing from you!
//             </p>

//             <div className="flex justify-center">
//               <a
//                 href="mailto:careers@omshreegroup.com"
//                 className="bg-white text-teal-800 py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-teal-100 transition duration-300 ease-in-out"
//               >
//                 Apply Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;







// import React from 'react';
// import exampleImage from '../asset/contacta.png'; // Adjust the path according to the location of your component

// const ContactUs = () => {
//   return (
//     <div>
//       {/* Top Div with Contact Us Text */}
//       <div className="relative bg-gradient-to-r from-deep-blue to-teal-800 mt-[96px] h-[210px] flex items-center justify-center text-white">
//         <div className="flex items-center">
//           <hr className="w-16 border-white mr-4" />
//           <div className="text-3xl font-bold">📞 Contact Us</div>
//           <hr className="w-16 border-white ml-4" />
//         </div>
//       </div>

//       {/* Responsive Layout for Form and Image */}
//       <div className="flex flex-col lg:flex-row bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 lg:p-16">
//         {/* Image Section */}
//         <div className="lg:w-1/2 w-full h-auto flex items-center justify-center mb-8 lg:mb-0">
//           <img
//             src={exampleImage}
//             alt="Contact"
//             className="object-cover w-full h-full rounded-lg shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
//             style={{ maxWidth: '350px', maxHeight: '400px' }} // Increased max width and height for a more prominent image
//           />
//         </div>

//         {/* Form Section */}
//         <div className="lg:w-1/2 w-full bg-white p-10 rounded-lg shadow-lg">
//           <p className="text-center mb-6 text-lg font-semibold text-charcoal-gray">
//             We would love to hear from you! Please fill out the form below, and our team will get in touch with you shortly.
//           </p>

//           <form className="space-y-6 bg-gradient-to-r from-gray-50 to-light-gray p-8 rounded-lg shadow-xl">
//             <div>
//               <label className="block text-sm font-medium text-charcoal-gray">Your Name</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition ease-in-out duration-150"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-charcoal-gray">Company</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition ease-in-out duration-150"
//                 placeholder="Enter your company name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-charcoal-gray">Email</label>
//               <input
//                 type="email"
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition ease-in-out duration-150"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-charcoal-gray">Country</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition ease-in-out duration-150"
//                 placeholder="Enter your country"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-charcoal-gray">Enquiry Details</label>
//               <textarea
//                 className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition ease-in-out duration-150"
//                 rows="4"
//                 placeholder="Enter your enquiry details"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 px-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold rounded-lg shadow-lg hover:bg-teal-800 transition duration-300 ease-in-out"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Visit Us Section with Google Map and Info Boxes */}
//       <div className="relative">
//         {/* Header for Visit Us Section */}
//         <div className="relative bg-gradient-to-r from-deep-blue to-teal-800 h-[210px] flex items-center justify-center text-white">
//           <div className="flex items-center">
//             <hr className="w-16 border-white mr-4" />
//             <div className="text-3xl font-bold">🌍 Visit Us</div>
//             <hr className="w-16 border-white ml-4" />
//           </div>
//         </div>

//         {/* Main Container for Google Map and Info Boxes */}
//         <div className="flex flex-col lg:flex-row lg:space-x-8 p-8 lg:p-16 bg-gradient-to-r from-light-gray to-teal-200">
//           {/* Google Map Section */}
//           <div className="lg:w-1/2 w-full h-80 lg:h-[500px] mb-8 lg:mb-0">
//             <iframe
//               className="w-full h-full rounded-lg shadow-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.275107578!2d72.753873!3d19.072831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c66b1c3f88bb%3A0x4b8c9b0e1f85ff!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689151139123!5m2!1sen!2sin"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>

//           {/* Info Boxes Section */}
//           <div className="lg:w-1/2 w-full flex flex-col space-y-4 lg:space-y-8 mb-4 lg:mb-0">
//             {/* Address Box */}
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
//               <h3 className="text-lg font-semibold mb-2 text-charcoal-gray">📍 Our Address</h3>
//               <p className="mb-2">702, Orion Business Park,</p>
//               <p className="mb-2">7th Floor, Nehru Road, Santacruz (E),</p>
//               <p className="mb-2">Mumbai - 400055, India</p>
//             </div>

//             {/* Contact Box */}
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
//               <h3 className="text-lg font-semibold mb-2 text-charcoal-gray">📞 Contact Us</h3>
//               <p className="mb-2">Phone: +91-22-68393200</p>
//               <p>
//                 Email:{' '}
//                 <a href="mailto:adm@omshreegroup.com" className="text-teal-600">
//                   adm@omshreegroup.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Careers Section */}
//       <div className="bg-gradient-to-r from-light-gray to-teal-200 p-8 lg:p-16">
//   <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-teal-700 to-teal-500 text-white rounded-lg shadow-lg">
//     <h2 className="text-3xl font-extrabold mb-6 text-center flex items-center justify-center">
//       🌟 Careers @ OM Shree 🌟
//     </h2>

//     <div className="space-y-6">
//       <p className="leading-relaxed text-lg">
//         🚀 At OM Shree, we are dedicated to expanding our global presence while embodying the rich essence of Indian agriculture. Our mission is to connect the world with India's finest agricultural products. We are committed to creating an environment where talent flourishes, creativity thrives, and individual contributions are valued.
//       </p>

//       <p className="text-lg font-semibold">
//         🌟 Interested candidates can reach out to us with their resume and a brief cover letter detailing their passion and suitability for a role at OM Shree. We look forward to hearing from you!
//       </p>

//       <div className="flex justify-center">
//         <a
//           href="mailto:careers@omshreegroup.com"
//           className="bg-white text-teal-800 py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-teal-100 transition duration-300 ease-in-out flex items-center justify-center"
//         >
//           <span className="mr-2">📧</span> Apply Now
//         </a>
//       </div>
//     </div>
//   </div>
// </div>

//     </div>
//   );
// };

// export default ContactUs;


import React, { useState, useEffect } from 'react';
import exampleImage from '../asset/contacta.webp'; // Adjust the path according to the location of your component

const skeletonStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: '#e0e0e0',
  borderRadius: '8px',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
};

const pulseKeyframes = `
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;





const ContactUs = () => {
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed for your use case
  }, []);
  
  return (
    <div>
      {/* Top Div with Contact Us Text */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-800 mt-[96px] h-[210px] flex items-center justify-center text-white">
        <div className="flex items-center">
          <hr className="w-16 border-white mr-4" />
          <div className="text-3xl font-bold">📞 Contact Us</div>
          <hr className="w-16 border-white ml-4" />
        </div>
      </div>

      {/* Responsive Layout for Form and Image */}
      <div className="flex flex-col lg:flex-row bg-gradient-to-r from-gray-100 to-gray-200  lg:p-16">
        {/* Image Section */}
        {/* <div className="lg:w-1/2 w-full  h-auto flex items-center justify-center mb-8 lg:mb-0">
          <img
            src={exampleImage}
            alt="Contact"
            className="object-cover w-full h-full rounded-lg shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{ maxWidth: '350px', maxHeight: '400px' }} // Increased max width and height for a more prominent image
          />
        </div> */}
           <div className="lg:w-1/2 text-center flex flex-col items-center justify-center">
           {loading ? (
                     <div style={skeletonStyle} />

          ) : imageError ? (
            <div className="text-red-500">Failed to load image.</div>
          ) : (
            // <img
            //   src={exampleImage}
            //   alt="Contact"
            //   className="shrink-0 w-5/6 rounded-lg shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
            //   onError={() => setImageError(true)}
            // />
            <img  
            src={exampleImage}
            alt="Contact"
            onError={() => setImageError(true)}
            class="shrink-0 w-5/6" 
            />


          )}
          {/* <img  src={exampleImage} class="shrink-0 w-5/6" /> */}
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 w-full bg-red-400">
        {/* <div className="lg:w-1/2 w-full bg-red-400 lg:p-10 rounded-lg shadow-lg"> */}
          {/* <p className="text-center mb-6 text-lg font-semibold text-gray-700">
            We would love to hear from you! Please fill out the form below, and our team will get in touch with you shortly.
          </p> */}

          <form className="space-y-6 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg shadow-xl">
          <p className="text-center mb-6 text-lg font-semibold text-gray-700">
            We would love to hear from you! Please fill out the form below, and our team will get in touch with you shortly.
          </p>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150"
                placeholder="Enter your company name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150"
                placeholder="Enter your country"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Enquiry Details</label>
              <textarea
                className="mt-1 block w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150"
                rows="4"
                placeholder="Enter your enquiry details"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-lg shadow-lg hover:bg-purple-800 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Visit Us Section with Google Map and Info Boxes */}
      <div className="relative">
        {/* Header for Visit Us Section */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-800 h-[210px] flex items-center justify-center text-white">
          <div className="flex items-center">
            <hr className="w-16 border-white mr-4" />
            <div className="text-3xl font-bold">🌍 Visit Us</div>
            <hr className="w-16 border-white ml-4" />
          </div>
        </div>

        {/* Main Container for Google Map and Info Boxes */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 p-8 lg:p-16 bg-gradient-to-r from-gray-100 to-gray-200">
          {/* Google Map Section */}
          <div className="lg:w-1/2 w-full h-80 lg:h-[500px] mb-8 lg:mb-0">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.275107578!2d72.753873!3d19.072831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c66b1c3f88bb%3A0x4b8c9b0e1f85ff!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689151139123!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Info Boxes Section */}
          <div className="lg:w-1/2 w-full flex flex-col space-y-4 lg:space-y-8 mb-4 lg:mb-0">
            {/* Address Box */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">📍 Our Address</h3>
              <p className="mb-2">702, Orion Business Park,</p>
              <p className="mb-2">7th Floor, Nehru Road, Santacruz (E),</p>
              <p className="mb-2">Mumbai - 400055, India</p>
            </div>

            {/* Contact Box */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">📞 Contact Us</h3>
              <p className="mb-2">Phone: +91-22-68393200</p>
              <p>
                Email:{' '}
                <a href="mailto:adm@omshreegroup.com" className="text-indigo-600">
                  adm@op.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-800 h-[210px] flex items-center justify-center text-white">
        <div className="flex items-center">
          <hr className="w-16 border-white mr-4" />
          <div className="text-3xl font-bold">🌍 Careers </div>
          <hr className="w-16 border-white ml-4" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 lg:p-16">
        <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Join Our Team</h2>
          <p className="text-gray-700 mb-4">
            At Omshree Group, we're always looking for talented and motivated individuals to join our team. If you're passionate about
            your work and ready to make a difference, we want to hear from you!
          </p>
          <a
            href="/careers"
            className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;





























