import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 10000); // Reset after 4s
  };

  return (
    <section className="relative bg-gray-100 py-10 px-4 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 rounded-full blur-2xl opacity-40 z-0"></div>

      <motion.div
        className="relative z-10 max-w-2xl mx-auto bg-white/50 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Contact Us</h2>
        <p className="text-gray-600 mb-8 text-center">Have questions or want a demo? We'd love to hear from you.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-medium text-sm text-gray-700 mb-1">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-sm text-gray-700 mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium text-sm text-gray-700 mb-1">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us what you're looking for..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="w-full cursor-pointer bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </motion.button>
        </form>

        {submitted && (
          <motion.div
            className="mt-6 text-green-600 text-center font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Thank you! We’ll get back to you soon.
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ContactUs;
