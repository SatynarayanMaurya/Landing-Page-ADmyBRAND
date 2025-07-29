import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = {
  Free: 0,
  Pro: 29,
  Business: 99,
};

const PricingCalculator = () => {
  const [plan, setPlan] = useState("Pro");
  const [billingType, setBillingType] = useState("monthly");
  const [teamSize, setTeamSize] = useState(5);

  const pricePerUser = plans[plan];

  const total = useMemo(() => {
    const base = pricePerUser * teamSize;
    return billingType === "yearly" ? base * 12 * 0.9 : base; // 10% discount on yearly
  }, [plan, teamSize, billingType]);

  return (
    <section className="bg-white py-10 px-4 max-w-2xl mx-auto">
      <motion.div
        className="rounded-xl border border-gray-200 p-8 shadow-lg bg-white/70 backdrop-blur"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Pricing Calculator
        </h2>

        <div className="space-y-6">
          {/* Plan Selector */}
          <div>
            <label className="font-medium text-gray-700">Choose a Plan:</label>
            <div className="mt-2 flex gap-4">
              {Object.keys(plans).map((p) => (
                <button
                  key={p}
                  onClick={() => setPlan(p)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${
                    plan === p
                      ? "bg-blue-600 text-white border-blue-600"
                      : "text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Billing Type */}
          <div>
            <label className="font-medium text-gray-700">Billing:</label>
            <div className="mt-2 flex gap-4">
              {["monthly", "yearly"].map((type) => (
                <button
                  key={type}
                  onClick={() => setBillingType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${
                    billingType === type
                      ? "bg-blue-500 text-white border-blue-500"
                      : "text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {type === "monthly" ? "Monthly" : "Yearly (-10%)"}
                </button>
              ))}
            </div>
          </div>

          {/* Team Size Input */}
          <div>
            <label htmlFor="team" className="font-medium text-gray-700">
              Team Members:
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Animated Total Output */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${plan}-${billingType}-${teamSize}`}
              className="text-center mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg text-gray-700">Estimated Total</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">
                {total === 0 ? "Free" : `$${total.toFixed(2)}`}
                {billingType === "yearly" && total !== 0 ? " / year" : total !== 0 ? " / mo" : ""}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingCalculator;
