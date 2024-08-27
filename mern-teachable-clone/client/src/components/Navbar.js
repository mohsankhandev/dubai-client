

import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../asset/logo.png'
// useNavigate
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu
  const [isProductsOpen, setIsProductsOpen] = useState(false); // Products menu
  const [isSubmenu1Open, setIsSubmenu1Open] = useState(false); // Submenu 1
  const [isSubmenu2Open, setIsSubmenu2Open] = useState(false); // Submenu 2

  const [isAboutusOpen, setIsAboutusOpen] = useState(false); // about us menu

  const navbarRef = useRef(null);
  const productsMenuRef = useRef(null);

  const aboutusMenuRef = useRef(null);

  const handleMenuClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickSubMenuForDesktop = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up

    handleChildMenuClick(e); // Call the first function
    handleProductsToggle(); // Call the second function
  };


//main
  const handleClickSubMenuAboutForDesktop = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up

    handleChildMenuClick(e); // Call the first function
    handleAboutusToggle(); // Call the second function
    handleClick("aboutus")

  };

// handle award section
  const handleClickSubMenuAboutForDesktopaward = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up

    handleChildMenuClick(e); // Call the first function
    handleAboutusToggle(); // Call the second function
    handleClick("award")

  };

  // testimonial

  const handleClickSubMenuAboutForDesktopawardtest = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up

    handleChildMenuClick(e); // Call the first function
    handleAboutusToggle(); // Call the second function
    handleClick("testimonial")

  };


  // certf

  const handleClickSubMenuAboutForDesktopcertf = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up

    handleChildMenuClick(e); // Call the first function
    handleAboutusToggle(); // Call the second function
    handleClick("certf")

  };
  



  const handleClickSubMenuForMobile = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up
    handleProductsToggle(); // Call the second function
    setIsOpen(!isOpen);
  };






  // Toggle Products submenu
  const handleProductsToggle = () => {
    setIsAboutusOpen(false)
    setIsProductsOpen(!isProductsOpen);
  };

  // Toggle abbout us  submenu

  const handleAboutusToggle = () => {
    setIsAboutusOpen(!isAboutusOpen);
  };

  
  const handleAboutusMobileToggle = () => {
    setIsAboutusOpen(!isAboutusOpen);
    setIsProductsOpen(false);

  };




  // Toggle Submenu 1
  const handleSubmenu1Toggle = () => {
    setIsSubmenu2Open(false);
    setIsSubmenu1Open(!isSubmenu1Open);
  };

  // Toggle Submenu 2
  const handleSubmenu2Toggle = () => {
    setIsSubmenu1Open(false);

    setIsSubmenu2Open(!isSubmenu2Open);
  };

  // Handle child menu click
  const handleChildMenuClick = (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up
    setIsSubmenu1Open(false);
    setIsSubmenu2Open(false);
  };


  // aboutusMenuRef
  // Close about us menus when clicking outside
  const handleClickOutsideAbout = (e) => {
    if (navbarRef.current && !navbarRef.current.contains(e.target)) {
      setIsAboutusOpen(false);
    } else if (aboutusMenuRef.current && !aboutusMenuRef.current.contains(e.target)) {
      setIsAboutusOpen(false);
    }
  };



  // Close menus when clicking outside
  const handleClickOutside = (e) => {
    if (navbarRef.current && !navbarRef.current.contains(e.target)) {
      setIsProductsOpen(false);
      setIsSubmenu1Open(false);
      setIsSubmenu2Open(false);
    } else if (productsMenuRef.current && !productsMenuRef.current.contains(e.target)) {
      setIsProductsOpen(false);
      setIsSubmenu1Open(false);
      setIsSubmenu2Open(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set the initial screen size
    window.addEventListener('resize', handleResize);
    handleResize(); // Check screen size on mount

    if (!isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('mousedown', handleClickOutsideAbout);
      
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (!isMobile) {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('mousedown', handleClickOutsideAbout);
      }
    };
  }, [isMobile]);

  // Attach event listener for desktop only
  useEffect(() => {
    if (!isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('mousedown', handleClickOutsideAbout);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('mousedown', handleClickOutsideAbout);
      }
    }
  }, [isMobile]);





// zohaib code 
useEffect(() => {
  const anchorTags = document.querySelectorAll('a[href^="#"]');
  anchorTags.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const targetId = href.split('#')[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetOffsetTop = rect.top + scrollTop;
        window.scrollTo({ top: targetOffsetTop, behavior: 'smooth' });
      }
    });
  });
}, []);






