import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faShower, faWifi, faSnowflake, faGlassMartini, faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Import images directly
import room1 from '../assets/images/room1.jpg';
import room2 from '../assets/images/room2.jpg';
import room3 from '../assets/images/room3.jpg';
import room4 from '../assets/images/room4.jpg';
import relatedRoom1 from '../assets/images/room1.jpg';
import relatedRoom2 from '../assets/images/room1.jpg';

const GardenViewOutdoor: React.FC = () => {
  const images = [
    { src: room1, alt: 'Room 1' },
    { src: room2, alt: 'Room 2' },
    { src: room3, alt: 'Room 3' },
    { src: room4, alt: 'Room 4' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviews = [
    { text: "An absolutely serene experience. The view, the room, the service—everything was perfect!", name: "Jane Doe" },
    { text: "A peaceful retreat with excellent facilities. Highly recommend the private balcony with lake views!", name: "John Smith" },
    { text: "The perfect getaway for a weekend. Great views, great service, and a truly relaxing atmosphere.", name: "Emily Johnson" },
    { text: "Stunning views and beautiful surroundings. The staff was extremely attentive and friendly.", name: "Michael Brown" },
    { text: "We loved the peaceful setting and the amazing service. Perfect for a quiet weekend away.", name: "Sarah Davis" },
    { text: "The lake view is breathtaking, and the room was spotless. Definitely worth visiting again!", name: "Chris Wilson" },
    { text: "Highly recommend this place for anyone looking for a tranquil escape. Five-star service!", name: "Anna Taylor" },
    { text: "The best experience I've had in a long time. Beautiful rooms and exceptional service.", name: "David Lee" },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${room1})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Garden View Room (Outdoor Shower)</h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4">Experience luxury and serenity with an exquisite view of Koggala Lake.</p>
          <a href="/book" className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg md:text-xl transition transform hover:scale-105">
            Book Now
          </a>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        {/* Room Image Slider */}
        <div className="mb-12">
          <AwesomeSlider animation="foldOutAnimation">
            {images.map((image, index) => (
              <div key={index} data-src={image.src}>
                <LazyLoadImage
                  src={image.src}
                  alt={image.alt}
                  effect="blur"
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            ))}
          </AwesomeSlider>
        </div>

        {/* Room Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Room Overview */}
          <div className='border border-gray-300 shadow-lg rounded-lg'>
            <h2 className="px-4 py-3 text-2xl font-bold leading-10 bg-[#FFE8A2] rounded-t-lg">Garden View Room (Outdoor Shower)</h2>
            <p className="px-4 py-6 text-lg text-gray-600">
              Our Garden View Room offers a tranquil setting with modern amenities. Perfect for couples or solo travelers looking for a serene retreat.
            </p>
            <div className="px-4 py-2 border-t border-gray-200 flex items-center">
              <span className="text-xl font-semibold">Room Size:</span>
              <span className="ml-2 text-lg text-gray-600">30 sqm</span>
            </div>
          </div>

          {/* Facilities */}
          <div className='border border-gray-300 shadow-lg rounded-lg'>
            <h3 className="px-4 py-3 text-2xl font-bold leading-10 bg-[#FFE8A2] rounded-t-lg">Room Facilities</h3>
            <ul className="px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faBed} className="text-darkGreen mr-2" />
                King-size bed
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faShower} className="text-darkGreen mr-2" />
                Outdoor shower
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faSnowflake} className="text-darkGreen mr-2" />
                Air conditioning
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faWifi} className="text-darkGreen mr-2" />
                Free Wi-Fi
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faGlassMartini} className="text-darkGreen mr-2" />
                Mini Bar
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faConciergeBell} className="text-darkGreen mr-2" />
                24/7 Room Service
              </li>
            </ul>
          </div>
        </div>

        {/* Related Rooms */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Other Rooms You May Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <LazyLoadImage src={relatedRoom1} alt="Garden View Room" effect="blur" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold">Garden View Room</h4>
                <p className="text-gray-600 mt-2">A tranquil garden view with modern amenities.</p>
                <a href="/rooms/garden-view" className="block mt-4 bg-darkGreen hover:bg-lightGreen text-white py-2 px-4 rounded-lg transition transform hover:scale-105">View Details</a>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <LazyLoadImage src={relatedRoom2} alt="Lake View Suite" effect="blur" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold">Lake View Suite</h4>
                <p className="text-gray-600 mt-2">A luxurious suite with private access to the pool.</p>
                <a href="/rooms/lake-view-suite" className="block mt-4 bg-darkGreen hover:bg-lightGreen text-white py-2 px-4 rounded-lg transition transform hover:scale-105">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GardenViewOutdoor;
