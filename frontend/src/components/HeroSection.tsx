import React from 'react';
import { motion } from 'framer-motion';
import villaLakeView from '../assets/villa-lake-view.png'; 
import sittingView from '../assets/images/Gallery/sitting-area.jpeg';

const HeroSection: React.FC = () => {
  const textVariant = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.2, ease: "easeOut" } }
  };

  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${sittingView})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 "></div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-center items-center  md:items-center h-full px-4 sm:px-6 md:px-12 text-left"
      >
        {/* Animated Text with Gradient Background */}
        <motion.h1
          className="text-white text-4xl sm:text-6xl rethink-sans-lake font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={textVariant}
          style={{
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent)",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0)",
          }}
        >
          <h1 className="text-[50px] sm:text-[60px] sm:pb-20 sm:mb-6 lg:text-[90px] mx-auto md:mx-0 -mt-10 lg:-mt-20 md:-mt-20 text-center outfit-lake text-white bg-clip-text text-transparent">
            <br /> THE LAKE HOUSE <br />
          
              KOGGALA
          
          </h1>
        </motion.h1>

        {/* Explore Button */}
        <motion.div
          className="flex justify-center md:justify-start mt-4 md:-mt-20 md:mx-72 absolute bottom-10 md:static" // Positioned at bottom for mobile, normal for desktop
          initial="hidden"
          animate="visible"
          variants={buttonVariant}
        >
          <a
            href="/villa"
            className="bg-gradient-to-r from-teal-400 to-teal-500 hover:bg-darkGreen text-white text-2xl py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
