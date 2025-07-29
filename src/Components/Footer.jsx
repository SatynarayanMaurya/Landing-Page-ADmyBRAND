import React from 'react';
import { motion } from 'framer-motion';
import {
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from 'react-icons/fi';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-white pt-10 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-4 space-y-10 text-gray-700">
        
        {/* Logo and Description */}
        <motion.div variants={item} className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-black mb-2">
            ADmy<span className="text-blue-600">BRAND</span>
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
            Your all-in-one AI marketing suite to automate, optimize, and grow your brand.
          </p>
        </motion.div>

        {/* 4 Column Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10"
          variants={container}
        >
          {/* Product */}
          <motion.div variants={item}>
            <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              {['Features', 'Pricing', 'Templates', 'Demo'].map((text, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-black cursor-pointer">{text}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={item}>
            <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              {['Blog', 'Help Center', 'Docs', 'Privacy Policy'].map((text, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-black cursor-pointer">{text}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={item}>
            <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Careers', 'Partners', 'Terms of Service'].map((text, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-black cursor-pointer">{text}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={item}>
            <h4 className="font-semibold text-gray-900 mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 break-words">
                <FiMail />
                <a href="mailto:support@admybrand.com" className="hover:text-black">
                  support@admybrand.com
                </a>
              </li>
              <li className="flex gap-4 mt-4">
                {[FiTwitter, FiLinkedin, FiInstagram].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.15 }}
                    className="hover:text-black text-gray-600"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-sm text-gray-500 pt-10"
          variants={item}
        >
          © {new Date().getFullYear()} ADmyBRAND. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
