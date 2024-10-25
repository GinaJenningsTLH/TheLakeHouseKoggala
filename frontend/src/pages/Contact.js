import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("div", { className: "container mx-auto py-20", children: [_jsx("h1", { className: "text-h1 font-bold text-darkGreen text-center mb-8", children: "Contact Us" }), _jsxs("form", { onSubmit: handleSubmit, className: "max-w-lg mx-auto", children: [_jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "name", className: "block text-darkGreen", children: "Name" }), _jsx("input", { type: "text", id: "name", className: "w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-darkGreen", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), required: true })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "email", className: "block text-darkGreen", children: "Email" }), _jsx("input", { type: "email", id: "email", className: "w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-darkGreen", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), required: true })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "message", className: "block text-darkGreen", children: "Message" }), _jsx("textarea", { id: "message", className: "w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-darkGreen", rows: 5, value: formData.message, onChange: (e) => setFormData({ ...formData, message: e.target.value }), required: true })] }), _jsx("button", { type: "submit", className: "bg-lightGreen hover:bg-darkGreen text-white py-3 px-6 rounded-md", children: "Send Message" })] })] }), _jsx(Footer, {})] }));
};
export default Contact;
