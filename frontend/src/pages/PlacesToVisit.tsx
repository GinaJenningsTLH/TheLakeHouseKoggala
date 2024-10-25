import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const PlacesToVisit: React.FC = () => {
  const places = [
    {
      name: 'Galle Fort',
      description: 'A 1-hour drive from Koggala, explore this iconic UNESCO World Heritage Site.',
      image: '/Galle-fort.png',
      route: '/blog/galle-fort',
      distance: '1 Hour Drive',
    },
    {
      name: 'Mirissa Beach',
      description: 'A 45-minute drive to one of Sri Lanka’s most famous beaches, known for whale watching.',
      image: '/Mirissa.png',
      route: '/blog/mirissa-beach',
      distance: '45 Minutes Drive',
    },
    {
      name: 'Unawatuna Beach',
      description: 'A 30-minute drive to a beautiful beach with turquoise waters and lively atmosphere.',
      image: '/Unawatuna-Beach.png',
      route: '/blog/unawatuna-beach',
      distance: '30 Minutes Drive',
    },
    {
      name: 'Yala National Park',
      description: 'Experience wildlife and safari tours in one of Sri Lanka’s famous national parks.',
      image: '/Yala.png',
      route: '/blog/yala-national-park',
      distance: '2.5 Hours Drive',
    },
    {
      name: 'Ella',
      description: 'A scenic town known for hikes, waterfalls, and Nine Arches Bridge. Perfect for a road trip.',
      image: '/Ella.png',
      route: '/blog/ella',
      distance: '3.5 Hours Drive',
    },
  ];

  return (
    <>
      <Navbar />
      <section className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: 'url("/Places-to-visit.png")' }}>
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-5xl font-bold mb-4"
          >
            Places to Visit Near Koggala
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-lg"
          >
            Explore the best destinations around Koggala.
          </motion.p>
        </div>
      </section>

      {/* <section className=" text-center">
      <h2 className="text-4xl font-bold text-darkGreen mb-8">Nearby Places to Visit</h2>
      <div className="p-6 grid text-left grid-cols-3 justify-center items-center align-center gap-4" >
        
    <div className="col-span-2 border flex items-end  h-72" style={{ backgroundImage: 'url(/Mirissa.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
     }}>
        <div className='border h-1/3 bg-white/70 border-none rounded w-[600px] text-white flex justify-start mx-3 px-2 mb-4'> 
            <span>
                <h2 className='text-2xl my-1'>Mirissa Beach</h2>
                <p className='text-gray-900 text-sm'> A 45-minute drive to one of Sri Lanka’s most famous beaches, known for whale watching.</p>
                </span>
         </div>
    </div>
    <div className=" border flex items-end  h-72" style={{ backgroundImage: 'url(/room1.jpg)',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
     }}>
        <div className='border h-1/3 bg-white/70 border-none rounded w-[600px] text-white flex justify-start mx-3 px-2 mb-4'> 
            <span>
                <h2 className='text-2xl my-1'>Mirissa Beach</h2>
                <p className='text-gray-900 text-sm'> A 45-minute drive to one of Sri Lanka’s most famous beaches, known for whale watching.</p>
                </span>
         </div>
    </div>
    <div className="border flex items-end  h-72" style={{ backgroundImage: 'url(/room1.jpg)',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
     }}>
        <div className='border h-1/3 bg-white/70 border-none rounded w-[600px] text-white flex justify-start mx-3 px-2 mb-4'> 
            <span>
                <h2 className='text-2xl my-1'>Mirissa Beach</h2>
                <p className='text-gray-900 text-sm'> A 45-minute drive to one of Sri Lanka’s most famous beaches, known for whale watching.</p>
                </span>
         </div>
    </div>
    <div className="col-span-2 border flex items-end  h-72" style={{ backgroundImage: 'url(/room1.jpg)',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
     }}>
        <div className='border h-1/3 bg-white/70 border-none rounded w-[600px] text-white flex justify-start mx-3 px-2 mb-4'> 
            <span>
                <h2 className='text-2xl text-black my-1'>Mirissa Beach</h2>
                <p className='text-gray-900 text-sm'> A 45-minute drive to one of Sri Lanka’s most famous beaches, known for whale watching.</p>
                </span>
         </div>
    </div>
    <div className="col-span-2 border flex items-end  h-72" style={{ backgroundImage: 'url(/room1.jpg)',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
     }}>
        <div className='border h-1/3 bg-white/70 border-none rounded w-[600px] text-white flex justify-start mx-3 px-2 mb-4'> 
            <span>
                <h2 className='text-2xl my-1'>Mirissa Beach</h2>
                <p className='text-gray-900 text-sm'> A 45-minute drive to one of Sri Lanka’s most famous beaches, known for whale watching.</p>
                </span>
         </div>
    </div>
 
</div>
      </section> */}

      {/* Places to Visit Section */}
      <section className="py-20 bg-lightestGreen">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-bold text-darkGreen mb-8">Nearby Places to Visit</h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}>
            {places.map((place, index) => (
              <motion.div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }}>
                <a href={place.route}>
                  <img className="w-full h-48 object-cover" src={place.image} alt={place.name} />
                  <div className="p-6">
                    <h3 className="font-bold text-h3 mb-2">{place.name}</h3>
                    <p className="text-gray-700 mb-2">{place.description}</p>
                    <span className="text-darkGreen font-semibold">{place.distance}</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PlacesToVisit;
