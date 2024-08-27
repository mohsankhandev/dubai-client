
















import React, { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Sample data for different categories
const data = {
  arabic: {
    heading: "Explore Our Arabic Coffee",
    description: "Discover a variety of rich and aromatic Arabic coffees.",
    products: [
      { id: 1, name: 'Arabic Coffee 1', price: '$10', image: 'https://via.placeholder.com/300x200' },
      { id: 2, name: 'Arabic Coffee 2', price: '$12', image: 'https://via.placeholder.com/300x200' },
      { id: 3, name: 'Arabic Coffee 3', price: '$15', image: 'https://via.placeholder.com/300x200' },
      { id: 4, name: 'Arabic Coffee 4', price: '$8', image: 'https://via.placeholder.com/300x200' },
    ],
  },
  asian: {
    heading: "Discover Asian Coffee Delights",
    description: "Experience the bold and unique flavors of Asian coffees.",
    products: [
      { id: 1, name: 'Asian Coffee 1', price: '$14', image: 'https://via.placeholder.com/300x200' },
      { id: 2, name: 'Asian Coffee 2', price: '$11', image: 'https://via.placeholder.com/300x200' },
      { id: 3, name: 'Asian Coffee 3', price: '$13', image: 'https://via.placeholder.com/300x200' },
      { id: 4, name: 'Asian Coffee 4', price: '$9', image: 'https://via.placeholder.com/300x200' },
    ],
  },
  other: {
    heading: "Explore Other Coffee Varieties",
    description: "Find exotic and specialty coffees from around the world.",
    products: [
      { id: 1, name: 'Other Coffee 1', price: '$16', image: 'https://via.placeholder.com/300x200' },
      { id: 2, name: 'Other Coffee 2', price: '$18', image: 'https://via.placeholder.com/300x200' },
      { id: 3, name: 'Other Coffee 3', price: '$20', image: 'https://via.placeholder.com/300x200' },
      { id: 4, name: 'Other Coffee 4', price: '$22', image: 'https://via.placeholder.com/300x200' },
    ],
  },
};

const ProductComponent = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || 'arabic');

   // Update selectedCategory when the URL parameter changes
   useEffect(() => {
    setSelectedCategory(category);
  }, [category]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const { heading, description, products } = data[selectedCategory] || {
    heading: 'Category Not Found',
    description: 'No products available.',
    products: [],
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-[96px]">
      {/* Navigation Menu */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-6 bg-gray-800" style={{ height: '200px' }}>
        <ul className="flex flex-wrap justify-center w-full space-x-2 md:space-x-6 mt-auto">
          <li className="flex-1 text-center">
            <button
              className={`w-full py-2 px-4 md:py-3 md:px-6 rounded ${selectedCategory === 'arabic' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-500 text-sm md:text-base`}
              onClick={() => handleCategoryChange('arabic')}
            >
              Arabic Coffee
            </button>
          </li>
          <li className="flex-1 text-center">
            <button
              className={`w-full py-2 px-4 md:py-3 md:px-6 rounded ${selectedCategory === 'asian' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-500 text-sm md:text-base`}
              onClick={() => handleCategoryChange('asian')}
            >
              Asian Coffee
            </button>
          </li>
          <li className="flex-1 text-center">
            <button
              className={`w-full py-2 px-4 md:py-3 md:px-6 rounded ${selectedCategory === 'other' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'} hover:bg-blue-500 text-sm md:text-base`}
              onClick={() => handleCategoryChange('other')}
            >
              Other Coffee
            </button>
          </li>
        </ul>
      </div>

      {/* Heading and Description */}
      <div className="text-center mb-8 mt-9">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">{heading}</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.length > 0 ? (
          products.map((product) => (
            <a key={product.id} href="#" className="relative block border border-gray-200 rounded overflow-hidden group">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-white text-md mb-2">{product.price}</p>
                <button className="bg-blue-600 text-white py-1 px-4 rounded">View Details</button>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">View Details</button>
              </div>
            </a>
          ))
        ) : (
          <p className="text-center text-gray-600">No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductComponent;
































// import React, { useState } from 'react';

// // Sample data for different categories
// const data = {
//   arabic: {
//     heading: "Explore Our Arabic Coffee",
//     description: "Discover a variety of rich and aromatic Arabic coffees.",
//     products: [
//       { id: 1, name: 'Arabic Coffee 1', price: '$10', image: 'https://via.placeholder.com/300x200' },
//       { id: 2, name: 'Arabic Coffee 2', price: '$12', image: 'https://via.placeholder.com/300x200' },
//       { id: 3, name: 'Arabic Coffee 3', price: '$15', image: 'https://via.placeholder.com/300x200' },
//       { id: 4, name: 'Arabic Coffee 4', price: '$8', image: 'https://via.placeholder.com/300x200' },
//     ],
//   },
//   asian: {
//     heading: "Discover Asian Coffee Delights",
//     description: "Experience the bold and unique flavors of Asian coffees.",
//     products: [
//       { id: 1, name: 'Asian Coffee 1', price: '$14', image: 'https://via.placeholder.com/300x200' },
//       { id: 2, name: 'Asian Coffee 2', price: '$11', image: 'https://via.placeholder.com/300x200' },
//       { id: 3, name: 'Asian Coffee 3', price: '$13', image: 'https://via.placeholder.com/300x200' },
//       { id: 4, name: 'Asian Coffee 4', price: '$9', image: 'https://via.placeholder.com/300x200' },
//     ],
//   },
//   other: {
//     heading: "Explore Other Coffee Varieties",
//     description: "Find exotic and specialty coffees from around the world.",
//     products: [
//       { id: 1, name: 'Other Coffee 1', price: '$16', image: 'https://via.placeholder.com/300x200' },
//       { id: 2, name: 'Other Coffee 2', price: '$18', image: 'https://via.placeholder.com/300x200' },
//       { id: 3, name: 'Other Coffee 3', price: '$20', image: 'https://via.placeholder.com/300x200' },
//       { id: 4, name: 'Other Coffee 4', price: '$22', image: 'https://via.placeholder.com/300x200' },
//     ],
//   },
// };

// const ProductComponent = () => {
//   const [selectedCategory, setSelectedCategory] = useState('arabic');

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const { heading, description, products } = data[selectedCategory];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Navigation Menu */}
//       {/* <div className="flex flex-col md:flex-row  items-center mb-6 bg-black" style={{ height: '200px' }}>
//         <ul className="flex flex-wrap justify-center w-full space-x-2 md:space-x-6 ">
//           <li className="flex-1">
//             <button
//               className={`w-full py-2 px-4 rounded ${selectedCategory === 'arabic' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('arabic')}
//             >
//               Arabic Coffee
//             </button>
//           </li>
//           <li className="flex-1">
//             <button
//               className={`w-full py-2 px-4 rounded ${selectedCategory === 'asian' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('asian')}
//             >
//               Asian Coffee
//             </button>
//           </li>
//           <li className="flex-1">
//             <button
//               className={`w-full py-2 px-2 rounded ${selectedCategory === 'other' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('other')}
//             >
//               Other Coffee
//             </button>
//           </li>
//         </ul>
//       </div> */}

// {/* <div className="flex flex-col md:flex-row items-center mb-6 bg-black" style={{ height: '200px' }}>
//   <ul className="flex flex-wrap justify-center w-full space-x-2 md:space-x-6 mt-auto">
//     <li className="flex-1">
//       <button
//         className={` py-2 px-4 md:py-3 md:px-6 rounded ${selectedCategory === 'arabic' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//         onClick={() => handleCategoryChange('arabic')}
//       >
//         Arabic Coffee
//       </button>
//     </li>
//     <li className="flex-1">
//       <button
//         className={` py-2 px-4 md:py-3 md:px-6 rounded ${selectedCategory === 'asian' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//         onClick={() => handleCategoryChange('asian')}
//       >
//         Asian Coffee
//       </button>
//     </li>
//     <li className="flex-1">
//       <button
//         className={` py-2 px-4 md:py-3 md:px-6 rounded ${selectedCategory === 'other' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//         onClick={() => handleCategoryChange('other')}
//       >
//         Other Coffee
//       </button>
//     </li>
//   </ul>
// </div> */}

// <div className="flex flex-col md:flex-row items-center justify-center mb-6 bg-black" style={{ height: '200px' }}>
//   <ul className="flex flex-wrap justify-center w-full space-x-2 md:space-x-6 mt-auto">
//     <li className="flex-1 text-center">
//       <button
//         className={`w-full py-2 px-4 md:py-3 md:px-6 rounded ${selectedCategory === 'arabic' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-red-600 text-sm md:text-base`}
//         onClick={() => handleCategoryChange('arabic')}
//       >
//         Arabic Coffee
//       </button>
//     </li>
//     <li className="flex-1 text-center">
//       <button
//         className={`w-full py-2 px-4 md:py-3 md:px-6 rounded ${selectedCategory === 'asian' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-red-600 text-sm md:text-base`}
//         onClick={() => handleCategoryChange('asian')}
//       >
//         Asian Coffee
//       </button>
//     </li>
//     <li className="flex-1 text-center">
//       <button
//         className={`w-full py-2 px-4 md:py-3 md:px-6 rounded ${selectedCategory === 'other' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-red-600 text-sm md:text-base`}
//         onClick={() => handleCategoryChange('other')}
//       >
//         Other Coffee
//       </button>
//     </li>
//   </ul>
// </div>





//       {/* Heading and Description */}
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold mb-2">{heading}</h2>
//         <p className="text-gray-600">{description}</p>
//       </div>

//       {/* Product Grid */}
//       <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {products.map((product) => (
//           <a key={product.id} href="#" className="relative block border border-gray-300 rounded overflow-hidden group">
//             <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//             <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <h3 className="text-white text-lg font-semibold mb-1">{product.name}</h3>
//               <p className="text-white text-md mb-2">{product.price}</p>
//               <button className="bg-red-500 text-white py-1 px-4 rounded">View Details</button>
//             </div>
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-gray-600">{product.price}</p>
//               <button className="mt-2 bg-red-500 text-white py-1 px-4 rounded ">View Details</button>
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductComponent;













// import React, { useState } from 'react';

// // Sample data for different categories
// const data = {
//   arabic: {
//     heading: "Explore Our Arabic Coffee",
//     description: "Discover a variety of rich and aromatic Arabic coffees.",
//     products: [
//       { id: 1, name: 'Arabic Coffee 1', price: '$10', image: 'https://via.placeholder.com/300x200' },
//       { id: 2, name: 'Arabic Coffee 2', price: '$12', image: 'https://via.placeholder.com/300x200' },
//       { id: 3, name: 'Arabic Coffee 3', price: '$15', image: 'https://via.placeholder.com/300x200' },
//       { id: 4, name: 'Arabic Coffee 4', price: '$8', image: 'https://via.placeholder.com/300x200' },
//     ],
//   },
//   asian: {
//     heading: "Discover Asian Coffee Delights",
//     description: "Experience the bold and unique flavors of Asian coffees.",
//     products: [
//       { id: 1, name: 'Asian Coffee 1', price: '$14', image: 'https://via.placeholder.com/300x200' },
//       { id: 2, name: 'Asian Coffee 2', price: '$11', image: 'https://via.placeholder.com/300x200' },
//       { id: 3, name: 'Asian Coffee 3', price: '$13', image: 'https://via.placeholder.com/300x200' },
//       { id: 4, name: 'Asian Coffee 4', price: '$9', image: 'https://via.placeholder.com/300x200' },
//     ],
//   },
//   other: {
//     heading: "Explore Other Coffee Varieties",
//     description: "Find exotic and specialty coffees from around the world.",
//     products: [
//       { id: 1, name: 'Other Coffee 1', price: '$16', image: 'https://via.placeholder.com/300x200' },
//       { id: 2, name: 'Other Coffee 2', price: '$18', image: 'https://via.placeholder.com/300x200' },
//       { id: 3, name: 'Other Coffee 3', price: '$20', image: 'https://via.placeholder.com/300x200' },
//       { id: 4, name: 'Other Coffee 4', price: '$22', image: 'https://via.placeholder.com/300x200' },
//     ],
//   },
// };

// const ProductComponent = () => {
//   const [selectedCategory, setSelectedCategory] = useState('arabic');

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const { heading, description, products } = data[selectedCategory];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Navigation Menu */}
//       <div className="flex justify-center py-8 items-center mb-6 bg-black" style={{ height: '100px' }}>
//         <ul className="flex space-x-4">
//           <li>
//             <button
//               className={`py-2 px-4 rounded ${selectedCategory === 'arabic' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('arabic')}
//               // style={{ height: '100px' }}
//             >
//               Arabic Coffee
//             </button>
//           </li>
//           <li>
//             <button
//               className={`py-2 px-4 rounded ${selectedCategory === 'asian' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('asian')}
//               // style={{ height: '100px' }}
//             >
//               Asian Coffee
//             </button>
//           </li>
//           <li>
//             <button
//               className={`py-2 px-4 rounded ${selectedCategory === 'other' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('other')}
//               // style={{ height: '100px' }}
//             >
//               Other Coffee
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Heading and Description */}
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold mb-2">{heading}</h2>
//         <p className="text-gray-600">{description}</p>
//       </div>

