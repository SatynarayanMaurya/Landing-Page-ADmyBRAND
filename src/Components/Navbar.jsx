import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Product', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Resources', href: '#' },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-black">
            ADmy<span className="text-blue-600">BRAND</span>
          </div>

          {/* CENTER: Nav Links (Desktop) */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-black transition font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* RIGHT: Buttons (Desktop) */}
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="#"
              className="text-gray-700 font-medium hover:text-black"
            >
              Log in
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white px-5 py-1 rounded-lg hover:opacity-90 transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-4 pb-4 space-y-3 bg-white"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 font-medium hover:text-black"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="block text-gray-700 font-medium hover:text-black"
            >
              Log in
            </a>
            <a
              href="#"
              className="block bg-blue-500 text-white text-center px-5 py-1 rounded-lg hover:opacity-90 transition"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
