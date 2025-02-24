import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        comments: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(process.env.NODE_ENV === 'production'
                ? 'https://www.thelakehousekoggala.com/api/send-email'
                : '/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to send booking request');
            }
            setSubmitted(true);
        }
        catch (err) {
            setError('Failed to send booking request. Please try again later.');
            console.error('Error:', err);
        }
        finally {
            setLoading(false);
        }
    };
    if (submitted) {
        return (_jsxs(motion.div, { className: "text-center p-8 bg-white rounded-lg shadow-md", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 }, children: [_jsx("h3", { className: "text-2xl font-bold text-green-500 mb-4", children: "Thank You!" }), _jsx("p", { children: "Your booking request has been received. We'll get back to you shortly." })] }));
    }
    return (_jsxs(motion.form, { onSubmit: handleSubmit, className: "max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md", initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6 }, children: [error && (_jsx("div", { className: "mb-4 p-3 bg-red-100 text-red-700 rounded-md", children: error })), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "name", className: "block text-gray-700 mb-2", children: "Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "email", className: "block text-gray-700 mb-2", children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]" })] }), _jsxs("div", { className: "mb-4 md:flex md:space-x-4", children: [_jsxs("div", { className: "md:w-1/2 mb-4 md:mb-0", children: [_jsx("label", { htmlFor: "checkIn", className: "block text-gray-700 mb-2", children: "Check-In" }), _jsx("input", { type: "date", id: "checkIn", name: "checkIn", value: formData.checkIn, onChange: handleChange, required: true, className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]" })] }), _jsxs("div", { className: "md:w-1/2", children: [_jsx("label", { htmlFor: "checkOut", className: "block text-gray-700 mb-2", children: "Check-Out" }), _jsx("input", { type: "date", id: "checkOut", name: "checkOut", value: formData.checkOut, onChange: handleChange, required: true, className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]" })] })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "guests", className: "block text-gray-700 mb-2", children: "Number of Guests" }), _jsx("input", { type: "number", id: "guests", name: "guests", min: "1", value: formData.guests, onChange: handleChange, required: true, className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]" })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "comments", className: "block text-gray-700 mb-2", children: "Additional Comments" }), _jsx("textarea", { id: "comments", name: "comments", value: formData.comments, onChange: handleChange, rows: 4, className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#14C2DD]" })] }), _jsx("button", { type: "submit", disabled: loading, className: `w-full ${loading
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-gray-500 hover:bg-gray-200 hover:text-gray-800'} text-white py-2 px-4 rounded-md transition-colors duration-300`, children: loading ? 'Sending...' : 'Submit Booking Request' })] }));
};
export default BookingForm;
