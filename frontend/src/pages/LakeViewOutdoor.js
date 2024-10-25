import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const LakeViewOutdoor = () => {
    const images = [
        { src: '/room1.jpg', alt: 'Room 1' },
        { src: '/room2.jpg', alt: 'Room 2' },
        { src: '/room3.jpg', alt: 'Room 3' },
        { src: '/room4.jpg', alt: 'Room 4' },
    ];
    return (_jsxs("div", { className: 'gap-y-2', children: [_jsx(Navbar, {}), _jsxs("div", { className: "container mx-auto gap-2 py-16 px-4", children: [_jsx("div", { className: "mb-10", children: _jsx(AwesomeSlider, { animation: "Animation", children: images.map((image, index) => (_jsx("div", { "data-src": image.src, children: _jsx("img", { src: image.src, alt: image.alt, className: "w-full h- object-cover rounded" }) }, index))) }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-4xl font-bold mb-4", children: "Lake View Room (Indoor Shower)" }), _jsx("p", { className: "text-lg text-gray-600 mb-6", children: "Our Lake View Room offers a stunning view of Koggala Lake. This room is designed to provide comfort and relaxation with its modern amenities and serene environment." }), _jsxs("div", { className: "flex items-center mb-6", children: [_jsx("span", { className: "text-xl font-semibold", children: "Room Size:" }), _jsx("span", { className: "ml-2 text-lg text-gray-600", children: "30 sqm" })] }), _jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Facilities" }), _jsxs("ul", { className: "list-disc list-inside text-gray-600", children: [_jsx("li", { children: "King-size bed" }), _jsx("li", { children: "Indoor shower" }), _jsx("li", { children: "Free Wi-Fi" }), _jsx("li", { children: "Air Conditioning" }), _jsx("li", { children: "Private Balcony with Lake View" }), _jsx("li", { children: "Mini Bar" }), _jsx("li", { children: "24/7 Room Service" })] })] })] }), _jsx(Footer, {})] }));
};
export default LakeViewOutdoor;
