import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RoomCard = ({ title, description, image, price }) => {
    return (_jsxs("div", { className: "max-w-sm rounded overflow-hidden shadow-lg", children: [_jsx("img", { className: "w-full h-48 object-cover", src: image, alt: title }), _jsxs("div", { className: "px-6 py-4", children: [_jsx("h3", { className: "font-bold text-h3 text-gray-500 drop-shadow-lg mb-2", children: title }), _jsx("p", { className: "text-gray-700 text-base", children: description }), _jsx("p", { className: "mt-4 text-lg font-semibold", children: price })] }), _jsx("div", { className: "px-6 pt-4 pb-2", children: _jsx("a", { href: "/book", className: "bg-darkGreen hover:bg-green-700 text-white py-2 px-4 rounded-full", children: "Book Now" }) })] }));
};
export default RoomCard;