//       {/* Product Grid */}
//       <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {products.map((product) => (
//           <a key={product.id} href="#" className="relative block border border-gray-300 rounded overflow-hidden group">
//             <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//             <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <h3 className="text-white text-lg font-semibold mb-1">{product.name}</h3>
//               <p className="text-white text-md mb-2">{product.price}</p>
//               <button className="bg-red-500 text-white py-1 px-4 rounded">View Details</button>
//             </div>
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-gray-600">{product.price}</p>
//               <button className="mt-2 bg-red-500 text-white py-1 px-4 rounded">View Details</button>
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductComponent;































// import React, { useState } from 'react';

// // Sample data for different categories
// const data = {
//   arabic: {
//     heading: "Explore Our Arabic Coffee",
//     description: "Discover a variety of rich and aromatic Arabic coffees.",
//     products: [
//       { id: 1, name: 'Arabic Coffee 1', price: '$10', image: 'https://via.placeholder.com/300x200' },
//       { id: 2, name: 'Arabic Coffee 2', price: '$12', image: 'https://via.placeholder.com/300x200' },
//       { id: 3, name: 'Arabic Coffee 3', price: '$15', image: 'https://via.placeholder.com/300x200' },
//       { id: 4, name: 'Arabic Coffee 4', price: '$8', image: 'https://via.placeholder.com/300x200' },
//     ],
//   },
//   asian: {
//     heading: "Discover Asian Coffee Delights",
//     description: "Experience the bold and unique flavors of Asian coffees.",
//     products: [
//       { id: 1, name: 'Asian Coffee 1', price: '$14', image: 'https://via.placeholder.com/300x200' },
//       { id: 2, name: 'Asian Coffee 2', price: '$11', image: 'https://via.placeholder.com/300x200' },
//       { id: 3, name: 'Asian Coffee 3', price: '$13', image: 'https://via.placeholder.com/300x200' },
//       { id: 4, name: 'Asian Coffee 4', price: '$9', image: 'https://via.placeholder.com/300x200' },
//     ],
//   },
//   other: {
//     heading: "Explore Other Coffee Varieties",
//     description: "Find exotic and specialty coffees from around the world.",
//     products: [
//       { id: 1, name: 'Other Coffee 1', price: '$16', image: 'https://via.placeholder.com/300x200' },
//       { id: 2, name: 'Other Coffee 2', price: '$18', image: 'https://via.placeholder.com/300x200' },
//       { id: 3, name: 'Other Coffee 3', price: '$20', image: 'https://via.placeholder.com/300x200' },
//       { id: 4, name: 'Other Coffee 4', price: '$22', image: 'https://via.placeholder.com/300x200' },
//     ],
//   },
// };

