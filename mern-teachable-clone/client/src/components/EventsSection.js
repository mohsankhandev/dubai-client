import React, { useEffect, useState } from 'react';

// Skeleton component
const SkeletonCard = () => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="w-full h-32 sm:h-48 bg-gray-300 animate-pulse" />
    <div className="p-4 sm:p-6 flex flex-col items-center">
      <div className="w-24 h-4 bg-gray-300 animate-pulse mb-2" />
      <div className="w-32 h-4 bg-gray-300 animate-pulse" />
    </div>
  </div>
);

const EventsSection = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating data fetch with a timeout
    setTimeout(() => {
      // Replace this with your API call
      try {
        // Mock API response
        const fetchedEvents = [
          { id: 1, title: "Djazagro Exhibition", date: "5th Jun, 2023 - 8th Jun, 2023", image: "https://via.placeholder.com/300" },
          { id: 2, title: "Food Expo 2023", date: "15th Jul, 2023 - 17th Jul, 2023", image: "https://via.placeholder.com/300" },
            { id: 3, title: "AgroTech 2023", date: "20th Aug, 2023 - 23rd Aug, 2023", image: "https://via.placeholder.com/300" },
  { id: 4, title: "Tech Expo 2023", date: "10th Sep, 2023 - 12th Sep, 2023", image: "https://via.placeholder.com/300" },
  { id: 5, title: "Health & Wellness Fair", date: "1st Oct, 2023 - 3rd Oct, 2023", image: "https://via.placeholder.com/300" },
  // Add more events as needed
  { id: 6, title: "Djazagro Exhibition", date: "5th Jun, 2023 - 8th Jun, 2023", image: "https://via.placeholder.com/300" },
  { id: 7, title: "Food Expo 2023", date: "15th Jul, 2023 - 17th Jul, 2023", image: "https://via.placeholder.com/300" },
  { id: 8, title: "AgroTech 2023", date: "20th Aug, 2023 - 23rd Aug, 2023", image: "https://via.placeholder.com/300" },
  { id: 9, title: "Tech Expo 2023", date: "10th Sep, 2023 - 12th Sep, 2023", image: "https://via.placeholder.com/300" },
  { id: 10, title: "Health & Wellness Fair", date: "1st Oct, 2023 - 3rd Oct, 2023", image: "https://via.placeholder.com/300" },
  { id: 11, title: "Djazagro Exhibition", date: "5th Jun, 2023 - 8th Jun, 2023", image: "https://via.placeholder.com/300" },
  { id: 12, title: "Food Expo 2023", date: "15th Jul, 2023 - 17th Jul, 2023", image: "https://via.placeholder.com/300" },
  { id: 13, title: "AgroTech 2023", date: "20th Aug, 2023 - 23rd Aug, 2023", image: "https://via.placeholder.com/300" },
  { id: 14, title: "Tech Expo 2023", date: "10th Sep, 2023 - 12th Sep, 2023", image: "https://via.placeholder.com/300" },
  { id: 15, title: "Health & Wellness Fair", date: "1st Oct, 2023 - 3rd Oct, 2023", image: "https://via.placeholder.com/300" },
  { id: 16, title: "Djazagro Exhibition", date: "5th Jun, 2023 - 8th Jun, 2023", image: "https://via.placeholder.com/300" },
  { id: 17, title: "Food Expo 2023", date: "15th Jul, 2023 - 17th Jul, 2023", image: "https://via.placeholder.com/300" },
  { id: 18, title: "AgroTech 2023", date: "20th Aug, 2023 - 23rd Aug, 2023", image: "https://via.placeholder.com/300" },
  { id: 19, title: "Tech Expo 2023", date: "10th Sep, 2023 - 12th Sep, 2023", image: "https://via.placeholder.com/300" },
  { id: 20, title: "Health & Wellness Fair", date: "1st Oct, 2023 - 3rd Oct, 2023", image: "https://via.placeholder.com/300" },
          // More events...
        ];
        setEvents(fetchedEvents);
        setLoading(false);
      } catch (error) {
        setError("Failed to load events");
        setLoading(false);
      }
    }, 1000); // Simulating a 1-second delay
  }, []);

  return (
    <div>
      {/* Top Div with Events Header */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-800 mt-[96px] h-[210px] flex items-center justify-center text-white">
        <div className="flex items-center">
          <hr className="w-8 sm:w-16 border-white mr-2 sm:mr-4" />
          <div className="text-xl sm:text-3xl font-bold">🎉 Upcoming Events</div>
          <hr className="w-8 sm:w-16 border-white ml-2 sm:ml-4" />
        </div>
      </div>

      {/* Events Grid Section */}
      <div className="bg-gray-100 py-6 sm:py-12 px-2 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            ) : error ? (
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-red-500">
                {error}
              </div>
            ) : (
              events.map((event) => (
                <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-32 sm:h-48 object-cover"
                  />
                  <div className="p-4 sm:p-6 flex flex-col items-center">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-800 text-center">{event.title}</h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 text-center">{event.date}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;



























// import React from 'react';

// // Sample data for events
// const events = [
//   { id: 1, title: "Djazagro Exhibition", date: "5th Jun, 2023 - 8th Jun, 2023", image: "https://via.placeholder.com/300" },
//   { id: 2, title: "Food Expo 2023", date: "15th Jul, 2023 - 17th Jul, 2023", image: "https://via.placeholder.com/300" },
//   { id: 3, title: "AgroTech 2023", date: "20th Aug, 2023 - 23rd Aug, 2023", image: "https://via.placeholder.com/300" },
//   { id: 4, title: "Tech Expo 2023", date: "10th Sep, 2023 - 12th Sep, 2023", image: "https://via.placeholder.com/300" },
//   { id: 5, title: "Health & Wellness Fair", date: "1st Oct, 2023 - 3rd Oct, 2023", image: "https://via.placeholder.com/300" },
//   // Add more events as needed
//   { id: 6, title: "Djazagro Exhibition", date: "5th Jun, 2023 - 8th Jun, 2023", image: "https://via.placeholder.com/300" },
//   { id: 7, title: "Food Expo 2023", date: "15th Jul, 2023 - 17th Jul, 2023", image: "https://via.placeholder.com/300" },
//   { id: 8, title: "AgroTech 2023", date: "20th Aug, 2023 - 23rd Aug, 2023", image: "https://via.placeholder.com/300" },
//   { id: 9, title: "Tech Expo 2023", date: "10th Sep, 2023 - 12th Sep, 2023", image: "https://via.placeholder.com/300" },
//   { id: 10, title: "Health & Wellness Fair", date: "1st Oct, 2023 - 3rd Oct, 2023", image: "https://via.placeholder.com/300" },
//   { id: 11, title: "Djazagro Exhibition", date: "5th Jun, 2023 - 8th Jun, 2023", image: "https://via.placeholder.com/300" },
//   { id: 12, title: "Food Expo 2023", date: "15th Jul, 2023 - 17th Jul, 2023", image: "https://via.placeholder.com/300" },
//   { id: 13, title: "AgroTech 2023", date: "20th Aug, 2023 - 23rd Aug, 2023", image: "https://via.placeholder.com/300" },
//   { id: 14, title: "Tech Expo 2023", date: "10th Sep, 2023 - 12th Sep, 2023", image: "https://via.placeholder.com/300" },
//   { id: 15, title: "Health & Wellness Fair", date: "1st Oct, 2023 - 3rd Oct, 2023", image: "https://via.placeholder.com/300" },
//   { id: 16, title: "Djazagro Exhibition", date: "5th Jun, 2023 - 8th Jun, 2023", image: "https://via.placeholder.com/300" },
//   { id: 17, title: "Food Expo 2023", date: "15th Jul, 2023 - 17th Jul, 2023", image: "https://via.placeholder.com/300" },
//   { id: 18, title: "AgroTech 2023", date: "20th Aug, 2023 - 23rd Aug, 2023", image: "https://via.placeholder.com/300" },
//   { id: 19, title: "Tech Expo 2023", date: "10th Sep, 2023 - 12th Sep, 2023", image: "https://via.placeholder.com/300" },
//   { id: 20, title: "Health & Wellness Fair", date: "1st Oct, 2023 - 3rd Oct, 2023", image: "https://via.placeholder.com/300" },
// ];

// const EventsSection = () => {
//   return (
//     <div>
//   {/* Top Div with Events Header */}
//   <div className="relative bg-gradient-to-r from-indigo-600 to-purple-800 mt-[96px] h-[210px] flex items-center justify-center text-white">
//     <div className="flex items-center">
//       <hr className="w-8 sm:w-16 border-white mr-2 sm:mr-4" />
//       <div className="text-xl sm:text-3xl font-bold">🎉 Upcoming Events</div>
//       <hr className="w-8 sm:w-16 border-white ml-2 sm:ml-4" />
//     </div>
//   </div>

//   {/* Events Grid Section */}
//   <div className="bg-gray-100 py-6 sm:py-12 px-2 sm:px-4 lg:px-8">
//     <div className="max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
//         {events.map((event) => (
//           <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
//             <img
//               src={event.image}
//               alt={event.title}
//               className="w-full h-32 sm:h-48 object-cover"
//             />
//             <div className="p-4 sm:p-6 flex flex-col items-center">
//               <h3 className="text-sm sm:text-lg font-semibold text-gray-800 text-center">{event.title}</h3>
//               <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 text-center">{event.date}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>

//   );
// };

// export default EventsSection;
