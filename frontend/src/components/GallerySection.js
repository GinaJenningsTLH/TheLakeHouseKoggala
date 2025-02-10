import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import galleryImages from '../data/galleryData';
const GallerySection = ({ images }) => {
    return (_jsx("section", { id: "gallery", className: "section-padding", children: _jsxs("div", { className: "container bg-gray-100 pt-6  pb-16 mx-auto px-6 md:px-12 lg:px-24 text-center", children: [_jsxs("div", { className: 'w-fit mx-auto px-2 mb-2', children: [_jsx("h2", { className: "text-3xl font-bold text-gray-500 mb-2", children: "GALLERY" }), _jsx("p", { className: "text-gray-500 mb-10 max-w-2xl mx-auto", children: "Explore our gallery of selected images." })] }), _jsx(Gallery, { images: galleryImages }), _jsx(Link, { to: "/gallery", children: _jsx("p", { className: 'text-center text-gray-500 underline underline-offset-1 pt-10', children: _jsx("a", { href: '/gallery', className: '', children: "View more images" }) }) })] }) }));
};
export default GallerySection;