// const ProductComponent = () => {
//   const [selectedCategory, setSelectedCategory] = useState('arabic');

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const { heading, description, products } = data[selectedCategory];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Navigation Menu */}
//       <div className="flex justify-center items-center mb-6" style={{ height: '100px' }}>
//         <ul className="flex space-x-4">
//           <li>
//             <button
//               className={`py-2 px-4 rounded ${selectedCategory === 'arabic' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('arabic')}
//               style={{ height: '100px' }}
//             >
//               Arabic Coffee
//             </button>
//           </li>
//           <li>
//             <button
//               className={`py-2 px-4 rounded ${selectedCategory === 'asian' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('asian')}
//               style={{ height: '100px' }}
//             >
//               Asian Coffee
//             </button>
//           </li>
//           <li>
//             <button
//               className={`py-2 px-4 rounded ${selectedCategory === 'other' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('other')}
//               style={{ height: '100px' }}
//             >
//               Other Coffee
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Heading and Description */}
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold mb-2">{heading}</h2>
//         <p className="text-gray-600">{description}</p>
//       </div>

//       {/* Product Grid */}
//       <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {products.map((product) => (
//           <div key={product.id} className="relative group border border-gray-300 rounded overflow-hidden">
//             <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//             <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
//               <div className="text-center text-white">
//                 <h3 className="text-lg font-bold">{product.name}</h3>
//                 <p className="text-md mb-2">{product.price}</p>
//                 <button className="bg-white text-black py-1 px-4 rounded">View Details</button>
//               </div>
//             </div>
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-gray-600">{product.price}</p>
//               <button className="mt-2 bg-red-500 text-white py-1 px-4 rounded">View Details</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductComponent;





























