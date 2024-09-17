import React from 'react';

const developers = [
  {
    name: "John Doe",
    image: "/images/dev1.jpg",
    email: "john.doe@example.com",
  },
  {
    name: "Jane Smith",
    image: "/images/dev2.jpg",
    email: "jane.smith@example.com",
  },
  {
    name: "Alice Johnson",
    image: "/images/dev3.jpg",
    email: "alice.johnson@example.com",
  },
  {
    name: "Bob Brown",
    image: "/images/dev4.jpg",
    email: "bob.brown@example.com",
  },
  {
    name: "Charlie Davis",
    image: "/images/dev5.jpg",
    email: "charlie.davis@example.com",
  },
  {
    name: "Diana Evans",
    image: "/images/dev6.jpg",
    email: "diana.evans@example.com",
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 mt-auto">
      {/* Developer Profiles Section */}
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Developers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {developers.map((dev, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <img
                src={dev.image}
                alt={dev.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{dev.name}</h3>
              <p className="text-gray-600 mb-2">{dev.email}</p>
              <a
                href={`mailto:${dev.email}`}
                className="text-blue-500 hover:underline"
              >
                Email
              </a>
            </div>
          ))}
        </div>
      </section>

     

     
    </div>
  );
};

export default About;
