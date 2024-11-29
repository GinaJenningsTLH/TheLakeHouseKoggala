import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';


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
  src="/logo-white.webp" 
  className="h-[40px] mt-2 w-auto"
  width={200}  // Set this to your logo's actual width
  height={40}  // h-9 = 36px
  alt="Lake House Logo"
/>
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="text-lightestGreen md:hidden lg:hidden focus:outline-none hover:text-yellow-100"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <div className="hidden md:flex space-x-8">
            <ul className="flex items-center nav space-x-1  font-medium">
              <li>
                <Link 
                  to="/" 
                  className={`transition-all px-4 py-2 rounded-md ${
                    location.pathname === '/' 
                      ? 'bg-gray-200 text-gray-800' 
                      : 'text-white hover:bg-gray-200 hover:text-gray-800'
                  }`}
                >
                  ABOUT US
                </Link>
              </li>

              {/* Villa Dropdown */}
              <li className="relative group">
                <Link 
                  to="/villa" 
                  className={`transition-all px-4 py-2 rounded-md ${
                    location.pathname.includes('/villa') || location.pathname.includes('view') 
                      ? 'bg-gray-200 text-gray-800' 
                      : 'text-white hover:bg-gray-200 hover:text-gray-800'
                  }`}
                >
                  VILLA
                </Link>
              </li>

              <li>
                <Link 
                  to="/dining" 
                  className={`transition-all px-4 py-2 rounded-md ${
                    location.pathname === '/dining' 
                      ? 'bg-gray-200 text-gray-800' 
                      : 'text-white hover:bg-gray-200 hover:text-gray-800'
                  }`} 
                  onClick={toggleMenu}
                >
                  DINING
                </Link>
              </li>
     

              {/* Rates Dropdown */}
             

              {/* Experiences Dropdown */}
              <li className="relative group">
                <Link 
                  to="/things-to-do" 
                  className={`transition-all px-4 py-2 rounded-md ${
                    location.pathname.includes('/things-to-do') || location.pathname.includes('/places-to-visit') 
                      ? 'bg-gray-200 text-gray-800' 
                      : 'text-white hover:bg-gray-200 hover:text-gray-800'
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
                  to="/gallery" 
                  className={`transition-all px-4 py-2 rounded-md ${
                    location.pathname === '/gallery' 
                      ? 'bg-gray-200 text-gray-800' 
                      : 'text-white hover:bg-gray-200 hover:text-gray-800'
                  }`}
                >
                  GALLERY
                </Link>
              </li>

              <li className="relative group">
                <Link 
                  to="/rates" 
                  className={`transition-all px-4 py-2 rounded-md ${
                    location.pathname.includes('/rates') || location.pathname.includes('view') 
                      ? 'bg-gray-200 text-gray-800' 
                      : 'text-white hover:bg-gray-200 hover:text-gray-800'
                  }`}
                >
                  RATES
                </Link>
              </li>

              <li>
              <Link 
                  to="/contact" 
                  className={`transition-all px-4 py-2 rounded-md ${
                    location.pathname === '/contact' 
                      ? 'bg-gray-200 text-gray-800' 
                      : 'text-white hover:bg-gray-200 hover:text-gray-800'
                  }`}
                >
                  CONTACT
                </Link>
              </li>

              <li>
                <Link 
                  to="/team" 
                  className={`transition-all px-4 py-2 rounded-md ${
                    location.pathname === '/team' 
                      ? 'bg-gray-200 text-gray-800' 
                      : 'text-white hover:bg-gray-200 hover:text-gray-800'
                  }`}
                >
                  TEAM
                </Link>
              </li>
            </ul>
          </div>
        </div> 
      </nav>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen bg-black/90 transform transition-transform duration-300 ease-in-out z-30 w-64 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white focus:outline-none hover:text-gray-200"
          aria-label="Close menu"
        >
          <FaTimes size={24} />
        </button>
        <ul className="flex flex-col space-y-6 mt-20 px-8 text-base font-medium">
          <li>
            <Link 
              to="/" 
              className={`transition-all px-4 py-2 rounded-md block ${
                location.pathname === '/' 
                  ? 'bg-gray-200 text-gray-800' 
                  : 'text-white hover:bg-gray-200 hover:text-gray-800'
              }`} 
              onClick={toggleMenu}
            >
              ABOUT US
            </Link>
          </li>

          {/* Villa */}
          <li>
            <Link 
              to="/villa" 
              className={`transition-all px-4 py-2 rounded-md block ${
                location.pathname === '/villa' 
                  ? 'bg-gray-200 text-gray-800' 
                  : 'text-white hover:bg-gray-200 hover:text-gray-800'
              }`} 
              onClick={toggleMenu}
            >
              VILLA
            </Link>
          </li>

          {/* Dining */}
          <li>
            <Link 
              to="/dining" 
              className={`transition-all px-4 py-2 rounded-md block ${
                location.pathname === '/dining' 
                  ? 'bg-gray-200 text-gray-800' 
                  : 'text-white hover:bg-gray-200 hover:text-gray-800'
              }`} 
              onClick={toggleMenu}
            >
              DINING
            </Link>
          </li>

        

          {/* Experiences */}
          <li className="px-4">
            <button 
              onClick={() => toggleSubMenu('experiences')}
              className="flex items-center justify-between w-full text-white hover:text-gray-200"
            >
              <span>EXPERIENCES</span>
              <FaChevronDown className={`transform transition-transform duration-300 ${
                experiencesExpanded ? 'rotate-180' : 'rotate-0'
              }`} />
            </button>
            {experiencesExpanded && (
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <Link 
                    to="/things-to-do" 
                    className={`transition-all px-4 py-2 rounded-md block ${
                      location.pathname === '/things-to-do' 
                        ? 'bg-gray-200 text-gray-800' 
                        : 'text-white hover:bg-gray-200 hover:text-gray-800'
                    }`}
                    onClick={toggleMenu}
                  >
                    Things to Do
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/places-to-visit" 
                    className={`transition-all px-4 py-2 rounded-md block ${
                      location.pathname === '/places-to-visit' 
                        ? 'bg-gray-200 text-gray-800' 
                        : 'text-white hover:bg-gray-200 hover:text-gray-800'
                    }`}
                    onClick={toggleMenu}
                  >
                    Places to Visit
                  </Link>
                </li>
              </ul>
            )}
          </li>

            {/* Rates */}
        

          {/* Gallery */}
          <li>
            <Link 
              to="/gallery" 
              className={`transition-all px-4 py-2 rounded-md block ${
                location.pathname === '/gallery' 
                  ? 'bg-gray-200 text-gray-800' 
                  : 'text-white hover:bg-gray-200 hover:text-gray-800'
              }`} 
              onClick={toggleMenu}
            >
              GALLERY
            </Link>
          </li>

          <li>
            <Link 
              to="/rates" 
              className={`transition-all px-4 py-2 rounded-md block ${
                location.pathname === '/rates' 
                  ? 'bg-gray-200 text-gray-800' 
                  : 'text-white hover:bg-gray-200 hover:text-gray-800'
              }`} 
              onClick={toggleMenu}
            >
              RATES
            </Link>
          </li>

          {/* Team */}
          <li>
            <Link 
              to="/team" 
              className={`transition-all px-4 py-2 rounded-md block ${
                location.pathname === '/team' 
                  ? 'bg-gray-200 text-gray-800' 
                  : 'text-white hover:bg-gray-200 hover:text-gray-800'
              }`} 
              onClick={toggleMenu}
            >
              TEAM
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
