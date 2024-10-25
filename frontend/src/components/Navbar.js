import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showRoomsDropdown, setShowRoomsDropdown] = useState(false);
    const [showExperiencesDropdown, setShowExperiencesDropdown] = useState(false);
    let roomsTimeout;
    let experiencesTimeout;
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        if (position > 50) {
            setIsScrolled(true); // When scroll is greater than 50px, the background turns white
        }
        else {
            setIsScrolled(false); // Reset to transparent when at the top
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleMouseEnterRooms = () => {
        clearTimeout(roomsTimeout); // Clear any existing timeout
        setShowRoomsDropdown(true); // Show the dropdown immediately
    };
    const handleMouseLeaveRooms = () => {
        roomsTimeout = setTimeout(() => {
            setShowRoomsDropdown(false); // Hide the dropdown after a delay
        }, 200); // 200ms delay
    };
    const handleMouseEnterExperiences = () => {
        clearTimeout(experiencesTimeout); // Clear any existing timeout
        setShowExperiencesDropdown(true); // Show the dropdown immediately
    };
    const handleMouseLeaveExperiences = () => {
        experiencesTimeout = setTimeout(() => {
            setShowExperiencesDropdown(false); // Hide the dropdown after a delay
        }, 200); // 200ms delay
    };
    return (_jsx("nav", { className: `fixed w-full z-20 top-0 h-16 left-0 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-lg' : 'bg-black/50 '}`, children: _jsxs("div", { className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4", children: [_jsxs("a", { href: "/", className: "flex items-center", children: [_jsx("img", { src: "/logo.svg", className: "h-12 w-12", alt: "Lake House Logo" }), _jsx("span", { className: `self-center text-2xl font-semibold whitespace-nowrap ${isScrolled ? 'text-darkGreen' : 'text-lightestGreen'}`, children: "The Lake House" })] }), _jsxs("button", { type: "button", className: "inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200", children: [_jsx("span", { className: "sr-only", children: "Open main menu" }), _jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M3 5h14M3 10h14M3 15h14", clipRule: "evenodd" }) })] }), _jsx("div", { className: "hidden w-full md:block md:w-auto", id: "navbar-default", children: _jsxs("ul", { className: "flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent", children: [_jsx("li", { children: _jsx("a", { href: "/", className: `block py-2 pl-3 pr-4 ${isScrolled ? 'text-darkGreen' : 'text-white text-lg font-20'} rounded md:bg-transparent hover:text-lightGreen`, children: "Home" }) }), _jsxs("li", { className: "relative", onMouseEnter: handleMouseEnterRooms, onMouseLeave: handleMouseLeaveRooms, children: [_jsx("a", { href: "#", className: `block py-2 pl-3 pr-4 ${isScrolled ? 'text-darkGreen' : 'text-white text-lg font-20'} rounded md:bg-transparent hover:text-lightGreen`, children: "Rooms & Suites" }), showRoomsDropdown && (_jsxs("div", { className: "absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20", children: [_jsx("a", { href: "/lake-view-indoor", className: "block px-4 py-2 text-gray-700 hover:bg-gray-100", children: "Lake View (Indoor Shower)" }), _jsx("a", { href: "/garden-view-indoor", className: "block px-4 py-2 text-gray-700 hover:bg-gray-100", children: "Garden View (Indoor Shower)" }), _jsx("a", { href: "/lake-view-outdoor", className: "block px-4 py-2 text-gray-700 hover:bg-gray-100", children: "Lake View (Outdoor Shower)" }), _jsx("a", { href: "/garden-view-outdoor", className: "block px-4 py-2 text-gray-700 hover:bg-gray-100", children: "Garden View (Outdoor Shower)" })] }))] }), _jsxs("li", { className: "relative", onMouseEnter: handleMouseEnterExperiences, onMouseLeave: handleMouseLeaveExperiences, children: [_jsx("a", { href: "#", className: `block py-2 pl-3 pr-4 ${isScrolled ? 'text-darkGreen' : 'text-white text-lg font-20'} rounded md:bg-transparent hover:text-lightGreen`, children: "Experiences" }), showExperiencesDropdown && (_jsxs("div", { className: "absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20", children: [_jsx("a", { href: "/things-to-do", className: "block px-4 py-2 text-gray-700 hover:bg-gray-100", children: "Things to Do" }), _jsx("a", { href: "/places-to-visit", className: "block px-4 py-2 text-gray-700 hover:bg-gray-100", children: "Places to Visit" })] }))] }), _jsx("li", { children: _jsx("a", { href: "/dining", className: `block py-2 pl-3 pr-4 ${isScrolled ? 'text-darkGreen' : 'text-white text-lg font-20'} rounded md:bg-transparent hover:text-lightGreen`, children: "Dining" }) }), _jsx("li", { children: _jsx("a", { href: "/contact", className: `block py-2 pl-3 pr-4 ${isScrolled ? 'text-darkGreen' : 'text-white text-lg font-20'} rounded md:bg-transparent hover:text-lightGreen`, children: "Contact" }) }), _jsx("li", { children: _jsx("a", { href: "/about", className: `block py-2 pl-3 pr-4 ${isScrolled ? 'text-darkGreen' : 'text-white text-lg font-20'} rounded md:bg-transparent hover:text-lightGreen`, children: "About" }) })] }) })] }) }));
};
export default Navbar;
