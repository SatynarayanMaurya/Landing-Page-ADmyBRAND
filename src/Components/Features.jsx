import React from 'react';
import { motion } from 'framer-motion';
import {
  FiZap, FiTrendingUp, FiShield, FiPieChart, FiUserCheck, FiSettings,
} from 'react-icons/fi';

const features = [
  {
    icon: <FiZap className="text-blue-600 w-8 h-8" />,
    title: "AI Campaign Builder",
    description: "Create high-performing marketing campaigns in seconds with our AI-powered builder.",
  },
  {
    icon: <FiTrendingUp className="text-blue-600 w-8 h-8" />,
    title: "Performance Analytics",
    description: "Track campaign performance with real-time insights and smart visualizations.",
  },
  {
    icon: <FiShield className="text-blue-600 w-8 h-8" />,
    title: "Data Security",
    description: "Your data is safe with us. We follow industry-best practices for privacy and security.",
  },
  {
    icon: <FiPieChart className="text-blue-600 w-8 h-8" />,
    title: "Smart Targeting",
    description: "AI helps you reach the right audience at the right time for better conversion.",
  },
  {
    icon: <FiUserCheck className="text-blue-600 w-8 h-8" />,
    title: "Client Collaboration",
    description: "Seamlessly collaborate with clients or your internal team on projects.",
  },
  {
    icon: <FiSettings className="text-blue-600 w-8 h-8" />,
    title: "Automation Tools",
    description: "Automate repetitive tasks and workflows with easy-to-set-up rules.",
  },
];

// Animation config for left and right slide-in
const cardVariants = {
  hiddenLeft: { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Features = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            🚀 Powerful Features Built for Growth
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to scale your marketing — backed by AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const isTopRow = index < 3;
            const initialVariant = isTopRow ? 'hiddenLeft' : 'hiddenRight';

            return (
              <motion.div
                key={index}
                initial={initialVariant}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;











