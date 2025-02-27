import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-600 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <div className="grid grid-cols-2 gap-x-4">
              {/* Column 1 */}
              <ul className="space-y-2">
                <li>
                  <Link to="/about">
                  <a href='/about' className="text-gray-100 hover:text-gray-300">
                    ABOUT US
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/villa">        
                  <a href='/villa' className="text-gray-100 hover:text-gray-300">
                    VILLA
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to="/dining">
                    <a href='/dining' className="text-gray-100 hover:text-gray-300">
                    DINING
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to="/things-to-do"> 
                  <a href='/things-to-do' className="text-gray-100 hover:text-gray-300">
                    THINGS TO DO
                  </a>
                  </Link>
                </li>
              </ul>

              {/* Column 2 */}
              <ul className="space-y-2">
                <li>
                  <Link to="/places-to-visit">
                  <a href='/places-to-visit' className="text-gray-100 hover:text-gray-300">
                    PLACES TO VISIT
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to="/gallery">
                  <a href='/gallery' className="text-gray-100 hover:text-gray-300">
                    GALLERY
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to="/rates">
                  <a href='/rates' className="text-gray-100 hover:text-gray-300">
                    RATES
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to="/team">
                  <a href='/team' className="text-gray-100 hover:text-gray-300">
                    TEAM
                  </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center justify-center md:justify-start mb-2">
              <FaPhoneAlt className="mr-2" /><a href="tel:+94776197728" className=" transition-colors duration-300">
        +94 776 197 728
      </a>  (Sri Lanka)
            </p>
            <p className="flex items-center justify-center md:justify-start mb-2">
              <FaPhoneAlt className="mr-2" /><a href="tel:+447710634540" className=" transition-colors duration-300">
        +44 7710 634 540
      </a> (UK)
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2" /> ginajennings10@gmail.com
            </p>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link to="https://facebook.com">
              <a href='https://web.facebook.com/people/The-Lake-House-Koggala/61567020746766' className="text-gray-100 hover:text-gray-300" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              </Link>
              <Link to="https://instagram.com">
            <a href='https://www.instagram.com/thelakehousekoggalasrilanka/' className="text-gray-100 hover:text-gray-300" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section with links */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; 2024 The Lake House Koggala. All rights reserved.</p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <Link 
                to="/privacy"
                className="text-gray-100 hover:text-gray-300 px-4 py-2 text-center"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/contact"
                className="text-gray-100 hover:text-gray-300 px-4 py-2 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer> 
  );
};

export default Footer;
