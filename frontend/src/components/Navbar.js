import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../index.css';
const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showRoomsDropdown, setShowRoomsDropdown] = useState(false);
    const [showExperiencesDropdown, setShowExperiencesDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    let roomsTimeout;
    let experiencesTimeout;
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        if (position > 50) {
            setIsScrolled(true);
        }
        else {
            setIsScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handleMouseEnterRooms = () => {
        clearTimeout(roomsTimeout);
        setShowRoomsDropdown(true);
    };
    const handleMouseLeaveRooms = () => {
        roomsTimeout = setTimeout(() => {
            setShowRoomsDropdown(false);
        }, 300);
    };
    const handleMouseEnterExperiences = () => {
        clearTimeout(experiencesTimeout);
        setShowExperiencesDropdown(true);
    };
    const handleMouseLeaveExperiences = () => {
        experiencesTimeout = setTimeout(() => {
            setShowExperiencesDropdown(false);
        }, 300);
    };
    return (_jsxs(_Fragment, { children: [_jsx("nav", { className: `px-8 fixed w-[100vw] z-20 top-0 h-16 left-0 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[#FFFACB]/100 shadow-lg' : 'bg-transparent'}`, children: _jsxs("div", { className: "flex items-center justify-between md:px-12 py-3", children: [_jsx(Link, { to: "/", className: "flex items-center", children: isScrolled ? (_jsx("img", { src: "/scrolled-lake-house.png", className: "h-12 shadow-sm shadow-white", alt: "Scrolled Lake House Logo" })) : (_jsx("img", { src: "/The-Lake-House.png", className: "h-28 w-[114px] mt-2", alt: "Lake House Logo" })) }), _jsx("button", { type: "button", onClick: toggleMenu, className: `focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden lg:hidden hover:text-yellow-100 ${isScrolled ? 'text-darkGreen ' : 'text-lightestGreen '}`, children: menuOpen ? _jsx(FaTimes, { size: 24 }) : _jsx(FaBars, { size: 24 }) }), _jsx("div", { className: `hidden md:flex space-x-8 ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto`, children: _jsxs("ul", { className: "flex items-center space-x-6 text-xl alumni-sans-pinstripe-nav font-medium", children: [_jsx("li", { children: _jsx(Link, { to: "/", className: `hover:text-yellow-100 ${isScrolled ? 'text-darkGreen ' : 'text-lightestGreen '}`, children: "Home" }) }), _jsxs("li", { className: "relative group", onMouseEnter: handleMouseEnterRooms, onMouseLeave: handleMouseLeaveRooms, children: [_jsx(Link, { to: "#", className: `hover:text-yellow-100 ${isScrolled ? 'text-darkGreen' : 'text-lightestGreen '}`, children: "Suites" }), showRoomsDropdown && (_jsxs("div", { className: "absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: [_jsx(Link, { to: "/lake-view-indoor", className: "block px-4 py-2 border-b border-paleGreen text-gray-700 hover:bg-yellow-100", children: "Lake View (Indoor Shower)" }), _jsx(Link, { to: "/garden-view-indoor", className: "block px-4 py-2 border-b border-paleGreen text-gray-700 hover:bg-yellow-100", children: "Garden View (Indoor Shower)" }), _jsx(Link, { to: "/lake-view-outdoor", className: "block px-4 py-2 border-b border-paleGreen text-gray-700 hover:bg-yellow-100", children: "Lake View (Outdoor Shower)" }), _jsx(Link, { to: "/garden-view-outdoor", className: "block px-4 py-2 text-gray-700 hover:bg-yellow-100", children: "Garden View (Outdoor Shower)" })] }))] }), _jsxs("li", { className: "relative group", onMouseEnter: handleMouseEnterExperiences, onMouseLeave: handleMouseLeaveExperiences, children: [_jsx(Link, { to: "#", className: `hover:text-yellow-100 ${isScrolled ? 'text-darkGreen  ' : 'text-lightestGreen'}`, children: "Experiences" }), showExperiencesDropdown && (_jsxs("div", { className: "absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: [_jsx(Link, { to: "/things-to-do", className: "block px-4 py-2 border-b border-paleGreen text-gray-700 hover:bg-yellow-100", children: "Things to Do" }), _jsx(Link, { to: "/places-to-visit", className: "block px-4 py-2 text-gray-700 hover:bg-yellow-100", children: "Places to Visit" })] }))] }), _jsx("li", { children: _jsx(Link, { to: "/dining", className: `hover:text-yellow-100 ${isScrolled ? 'text-darkGreen' : 'text-lightestGreen'}`, children: "Meals" }) }), _jsx("li", { children: _jsx(Link, { to: "/events", className: `hover:text-yellow-100 ${isScrolled ? 'text-darkGreen' : 'text-lightestGreen'}`, children: "Events" }) }), _jsx("li", { children: _jsx(Link, { to: "/contact", className: `hover:text-yellow-100 ${isScrolled ? 'text-darkGreen' : 'text-lightestGreen'}`, children: "Contact" }) }), _jsx("li", { children: _jsx(Link, { to: "/about", className: `hover:text-yellow-100 ${isScrolled ? 'text-darkGreen' : 'text-lightestGreen'}`, children: "About" }) })] }) })] }) }), _jsxs("div", { className: `fixed top-0 right-0 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`, children: [_jsx("button", { onClick: toggleMenu, className: "absolute top-4 right-4 text-darkGreen focus:outline-none focus:ring-2 focus:ring-gray-200", children: _jsx(FaTimes, { size: 24 }) }), _jsxs("ul", { className: "flex flex-col space-y-6 mt-20 px-8 text-xl font-medium", children: [_jsx("li", { children: _jsx(Link, { to: "/", className: "text-darkGreen hover:text-yellow-100", onClick: toggleMenu, children: "Home" }) }), _jsx("li", { children: _jsx(Link, { to: "/lake-view-indoor", className: "text-darkGreen hover:text-yellow-100", onClick: toggleMenu, children: "Lake View (Indoor Shower)" }) }), _jsx("li", { children: _jsx(Link, { to: "/garden-view-indoor", className: "text-darkGreen hover:text-yellow-100", onClick: toggleMenu, children: "Garden View (Indoor Shower)" }) }), _jsx("li", { children: _jsx(Link, { to: "/lake-view-outdoor", className: "text-darkGreen hover:text-yellow-100", onClick: toggleMenu, children: "Lake View (Outdoor Shower)" }) }), _jsx("li", { children: _jsx(Link, { to: "/garden-view-outdoor", className: "text-darkGreen hover:text-yellow-100", onClick: toggleMenu, children: "Garden View (Outdoor Shower)" }) }), _jsx("li", { children: _jsx(Link, { to: "/things-to-do", className: "text-darkGreen hover:text-yellow-100", onClick: toggleMenu, children: "Things to Do" }) }), _jsx("li", { children: _jsx(Link, { to: "/places-to-visit", className: "text-darkGreen hover:text-yellow-100", onClick: toggleMenu, children: "Places to Visit" }) }), _jsx("li", { children: _jsx(Link, { to: "/dining", className: "text-darkGreen hover:text-yellow-100", onClick: toggleMenu, children: "Meals" }) }), _jsx("li", { children: _jsx(Link, { to: "/events", className: "text-darkGreen hover:text-yellow-100", onClick: toggleMenu, children: "Events" }) }), _jsx("li", { children: _jsx(Link, { to: "/contact", className: "text-darkGreen hover:text-yellow-100", onClick: toggleMenu, children: "Contact" }) }), _jsx("li", { children: _jsx(Link, { to: "/about", className: "text-darkGreen hover:text-yellow-100", onClick: toggleMenu, children: "About" }) })] })] })] }));
};
export default Navbar;
