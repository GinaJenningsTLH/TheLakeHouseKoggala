import React from 'react';
import { motion } from 'framer-motion';
import { IoArrowDownCircle } from "react-icons/io5";
import sittingView from '../assets/images/Gallery/sitting-area.jpg';

const HeroSection: React.FC = () => {
  const textVariant = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const arrowVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1, 
        delay: 1.2, 
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5
      } 
    }
  };

  const scrollToNextSection = () => {
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${sittingView})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 md:px-12 text-left">
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
         <h1 
          className="text-[50px] sm:text-[60px] sm:pb-20 sm:mb-6 lg:text-[90px] mx-auto md:mx-0 font-display"
          style={{
            contentVisibility: 'auto',
            containIntrinsicSize: '50px'
          }}
        >
          THE LAKE HOUSE
        </h1>
        </motion.h1>

        <motion.button
          onClick={scrollToNextSection}
          className="absolute bottom-12 text-white hover:text-gray-500 transition-colors duration-300"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 1.2,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "reverse" as const,
                repeatDelay: 0.5
              }
            }
          }}
          aria-label="Scroll to next section"
        >
          <IoArrowDownCircle className="w-12 h-12" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
