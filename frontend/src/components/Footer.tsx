import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
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
                  <a className="text-gray-300 hover:text-gray-300">
                    ABOUT US
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/villa">        
                  <a  className="text-gray-300 hover:text-gray-300">
                    VILLA
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to="/dining">
                  <a className="text-gray-300 hover:text-gray-300">
                    DINING
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to="/things-to-do"> 
                  <a className="text-gray-300 hover:text-gray-300">
                    THINGS TO DO
                  </a>
                  </Link>
                </li>
              </ul>

              {/* Column 2 */}
              <ul className="space-y-2">
                <li>
                  <Link to="/places-to-visit">
                  <a className="text-gray-300 hover:text-gray-300">
                    PLACES TO VISIT
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to="/gallery">
                  <a href="/gallery" className="text-gray-300 hover:text-gray-300">
                    GALLERY
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to="/rates">
                  <a href="/rates" className="text-gray-300 hover:text-gray-300">
                    RATES
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to="/team">
                  <a className="text-gray-300 hover:text-gray-300">
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
              <FaPhoneAlt className="mr-2" /> +94 776 197 728 (Sri Lanka)
            </p>
            <p className="flex items-center justify-center md:justify-start mb-2">
              <FaPhoneAlt className="mr-2" /> +44 7710 634 540 (UK)
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2" /> info@lakehouse.com
            </p>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-gray-300" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-gray-300" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
             
            </div>
          </div>
        </div>

        {/* Bottom section with links */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; 2024 The Lake House Koggala. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy">      
                <a className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
              </Link>
              <Link to="/terms">
                <a  className="text-gray-400 hover:text-gray-300">Terms of Service</a>
              </Link>
              <Link to="/contact">  
                <a className="text-gray-400 hover:text-gray-300">Contact Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer> 
  );
};

export default Footer;
