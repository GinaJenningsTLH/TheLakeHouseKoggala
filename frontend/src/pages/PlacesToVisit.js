import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
const PlacesToVisit = () => {
    const places = [
        {
            name: 'Galle Fort',
            description: 'A 1-hour drive from Koggala, explore this iconic UNESCO World Heritage Site.',
            image: '/Galle-fort.png',
            route: '/blog/galle-fort',
            distance: '1 Hour Drive',
        },
        {
            name: 'Mirissa Beach',
            description: 'A 45-minute drive to one of Sri Lanka’s most famous beaches, known for whale watching.',
            image: '/Mirissa.png',
            route: '/blog/mirissa-beach',
            distance: '45 Minutes Drive',
        },
        {
            name: 'Unawatuna Beach',
            description: 'A 30-minute drive to a beautiful beach with turquoise waters and lively atmosphere.',
            image: '/Unawatuna-Beach.png',
            route: '/blog/unawatuna-beach',
            distance: '30 Minutes Drive',
        },
        {
            name: 'Yala National Park',
            description: 'Experience wildlife and safari tours in one of Sri Lanka’s famous national parks.',
            image: '/Yala.png',
            route: '/blog/yala-national-park',
            distance: '2.5 Hours Drive',
        },
        {
            name: 'Ella',
            description: 'A scenic town known for hikes, waterfalls, and Nine Arches Bridge. Perfect for a road trip.',
            image: '/Ella.png',
            route: '/blog/ella',
            distance: '3.5 Hours Drive',
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("section", { className: "relative bg-cover bg-center h-screen text-white", style: { backgroundImage: 'url("/Places-to-visit.png")' }, children: [_jsx("div", { className: "bg-black bg-opacity-50 absolute inset-0" }), _jsxs("div", { className: "relative container mx-auto h-full flex flex-col items-center justify-center text-center", children: [_jsx(motion.h1, { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-5xl font-bold mb-4", children: "Places to Visit Near Koggala" }), _jsx(motion.p, { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, className: "text-lg", children: "Explore the best destinations around Koggala." })] })] }), _jsx("section", { className: "py-20 bg-lightestGreen", children: _jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-24 text-center", children: [_jsx("h2", { className: "text-4xl font-bold text-darkGreen mb-8", children: "Nearby Places to Visit" }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 }, children: places.map((place, index) => (_jsx(motion.div, { className: "bg-white shadow-lg rounded-lg overflow-hidden", whileHover: { scale: 1.05 }, children: _jsxs("a", { href: place.route, children: [_jsx("img", { className: "w-full h-48 object-cover", src: place.image, alt: place.name }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "font-bold text-h3 mb-2", children: place.name }), _jsx("p", { className: "text-gray-700 mb-2", children: place.description }), _jsx("span", { className: "text-darkGreen font-semibold", children: place.distance })] })] }) }, index))) })] }) }), _jsx(Footer, {})] }));
};
export default PlacesToVisit;
