import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isSubmenu1Open, setIsSubmenu1Open] = useState(false);
  const [isSubmenu2Open, setIsSubmenu2Open] = useState(false);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  // Toggle courses submenu
  const handleCoursesToggle = () => {
    setIsCoursesOpen(!isCoursesOpen);
    setIsSubmenu1Open(false); // Close other submenus
    setIsSubmenu2Open(false); // Close other submenus
  };

  // Toggle submenu 1
  const handleSubmenu1Toggle = () => {
    setIsSubmenu1Open(!isSubmenu1Open);
    setIsSubmenu2Open(false); // Close other submenus
  };

  // Toggle submenu 2
  const handleSubmenu2Toggle = () => {
    setIsSubmenu2Open(!isSubmenu2Open);
    setIsSubmenu1Open(false); // Close other submenus
  };

 
  // Close menus when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('.relative')) {

      setIsCoursesOpen(false);
      setIsSubmenu1Open(false);
      setIsSubmenu2Open(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white text-black fixed w-full top-0 z-50 shadow-md md:h-[100px]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-[20px]">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <img src="/path/to/logo.png" alt="Logo" className="h-8" /> {/* Adjust path and size */}
            <Link to="/" className="text-2xl font-bold text-black">Mohsan Khan</Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:ml-6">
            <div className="flex space-x-4 ml-auto">
              <Link to="/" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              
              {/* Courses with Submenu */}
              <div className="relative">
                <button
                  onClick={handleCoursesToggle}
                  className="flex items-center text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  Products <span className="ml-2">&#x25BC;</span>
                </button>
                {isCoursesOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <button
                        onClick={handleSubmenu1Toggle}
                        className="flex items-center text-black block px-4 py-2 text-sm hover:bg-black hover:text-white w-full text-left"
                      >
                        COffee <span className="ml-auto">&#x25B6;</span>
                      </button>
                      {isSubmenu1Open && (
                        <div className="absolute top-0 left-full mt-0 bg-white w-48 shadow-lg rounded-md">
                          <Link to="/coffee/arabic" className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white">robusta</Link>
                          <Link to="/coffee/asian" className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white">arabica</Link>
                          <Link to="/coffee/other" className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white">Instant Coffee</Link>
                        </div>
                      )}
                      <button
                        onClick={handleSubmenu2Toggle}
                        className="flex items-center text-black block px-4 py-2 text-sm hover:bg-black hover:text-white w-full text-left"
                      >
                        Submenu 2 <span className="ml-auto">&#x25B6;</span>
                      </button>
                      {isSubmenu2Open && (
                        <div className="absolute top-0 left-full mt-10 bg-white w-48 shadow-lg rounded-md">
                          <Link to="/courses/submenu2/child1" className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white">Child 1</Link>
                          <Link to="/courses/submenu2/child2" className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white">Child 2</Link>
                          <Link to="/courses/submenu2/child3" className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white">Child 3</Link>
                        </div>
                      )}
                      <Link to="/courses/submenu3" className="text-black block px-4 py-2 text-sm hover:bg-black hover:text-white">Submenu 3</Link>
                      <Link to="/courses/submenu4" className="text-black block px-4 py-2 text-sm hover:bg-black hover:text-white">Submenu 4</Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link to="/about" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/contact" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              <Link to="/login" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              <Link to="/register" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center lg:hidden">
            <button onClick={handleMenuToggle} className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
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
          <Link to="/" className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          
          {/* Courses with Submenu */}
          <div className="relative">
            <button
              onClick={handleCoursesToggle}
              className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Courses <span className="ml-2">&#x25BC;</span>
            </button>
            {isCoursesOpen && (
              <div className="pl-3">
                <button
                  onClick={handleSubmenu1Toggle}
                  className="flex items-center text-black block px-4 py-2 text-sm hover:bg-black hover:text-white w-full text-left"
                >
                  Submenu 1 <span className="ml-auto">&#x25B6;</span>
                </button>
                {isSubmenu1Open && (
                  <div className="pl-4">
                    <Link to="/courses/submenu1/child1" className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white">Child 1</Link>
                    <Link to="/courses/submenu1/child2" className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white">Child 2</Link>
                    <Link to="/courses/submenu1/child3" className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white">Child 3</Link>
                  </div>
                )}
                <button
                  onClick={handleSubmenu2Toggle}
                  className="flex items-center text-black block px-4 py-2 text-sm hover:bg-black hover:text-white w-full text-left"
                >
                  Submenu 2 <span className="ml-auto">&#x25B6;</span>
                </button>
                {isSubmenu2Open && (
                  <div className="pl-4">
                    <Link to="/courses/submenu2/child1" className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white">Child 1</Link>
                    <Link to="/courses/submenu2/child2" className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white">Child 2</Link>
                    <Link to="/courses/submenu2/child3" className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white">Child 3</Link>
                  </div>
                )}
                <Link to="/courses/submenu3" className="text-black block px-4 py-2 text-sm hover:bg-black hover:text-white">Submenu 3</Link>
                <Link to="/courses/submenu4" className="text-black block px-4 py-2 text-sm hover:bg-black hover:text-white">Submenu 4</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link to="/contact" className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          <Link to="/login" className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</Link>
          <Link to="/register" className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
