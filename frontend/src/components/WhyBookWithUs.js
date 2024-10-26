import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import LocationIcon from '../assets/Location.svg';
import DiningIcon from '../assets/Dining.svg';
import PriorityCheckInIcon from '../assets/priority-check-in.svg';
import AirportTransferIcon from '../assets/Airport-transfer.svg';
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
            title: "Location",
            description: "Less than 2KM to beach access, prime location."
        },
        {
            icon: DiningIcon,
            title: "Exclusive Dining",
            description: "Fresh food only, no frozen ingredients."
        },
        {
            icon: PriorityCheckInIcon,
            title: "Priority Check-In/Out",
            description: "Early check-in and late checkout available."
        },
        {
            icon: AirportTransferIcon,
            title: "Airport Transfers",
            description: "Private airport transfer and baggage assistance."
        }
    ];
    return (_jsxs("div", { className: "mb-12 px-4 md:px-0", children: [_jsx("h3", { className: "md:text-h2 text-darkGreen font-bold mb-10 text-center", children: "Everything you need, to elevate your retreat..." }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 items-center justify-center", children: features.map((feature, index) => (_jsx(motion.div, { className: `border-0 md:border-r p-2 md:h-40 md:items-center ${index < 3 ? 'md:border-b-0' : ''} border-black/70 flex justify-center`, custom: index, initial: "hidden", animate: "visible", variants: variant, children: _jsxs("span", { className: "min-h-[220px] p-6 bg-white shadow-md rounded-md flex flex-col items-center justify-center w-full", children: [_jsx("img", { src: feature.icon, className: "mb-2", alt: feature.title }), _jsx("h3", { className: "text-lg text-[#5F9540] font-serif", children: feature.title }), _jsx("p", { className: "text-lg text-gray-500 text-center", children: feature.description })] }) }, index))) })] }));
};
export default WhyBookWithUs;