const navigate = useNavigate()
const handleClick = (path) => {
  navigate("/");
  setTimeout(() => {
    // console.log("okay........")
    window.location.hash = `#${path}`;
  }, 0);
};






  return (
    <nav ref={navbarRef} className="bg-white text-black fixed w-full top-0 z-50 shadow-md md:h-[100px]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-[20px]">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-8" /> {/* Adjust path and size */}
            <Link to="/" className="text-2xl font-bold text-black">Mohsan Khan</Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:ml-6">
            <div className="flex space-x-4 ml-auto">
              <Link to="/" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>

              {/* Products with Submenu */}
              <div className="relative">
                <button
                  onClick={handleProductsToggle}
                  className="flex items-center text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  Products <span className="ml-2">&#x25BC;</span>
                </button>
                {isProductsOpen && (
                  <div ref={productsMenuRef} className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <button
                        onClick={handleSubmenu1Toggle}
                        className="flex items-center text-black block px-4 py-2 text-sm hover:bg-black hover:text-white w-full text-left"
                      >
                        Coffee <span className="ml-auto">&#x25B6;</span>
                      </button>
                      {isSubmenu1Open && (
                        <div className="absolute top-0 left-full mt-0 bg-white w-48 shadow-lg rounded-md">
                          <Link
                            to="/coffee/arabic"
                            onClick={handleClickSubMenuForDesktop}
                            className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white"
                          >
                            Robusta
                          </Link>
                          <Link
                            to="/coffee/asian"

                            onClick={handleClickSubMenuForDesktop}
                            className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white"
                          >
                            Arabica
                          </Link>
                          <Link
                            to="/coffee/other"
                            onClick={handleClickSubMenuForDesktop}
                            className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white"
                          >
                            Instant Coffee
                          </Link>
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
                          <Link
                            to="/courses/submenu2/child1"
                            onClick={handleChildMenuClick}
                            className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white"
                          >
                            Child 1
                          </Link>
                          <Link
                            to="/courses/submenu2/child2"
                            onClick={handleChildMenuClick}
                            className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white"
                          >
                            Child 2
                          </Link>
                          <Link
                            to="/courses/submenu2/child3"
                            onClick={handleChildMenuClick}
                            className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white"
                          >
                            Child 3
                          </Link>
                        </div>
                      )}
                      <Link
                        to="/courses/submenu3"
                        onClick={handleChildMenuClick}
                        className="text-black block px-4 py-2 text-sm hover:bg-black hover:text-white"
                      >
                        Submenu 3
                      </Link>
                      <Link
                        to="/courses/submenu4"
                        onClick={handleChildMenuClick}
                        className="text-black block px-4 py-2 text-sm hover:bg-black hover:text-white"
                      >
                        Submenu 4
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* about us with Submenu */}

              <div className="relative">
                <button
                  onClick={handleAboutusToggle}
                  className="flex items-center text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  About Us <span className="ml-2">&#x25BC;</span>
                </button>
                {isAboutusOpen && (
                  <div ref={aboutusMenuRef} className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

                      <Link
                        to="/courses/submenu3"
                        onClick={handleClickSubMenuAboutForDesktop}   
                        
                        // onClick={() => {handleClickSubMenuAboutForDesktop();
                        //   // handleClick(0);

                        // }}
                        className="text-black block px-4 py-2 text-sm hover:bg-black hover:text-white"
                      >
                       Profile
                      </Link>


                      <Link
                        to="/courses/submenu3"
                        
                        // onClick={() => {handleClickSubMenuAboutForDesktop();
                        //   // handleClick(0);

                        // }}
                        className="text-black block px-4 py-2 text-sm hover:bg-black hover:text-white"
                      >
                        Team
                      </Link>



                      <Link
                        to="/courses/submenu3"
                        onClick={handleClickSubMenuAboutForDesktopawardtest}   
                        
                        // onClick={() => {handleClickSubMenuAboutForDesktop();
                        //   // handleClick(0);

                        // }}
                        className="text-black block px-4 py-2 text-sm hover:bg-black hover:text-white"
                      >
                        Testimonial
                      </Link>


                      <Link
                        to="/courses/submenu3"
                       onClick={handleClickSubMenuAboutForDesktopaward}   
                        className="text-black block px-4 py-2 text-sm hover:bg-black hover:text-white"
                      >
                        Award
                      </Link>

                      <Link
                        to="/courses/submenu3"
                        onClick={handleClickSubMenuAboutForDesktopcertf}                        
                        className="text-black block px-4 py-2 text-sm hover:bg-black hover:text-white"
                      >
                        Certification
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/eventsection" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">PRESENCE</Link>
              <Link to="/contact" className="text-black hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center lg:hidden">
            <button onClick={handleMenuToggle} className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <span>&#x2715;</span> : <span>&#9776;</span>}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="space-y-1">
            <Link to="/" className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <button
              onClick={handleProductsToggle}
              className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Products <span className="ml-2">&#x25BC;</span>
            </button>
            {isProductsOpen && (
              <div className="space-y-1 pl-4">
                <button
                  onClick={handleSubmenu1Toggle}
                  className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  Coffee <span className="ml-2">&#x25B6;</span>
                </button>
                {isSubmenu1Open && (
                  <div className="pl-4">
                    <Link to="/coffee/arabic" onClick={handleClickSubMenuForMobile} className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Robusta</Link>
                    <Link to="/coffee/asian" onClick={handleClickSubMenuForMobile} className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Arabica</Link>
                    <Link to="/coffee/other" onClick={handleClickSubMenuForMobile} className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Instant Coffee</Link>
                  </div>
                )}
                <button
                  onClick={handleSubmenu2Toggle}
                  className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  Rice <span className="ml-2">&#x25B6;</span>
                </button>
                {isSubmenu2Open && (
                  <div className="pl-4">
                    <Link to="/courses/submenu2/child1" onClick={handleChildMenuClick} className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Child 1</Link>
                    <Link to="/courses/submenu2/child2" onClick={handleChildMenuClick} className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Child 2</Link>
                    <Link to="/courses/submenu2/child3" onClick={handleChildMenuClick} className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Child 3</Link>
                  </div>
                )}
                <Link to="/courses/submenu3"  className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Submenu 3</Link>
                <Link to="/courses/submenu4" className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Submenu 4</Link>
              </div>
            )}



             <button
              onClick={handleAboutusMobileToggle}
              className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              About Us <span className="ml-2">&#x25BC;</span>
            </button>
            {isAboutusOpen && (
              <div className="space-y-1 pl-4">
              
                <Link to="/courses/submenu3" onClick={handleClickSubMenuForMobile}  className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Submenu 3</Link>
                <Link to="/courses/submenu4" onClick={handleClickSubMenuForMobile} className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Submenu 4</Link>
              </div>
            )}








            <Link to="/eventsection" className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">PRESENCE</Link>
            <Link to="/contact" className="text-black hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





















































