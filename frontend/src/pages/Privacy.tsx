import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] md:h-96 lg:h-96 text-white" style={{ backgroundColor: '#4A5568' }}>
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg"
          >
            Protecting your privacy is our priority
          </motion.p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 mb-6 text-left">Effective Date: 30 November 2024</p>
            
            <div className="prose max-w-none text-gray-700 space-y-8 text-left">
              <p>
                The Lake House Koggala ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect the personal information you provide to us through our website www.thelakehousekoggala.com
              </p>

              <section>
                <h2 className="text-2xl font-normal text-gray-700 mb-4">1. Information We Collect</h2>
                <p>We collect the following personal information when you interact with our website:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Name: Your full name.</li>
                  <li>Telephone Number: Your contact number.</li>
                  <li>Email Address: Your email address.</li>
                </ul>
                <p className="mt-2">This information may be collected when you fill out a form, or contact us.</p>
              </section>

              <section>
                <h2 className="text-2xl font-normal text-gray-700 mb-4">2. How We Use Your Information</h2>
                <p>The information we collect is used for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>To communicate with you, and to respond to your inquiries.</li>
                  <li>To improve our website's functionality and user experience.</li>
                  <li>To comply with legal obligations, if necessary.</li>
                </ul>
                <p className="mt-2">We will never share, sell, or rent your personal information to third parties for marketing purposes.</p>
              </section>

              {/* Sections 3-9 follow the same pattern */}
              
              <section>
                <h2 className="text-2xl font-normal text-gray-700 mb-4">10. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                <div className="mt-4 space-y-2">
                  <p>www.thelakehousekoggala.com</p>
                  <p>ginajennings10@gmail.com</p>
                  <p>The Lake House, Temple Road, Duwa Malalagama, Habaraduwa, Galle, Sri Lanka</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Privacy; 