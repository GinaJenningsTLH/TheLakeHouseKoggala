import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaTree, FaWater, FaFish, FaFan, FaBed, FaUtensils, FaWifi } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import villaFrontView from '../assets/images/Gallery/villa-front-view-2.jpg';
import lakeViewIndoor from '../assets/images/lakeview(indoor).jpg';
import poolView from '../assets/images/Gallery/pool-view-4.jpg';
import villaSittingLounge from '../assets/images/Gallery/villa-sitting-lounge.jpg';

const About: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] md:h-96 lg:h-96  text-white" style={{ backgroundImage: `url(${villaFrontView})` }}>
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-5xl font-bold mb-4"
          >
            Welcome to Lake House
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className=""
          >
            A Serene Escape by the Koggala Lake
          </motion.p>
        </div>
      </section>

      {/* About Lake House Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">

          {/* Design and Eco-friendly Section */}
          <div className="mb-12 md:flex items-center">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <LazyLoadImage
                src={villaFrontView} 
                alt="British Architect"
                effect="blur"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 md:pl-8 mt-8 md:mt-0"
            >
              <h3 className="text-darkGreen font-bold mb-4">Built for Sustainability</h3>
              <p className="text-gray-700 mb-4">
                Lake House is a contemporary home built using local Sri Lankan materials, designed to be as energy-efficient and low-impact as possible. 
                It relies on natural sea and lake breezes for cooling, supplemented with ceiling fans, and most of the hot water is heated using solar power.
              </p>
              <p className="text-gray-700 mb-4">
                This ensures that the house stays cool without the need for air conditioning, offering a sustainable and comfortable stay for all guests.
              </p>
            </motion.div>
          </div>

          {/* Rooms and Facilities Section */}
          <div className="mb-12 md:flex items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 order-2 md:order-1 md:pr-8"
            >
              <h3 className="text-darkGreen font-bold mb-4">Our Rooms & Amenities</h3>
              <p className="text-gray-700 mb-4">
                The villa includes 4 double bedrooms with en-suite bathrooms, 3 of which have outdoor showers, and an additional twin room on request. 
                The open-plan dining, sitting, and games area offers stunning views of the pool and lake.
              </p>
              <p className="text-gray-700  mb-4">
                Relax in the large swimming pool or sunbathe by the water. Private yoga lessons, massages in the garden, and table tennis are also available.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.6 }}
              className="md:w-1/2 order-1 md:order-2"
            >
              <LazyLoadImage
                src={lakeViewIndoor} 
                alt="Rooms and Facilities"
                effect="blur"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Fresh Food and Dining Section */}
          <div className="mb-12">
            <h3 className="text-darkGreen font-bold mb-4">Dining at Lake House</h3>
            <div className="flex items-center space-x-4 mb-4">
              <p className="text-gray-700 ">
                Our cook prepares European or Sri Lankan dishes, and we don’t charge for food—only for the cost of ingredients. Just inform our chef a few hours in advance, and the freshest local produce will be prepared for your meal.
              </p>
            </div>
            <p className="text-gray-700  mb-4">
              Whether you're enjoying a Sri Lankan breakfast or a private barbecue, freshness is guaranteed. Check out our menu for some ideas, or feel free to explore our collection of cookbooks.
            </p>
          </div>

          {/* Tech and Services Section */}
          <div className="mb-12">
            <h3 className="font-bold text-darkGreen mb-4">Modern Amenities for a Comfortable Stay</h3>
            <div className="flex items-center space-x-4 mb-4">
              <p className="text-gray-700 mx-auto">
                The house is equipped with high-speed Wi-Fi throughout, and a Bose music system that connects via Bluetooth.
              </p>
            </div>
            <p className="text-gray-700  mb-4">
              Additionally, tuk-tuks can be hired, and a car with a driver can be rented for your excursions. A friendly team, including a cook, houseboys, gardener, and night watchman, will ensure your stay is smooth and enjoyable.
            </p>
          </div>

          {/* Photo Grid Section */}
          <div className="mb-12">
            <h3 className=" text-darkGreen font-bold mb-8 text-center">A Glimpse of Lake House</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[poolView, villaFrontView, villaSittingLounge].map((imgSrc, index) => (
                <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
                  <LazyLoadImage
                    src={imgSrc}
                    alt={`Lake House ${index + 1}`}
                    effect="blur"
                    className="rounded-lg min-h-60 md:min-h-96 lg:min-h-96 shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Photo Gallery Link */}
          <div className="text-center">
            <a href="/gallery" className="text-darkGreen underline text-lg">Be sure to check out our Photo Gallery of the house and its surroundings.</a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
