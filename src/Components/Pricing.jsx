import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCalculator from './PricingCalculator';

const plans = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic campaign tools",
      "Limited analytics",
      "Community support",
    ],
    buttonText: "Get Started",
    highlighted: false,
  },
  {
    title: "Pro",
    price: "$29",
    features: [
      "Everything in Free",
      "Advanced analytics",
      "AI campaign builder",
      "Priority support",
    ],
    buttonText: "Start 7-Day Trial",
    highlighted: true,
  },
  {
    title: "Business",
    price: "$99",
    features: [
      "Everything in Pro",
      "Custom workflows",
      "Unlimited team members",
      "Dedicated manager",
    ],
    buttonText: "Contact Sales",
    highlighted: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const Pricing = () => {
  const [isCalculatorOpen ,setIsCalculatorOpen] = useState(false)
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div  >
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose a plan that fits your team and goals.
            </p>
          </div>
            <div className="mt-6 lg:mt-0 text-end" onClick={()=>setIsCalculatorOpen(!isCalculatorOpen)}>
              <button className="bg-blue-500 cursor-pointer text-white border px-4 py-2 rounded-lg hover:underline font-medium">
                {isCalculatorOpen ? "Close Calculator":"Open Calculator"}
              </button>
            </div>
        </div>

        {
          isCalculatorOpen ? <PricingCalculator/> :
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className={`rounded-xl border p-8 shadow-sm transition transform hover:-translate-y-1 hover:shadow-md ${
                plan.highlighted
                  ? 'border-blue-600 scale-[1.02] bg-gray-50'
                  : 'border-gray-200'
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900">{plan.title}</h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                {plan.price}<span className="text-base font-normal">/mo</span>
              </p>
              <ul className="mt-6 space-y-2 text-left text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-6 inline-block w-full text-center px-5 py-3 rounded-full font-medium transition ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border border-gray-300 text-black hover:bg-gray-100'
                }`}
              >
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
        }

      </div>
    </section>
  );
};

export default Pricing;
