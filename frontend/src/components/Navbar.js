import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
const Navbar = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [roomsExpanded, setRoomsExpanded] = useState(false);
    const [experiencesExpanded, setExperiencesExpanded] = useState(false);
    const handleScroll = () => {
        const position = window.scrollY;
        setIsScrolled(position > 10);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setRoomsExpanded(false);
        setExperiencesExpanded(false);
    };
    const toggleSubMenu = (menu) => {
        if (menu === 'rooms') {
            setRoomsExpanded(!roomsExpanded);
            setExperiencesExpanded(false);
        }
        else if (menu === 'experiences') {
            setExperiencesExpanded(!experiencesExpanded);
            setRoomsExpanded(false);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("nav", { className: `px-8 fixed w-[100vw] z-20 top-0 h-16 left-0 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[black]/50' : 'bg-black/50'}`, children: _jsxs("div", { className: "flex items-center justify-between md:px-12 py-3", children: [_jsx(Link, { to: "/", className: "flex items-center", children: _jsx("img", { src: "/logo-white.png", className: "h-9 mt-2", alt: "Lake House Logo" }) }), _jsx("button", { type: "button", onClick: toggleMenu, className: "text-lightestGreen md:hidden lg:hidden focus:outline-none hover:text-yellow-100", children: menuOpen ? _jsx(FaTimes, { size: 24 }) : _jsx(FaBars, { size: 24 }) }), _jsx("div", { className: "hidden md:flex space-x-8", children: _jsxs("ul", { className: "flex items-center nav space-x-5  font-medium", children: [_jsx("li", { children: _jsx(Link, { to: "/", className: `transition-all px-4 py-2 rounded-md ${location.pathname === '/'
                                                ? 'bg-gray-200 text-gray-800'
                                                : 'text-white hover:bg-gray-200 hover:text-gray-800'}`, children: "ABOUT US" }) }), _jsx("li", { className: "relative group", children: _jsx(Link, { to: "/villa", className: `transition-all px-4 py-2 rounded-md ${location.pathname.includes('/villa') || location.pathname.includes('view')
                                                ? 'bg-gray-200 text-gray-800'
                                                : 'text-white hover:bg-gray-200 hover:text-gray-800'}`, children: "VILLA" }) }), _jsxs("li", { className: "relative group", children: [_jsx(Link, { to: "/things-to-do", className: `transition-all px-4 py-2 rounded-md ${location.pathname.includes('/things-to-do') || location.pathname.includes('/places-to-visit')
                                                    ? 'bg-gray-200 text-gray-800'
                                                    : 'text-white hover:bg-gray-200 hover:text-gray-800'}`, children: "EXPERIENCES" }), _jsxs("div", { className: "absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: [_jsx(Link, { to: "/things-to-do", className: `block px-4 py-2 border-b border-paleGreen text-gray-700 hover:bg-gray-500 hover:text-white ${location.pathname === '/things-to-do' ? 'bg-gray-800 text-white' : ''}`, children: "Things to Do" }), _jsx(Link, { to: "/places-to-visit", className: `block px-4 py-2 text-gray-700 hover:bg-gray-500 hover:text-white ${location.pathname === '/places-to-visit' ? 'bg-gray-800 text-white' : ''}`, children: "Places to Visit" })] })] }), _jsx("li", { children: _jsx(Link, { to: "/dining", className: `transition-all px-4 py-2 rounded-md ${location.pathname === '/dining'
                                                ? 'bg-gray-200 text-gray-800'
                                                : 'text-white hover:bg-gray-200 hover:text-gray-800'}`, onClick: toggleMenu, children: "DINING" }) }), _jsx("li", { children: _jsx(Link, { to: "/contact", className: `transition-all px-4 py-2 rounded-md ${location.pathname === '/contact'
                                                ? 'bg-gray-200 text-gray-800'
                                                : 'text-white hover:bg-gray-200 hover:text-gray-800'}`, children: "CONTACT" }) }), _jsx("li", { children: _jsx(Link, { to: "/gallery", className: `transition-all px-4 py-2 rounded-md ${location.pathname === '/gallery'
                                                ? 'bg-gray-200 text-gray-800'
                                                : 'text-white hover:bg-gray-200 hover:text-gray-800'}`, children: "GALLERY" }) })] }) })] }) }), _jsxs("div", { className: `fixed top-0 right-0 h-screen bg-black/90 transform transition-transform duration-300 ease-in-out z-30 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`, children: [_jsx("button", { onClick: toggleMenu, className: "absolute top-4 right-4 text-lightestGreen focus:outline-none", children: _jsx(FaTimes, { size: 24 }) }), _jsxs("ul", { className: "flex flex-col space-y-6 mt-20 px-8 text-xl font-medium text-lightestGreen", children: [_jsx("li", { children: _jsx(Link, { to: "/", className: `transition-colors ${location.pathname === '/'
                                        ? 'text-lightestGreen'
                                        : 'text-lightestGreen hover:text-lightGreen'}`, onClick: toggleMenu, children: "ABOUT US" }) }), _jsxs("li", { className: "flex items-center justify-between", onClick: () => toggleSubMenu('rooms'), children: [_jsx("span", { className: "hover:text-yellow-100", children: "VILLA" }), _jsx(FaChevronDown, { className: `transform transition-transform duration-300 ${roomsExpanded ? 'rotate-180' : 'rotate-0'}` })] }), roomsExpanded && (_jsxs("ul", { className: "pl-4 mt-2 space-y-2 text-lg text-gray-300", children: [_jsx("li", { children: _jsx(Link, { to: "/lake-view-indoor", className: "hover:text-yellow-100", onClick: toggleMenu, children: "Lake View (Indoor Shower)" }) }), _jsx("li", { children: _jsx(Link, { to: "/garden-view-indoor", className: "hover:text-yellow-100", onClick: toggleMenu, children: "Garden View (Indoor Shower)" }) }), _jsx("li", { children: _jsx(Link, { to: "/lake-view-outdoor", className: "hover:text-yellow-100", onClick: toggleMenu, children: "Lake View (Outdoor Shower)" }) }), _jsx("li", { children: _jsx(Link, { to: "/garden-view-outdoor", className: "hover:text-yellow-100", onClick: toggleMenu, children: "Garden View (Outdoor Shower)" }) })] })), _jsxs("li", { className: "flex items-center justify-between", onClick: () => toggleSubMenu('experiences'), children: [_jsx("span", { className: `pr-2 transition-colors ${location.pathname.includes('/things-to-do') || location.pathname.includes('/places-to-visit')
                                            ? 'text-lightestGreen'
                                            : 'text-lightestGreen hover:text-lightGreen'}`, children: "EXPERIENCES" }), _jsx(FaChevronDown, { className: `transform transition-transform duration-300 ${experiencesExpanded ? 'rotate-180' : 'rotate-0'}` })] }), experiencesExpanded && (_jsxs("ul", { className: "pl-4 mt-2 space-y-2 text-lg text-gray-300", children: [_jsx("li", { children: _jsx(Link, { to: "/things-to-do", className: `transition-colors ${location.pathname === '/things-to-do'
                                                ? 'text-lightGreen'
                                                : 'hover:text-lightGreen'}`, onClick: toggleMenu, children: "Things to Do" }) }), _jsx("li", { children: _jsx(Link, { to: "/places-to-visit", className: `transition-colors ${location.pathname === '/places-to-visit'
                                                ? 'text-lightGreen'
                                                : 'hover:text-lightGreen'}`, onClick: toggleMenu, children: "Places to Visit" }) })] })), _jsx("li", { children: _jsx(Link, { to: "/dining", className: `transition-all px-4 py-2 rounded-md ${location.pathname === '/dining'
                                        ? 'bg-gray-200 text-gray-800'
                                        : 'text-lightestGreen hover:bg-gray-200 hover:text-gray-800'}`, onClick: toggleMenu, children: "DINING" }) }), _jsx("li", { children: _jsx(Link, { to: "/contact", className: `transition-colors ${location.pathname === '/contact'
                                        ? 'text-lightGreen'
                                        : 'text-lightestGreen hover:text-lightGreen'}`, onClick: toggleMenu, children: "CONTACT" }) }), _jsx("li", { children: _jsx(Link, { to: "/gallery", className: `transition-colors ${location.pathname === '/gallery'
                                        ? 'text-lightGreen'
                                        : 'text-lightestGreen hover:text-lightGreen'}`, onClick: toggleMenu, children: "GALLERY" }) })] })] })] }));
};
export default Navbar;
