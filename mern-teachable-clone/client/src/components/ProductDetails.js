import React, { useEffect, useState } from 'react';

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="bg-gray-200 animate-pulse rounded shadow p-4">
    <div className="h-4 bg-gray-300 mb-4 rounded"></div>
    <div className="h-4 bg-gray-300 mb-4 rounded"></div>
    <div className="h-4 bg-gray-300 mb-4 rounded"></div>
  </div>
);

const ProductDetails = () => {
  const [eventData, setEventData] = useState('');
  const [productSpecs, setProductSpecs] = useState([]);
  const [packaging, setPackaging] = useState('');
  const [containerCapacity, setContainerCapacity] = useState([]);
  const [newCropMonths, setNewCropMonths] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error

  // Mock data fetching from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate data fetching
        // Replace this with your actual API call
        setTimeout(() => {
          setEventData('🎉 Upcoming Product Launch');
          setProductSpecs([
            { label: 'Grade', value: 'Cleaned Garbled' },
            { label: 'Sieve', value: '7.1mm' },
            { label: 'Screen', value: '18' },
            { label: 'PB', value: '1%' },
            { label: 'Triage', value: '1%' },
            { label: 'Black Seeds', value: 'NIL' },
            { label: 'Moisture', value: '12% Max' },
          ]);
          setPackaging('Jute Bags - 60 kgs');
          setContainerCapacity([
            { label: "20' Container", value: '20.1 mtn' },
            { label: "40' Container", value: '28 mtn' },
          ]);
          setNewCropMonths('November, December');
          setImageUrl('https://via.placeholder.com/300'); // Replace with your image URL from the backend
          setLoading(false);
        }, 1000); // Simulate network delay
      } catch (err) {
        setError('Failed to load data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        {/* Top Section */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-800 mt-[96px] h-[210px] flex items-center justify-center text-white">
          <div className="flex items-center">
            <hr className="w-8 sm:w-16 border-white mr-2 sm:mr-4" />
            <div className="text-xl sm:text-3xl font-bold">Loading...</div>
            <hr className="w-8 sm:w-16 border-white ml-2 sm:ml-4" />
          </div>
        </div>

        {/* Product Specifications Section */}
        <div className="flex flex-col md:flex-row mt-8 px-4 md:px-16">
          <div className="md:w-1/2">
            <SkeletonLoader />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </div>
        </div>

        {/* New Section for Container Capacity and New Crop Months */}
        <div className="mt-8 px-4 md:px-16">
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-8">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Top Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-800 mt-[96px] h-[210px] flex items-center justify-center text-white">
        <div className="flex items-center">
          <hr className="w-8 sm:w-16 border-white mr-2 sm:mr-4" />
          <div className="text-xl sm:text-3xl font-bold">{eventData}</div>
          <hr className="w-8 sm:w-16 border-white ml-2 sm:ml-4" />
        </div>
      </div>

      {/* Product Specifications Section */}
      <div className="flex flex-col md:flex-row mt-8 px-4 md:px-16">
        <div className="md:w-1/2">
          <img src={imageUrl} alt="Product" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Product Specifications</h2>
            <table className="table-auto w-full border-collapse border border-gray-300">
              <tbody>
                {productSpecs.map((spec, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="py-2 font-semibold border px-4">{spec.label}</td>
                    <td className="py-2 border px-4">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white p-4 rounded shadow mt-6">
            <h2 className="text-2xl font-bold mb-4">Packaging</h2>
            <table className="table-auto w-full border-collapse border border-gray-300">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2 font-semibold border px-4">Packaging</td>
                  <td className="py-2 border px-4">{packaging}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* New Section for Container Capacity and New Crop Months */}
      <div className="mt-8 px-4 md:px-16">
        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="text-2xl font-bold mb-4">Container Capacity</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <tbody>
              {containerCapacity.map((capacity, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="py-2 font-semibold border px-4">{capacity.label}</td>
                  <td className="py-2 border px-4">{capacity.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">New Crop Months</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-2 font-semibold border px-4">New Crop Months</td>
                <td className="py-2 border px-4">{newCropMonths}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;































// import React, { useEffect, useState } from 'react';

// const ProductDetails = () => {
//   const [eventData, setEventData] = useState('');
//   const [productSpecs, setProductSpecs] = useState([]);
//   const [packaging, setPackaging] = useState('');
//   const [containerCapacity, setContainerCapacity] = useState([]);
//   const [newCropMonths, setNewCropMonths] = useState('');
//   const [imageUrl, setImageUrl] = useState('');

//   // Mock data fetching from the backend
//   useEffect(() => {
//     // Replace these with your API calls
//     setEventData('🎉 Upcoming Product Launch');
//     setProductSpecs([
//       { label: 'Grade', value: 'Cleaned Garbled' },
//       { label: 'Sieve', value: '7.1mm' },
//       { label: 'Screen', value: '18' },
//       { label: 'PB', value: '1%' },
//       { label: 'Triage', value: '1%' },
//       { label: 'Black Seeds', value: 'NIL' },
//       { label: 'Moisture', value: '12% Max' },
//     ]);
//     setPackaging('Jute Bags - 60 kgs');
//     setContainerCapacity([
//       { label: "20' Container", value: '20.1 mtn' },
//       { label: "40' Container", value: '28 mtn' },
//     ]);
//     setNewCropMonths('November, December');
//     setImageUrl('https://via.placeholder.com/300'); // Replace with your image URL from the backend
//   }, []);

//   return (
//     <div>
//       {/* Top Section */}
//       <div className="relative bg-gradient-to-r from-indigo-600 to-purple-800 mt-[96px] h-[210px] flex items-center justify-center text-white">
//         <div className="flex items-center">
//           <hr className="w-8 sm:w-16 border-white mr-2 sm:mr-4" />
//           <div className="text-xl sm:text-3xl font-bold">{eventData}</div>
//           <hr className="w-8 sm:w-16 border-white ml-2 sm:ml-4" />
//         </div>
//       </div>

//       {/* Product Specifications Section */}
//       <div className="flex flex-col md:flex-row mt-8 px-4 md:px-16">
//         <div className="md:w-1/2">
//           <img src={imageUrl} alt="Product" className="w-full h-auto" />
//         </div>
//         <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
//           <div className="bg-white p-4 rounded shadow">
//             <h2 className="text-2xl font-bold mb-4">Product Specifications</h2>
//             <table className="table-auto w-full border-collapse">
//               <tbody>
//                 {productSpecs.map((spec, index) => (
//                   <tr key={index} className="border-b  border-gray-300">
//                     <td className="py-2 font-semibold border px-4">{spec.label}</td>
//                     <td className="py-2 border px-4">{spec.value}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="bg-white p-4 rounded shadow mt-6">
//             <h2 className="text-2xl font-bold mb-4">Packaging</h2>
//             <table className="table-auto w-full border-collapse">
//               <tbody>
//                 <tr className="border-b border-gray-300">
//                   <td className="py-2 font-semibold border px-4">Packaging</td>
//                   <td className="py-2 border px-4">{packaging}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* New Section for Container Capacity and New Crop Months */}
//       <div className="mt-8 px-4 md:px-16">
//         <div className="bg-white p-4 rounded shadow mb-6">
//           <h2 className="text-2xl font-bold mb-4">Container Capacity</h2>
//           <table className="table-auto w-full border-collapse ">
//             <tbody>
//               {containerCapacity.map((capacity, index) => (
//                 <tr key={index} className="border-b border-gray-300">
//                   <td className="py-2 font-semibold border px-4">{capacity.label}</td>
//                   <td className="py-2 border px-4">{capacity.value}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="bg-white p-4 rounded shadow">
//           <h2 className="text-2xl font-bold mb-4">New Crop Months</h2>
//           <table className="table-auto w-full border-collapse">
//             <tbody>
//               <tr className="border-b border-gray-300">
//                 <td className="py-2 font-semibold border px-4">New Crop Months</td>
//                 <td className="py-2 border px-4">{newCropMonths}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
