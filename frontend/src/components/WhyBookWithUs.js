import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import TypingEffect from 'react-typing-effect'; // Import the typing effect library
import LocationIcon from '../assets/Location.svg';
import DiningIcon from '../assets/Dining.svg';
import PriorityCheckInIcon from '../assets/priority-check-in.svg';
import AirportTransferIcon from '../assets/Airport-transfer.svg';
import '../App.css';
const WhyBookWithUs = () => {
    const variant = {
        hidden: { opacity: 0, x: -100 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
            },
        }),
    };
    const features = [
        {
            icon: LocationIcon,
            title: "LOCATION",
            description: "Less than 2KM to beach access, prime location."
        },
        {
            icon: DiningIcon,
            title: "DINING",
            description: "Fresh food only, no frozen ingredients."
        },
        {
            icon: PriorityCheckInIcon,
            title: "LAKEVIEW",
            description: "Direct Lake View"
        },
        {
            icon: AirportTransferIcon,
            title: "SERVICE",
            description: "Private airport transfer and baggage assistance."
        }
    ];
    return (_jsx("div", { className: "mb-12 -mt-20 bg-[#DEE64C]/70 h-auto pb-20 pt-6 w-screen md:px-0", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-1 flex -rows-1 gap-4 md:gap-2 items-center justify-center", children: [_jsx("h3", { className: "md:text-lx2 h-max-10 text-[#66930C] font-bold flex justify-center items-start text-center", children: _jsx(TypingEffect, { text: "Everything you need, to elevate your retreat...", speed: 100, eraseDelay: 10000 }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 mt-10 gap-4", children: features.map((feature, index) => (_jsx(motion.div, { className: `border-0 md: px-6 md:h-40 md:items-center ${index < 3 ? 'md:border-b-0' : ''} border-black/70 flex justify-center`, custom: index, initial: "hidden", animate: "visible", variants: variant, children: _jsxs("span", { className: "min-h-[220px] p-6 bg-white shadow-md rounded-md flex flex-col items-center justify-center w-full", children: [_jsx("img", { src: feature.icon, className: "mb-2", alt: feature.title }), _jsx("h3", { className: "text-lg text-[#3E391A] font-bold", children: feature.title }), _jsx("p", { className: "text-lg text-gray-500 text-center", children: feature.description })] }) }, index))) })] }) }));
};
export default WhyBookWithUs;
