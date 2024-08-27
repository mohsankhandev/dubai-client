




import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12 text-center">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-[68px] font-extrabold text-gray-900 mb-4 leading-tight">
        WELCOME TO
      </h1>
      
      {/* Second Heading */}
      <h2 className="text-2xl md:text-3xl lg:text-[48px] font-serif text-gray-800 mb-6 tracking-wider">
        OM SHREE INTERNATIONAL PVT. LTD
      </h2>
      
      {/* Description Text Box */}
      <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-8 text-gray-700 leading-relaxed">
        Our group was established in the year 1988, for INTERNATIONAL presence. OM SHREE INTERNATIONAL was established for the export of Agricultural products in the year 1993. The Company has travelled a long way since then. Keeping strictly to its policy of clarity and transparency with the buyers and very strict quality controls on the supply side, the Company has grown in terms of its geographical reach as well as the range of products that it exports.
      </p>
      
      {/* Centered Button */}
      <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        Learn More
      </button>
    </div>
  );
};

export default WelcomeSection;






























// import React from 'react';

// const WelcomeSection = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
//       {/* Main Heading */}
//       <h1 className="text-4xl md:text-6xl lg:text-[68px] font-bold mb-4">
//         WELCOME TO
//       </h1>
      
//       {/* Second Heading */}
//       <h2 className="text-3xl md:text-4xl lg:text-[48px] font-serif mb-6">
//         OM SHREE INTERNATIONAL PVT. LTD
//       </h2>
      
//       {/* Description Text Box */}
//       <p className="text-base md:text-lg lg:text-xl max-w-4xl mb-8">
//         Our group was established in the year 1988, for INTERNATIONAL presence. OM SHREE INTERNATIONAL was established for the export of Agricultural products in the year 1993. The Company has travelled a long way since then. Keeping strictly to its policy of clarity and transparency with the buyers and very strict quality controls on the supply side, the Company has grown in terms of its geographical reach as well as the range of products that it exports.
//       </p>
      
//       {/* Centered Button */}
//       <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-lg md:text-xl transition duration-300 ease-in-out">
//         Learn More
//       </button>
//     </div>
//   );
// };

// export default WelcomeSection;





















// import React from 'react';

// const FeaturesSection = () => {
//   const boxes = [
//     {
//       id: 1,
//       title: 'Mathematics 2Bac Sm',
//       coursesCount: 6,
//       price: '98 د.م.',
//       imageUrl: 'https://cdn.filestackcontent.com/elFL8LNT4SYTTmsLbgMM',
//       link: '/p/2bac-sm-annee-maths',
//     },
//     {
//       id: 2,
//       title: 'Physics chemistry 2Bac Sm',
//       coursesCount: 8,
//       price: '98 د.م.',
//       imageUrl: 'https://cdn.filestackcontent.com/6bSGZbicTqnYpgZiLqau',
//       link: '/p/2bac-sm-annee-physique-chimie',
//     },
//     {
//       id: 3,
//       title: 'Physics chemistry 2Bac Sm',
//       coursesCount: 8,
//       price: '98 د.م.',
//       imageUrl: 'https://cdn.filestackcontent.com/6bSGZbicTqnYpgZiLqau',
//       link: '/p/2bac-sm-annee-physique-chimie',
//     },
//   ];

//   return (
//     <section className="py-10 px-5 bg-red-600">
//       <div className="max-w-7xl mx-auto px-5 py-5 bg-yellow-300">
//         <h2 className="text-3xl font-bold text-center mb-5">2 Bac sm packs</h2>
//         <div className="flex flex-wrap justify-center gap-5">
//           {boxes.map((box) => (
//             <div
//               key={box.id}
//               className="bg-gray-100 rounded-lg transition-shadow duration-200 ease-in-out hover:shadow-lg w-full sm:w-[290px] flex flex-col"
//             >
//               <a href={box.link} className="block">
//                 <div className="relative h-0 pb-[56.25%] overflow-hidden rounded-t-lg">
//                   <img
//                     src={box.imageUrl}
//                     alt={box.title}
//                     className="absolute top-0 left-0 w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-4 flex flex-col justify-between items-center h-[225px]">
//                   <h3 className="text-xl font-semibold mb-2 text-center">{box.title}</h3>
//                   <div className="flex justify-between w-full">
//                     <span className="text-left">{box.coursesCount && `Courses: ${box.coursesCount}`}</span>
//                     <span className="text-right text-red-500">{box.price}</span>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;