// import React, { useState } from 'react';

// // Sample data for different categories
// const data = {
//   arabic: {
//     heading: "Explore Our Arabic Coffee",
//     description: "Discover a variety of rich and aromatic Arabic coffees.",
//     products: [
//       { id: 1, name: 'Arabic Coffee 1', price: '$10', image: 'https://via.placeholder.com/150' },
//       { id: 2, name: 'Arabic Coffee 2', price: '$12', image: 'https://via.placeholder.com/150' },
//       { id: 3, name: 'Arabic Coffee 3', price: '$15', image: 'https://via.placeholder.com/150' },
//       { id: 4, name: 'Arabic Coffee 4', price: '$8', image: 'https://via.placeholder.com/150' },
//     ],
//   },
//   asian: {
//     heading: "Discover Asian Coffee Delights",
//     description: "Experience the bold and unique flavors of Asian coffees.",
//     products: [
//       { id: 1, name: 'Asian Coffee 1', price: '$14', image: 'https://via.placeholder.com/150' },
//       { id: 2, name: 'Asian Coffee 2', price: '$11', image: 'https://via.placeholder.com/150' },
//       { id: 3, name: 'Asian Coffee 3', price: '$13', image: 'https://via.placeholder.com/150' },
//       { id: 4, name: 'Asian Coffee 4', price: '$9', image: 'https://via.placeholder.com/150' },
//     ],
//   },
//   other: {
//     heading: "Explore Other Coffee Varieties",
//     description: "Find exotic and specialty coffees from around the world.",
//     products: [
//       { id: 1, name: 'Other Coffee 1', price: '$16', image: 'https://via.placeholder.com/150' },
//       { id: 2, name: 'Other Coffee 2', price: '$18', image: 'https://via.placeholder.com/150' },
//       { id: 3, name: 'Other Coffee 3', price: '$20', image: 'https://via.placeholder.com/150' },
//       { id: 4, name: 'Other Coffee 4', price: '$22', image: 'https://via.placeholder.com/150' },
//     ],
//   },
// };

