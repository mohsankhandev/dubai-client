import React, { useEffect, useState } from 'react';
import SkeletonLoader from './Skeltonmain'; // Adjust the import path accordingly

// Simulated API Call
const fetchProducts = async () => {
  // Simulated delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    image: `https://picsum.photos/300?random=${index + 1}`
  }));
};

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: 8 }, (_, index) => <SkeletonLoader key={index} />)
            : products.map(product => (
              <div
                key={product.id}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white transition-opacity duration-300">
                  <span className="text-lg font-semibold">{product.name}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
















// import React from 'react';

// const PopularProducts = () => {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">Popular Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {Array.from({ length: 8 }).map((_, index) => (
//             <div
//               key={index}
//               className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
//             >
//               <img
//                 src={`https://via.placeholder.com/300?text=Product+${index + 1}`}
//                 alt={`Product ${index + 1}`}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <span className="text-lg font-semibold">Random Fill</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PopularProducts;








// import React from 'react';

// const Feactureb = () => {
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

// export default Feactureb;