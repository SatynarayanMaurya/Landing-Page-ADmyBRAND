
import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/video.mp4";

const Hero = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Glassmorphism floating gradients */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-0 -right-24 w-72 h-72 bg-pink-300 rounded-full blur-2xl opacity-40 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Write, plan, and grow <br />
            with <span className="text-blue-600">AI by your side.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            ADmyBRAND is your all-in-one AI marketing suite. Build smarter campaigns, analyze results faster, and scale with ease.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <a
              href="#"
              className="bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Get Started Free
            </a>
            <a
              href="#"
              className="text-black border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
            >
              Request a Demo
            </a>
          </div>
        </motion.div>

        {/* Right: Hero Video */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-fit object-cover aspect-video rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

















// import React from 'react';
// // import hero from "../assets/heroSection.png"
// import hero from "../assets/heroSection.png"
// import heroVideo from "../assets/video.mp4"

// const Hero = () => {
//   return (
//     <section className="bg-white py-10">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
//         {/* Left Text Content */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
//             Write, plan, and grow <br /> with <span className="text-blue-600">AI by your side.</span>
//           </h1>
//           <p className="mt-6 text-lg text-gray-600">
//             ADmyBRAND is your all-in-one AI marketing suite. Build smarter campaigns, analyze results faster, and scale with ease.
//           </p>

//           <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
//             <a
//               href="#"
//               className="bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
//             >
//               Get Started Free
//             </a>
//             <a
//               href="#"
//               className="text-black border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
//             >
//               Request a Demo
//             </a>
//           </div>
//         </div>

//         {/* Right Image / Visual */}
//         <div className="w-full md:w-1/2">
//           {/* <img
//             src={hero}
//             alt="AI Marketing Dashboard"
//             className="w-full h-fit object-cover"
//           /> */}
//           <video src={heroVideo} autoPlay muted loop className='rounded-xl'></video>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
