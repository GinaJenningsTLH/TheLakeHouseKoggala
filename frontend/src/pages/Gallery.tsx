import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';

// Import images
import room1 from '../assets/images/room1.jpg';
import room2 from '../assets/images/room2.jpg';
import room3 from '../assets/images/room3.jpg';
import room4 from '../assets/images/room4.jpg';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: room1, category: 'rooms', title: 'Lake View Room' },
    { src: room2, category: 'outdoor', title: 'Swimming Pool' },
    { src: room3, category: 'dining', title: 'Dining Area' },
    { src: room4, category: 'rooms', title: 'Garden View Room' },
    // Add more images with their categories
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'outdoor', name: 'Outdoor' },
    { id: 'dining', name: 'Dining' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handlePrevImage = () => {
    setSelectedImage(prev => 
      prev === null ? null : prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage(prev => 
      prev === null ? null : prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'ArrowRight') handleNextImage();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${room1})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-200">Explore the beauty of The Lake House Villa</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-darkGreen text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-lightGreen hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <LazyLoadImage
                src={image.src}
                alt={image.title}
                effect="blur"
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full text-white">
                  <h3 className="text-xl font-semibold">{image.title}</h3>
                  <p className="text-sm capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for expanded image */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          
          <button 
            className="absolute left-4 text-white text-3xl hover:text-gray-300"
            onClick={handlePrevImage}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          <div className="max-w-7xl max-h-[90vh] mx-4">
            <LazyLoadImage
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              effect="blur"
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-semibold">{filteredImages[selectedImage].title}</h3>
              <p className="text-sm capitalize">{filteredImages[selectedImage].category}</p>
            </div>
          </div>
          
          <button 
            className="absolute right-4 text-white text-3xl hover:text-gray-300"
            onClick={handleNextImage}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;