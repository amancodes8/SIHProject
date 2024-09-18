import React from 'react'
import { NavLink } from 'react-router-dom';


function Festivals() {

  
  const navItems =[
    
    {
      label: "Recent Updates",
    },
    {
    label: "State Wise filter",
  },
  {
    label: "Read Articles",
  },
  {
    label: "Share Your Views",
  },
 
]




  const FestivalSection = ({ imageSrc, title, description }) => (
    <div className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow-md rounded-lg p-6">
      <div className="flex-shrink-0">
        <img src={imageSrc} alt={title} className="h-48 w-64 rounded-md object-cover" />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-6">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );

  return (
    <div className='flex w-screen h-screen justify-center text-md font-semibold mt-10 p-2'>
       <div className='w-[20%] mini-w-40 border border-black h-1/3 overflow-hidden'>
      <h1 className='text-2xl font-semibold text-center border-b border-black overflow-auto'>Navigate
        </h1>
      <ul className='flex flex-col font-semibold justify-center min-w-40 w-full items-center mt-6 gap-2'>
        {navItems.map((item,index) =>(
          <li key={index}
          className='hover:bg-gray-400 px-2 py-1'>
          <NavLink
              
              to={item.link}
             
          >
              {item.label}
          </NavLink>
      </li>

        ))}
      </ul>
      </div>
        <div className="w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Festivals Celebrated In India</h1>
      <p className="m-20">
        They say we should celebrate life, not just festivals. Well, in a country like India, life is synonymous with festivals because there are more fiestas than you can count, and each of these mirrors our culture and traditions. Breaking the humdrum of daily routine, these festivals bring with them a wave of excitement and happiness. Interestingly, almost every big and small occasion in India calls for a celebration. Be it the arrival of spring, or the harvesting of crops or something else, you will never run out of reasons and seasons to celebrate. Experiencing the festive spirit of the country is akin to celebrating life, speckled with an ample dose of colors, music, dance, folk songs, food, and friends, all rolled into a wholesome package offering absolute gratification.
      </p>
      
      <div className="space-y-12">
        <FestivalSection
          imageSrc="/images/Diwali-sweets-min.jpg"
          title="Diwali"
          description="Diwali, also known as the Festival of Lights, is celebrated by millions of Hindus, Sikhs, and Jains across the world. The festival celebrates new beginnings and the triumph of good over evil, and light over darkness. Undoubtedly, Diwali or Deepavali is the most spectacular festival celebrated in the Indian subcontinent. Autumn heralds in this Hindu festival of lights that is celebrated across the length and breadth of the country."
        />
        <FestivalSection
          imageSrc="/images/Eid-ul-Fitr.jpg_cf-webp_w-848_h-551"
          title="Eid-ul-Fitr"
          description="Eid-ul-Fitr or simply Eid is among the major religious festivals of the Muslim community. It marks the end of Ramadan, which is the sacred month of fasting akin to the Christian Lent. The festival is celebrated on the day following the sighting of the crescent moon at night. Devotees offer prayers at mosques, visit friends and relatives, and feast with their near and dear ones; sweet seviyan is perhaps the most famous symbol of Eid."
        />
        <FestivalSection
          imageSrc="/images/Holi.jpg_cf-webp_w-848_h-551"
          title="Holi"
          description="Holi, the Festival of Colors, is celebrated predominantly in India and Nepal. It signifies the arrival of spring, and people celebrate by throwing colored powders at each other in joyous gatherings. Playing with water guns and balloons filled with colored water, and drinking bang thandai (a desi cocktail made with Indian spices) are some of the key attractions of Holi."
        />
      </div>
    </div>
  </div>
  )
}

export default Festivals
