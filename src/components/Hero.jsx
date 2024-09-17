import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Review from './Review';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const b1r = useRef(null);
  const b2r = useRef(null);
  const b3r = useRef(null);
  const cardsContainer = useRef(null);

  useEffect(() => {
    // GSAP animations triggered by scroll for each image
    gsap.to(b1r.current, {
      x: 100,
      opacity: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: b1r.current,
        scroller: ".Hero",
        start: "top 80%",
        end: "top 70%",
      }
    });

    gsap.to(b2r.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: b2r.current,
        scroller: ".Hero",
        start: "top 80%",
        end: "top 70%",
      }
    });

    gsap.to(b3r.current, {
      x: -100,
      opacity: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: b3r.current,
        scroller: ".Hero",
        start: "top 80%",
        end: "top 70%",
      }
    });
  }, []);

  const images = [
    {
      name: "Heritage",
      img: "/images/2.jpg",
      class: "left",
      ref: b1r
    },
    {
      name: "Culture",
      img: "/images/3.jpg",
      class: "mid",
      ref: b2r
    },
    {
      name: "Tradition",
      img: "/images/4.jpg",
      class: "right",
      ref: b3r
    },
  ];

  const cards = [
    { title: "Taj Mahal", description: "An iconic symbol of India, the Taj Mahal is a white marble mausoleum located in Agra.", image: "/images/taj-mahal.jpg" },
    { title: "Qutub Minar", description: "A UNESCO World Heritage Site, the Qutub Minar is a towering minaret in Delhi.", image: "/images/qutub-minar.jpg" },
    { title: "Kerala Backwaters", description: "A network of interconnected canals, rivers, lakes, and lagoons along the Malabar Coast.", image: "/images/kerala-backwaters.jpg" },
    { title: "Diwali Festival", description: "The festival of lights celebrated across India, marking the victory of light over darkness.", image: "/images/diwali.jpg" },
    { title: "Sariska Tiger Reserve", description: "A wildlife reserve in Rajasthan, known for its population of Bengal tigers.", image: "/images/sariska.jpg" },
    { title: "Indian Curry", description: "A popular dish that varies regionally, known for its rich and spicy flavors.", image: "/images/indian-curry.jpg" },
    { title: "Kathak Dance", description: "A classical dance form originating from North India, known for its intricate footwork and expressive storytelling.", image: "/images/kathak.jpg" },
    { title: "Red Fort", description: "A historic fortification in Delhi, a UNESCO World Heritage Site and a symbol of India's heritage.", image: "/images/red-fort.jpg" },
    { title: "Goa Beaches", description: "Famous for its beautiful beaches, vibrant nightlife, and Portuguese heritage.", image: "/images/goa-beaches.jpg" },
  ];

  return (
    <div>
      <div className='Hero h-screen w-screen flex z-10 px-2 py-12 gap-40'>
        {images.map((image, index) => (
          <div key={index} className="flex flex-col gap-4 w-[25%]">
            <span className="w-100 text-center justify-center text-2xl font-semibold">{image.name}</span>
            <img
              ref={image.ref}
              className={`${image.class} w-full border border-black flex gap-4 h-[50%] opacity-0 ${image.class === "mid" ? "translate-y-32" : ""}`}
              src={image.img}
              alt={image.name}
            />
          </div>
        ))}
      </div>

      {/* Animated Cards Container */}
      <div ref={cardsContainer} className='w-screen h-screen  px-2 mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='bg-gray-300 border border-black h-[30vh] rounded-xl bg-inherit shadow-md shadow-gray-500 flex flex-col items-center justify-center text-3xl font-semibold p-2 text-center opacity-70'
            >
              {/* <img
                src={card.image}
                alt={card.title}
                className='w-full h-3/4 object-cover mb-2'
              /> */}
              <h3 className='text-lg font-bold'>{card.title}</h3>
              <p className='text-sm'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

   <Review/>
    </div>
  );
}

export default Hero;
