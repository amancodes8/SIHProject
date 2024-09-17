import React from 'react'

function Culture() {

  const CultureSection = ({ imageSrc, title, description }) => (
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
    <div className='flex w-screen h-screen justify-center text-md font-semibold mt-10'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Cultures of India</h1>
      <p className="m-20">
        Indian culture is the heritage of social norms and technologies that originated in or are associated with the ethno-linguistically diverse India, pertaining to the Indian subcontinent until 1947 and the Republic of India post-1947. The term also applies beyond India to countries and cultures whose histories are strongly connected to India by immigration, colonisation, or influence, particularly in South Asia and Southeast Asia. India's languages, religions, dance, music, architecture, food, and customs differ from place to place within the country.
      </p>
      
      <div className="space-y-12">
        <CultureSection
          imageSrc="/images/893_11.jpg"
          title="Punjabi Culture"
          description="Punjabi culture is known for its vibrant traditions, colorful festivals, and energetic music and dance forms like Bhangra and Giddha. It is deeply influenced by Sikhism and the agrarian lifestyle. Punjab is land of five rivers in North West India and North East Pakistan. Punj means five and aab means water, so Punjab means five waters. These five rivers named Beas, Satluj, Ravi, Chenab and Jhelum. Beas, and Satluj . These five rivers divide the state into three regions : Majha, Doaba and Malwa. Punjab enjoys the natural benefits and fertile soil the gives good cultivation"
        />
        <CultureSection
          imageSrc="/images/Tusu-Dance-West-Bengal.webp"
          title="Bengali Culture"
          description="Bengali culture is rich in literature, music, art, and food. The cultural landscape is heavily influenced by the works of Rabindranath Tagore. The people celebrate festivals like Durga Puja with great enthusiasm. After the partition, Bangladeshi culture became distinct from the mainstream Bengali culture, thus their culture evolved differently, still there are many commonalities in Bangladeshi culture & West Bengali culture which connects them both together as Bengali culture."
        />
        <CultureSection
          imageSrc="/images/520.jpg"
          title="Gujarati Culture"
          description="Gujarati culture is known for its strong sense of entrepreneurship, vibrant festivals like Navratri, and traditional folk dances such as Garba and Dandiya. The cuisine is vegetarian and features unique flavors. The diverse and vibrant state of Gujarat has a significant contribution to the cultural aspect of India. The sheer simplicity and amiability of Gujaratis have made them a flourishing community. The state of Gujarat boasts a vibrant art, architecture, culture, and heritage; all of which is quite evident in the day-to-day lives of the locals."
        />
      </div>
    </div>
    </div>
  )
}

export default Culture
