import React from 'react';

// Example map image URL
const mapImageUrl = 'https://www.publicdomainpictures.net/pictures/40000/velka/world-map-1391078299wMK.jpg';

const InformationSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold mb-12 text-center">Our Global Reach and Regional Highlights</h2>

        <div className="lg:flex lg:items-start lg:space-x-8">
          {/* Left Side: Map Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 flex items-center justify-center">
            <div className="relative w-full h-80">
              {/* <img
                src={mapImageUrl}
                alt="World Map"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              /> */}
                  <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.275107578!2d72.753873!3d19.072831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c66b1c3f88bb%3A0x4b8c9b0e1f85ff!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689151139123!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            </div>
          </div>

          {/* Right Side: Information Boxes */}
          <div className="lg:w-1/2 flex flex-col space-y-8">
            <div className="flex flex-col h-full">
              <div className="space-y-8">
                {/* Row 1 */}
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between w-full">
                    <h3 className="text-xl font-semibold mb-2 text-center">THE AMERICAS</h3>
                    <p className="text-gray-700 text-center">USA, Canada, Mexico, Guatemala</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between w-full">
                    <h3 className="text-xl font-semibold mb-2 text-center">EUROPE</h3>
                    <p className="text-gray-700 text-center">UK, Belgium, Denmark, Germany, Netherlands, Norway, Spain, Sweden, Turkey</p>
                  </div>
                </div>
                {/* Row 2 */}
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between w-full">
                    <h3 className="text-xl font-semibold mb-2 text-center">ASIA</h3>
                    <p className="text-gray-700 text-center">Iraq, Jordan, Kuwait, Lebanon, Saudi Arabia, UAE</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between w-full">
                    <h3 className="text-xl font-semibold mb-2 text-center">AFRICA</h3>
                    <p className="text-gray-700 text-center">Algeria, Kenya, Egypt, Morocco, Tunisia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;

































// import React from 'react';

// const Feacturec = () => {
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

// export default Feacturec;
