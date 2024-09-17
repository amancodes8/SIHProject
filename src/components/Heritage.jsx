import React from 'react';

function Heritage() {


  return (
    <div className='flex h-screen w-screen justify-center  font-semibold mt-10'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center mb-10">World Heritage Sites</h1>
        <p className="m-20">
          UNESCO World Heritage Convention, which was established in 1972, recognized various sites of cultural and natural importance around the world. After the latest addition to the UNESCO World Heritage Sites list, India now has 42 World Heritage Sites, making India the 6th largest number of World Heritage Sites in the world! There are 34 cultural sites, 7 natural sites, and 1 mixed as recognized by UNESCO.
        </p>
        
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow-md rounded-lg p-6">
            <div className="flex-shrink-0">
              <img src="/images/Taj Mahal, Agra.jpg" alt="Site 1" className="h-48 w-64 rounded-md object-cover" />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6">
              <h2 className="text-2xl font-semibold text-gray-800">Taj Mahal, Agra</h2>
              <p className="mt-2 text-gray-600">
                One of the Seven Wonders of the World, the Taj Mahal was built by emperor Shah Jahan in memory of his wife, Mumtaj Mahal. Located at the bank of river Yamuna in Agra, it was completed in 1653. It is considered the best example of Mughal architecture worldwide and is called the “Jewel of Muslim Art in India.”
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow-md rounded-lg p-6">
            <div className="flex-shrink-0">
              <img src="/images/Chola Temples, Tamil Nadu.jpg" alt="Site 2" className="h-48 w-64 rounded-md object-cover" />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6">
              <h2 className="text-2xl font-semibold text-gray-800">Chola Temples, Tamil Nadu</h2>
              <p className="mt-2 text-gray-600">
                These temples were built in Southern India during the rule of the Chola empire. The Brihadisvara Temple, the Temple at Gangaikonda Cholapuram, and the Airavatesvara Temple are the most important of these temples.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow-md rounded-lg p-6">
            <div className="flex-shrink-0">
              <img src="/images/Kumbhalgarh-Fort-Rajasthan.jpg" alt="Site 3" className="h-48 w-64 rounded-md object-cover" />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6">
              <h2 className="text-2xl font-semibold text-gray-800">Hill Forts of Rajasthan</h2>
              <p className="mt-2 text-gray-600">
                Famous for its unique Rajput Military Defense Architecture, it includes six majestic forts in Chittorgarh, Kumbhalgarh, Ranthambore, Gagron, Amber, and Jaisalmer. These forts showcase the power and strength of the Rajput rulers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heritage;
