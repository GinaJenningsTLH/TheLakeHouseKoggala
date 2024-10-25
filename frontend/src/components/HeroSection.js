import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
const HeroSection = () => {
    const textVariant = {
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
    };
    const buttonVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.2, ease: "easeOut" } }
    };
    return (_jsxs("section", { className: "relative bg-cover bg-center h-screen", style: { backgroundImage: "url('villa-lake-view.png')" }, children: [_jsx("div", { className: "absolute inset-0 bg-darkGreen bg-opacity-60" }), _jsxs("div", { className: "relative z-10 text-center lg:w-[800px] md:w-[700px]  flex flex-col  text-center justify-center items-start h-full", children: [_jsx(motion.h1, { className: "text-white text-6xl  mx-auto px-auto rethink-sans-lake ml-6 font-bold mb-4", initial: "hidden", animate: "visible", variants: textVariant, children: _jsxs("h1", { className: "text-[90px] outfit-lake   bg-gradient-to-r from-amber-100 to-lime-50 bg-clip-text text-transparent", children: [_jsx("br", {}), " THE  LAKE HOUSE ", _jsx("br", {}), " KOGGALA", _jsx("span", { className: 'bg-gradient-to-r from-teal-500 to-teal-200 bg-clip-text text-transparent ', children: " " })] }) }), _jsx(motion.p, { className: "text-lightestGreen alumni-sans-pinstripe-regular text-center items-center text-2xl  mb-8 mx-8 md:mx-auto lg:mx-auto max-w-lg", initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0, transition: { duration: 1.2, delay: 0.5, ease: "easeOut" } }, children: "Escape to our serene villa surrounded by nature, overlooking the stunning Koggala Lake." }), _jsx(motion.div, { className: "flex w-full justify-center items-end align-end", initial: "hidden", animate: "visible", variants: buttonVariant, children: _jsx("a", { href: "/rooms", className: "bg-gradient-to-r from-amber-100 to-lime-50 hover:bg-darkGreen text-darkGreen py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105", children: "Explore Our Rooms" }) })] })] }));
};
export default HeroSection;
