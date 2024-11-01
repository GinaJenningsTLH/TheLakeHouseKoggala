import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import { FaSwimmer, FaBicycle, FaGlassCheers, FaFish, FaTree, FaUtensils } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/images/things-to-do.png';
import poolImage from '../assets/images/Gallery/Pool-overview.jpg';
import houseboatImage from '../assets/images/Amenities/boat-house.jpeg';
import surfingImage from '../assets/images/massage-room.png';
import sunbedsImage from '../assets/images/sunbeds.png';
import cocktailsImage from '../assets/images/cocktails-by-the-lake-koggala.png';
import servicesImage from '../assets/images/personal-services.png';
import kayakingImage from '../assets/images/canoeing.png';
import turtleHatcheryImage from '../assets/images/turtle-hatchery.png';
import stickFishermenImage from '../assets/images/stick-fishermen.png';
import martinMuseumImage from '../assets/images/Martin.png';
import surfImage from '../assets/images/surfing.png';
import teaPlantImage from '../assets/images/whale-watching.png';

const ThingsToDo: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Create a parallax effect for background image movement
  const yRange = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-5xl font-bold mb-4"
          >
            Things to Do at The Lake House
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-lg"
          >
            A perfect blend of adventure, relaxation, and nature.
          </motion.p>
        </div>
      </section>

      {/* Facilities & Amenities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-4xl font-bold text-darkGreen mb-8 text-center">Facilities & Amenities at The Lake House</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Swimming Pool */}
            <motion.div 
              className="col-span-8 p-8 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg" 
              style={{ backgroundImage: `url(${poolImage})`, backgroundPositionY: yRange }} 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <FaSwimmer className="text-6xl text-white mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Swimming Pool</h3>
              <p className="text-white">Relax by the large pool, perfect for swimming and sunbathing in our tropical garden.</p>
            </motion.div>

            {/* Houseboat */}
            <motion.div 
              className="col-span-4 p-8 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg" 
              style={{ backgroundImage: `url(${houseboatImage})`, backgroundPositionY: yRange }}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FaFish className="text-6xl text-white mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Boat Ride</h3>
              <p className="text-white">Experience serenity on a houseboat trip across the tranquil Koggala Lake.</p>
            </motion.div>

            {/* Surfing */}
            <motion.div 
              className="col-span-4 p-8 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg" 
              style={{ backgroundImage: `url(${surfingImage})`, backgroundPositionY: yRange }}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FaBicycle className="text-6xl text-white mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Massage Room</h3>
              <p className="text-white">Experience an ayuredic massage by the Lake</p>
            </motion.div>

            {/* Sunbeds */}
            <motion.div 
              className="col-span-8 p-8 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg" 
              style={{ backgroundImage: `url(${sunbedsImage})`, backgroundPositionY: yRange }}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FaTree className="text-6xl text-white mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Sunbeds</h3>
              <p className="text-white">Soak up the sun on our comfortable sunbeds, surrounded by tropical foliage.</p>
            </motion.div>

            {/* Cocktails by the Lake */}
            <motion.div 
              className="col-span-8 p-8 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg" 
              style={{ backgroundImage: `url(${cocktailsImage})`, backgroundPositionY: yRange }}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <FaGlassCheers className="text-6xl text-white mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Cocktails by the Lake</h3>
              <p className="text-white">Enjoy sunset cocktails by the lake with a personalized bartender (BYO alcohol).</p>
            </motion.div>

            {/* Personalized Services */}
            <motion.div 
              className="col-span-4 p-8 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg" 
              style={{ backgroundImage: `url(${servicesImage})`, backgroundPositionY: yRange }}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 1 }}
            >
              <FaUtensils className="text-6xl text-white mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">Personalized Services</h3>
              <p className="text-white">Enjoy cooking lessons, fishing tours, tuk-tuk rides, and more, all tailored to your preferences.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Nearby Attractions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-4xl font-bold text-darkGreen mb-8 text-center">Activities Neary By</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Koggala Kayaking */}
            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <LazyLoadImage
                src={kayakingImage}
                alt="Koggala Kayaking"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Koggala Canoeing</h3>
              <p className="text-gray-600">From November to April, explore the scenic beauty of Koggala Lake by kayak.</p>
            </motion.div>

            {/* Turtle Hatchery */}
            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <LazyLoadImage
                src={turtleHatcheryImage}
                alt="Turtle Hatchery"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Turtle Hatchery</h3>
              <p className="text-gray-600">Visit the nearby turtle hatchery and learn about turtle conservation efforts just 10 minutes away.</p>
            </motion.div>

            {/* Stick Fishermen */}
            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <LazyLoadImage
                src={stickFishermenImage}
                alt="Stick Fishermen"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Stick Fishermen</h3>
              <p className="text-gray-600">Witness Sri Lanka’s iconic stick fishermen in action, a unique cultural experience.</p>
            </motion.div>

            {/* Martin Wickramasinghe Museum */}
            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <LazyLoadImage
                src={martinMuseumImage}
                alt="Martin Wickramasinghe Museum"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Martin Wickramasinghe Museum</h3>
              <p className="text-gray-600">Explore Sri Lankan culture and heritage at the nearby Martin Wickramasinghe Museum.</p>
            </motion.div>

            {/* Golf Course */}
            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <LazyLoadImage
                src={surfImage}
                alt="Airforce Golf Course"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Surfing</h3>
              <p className="text-gray-600">Enjoy a round of golf at the nearby Airforce Golf Course, just 10 minutes away.</p>
            </motion.div>

            {/* Virgin White Tea Plantations */}
            <motion.div 
              className="relative p-8 bg-white rounded-lg shadow-lg" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 1 }}
            >
              <LazyLoadImage
                src={teaPlantImage}
                alt="Virgin White Tea Plantations"
                effect="blur"
                className="rounded-lg mb-4 h-64 w-full object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">Whale Watching</h3>
              <p className="text-gray-600">Whale watching at Mirissa with a group</p>
            </motion.div>
              
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ThingsToDo;
