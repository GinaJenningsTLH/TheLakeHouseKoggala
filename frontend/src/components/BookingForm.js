import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// BookingForm.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        checkIn: '',
        checkOut: '',
        guests: 1,
    });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to API)
        console.log(formData);
        setSubmitted(true);
    };
    return (_jsx(motion.form, { onSubmit: handleSubmit, className: "max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md", initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6 }, children: submitted ? (_jsxs("div", { className: "text-center", children: [_jsx("h3", { className: "text-2xl font-bold text-green-500 mb-4", children: "Thank You!" }), _jsx("p", { children: "Your booking request has been received. We'll get back to you shortly." })] })) : (_jsxs(_Fragment, { children: [_jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "name", className: "block text-gray-700 mb-2", children: "Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "email", className: "block text-gray-700 mb-2", children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]" })] }), _jsxs("div", { className: "mb-4 md:flex md:space-x-4", children: [_jsxs("div", { className: "md:w-1/2 mb-4 md:mb-0", children: [_jsx("label", { htmlFor: "checkIn", className: "block text-gray-700 mb-2", children: "Check-In" }), _jsx("input", { type: "date", id: "checkIn", name: "checkIn", value: formData.checkIn, onChange: handleChange, required: true, className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]" })] }), _jsxs("div", { className: "md:w-1/2", children: [_jsx("label", { htmlFor: "checkOut", className: "block text-gray-700 mb-2", children: "Check-Out" }), _jsx("input", { type: "date", id: "checkOut", name: "checkOut", value: formData.checkOut, onChange: handleChange, required: true, className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]" })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "guests", className: "block text-gray-700 mb-2", children: "Number of Guests" }), _jsx("input", { type: "number", id: "guests", name: "guests", value: formData.guests, onChange: handleChange, min: "1", required: true, className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]" })] }), _jsx("button", { type: "submit", className: "w-full bg-gray-500 text-white py-3 px-6 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300", children: "Submit Inquiry" })] })) }));
};
export default BookingForm;
