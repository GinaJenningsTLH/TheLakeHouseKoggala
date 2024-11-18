import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import '../index.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [roomsExpanded, setRoomsExpanded] = useState(false);
  const [experiencesExpanded, setExperiencesExpanded] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setIsScrolled(position > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setRoomsExpanded(false);
    setExperiencesExpanded(false);
  };

  const toggleSubMenu = (menu: string) => {
    if (menu === 'rooms') {
      setRoomsExpanded(!roomsExpanded);
      setExperiencesExpanded(false);
    } else if (menu === 'experiences') {
      setExperiencesExpanded(!experiencesExpanded);
      setRoomsExpanded(false);
    }
  };

  return (
    <>
      <nav
        className={`px-8 fixed w-[100vw] z-20 top-0 h-16 left-0 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-[black]/50' : 'bg-black/50'
        }`}
      >
        <div className="flex items-center justify-between md:px-12 py-3">
          <Link to="/" className="flex items-center">
            <img
              src="/logo-white.png"
              className="h-9 mt-2"
              alt="Lake House Logo"
            />
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            className="text-lightestGreen md:hidden lg:hidden focus:outline-none hover:text-yellow-100"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <div className="hidden md:flex space-x-8">
            <ul className="flex items-center nav space-x-6 text-xl font-medium">
              <li>
                <Link 
                  to="/" 
                  className={`text-white hover:bg-gray-200 hover:text-gray-800 transition-all px-4 py-2 rounded-md ${
                    location.pathname === '/' ? 'bg-gray-200 text-black' : ''
                  }`}
                >
                  ABOUT US
                </Link>
              </li>

              {/* Villa Dropdown */}
              <li className="relative group">
                <Link 
                  to="/villa" 
                  className={`text-white hover:bg-gray-200 hover:text-gray-800 transition-all px-4 py-2 rounded-md ${
                    location.pathname.includes('/villa') || location.pathname.includes('view') 
                      ? 'bg-gray-200 text-black' 
                      : ''
                  }`}
                >
                  VILLA
                </Link>
                {/* <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/lake-view-indoor" className="block px-4 py-2 border-b border-paleGreen text-gray-700 hover:bg-lightGreen hover:text-white">Lake View (Indoor Shower)</Link>
                  <Link to="/garden-view-indoor" className="block px-4 py-2 border-b border-paleGreen text-gray-700 hover:bg-lightGreen hover:text-white">Garden View (Indoor Shower)</Link>
                  <Link to="/lake-view-outdoor" className="block px-4 py-2 border-b border-paleGreen text-gray-700 hover:bg-lightGreen hover:text-white">Lake View (Outdoor Shower)</Link>
                  <Link to="/garden-view-outdoor" className="block px-4 py-2 text-gray-700 hover:bg-lightGreen hover:text-white">Garden View (Outdoor Shower)</Link>
                </div> */}
              </li>

              {/* Experiences Dropdown */}
              <li className="relative group">
                <Link 
                  to="/things-to-do" 
                  className={`text-white hover:bg-gray-200 hover:text-gray-800 transition-all px-4 py-2 rounded-md ${
                    location.pathname.includes('/things-to-do') || location.pathname.includes('/places-to-visit') 
                      ? 'bg-gray-200 text-black' 
                      : ''
                  }`}
                >
                  EXPERIENCES
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link 
                    to="/things-to-do" 
                    className={`block px-4 py-2 border-b border-paleGreen text-gray-700 hover:bg-gray-500 hover:text-white ${
                      location.pathname === '/things-to-do' ? 'bg-gray-800 text-white' : ''
                    }`}
                  >
                    Things to Do
                  </Link>
                  <Link 
                    to="/places-to-visit" 
                    className={`block px-4 py-2 text-gray-700 hover:bg-gray-500 hover:text-white ${
                      location.pathname === '/places-to-visit' ? 'bg-gray-800 text-white' : ''
                    }`}
                  >
                    Places to Visit
                  </Link>
                </div>
              </li>

              <li>
                <Link 
                  to="/dining" 
                  className={`text-white hover:bg-gray-200 hover:text-gray-800 transition-all px-4 py-2 rounded-md ${
                    location.pathname === '/dining' 
                      ? 'bg-gray-200 text-black' 
                      : 'text-lightestGreen hover:bg-gray-200 hover:text-gray-800'
                  }`} 
                  onClick={toggleMenu}
                >
                  DINING
                </Link>
              </li>

              <li>
              <Link 
                  to="/contact" 
                  className={`text-white hover:bg-gray-200 hover:text-gray-800 transition-all px-4 py-2 rounded-md ${
                    location.pathname === '/contact' ? 'bg-gray-200 text-black' : ''
                  }`}
                >
                  CONTACT
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-lightGreen transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    location.pathname === '/contact' ? 'scale-x-100' : ''
                  }`}></span>
                </Link>
              </li>

              <li>
              <Link 
                  to="/gallery" 
                  className={`text-white hover:bg-gray-200 hover:text-gray-800 transition-all px-4 py-2 rounded-md ${
                    location.pathname === '/gallery' ? 'bg-gray-200 text-black' : ''
                  }`}
                >
                  GALLERY
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-lightGreen transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    location.pathname === '/gallery' ? 'scale-x-100' : ''
                  }`}></span>
                </Link>
              </li>
            </ul>
          </div>
        </div> 
      </nav>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen bg-black/90 transform transition-transform duration-300 ease-in-out z-30 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-lightestGreen focus:outline-none"
        >
          <FaTimes size={24} />
        </button>
        <ul className="flex flex-col space-y-6 mt-20 px-8 text-xl font-medium text-lightestGreen">
          <li>
            <Link 
              to="/" 
              className={`transition-colors ${
                location.pathname === '/' 
                  ? 'text-lightestGreen' 
                  : 'text-lightestGreen hover:text-lightGreen'
              }`} 
              onClick={toggleMenu}
            >
              ABOUT US
            </Link>
          </li>

          {/* Villa Submenu */}
          <li className="flex items-center justify-between" onClick={() => toggleSubMenu('rooms')}>
            <span className="hover:text-yellow-100">VILLA</span>
            <FaChevronDown
              className={`transform transition-transform duration-300 ${
                roomsExpanded ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </li>
          {roomsExpanded && (
            <ul className="pl-4 mt-2 space-y-2 text-lg text-gray-300">
              <li><Link to="/lake-view-indoor" className="hover:text-yellow-100" onClick={toggleMenu}>Lake View (Indoor Shower)</Link></li>
              <li><Link to="/garden-view-indoor" className="hover:text-yellow-100" onClick={toggleMenu}>Garden View (Indoor Shower)</Link></li>
              <li><Link to="/lake-view-outdoor" className="hover:text-yellow-100" onClick={toggleMenu}>Lake View (Outdoor Shower)</Link></li>
              <li><Link to="/garden-view-outdoor" className="hover:text-yellow-100" onClick={toggleMenu}>Garden View (Outdoor Shower)</Link></li>
            </ul>
          )}

          {/* Experiences Submenu */}
          <li className="flex items-center justify-between" onClick={() => toggleSubMenu('experiences')}>
            <span className={`pr-2 transition-colors ${
              location.pathname.includes('/things-to-do') || location.pathname.includes('/places-to-visit') 
                ? 'text-lightGreen' 
                : 'text-lightestGreen hover:text-lightGreen'
            }`}>
              EXPERIENCES
            </span>
            <FaChevronDown
              className={`transform transition-transform duration-300 ${
                experiencesExpanded ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </li>
          {experiencesExpanded && (
            <ul className="pl-4 mt-2 space-y-2 text-lg text-gray-300">
              <li>
                <Link 
                  to="/things-to-do" 
                  className={`transition-colors ${
                    location.pathname === '/things-to-do' 
                      ? 'text-lightGreen' 
                      : 'hover:text-lightGreen'
                  }`} 
                  onClick={toggleMenu}
                >
                  Things to Do
                </Link>
              </li>
              <li>
                <Link 
                  to="/places-to-visit" 
                  className={`transition-colors ${
                    location.pathname === '/places-to-visit' 
                      ? 'text-lightGreen' 
                      : 'hover:text-lightGreen'
                  }`} 
                  onClick={toggleMenu}
                >
                  Places to Visit
                </Link>
              </li>
            </ul>
          )}

          <li>
            <Link 
              to="/dining" 
              className={`transition-all px-4 py-2 rounded-md ${
                location.pathname === '/dining' 
                  ? 'bg-gray-200 text-gray-800' 
                  : 'text-lightestGreen hover:bg-gray-200 hover:text-gray-800'
              }`} 
              onClick={toggleMenu}
            >
              DINING
            </Link>
          </li>

          <li>
            <Link 
              to="/contact" 
              className={`transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-lightGreen' 
                  : 'text-lightestGreen hover:text-lightGreen'
              }`} 
              onClick={toggleMenu}
            >
              CONTACT
            </Link>
          </li>

          <li>
            <Link 
              to="/gallery" 
              className={`transition-colors ${
                location.pathname === '/gallery' 
                  ? 'text-lightGreen' 
                  : 'text-lightestGreen hover:text-lightGreen'
              }`} 
              onClick={toggleMenu}
            >
              GALLERY
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
