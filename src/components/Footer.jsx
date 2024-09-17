import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2 scroll-96">
    <div className="container mx-auto px-4 text-center">
      <p className="mb-2">&copy; 2024 Fellas Developers. All rights reserved.</p>
      <div className="flex justify-center gap-4 mb-2">
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
        <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
        <a href="/about" className="hover:underline">About Us</a>
      </div>
      <p className="text-gray-400">1234 JIIT 128, Noida, UP, ****</p>
      <p className="text-gray-400">Email: jiit128@gmail.com | Phone: (123) 456-7890</p>
    </div>
  </footer>
  )
}

export default Footer
