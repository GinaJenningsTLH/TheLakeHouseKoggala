import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import galleryImages from '../data/galleryData';

interface GallerySectionProps {
  images: Array<{ src: string; alt: string }>;
}

const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  return (
    <section id="gallery" className="section-padding">
          <div className="container bg-gray-100 pt-6  pb-16 mx-auto px-6 md:px-12 lg:px-24 text-center">
              <div className='w-fit mx-auto px-2 mb-2'>
                <h2 className="text-3xl font-bold text-gray-500 mb-2">GALLERY</h2>
                <p className="text-gray-500 mb-10 max-w-2xl mx-auto">Explore our gallery of selected images.
                </p>
              </div>
              <Gallery images={galleryImages} />
              <Link to="/gallery">
              <p className='text-center text-gray-500 underline underline-offset-1 pt-10'>
              <a href='/gallery' className=''>View more images</a></p>
              </Link>
            </div>
    </section>
  );
};

export default GallerySection; 