// const ProductComponent = () => {
//   const [selectedCategory, setSelectedCategory] = useState('arabic');

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const { heading, description, products } = data[selectedCategory];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Navigation Menu */}
//       <div className="flex justify-center items-center mb-6" style={{ height: '100px' }}>
//         <ul className="flex space-x-4">
//           <li>
//             <button
//               className={`py-2 px-4 rounded ${selectedCategory === 'arabic' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('arabic')}
//               style={{ height: '100px' }}
//             >
//               Arabic Coffee
//             </button>
//           </li>
//           <li>
//             <button
//               className={`py-2 px-4 rounded ${selectedCategory === 'asian' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('asian')}
//               style={{ height: '100px' }}
//             >
//               Asian Coffee
//             </button>
//           </li>
//           <li>
//             <button
//               className={`py-2 px-4 rounded ${selectedCategory === 'other' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('other')}
//               style={{ height: '100px' }}
//             >
//               Other Coffee
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Heading and Description */}
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold mb-2">{heading}</h2>
//         <p className="text-gray-600">{description}</p>
//       </div>

//       {/* Product Grid */}
//       <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {products.map((product) => (
//           <div key={product.id} className="relative group p-4 border border-gray-300 rounded overflow-hidden">
//             <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <h3 className="text-white text-lg font-bold">{product.name}</h3>
//               <p className="text-white text-md mb-4">{product.price}</p>
//               <button className="bg-white text-black py-1 px-4 rounded">View Details</button>
//             </div>
//             <div className="text-center mt-4">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-gray-600">{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductComponent;
























