import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkGreen text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 grid grid-cols-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-yellow-100">
                  Home
                </a>
              </li>
              {/* <li>
                <a href="/lake-view-indoor" className="text-gray-300 hover:text-yellow-100">
                  Lake View (Indoor Shower)
                </a>
              </li>
              <li>
                <a href="/garden-view-indoor" className="text-gray-300 hover:text-yellow-100">
                  Garden View (Indoor Shower)
                </a>
              </li>
              <li>
                <a href="/lake-view-outdoor" className="text-gray-300 hover:text-yellow-100">
                  Lake View (Outdoor Shower)
                </a>
              </li>
              <li>
                <a href="/garden-view-outdoor" className="text-gray-300 hover:text-yellow-100">
                  Garden View (Outdoor Shower)
                </a>
              </li> */}
              <li>
                <a href="/things-to-do" className="text-gray-300 hover:text-yellow-100">
                  Things to Do
                </a>
              </li>
              <li>
                <a href="/places-to-visit" className="text-gray-300 hover:text-yellow-100">
                  Places to Visit
                </a>
              </li>
              <li>
                <a href="/dining" className="text-gray-300 hover:text-yellow-100">
                  Meals
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-300 hover:text-yellow-100">
                  Events
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-yellow-100">
                  Contact
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-yellow-100">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center justify-center md:justify-start mb-2">
              <FaPhoneAlt className="mr-2" /> +1 234 567 890
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2" /> info@lakehouse.com
            </p>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-100" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-yellow-100" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-yellow-100" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section with links */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; 2024 The Lake House Koggala. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-yellow-100">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-yellow-100">Terms of Service</a>
              <a href="/contact" className="text-gray-400 hover:text-yellow-100">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
