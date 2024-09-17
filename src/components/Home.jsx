import React, { useState, useEffect } from 'react';
import Hero from './Hero';

function Home() {
  const images = [
    "/images/h5.avif",
    "/images/1.jpg",
    "/images/Culture.jpeg",
    "/images/Tradition.jpeg",
    "/images/2.jpg",
    "/images/3.jpg",
  ];

  const quotes = [
    "Our heritage is the foundation of our future, woven with the threads of culture, tradition, and the stories we carry forward.",
    "Culture is the widening of the mind and of the spirit.",
    "Traditions are the roots that anchor us, giving meaning to the present and hope for the future.",
    "Heritage is the legacy of yesterday and the hope of tomorrow.",
    "In the embrace of culture and tradition, we find the strength to shape our future.",
    "Through tradition, we pass down the wisdom of our ancestors to guide us into the future."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000); // Change image and quote every 5000ms (5 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <div
        className='background-image-container relative border-2 border-b-black mb-4 border-r-0 border-t-0 border-l-0'
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        {/* Overlay for darkening the background */}
        <div className='overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
        
        {/* Content with the quote centered over the background */}
        <div className='content flex w-full h-full items-center justify-center relative'>
          <span className='z-10 text-white text-3xl text-center px-8 font-extrabold bg-white bg-clip-text text-transparent'>
            "{quotes[currentIndex]}"
          </span>
        </div>
      </div>
      <Hero />
    </>
  );
}

export default Home;