// import React, { useState } from 'react';

// // Sample data for different categories
// const data = {
//   arabic: [
//     { id: 1, name: 'Arabic Coffee 1', description: 'Rich and aromatic Arabic coffee.' },
//     { id: 2, name: 'Arabic Coffee 2', description: 'Premium blend of Arabic coffee.' },
//   ],
//   asian: [
//     { id: 1, name: 'Asian Coffee 1', description: 'Unique flavors of Asian coffee.' },
//     { id: 2, name: 'Asian Coffee 2', description: 'Bold and rich Asian coffee.' },
//   ],
//   other: [
//     { id: 1, name: 'Other Coffee 1', description: 'Exotic and flavorful coffee.' },
//     { id: 2, name: 'Other Coffee 2', description: 'Specialty coffee from different regions.' },
//   ],
// };

// const ProductComponent = () => {
//   const [selectedCategory, setSelectedCategory] = useState('arabic');

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8  ">
//       {/* Navigation Menu */}
//       <div className="flex justify-center items-center mb-6 bg-black"  style={{ height: '100px' }}>
//         <ul className="flex space-x-4">
//           <li>
//             <button
//               className={`py-2 px-4 rounded ${selectedCategory === 'arabic' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('arabic')}
//               // style={{ height: '100px' }}
//             >
//               Arabic Coffee
//             </button>
//           </li>
//           <li>
//             <button
//               className={`py-2 px-4 rounded ${selectedCategory === 'asian' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('asian')}
//               // style={{ height: '100px' }}
//             >
//               Asian Coffee
//             </button>
//           </li>
//           <li>
//             <button
//               className={`py-2 px-4 rounded ${selectedCategory === 'other' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handleCategoryChange('other')}
//               // style={{ height: '100px' }}
//             >
//               Other Coffee
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Data Display Area */}
//       <div>
//         {data[selectedCategory].map((item) => (
//           <div key={item.id} className="mb-4 p-4 border border-gray-300 rounded">
//             <h3 className="text-lg font-bold">{item.name}</h3>
//             <p className="text-gray-600">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductComponent;
