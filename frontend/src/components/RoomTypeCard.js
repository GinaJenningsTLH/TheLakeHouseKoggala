import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/blur.css';
const RoomsTypeCard = ({ imageSrc, altText, title, description, link }) => {
    return (_jsxs(motion.div, { className: "bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3, duration: 0.8 }, children: [_jsx(LazyLoadImage, { className: "w-full h-48 object-cover", src: imageSrc, alt: altText, effect: "blur" }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "font-bold text-h3 text-[#5F9540] drop-shadow-lg mb-2", children: title }), _jsx("p", { className: "text-gray-700 mb-4", children: description }), _jsx("a", { href: link, className: "bg-darkGreen hover:bg-lightGreen text-white py-2 px-4 rounded-full", children: "View Details" })] })] }));
};
export default RoomsTypeCard;
