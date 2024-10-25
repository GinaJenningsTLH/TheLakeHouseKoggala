import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (_jsx("footer", { className: "bg-darkGreen text-white py-10", children: _jsxs("div", { className: "container mx-auto px-6 md:px-12 lg:px-24", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Explore" }), _jsxs("ul", { className: "space-y-2 grid grid-cols-2", children: [_jsx("li", { children: _jsx("a", { href: "/", className: "text-gray-300 hover:text-yellow-100", children: "Home" }) }), _jsx("li", { children: _jsx("a", { href: "/things-to-do", className: "text-gray-300 hover:text-yellow-100", children: "Things to Do" }) }), _jsx("li", { children: _jsx("a", { href: "/places-to-visit", className: "text-gray-300 hover:text-yellow-100", children: "Places to Visit" }) }), _jsx("li", { children: _jsx("a", { href: "/dining", className: "text-gray-300 hover:text-yellow-100", children: "Meals" }) }), _jsx("li", { children: _jsx("a", { href: "/events", className: "text-gray-300 hover:text-yellow-100", children: "Events" }) }), _jsx("li", { children: _jsx("a", { href: "/contact", className: "text-gray-300 hover:text-yellow-100", children: "Contact" }) }), _jsx("li", { children: _jsx("a", { href: "/about", className: "text-gray-300 hover:text-yellow-100", children: "About" }) })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Contact Us" }), _jsxs("p", { className: "flex items-center justify-center md:justify-start mb-2", children: [_jsx(FaPhoneAlt, { className: "mr-2" }), " +1 234 567 890"] }), _jsxs("p", { className: "flex items-center justify-center md:justify-start", children: [_jsx(FaEnvelope, { className: "mr-2" }), " info@lakehouse.com"] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Follow Us" }), _jsxs("div", { className: "flex justify-center md:justify-start space-x-4", children: [_jsx("a", { href: "https://facebook.com", className: "text-gray-400 hover:text-yellow-100", "aria-label": "Facebook", children: _jsx(FaFacebookF, { size: 20 }) }), _jsx("a", { href: "https://instagram.com", className: "text-gray-400 hover:text-yellow-100", "aria-label": "Instagram", children: _jsx(FaInstagram, { size: 20 }) }), _jsx("a", { href: "https://twitter.com", className: "text-gray-400 hover:text-yellow-100", "aria-label": "Twitter", children: _jsx(FaTwitter, { size: 20 }) })] })] })] }), _jsx("div", { className: "border-t border-gray-700 pt-6", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [_jsx("p", { className: "mb-4 md:mb-0", children: "\u00A9 2024 The Lake House Koggala. All rights reserved." }), _jsxs("div", { className: "flex space-x-6", children: [_jsx("a", { href: "/privacy", className: "text-gray-400 hover:text-yellow-100", children: "Privacy Policy" }), _jsx("a", { href: "/terms", className: "text-gray-400 hover:text-yellow-100", children: "Terms of Service" }), _jsx("a", { href: "/contact", className: "text-gray-400 hover:text-yellow-100", children: "Contact Us" })] })] }) })] }) }));
};
export default Footer;
