import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // optional: nice icons (install lucide-react or replace with your own)

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">W</span>
            </div>
            <span className="text-xl font-bold text-gray-900">JEETWEB</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition pb-1 ${
                    isActive
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Desktop Social Icons */}
            <div className="flex items-center space-x-5 ml-8 pl-8 border-l border-gray-200">
              <SocialLinks />
            </div>
          </div>

          {/* Mobile menu button + Social Icons (visible on mobile) */}
          <div className="flex items-center space-x-4 md:hidden">
            <SocialLinks />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)} // close menu on click
              className={({ isActive }) =>
                `block w-full text-left px-3 py-2 rounded-md text-base font-medium transition ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Reusable Social Icons Component
const SocialLinks = () => (
  <>
    {/* GitHub */}
    <a
      href="https://github.com/AdityaJainghetal"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-900 transition transform hover:scale-110"
      aria-label="GitHub"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.04c-5.5 0-9.96 4.47-9.96 9.96 0 4.41 2.86 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.00.07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.10-.25-.45-1.27.10-2.65 0 0 .84-.27 2.75 1.02.80-.22 1.65-.33 2.50-.33.85 0 1.70.11 2.50.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.20 2.40.10 2.65.64.70 1.03 1.59 1.03 2.68 0 3.85-2.34 4.70-4.57 4.94.36.31.68.92.68 1.86 0 1.34-.01 2.43-.01 2.76 0 .27.18.58.69.48 3.98-1.33 6.83-5.09 6.83-9.49 0-5.49-4.46-9.96-9.96-9.96z"/>
      </svg>
    </a>

    {/* Twitter/X */}
    <a
      href="https://twitter.com/intent/follow?screen_name=YourTwitterHandle"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-900 transition transform hover:scale-110"
      aria-label="Twitter"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.60.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.50-1.75.85-2.72 1.05C18.37 4.50 17.26 4 16.08 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3.07 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.70-.02-1.36-.22-1.94-.53v.04c0 2.08 1.48 3.82 3.44 4.21-.36.10-.74.15-1.13.15-.27 0-.54-.03-.80-.08.54 1.69 2.11 2.92 3.98 2.95-1.46 1.14-3.30 1.82-5.30 1.82-.34 0-.68-.02-1.02-.06 1.9 1.22 4.15 1.93 6.56 1.93 7.88 0 12.18-6.53 12.18-12.19 0-.19-.01-.37-.02-.56.84-.60 1.56-1.36 2.14-2.22z"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/aditya-jain-9797b5214"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-900 transition transform hover:scale-110"
      aria-label="LinkedIn"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H8v-7h2v7zm-1-8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm10 8.5h-2v-3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V17h-2v-7h2v1.08c.44-.7 1.33-1.08 2.08-1.08 1.54 0 2.92 1.29 2.92 3.08V17z"/>
      </svg>
    </a>
  </>
);

export default Navbar;