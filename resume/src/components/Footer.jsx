import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 py-8 text-center text-gray-500">
      <div className="container mx-auto px-4">
        {/* Optional: Add social links */}
        {/* <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
        </div> */}
        <p>&copy; {currentYear} Tamhid Chowdhury. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React, Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;