import React from 'react';
import { motion } from 'framer-motion';
import villaLakeView from '../assets/villa-lake-view.png'; // Directly import your image

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
      style={{ backgroundImage: `url(${villaLakeView})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-darkGreen bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center mx-auto md:items-start h-full px-4 sm:px-6 md:px-12 text-left">
        {/* Animated Text */}
        <motion.h1
          className="text-white text-4xl sm:text-6xl rethink-sans-lake font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h1 className="text-[50px] sm:text-[60px] lg:text-[90px] mx-auto md:mx-0 text-center md:text-left outfit-lake bg-gradient-to-r from-amber-100 to-lime-50 bg-clip-text text-transparent">
            <br /> THE LAKE HOUSE <br />KOGGALA
          </h1>
        </motion.h1>

        <motion.p
          className="text-lightestGreen alumni-sans-pinstripe-regular mx-auto md:mx-0 justify-center text-center md:text-left text-lg sm:text-2xl px-4 md:px-0 mb-8 max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.2, delay: 0.5, ease: "easeOut" } }}
        >
          Escape to our serene villa surrounded by nature, overlooking the stunning Koggala Lake.
        </motion.p>

        <motion.div
          className="flex justify-center md:justify-start"
          initial="hidden"
          animate="visible"
          variants={buttonVariant}
        >
          <a
            href="/rooms"
            className="mx-auto md:mx-0 bg-gradient-to-r from-amber-100 to-lime-50 hover:bg-darkGreen text-darkGreen py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore Our Rooms
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
