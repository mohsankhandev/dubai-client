import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#476CC4] text-white fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-400">Teachable Clone</Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:ml-6">
            <div className="flex space-x-4 ml-auto">
              <Link to="/" className="text-white hover:bg-opacity-20 hover:bg-black px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/courses" className="text-white hover:bg-opacity-20 hover:bg-black px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
              <Link to="/about" className="text-white hover:bg-opacity-20 hover:bg-black px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/contact" className="text-white hover:bg-opacity-20 hover:bg-black px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              <Link to="/login" className="text-white hover:bg-opacity-20 hover:bg-black px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              <Link to="/register" className="text-white hover:bg-opacity-20 hover:bg-black px-3 py-2 rounded-md text-sm font-medium">Register</Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center lg:hidden">
            <button onClick={handleMenuToggle} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="text-white hover:bg-opacity-20 hover:bg-black block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/courses" className="text-white hover:bg-opacity-20 hover:bg-black block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
          <Link to="/about" className="text-white hover:bg-opacity-20 hover:bg-black block px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link to="/contact" className="text-white hover:bg-opacity-20 hover:bg-black block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          <Link to="/login" className="text-white hover:bg-opacity-20 hover:bg-black block px-3 py-2 rounded-md text-base font-medium">Login</Link>
          <Link to="/register" className="text-white hover:bg-opacity-20 hover:bg-black block px-3 py-2 rounded-md text-base font-medium">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;






























// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Toggle mobile menu
//   const handleMenuToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-[#476CC4] text-white fixed w-full top-0 z-50 shadow-md">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-2xl font-bold text-blue-400">Teachable Clone</Link>
//           </div>
//           {/* Desktop Menu */}
//           <div className="hidden tablet:flex tablet:ml-6">
//             <div className="flex space-x-4 ml-auto">
//               <Link to="/" className="text-white hover:bg-opacity-20 hover:bg-black px-3 py-2 rounded-md text-sm font-medium">Home</Link>
//               <Link to="/courses" className="text-white hover:bg-opacity-20 hover:bg-black px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
//               <Link to="/about" className="text-white hover:bg-opacity-20 hover:bg-black px-3 py-2 rounded-md text-sm font-medium">About</Link>
//               <Link to="/contact" className="text-white hover:bg-opacity-20 hover:bg-black px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
//               <Link to="/login" className="text-white hover:bg-opacity-20 hover:bg-black px-3 py-2 rounded-md text-sm font-medium">Login</Link>
//               <Link to="/register" className="text-white hover:bg-opacity-20 hover:bg-black px-3 py-2 rounded-md text-sm font-medium">Register</Link>
//             </div>
//           </div>
//           {/* Mobile Menu Button */}
//           <div className="-mr-2 flex items-center tablet:hidden">
//             <button onClick={handleMenuToggle} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="sr-only">Open main menu</span>
//               <svg className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//               <svg className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Items */}
//       <div className={`${isOpen ? 'block' : 'hidden'} tablet:hidden`}>
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           <Link to="/" className="text-white hover:bg-opacity-20 hover:bg-black block px-3 py-2 rounded-md text-base font-medium">Home</Link>
//           <Link to="/courses" className="text-white hover:bg-opacity-20 hover:bg-black block px-3 py-2 rounded-md text-base font-medium">Courses</Link>
//           <Link to="/about" className="text-white hover:bg-opacity-20 hover:bg-black block px-3 py-2 rounded-md text-base font-medium">About</Link>
//           <Link to="/contact" className="text-white hover:bg-opacity-20 hover:bg-black block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
//           <Link to="/login" className="text-white hover:bg-opacity-20 hover:bg-black block px-3 py-2 rounded-md text-base font-medium">Login</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
