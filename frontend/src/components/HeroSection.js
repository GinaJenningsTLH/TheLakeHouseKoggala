import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import sittingView from '../assets/images/Gallery/sitting-area.jpg';
const HeroSection = () => {
    const textVariant = {
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
    };
    const buttonVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.2, ease: "easeOut" } }
    };
    return (_jsxs("section", { className: "relative bg-cover bg-center h-screen", style: { backgroundImage: `url(${sittingView})` }, children: [_jsx("div", { className: "absolute inset-0 bg-black bg-opacity-0 " }), _jsxs("div", { className: "relative z-10 flex flex-col justify-center items-center  md:items-center h-full px-4 sm:px-6 md:px-12 text-left", children: [_jsx(motion.h1, { className: "text-white text-4xl sm:text-6xl rethink-sans-lake font-bold mb-4", initial: "hidden", animate: "visible", variants: textVariant, style: {
                            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent)",
                            padding: "10px",
                            borderRadius: "8px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0)",
                        }, children: _jsxs("h1", { className: "text-[50px] sm:text-[60px] sm:pb-20 sm:mb-6 lg:text-[90px] mx-auto md:mx-0 -mt-10 lg:-mt-20 md:-mt-20 text-center outfit-lake text-white bg-clip-text text-transparent", children: [_jsx("br", {}), " THE LAKE HOUSE ", _jsx("br", {}), "KOGGALA"] }) }), _jsx(motion.div, { className: "flex justify-center md:justify-start mt-4 md:mb-19 md:mx-72 absolute bottom-10 md:static" // Positioned at bottom for mobile, normal for desktop
                        , initial: "hidden", animate: "visible", variants: buttonVariant, children: _jsx("a", { href: "/villa", className: "bg-gradient-to-r from-teal-400 to-teal-500 hover:bg-darkGreen text-white text-2xl py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105", children: "Explore" }) })] })] }));
};
export default HeroSection;
