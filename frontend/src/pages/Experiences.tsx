import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Events: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-4xl font-bold text-green-600 text-center mb-8">Weddings & Events at Lake House</h2>

          {/* Event Hosting Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">A Picturesque Venue for Weddings and Events</h3>
            <p className="text-gray-700 text-lg mb-4">
              Lake House is the perfect venue for weddings and private events. Set against the
              stunning backdrop of Koggala Lake and surrounded by lush greenery, our villa offers a
              serene and intimate setting for your special occasion. Whether you're planning a small
              gathering or a larger celebration, we have the space and services to make your event
              truly unforgettable.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Our team will work with you to create a customized event plan, tailored to your
              preferences and needs. From catering and decorations to entertainment and guest
              accommodations, we’ll take care of every detail so you can focus on enjoying your
              event.
            </p>
          </div>

          {/* Wedding Services Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Exclusive Wedding Services</h3>
            <p className="text-gray-700 text-lg mb-4">
              At Lake House, we understand that your wedding day is one of the most important days
              of your life. That’s why we offer a range of exclusive wedding services designed to
              make your special day as stress-free and enjoyable as possible. From arranging floral
              decorations to coordinating with photographers and musicians, our experienced team
              will ensure that every aspect of your wedding runs smoothly.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Our villa provides a romantic and intimate setting for your wedding ceremony and
              reception. Exchange vows by the lake as the sun sets, followed by a celebratory
              dinner under the stars. Our team will ensure that your wedding is nothing short of
              magical.
            </p>
          </div>

          {/* Inquiry Form Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Plan Your Event</h3>
            <p className="text-gray-700 text-lg mb-4">
              Ready to start planning your event at Lake House? We’d love to help! Simply fill out
              our event inquiry form, and a member of our team will be in touch to discuss the
              details and help bring your vision to life.
            </p>
            <a href="/contact" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md transition transform hover:scale-105">
              Contact Us for Event Inquiries
            </a>
          </div>

          {/* Past Events Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Gallery of Past Events</h3>
            <p className="text-gray-700 text-lg mb-4">
              Take a look at some of the beautiful weddings and events we’ve hosted at Lake House.
              Our gallery showcases the range of events we’ve hosted, from intimate family
              gatherings to larger celebrations. Each event at Lake House is unique, and we’re proud
              to have played a part in so many special occasions.
            </p>
            <a href="/gallery" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md transition transform hover:scale-105">
              View Event Gallery
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;
