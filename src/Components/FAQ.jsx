import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: "What is ADmyBRAND AI Suite?",
    answer:
      "ADmyBRAND AI Suite is an all-in-one marketing platform powered by artificial intelligence to help you automate, analyze, and optimize your marketing campaigns.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 7-day free trial with access to all Pro features. No credit card required.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can cancel your subscription anytime directly from your dashboard without any hidden fees.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We take data security seriously and follow industry best practices, including end-to-end encryption.",
  },
  {
    question: "Do you offer team collaboration tools?",
    answer:
      "Yes, our platform includes collaboration features like shared workspaces, user roles, and commenting.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Can’t find the answer you’re looking for? Reach out to our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 py-3 transition hover:shadow"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="font-medium text-gray-900 text-lg">
                  {faq.question}
                </span>
                <FiChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
