import React from "react";
import { motion } from "framer-motion";

const WhyBookWithUs: React.FC = () => {
  const variant = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="mb-12 px-4 md:px-0 ">
      <h3 className=" md:text-h2 text-darkGreen font-bold mb-6 text-center">Everything you need, to elevate your retreat ...</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 items-center justify-center">

        {/* Location */}
        <motion.div
          className="border-b md:border-r p-2 md:h-40 md:items-center md:border-b-0 border-black/70 flex justify-center"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={variant}
        >
          <span className="min-h-[220px] p-6 bg-white shadow-md rounded-md flex flex-col items-center justify-center w-full">
            <img src="/Location.svg" className="mb-2" alt="Location" />
            <h3 className="text-lg text-[#5F9540] font-serif">Location</h3>
            <p className="text-lg text-gray-500 text-center">Less than 2KM to beach access, prime location.</p>
          </span>
        </motion.div>

        {/* Exclusive Dining */}
        <motion.div
          className="border-b md:border-r pr-2 md:h-40 md:items-center md:border-b-0 border-black/70 flex justify-center"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={variant}
        >
          <span className="min-h-[220px] p-6 bg-white shadow-md rounded-md flex flex-col items-center justify-center w-full">
            <img src="/Dining.svg" className="mb-2" alt="Dining" />
            <h3 className="text-lg text-[#5F9540] font-serif">Exclusive Dining</h3>
            <p className="text-lg text-gray-500 text-center">Fresh food only, no frozen ingredients.</p>
          </span>
        </motion.div>

        {/* Priority Check-In/Out */}
        <motion.div
          className="border-b md:border-r pr-2 md:h-40 md:items-center md:border-b-0 border-black/70 flex justify-center"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={variant}
        >
          <span className="min-h-[220px] p-6 bg-white shadow-md rounded-md flex flex-col items-center justify-center w-full">
            <img src="/priority-check-in.svg" className="mb-2" alt="Priority Check-In/Out" />
            <h3 className="text-lg text-[#5F9540] font-serif">Priority Check-In/Out</h3>
            <p className=" text-lg text-gray-500 text-center">Early check-in and late checkout available.</p>
          </span>
        </motion.div>

        {/* Airport Transfers */}
        <motion.div
          className="flex justify-center"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={variant}
        >
          <span className="min-h-[220px] p-6 bg-white shadow-md rounded-md flex flex-col items-center justify-center w-full">
            <img src="/Airport-transfer.svg" className="mb-2" alt="Airport Transfers" />
            <h3 className="text-lg  text-[#5F9540] font-serif">Airport Transfers</h3>
            <p className="text-lg text-gray-500 text-center">Private airport transfer and baggage assistance.</p>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyBookWithUs;
