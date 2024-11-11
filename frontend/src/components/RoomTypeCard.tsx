import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface RoomProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

const RoomsTypeCard: React.FC<RoomProps> = ({ imageSrc, altText, title, description, link }) => {
  return (
    <motion.div
      className="bg-gray-200 shadow-lg rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <LazyLoadImage
        className="w-full h-48 object-cover"
        src={imageSrc}
        alt={altText}
        effect="blur"
        placeholderSrc={`${imageSrc}?placeholder=true`} // Placeholder image for quicker load
        width="100%" // Ensure the image takes up the full width
        height="192px" // Maintain aspect ratio for consistent design
      />
      <div className="p-6">
        <h3 className="font-bold text-h3 text-[#5F9540] drop-shadow-lg mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a
          href={link}
          className="bg-darkGreen hover:bg-lightGreen text-white py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          View Details
        </a>
      </div>
    </motion.div>
  );
};

export default RoomsTypeCard;
