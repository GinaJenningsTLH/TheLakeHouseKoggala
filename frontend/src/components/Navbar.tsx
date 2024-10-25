import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../index.css';

const Navbar: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRoomsDropdown, setShowRoomsDropdown] = useState(false);
  const [showExperiencesDropdown, setShowExperiencesDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  let roomsTimeout: ReturnType<typeof setTimeout>;
  let experiencesTimeout: ReturnType<typeof setTimeout>;

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if (position > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnterRooms = () => {
    clearTimeout(roomsTimeout);
    setShowRoomsDropdown(true);
  };

  const handleMouseLeaveRooms = () => {
    roomsTimeout = setTimeout(() => {
      setShowRoomsDropdown(false);
    }, 300);
  };

  const handleMouseEnterExperiences = () => {
    clearTimeout(experiencesTimeout);
    setShowExperiencesDropdown(true);
  };

  const handleMouseLeaveExperiences = () => {
    experiencesTimeout = setTimeout(() => {
      setShowExperiencesDropdown(false);
    }, 300);
  };

  return (
    <>
      <nav
        className={`px-8 fixed w-[100vw] z-20 top-0 h-16 left-0 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-[#FFFACB]/100 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between md:px-12 py-3">
          <Link to="/" className="flex items-center">
            {isScrolled ? (
              <img
                src="/scrolled-lake-house.png"
                className="h-12 shadow-sm shadow-white"
                alt="Scrolled Lake House Logo"
              />
            ) : (
              <img
                src="/The-Lake-House.png"
                className="h-28 w-[114px] mt-2"
                alt="Lake House Logo"
              />
            )}
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            className={`focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden lg:hidden hover:text-yellow-100 ${
              isScrolled ? 'text-darkGreen ' : 'text-lightestGreen '
            }`}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <div className={`hidden md:flex space-x-8 ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
            <ul className="flex items-center space-x-6 text-xl alumni-sans-pinstripe-nav font-medium">
              <li><Link to="/" className={`hover:text-yellow-100 ${isScrolled ? 'text-darkGreen ' : 'text-lightestGreen '}`}>Home</Link></li>
              <li className="relative group" onMouseEnter={handleMouseEnterRooms} onMouseLeave={handleMouseLeaveRooms}>
                <Link to="#" className={`hover:text-yellow-100 ${isScrolled ? 'text-darkGreen' : 'text-lightestGreen '}`}>Suites</Link>
                {showRoomsDropdown && (
                  <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to="/lake-view-indoor" className="block px-4 py-2 border-b border-paleGreen text-gray-700 hover:bg-yellow-100">Lake View (Indoor Shower)</Link>
                    <Link to="/garden-view-indoor" className="block px-4 py-2 border-b border-paleGreen text-gray-700 hover:bg-yellow-100">Garden View (Indoor Shower)</Link>
                    <Link to="/lake-view-outdoor" className="block px-4 py-2 border-b border-paleGreen text-gray-700 hover:bg-yellow-100">Lake View (Outdoor Shower)</Link>
                    <Link to="/garden-view-outdoor" className="block px-4 py-2 text-gray-700 hover:bg-yellow-100">Garden View (Outdoor Shower)</Link>
                  </div>
                )}
              </li>
              <li className="relative group" onMouseEnter={handleMouseEnterExperiences} onMouseLeave={handleMouseLeaveExperiences}>
                <Link to="#" className={`hover:text-yellow-100 ${isScrolled ? 'text-darkGreen  ' : 'text-lightestGreen'}`}>Experiences</Link>
                {showExperiencesDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to="/things-to-do" className="block px-4 py-2 border-b border-paleGreen text-gray-700 hover:bg-yellow-100">Things to Do</Link>
                    <Link to="/places-to-visit" className="block px-4 py-2 text-gray-700 hover:bg-yellow-100">Places to Visit</Link>
                  </div>
                )}
              </li>
              <li><Link to="/dining" className={`hover:text-yellow-100 ${isScrolled ? 'text-darkGreen' : 'text-lightestGreen'}`}>Meals</Link></li>
              <li><Link to="/events" className={`hover:text-yellow-100 ${isScrolled ? 'text-darkGreen' : 'text-lightestGreen'}`}>Events</Link></li>
              <li><Link to="/contact" className={`hover:text-yellow-100 ${isScrolled ? 'text-darkGreen' : 'text-lightestGreen'}`}>Contact</Link></li>
              <li><Link to="/about" className={`hover:text-yellow-100 ${isScrolled ? 'text-darkGreen' : 'text-lightestGreen'}`}>About</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-darkGreen focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <FaTimes size={24} />
        </button>
        <ul className="flex flex-col space-y-6 mt-20 px-8 text-xl font-medium">
          <li><Link to="/" className="text-darkGreen hover:text-yellow-100" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/lake-view-indoor" className="text-darkGreen hover:text-yellow-100" onClick={toggleMenu}>Lake View (Indoor Shower)</Link></li>
          <li><Link to="/garden-view-indoor" className="text-darkGreen hover:text-yellow-100" onClick={toggleMenu}>Garden View (Indoor Shower)</Link></li>
          <li><Link to="/lake-view-outdoor" className="text-darkGreen hover:text-yellow-100" onClick={toggleMenu}>Lake View (Outdoor Shower)</Link></li>
          <li><Link to="/garden-view-outdoor" className="text-darkGreen hover:text-yellow-100" onClick={toggleMenu}>Garden View (Outdoor Shower)</Link></li>
          <li><Link to="/things-to-do" className="text-darkGreen hover:text-yellow-100" onClick={toggleMenu}>Things to Do</Link></li>
          <li><Link to="/places-to-visit" className="text-darkGreen hover:text-yellow-100" onClick={toggleMenu}>Places to Visit</Link></li>
          <li><Link to="/dining" className="text-darkGreen hover:text-yellow-100" onClick={toggleMenu}>Meals</Link></li>
          <li><Link to="/events" className="text-darkGreen hover:text-yellow-100" onClick={toggleMenu}>Events</Link></li>
          <li><Link to="/contact" className="text-darkGreen hover:text-yellow-100" onClick={toggleMenu}>Contact</Link></li>
          <li><Link to="/about" className="text-darkGreen hover:text-yellow-100" onClick={toggleMenu}>About</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
