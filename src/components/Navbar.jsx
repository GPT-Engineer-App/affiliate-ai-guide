import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-500 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-xl font-bold">Affiliate Marketing Hub</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/tools" className="hover:underline">Tools & Platforms</Link>
        <Link to="/learning-resources" className="hover:underline">Learning Resources</Link>
        <Link to="/blog" className="hover:underline">Blog/News</Link>
        <Link to="/submit-tools" className="hover:underline">Submit New Tools</Link>
        <Link to="/newsletter" className="hover:underline">Newsletter</Link>
        <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
        <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;