import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
const WhyBookWithUs = () => {
    const variant = {
        hidden: { opacity: 0, x: -100 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
            },
        }),
    };
    return (_jsxs("div", { className: "mb-12 px-4 md:px-0 ", children: [_jsx("h3", { className: " md:text-h2 text-darkGreen font-bold mb-6 text-center", children: "Everything you need, to elevate your retreat ..." }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 items-center justify-center", children: [_jsx(motion.div, { className: "border-b md:border-r p-2 md:h-40 md:items-center md:border-b-0 border-black/70 flex justify-center", custom: 0, initial: "hidden", animate: "visible", variants: variant, children: _jsxs("span", { className: "min-h-[220px] p-6 bg-white shadow-md rounded-md flex flex-col items-center justify-center w-full", children: [_jsx("img", { src: "/Location.svg", className: "mb-2", alt: "Location" }), _jsx("h3", { className: "text-lg text-[#5F9540] font-serif", children: "Location" }), _jsx("p", { className: "text-lg text-gray-500 text-center", children: "Less than 2KM to beach access, prime location." })] }) }), _jsx(motion.div, { className: "border-b md:border-r pr-2 md:h-40 md:items-center md:border-b-0 border-black/70 flex justify-center", custom: 1, initial: "hidden", animate: "visible", variants: variant, children: _jsxs("span", { className: "min-h-[220px] p-6 bg-white shadow-md rounded-md flex flex-col items-center justify-center w-full", children: [_jsx("img", { src: "/Dining.svg", className: "mb-2", alt: "Dining" }), _jsx("h3", { className: "text-lg text-[#5F9540] font-serif", children: "Exclusive Dining" }), _jsx("p", { className: "text-lg text-gray-500 text-center", children: "Fresh food only, no frozen ingredients." })] }) }), _jsx(motion.div, { className: "border-b md:border-r pr-2 md:h-40 md:items-center md:border-b-0 border-black/70 flex justify-center", custom: 2, initial: "hidden", animate: "visible", variants: variant, children: _jsxs("span", { className: "min-h-[220px] p-6 bg-white shadow-md rounded-md flex flex-col items-center justify-center w-full", children: [_jsx("img", { src: "/priority-check-in.svg", className: "mb-2", alt: "Priority Check-In/Out" }), _jsx("h3", { className: "text-lg text-[#5F9540] font-serif", children: "Priority Check-In/Out" }), _jsx("p", { className: " text-lg text-gray-500 text-center", children: "Early check-in and late checkout available." })] }) }), _jsx(motion.div, { className: "flex justify-center", custom: 3, initial: "hidden", animate: "visible", variants: variant, children: _jsxs("span", { className: "min-h-[220px] p-6 bg-white shadow-md rounded-md flex flex-col items-center justify-center w-full", children: [_jsx("img", { src: "/Airport-transfer.svg", className: "mb-2", alt: "Airport Transfers" }), _jsx("h3", { className: "text-lg  text-[#5F9540] font-serif", children: "Airport Transfers" }), _jsx("p", { className: "text-lg text-gray-500 text-center", children: "Private airport transfer and baggage assistance." })] }) })] })] }));
};
export default WhyBookWithUs;
