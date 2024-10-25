import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import 'swiper/swiper-bundle.css';
import { motion } from 'framer-motion';
import WhyBookWithUs from '../components/WhyBookWithUs';
const Home = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(HeroSection, {}), _jsx("section", { id: "overview", className: "relative my-10  bg-cover bg-center h-screen", style: { backgroundImage: "url('tree.png')", }, children: _jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-24 text-center", children: [_jsx(WhyBookWithUs, {}), _jsx("h1", { className: "text-h1 font-bold text-darkGreen mb-6", children: "Discover the Lake House" }), _jsx(motion.p, { className: "text-lg text-darkGreen mb-8", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, children: "Built in 2010 by a British architect, the Lake House is a peaceful, architect-designed, contemporary, and environmentally sustainable villa located on the serene shores of Koggala Lake, near the historic town of Galle in Southern Sri Lanka. This villa offers a tranquil retreat that perfectly balances modern design with the natural beauty of its surroundings. Built with sustainability in mind, the villa seamlessly integrates into the lush tropical environment, providing guests with a unique and eco-friendly escape." }), _jsx(motion.a, { href: "/about", className: "inline-block bg-lightGreen hover:bg-darkGreen text-white py-3 px-6 rounded-md", whileHover: { scale: 1.05 }, children: "Read More" })] }) }), _jsx("section", { id: "rooms", className: "py-20 bg-lightestGreen", children: _jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-24 text-center", children: [_jsx("h2", { className: "text-h2 font-bold text-darkGreen mb-6", children: "Rooms & Suites" }), _jsx("p", { className: "text-lg text-darkGreen mb-8", children: "Enjoy luxurious accommodations with stunning views." }), _jsxs(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 }, children: [_jsx("div", { className: "bg-white shadow-lg  rounded-lg overflow-hidden", children: _jsxs("div", { children: [_jsx("img", { className: "w-full h-48 object-cover", src: "/lake-view-room.jpg", alt: "Lake View Room" }), _jsxs("div", { className: "p-6 ", children: [_jsx("h3", { className: "font-bold text-h3 mb-2", children: "Lake View Room" }), _jsx("p", { className: "text-gray-700 mb-4", children: "A serene room with a stunning view of Koggala Lake." }), _jsx("a", { href: "/rooms", className: "bg-darkGreen hover:bg-lightGreen text-white py-2 px-4 rounded-full", children: "View Details" })] })] }) }), _jsx("div", { className: "bg-white shadow-lg  rounded-lg overflow-hidden", children: _jsxs("div", { children: [_jsx("img", { className: "w-full h-48 object-cover", src: "/lake-view-room.jpg", alt: "Lake View Room" }), _jsxs("div", { className: "p-6 ", children: [_jsx("h3", { className: "font-bold text-h3 mb-2", children: "Lake View Room" }), _jsx("p", { className: "text-gray-700 mb-4", children: "A serene room with a stunning view of Koggala Lake." }), _jsx("a", { href: "/rooms", className: "bg-darkGreen hover:bg-lightGreen text-white py-2 px-4 rounded-full", children: "View Details" })] })] }) }), _jsx("div", { className: "bg-white shadow-lg  rounded-lg overflow-hidden", children: _jsxs("div", { children: [_jsx("img", { className: "w-full h-48 object-cover", src: "/lake-view-room.jpg", alt: "Lake View Room" }), _jsxs("div", { className: "p-6 ", children: [_jsx("h3", { className: "font-bold text-h3 mb-2", children: "Lake View Room" }), _jsx("p", { className: "text-gray-700 mb-4", children: "A serene room with a stunning view of Koggala Lake." }), _jsx("a", { href: "/rooms", className: "bg-darkGreen hover:bg-lightGreen text-white py-2 px-4 rounded-full", children: "View Details" })] })] }) })] })] }) }), _jsx("section", { id: "booking", className: "py-20 bg-darkGreen", children: _jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-24 text-center", children: [_jsx(motion.h2, { className: "text-h1 text-lightestGreen font-bold mb-6", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, children: "Ready to Book Your Stay?" }), _jsx(motion.a, { href: "/book", className: "inline-block bg-lightGreen hover:bg-darkGreen text-white py-3 px-6 rounded-md", whileHover: { scale: 1.05 }, children: "Book Now" })] }) }), _jsx(Footer, {})] }));
};
export default Home;
