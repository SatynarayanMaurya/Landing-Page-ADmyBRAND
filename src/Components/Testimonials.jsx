import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Marketing Head, StartX",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "ADmyBRAND's AI tools changed the way we run campaigns. It's fast, intuitive, and truly intelligent.",
  },
  {
    name: "Rahul Verma",
    role: "CEO, Growthify",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "This platform has saved us countless hours. The automation is top-notch, and results are impressive.",
  },
  {
    name: "Priya Mehta",
    role: "CMO, AdZen",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "Love the clean interface and powerful AI integrations. Highly recommended for any team scaling up.",
  },
  {
    name: "Aman Patel",
    role: "Growth Manager, MarketWise",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    feedback:
      "The real-time dashboards and insights have made our decision-making much faster and sharper.",
  },
  {
    name: "Sanya Kapoor",
    role: "Head of Digital, WebX",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    feedback:
      "ADmyBRAND is like having a full marketing team powered by AI. Clean, smooth, efficient.",
  },
  {
    name: "Karan Singh",
    role: "CMO, HiveBoost",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    feedback:
      "The best platform we've used this year. Setup was quick and results came even quicker.",
  },
  {
    name: "Megha Joshi",
    role: "Product Lead, Sparkly",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    feedback:
      "Our ROI jumped by 40% in just two months after adopting ADmyBRAND’s AI suite.",
  },
  {
    name: "Dev Mishra",
    role: "Founder, MarketSnap",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    feedback:
      "I can’t imagine managing marketing without it anymore. Huge time and cost saver.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Loved by marketing leaders
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Here’s what our users have to say about ADmyBRAND AI Suite.
        </p>
      </div>

      <div className="mt-12 max-w-5xl mx-auto px-4 relative">
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 1000 }}
            pagination={{ clickable: true }} // ✅ Built-in pagination
            modules={[Pagination, Autoplay]}
            breakpoints={{
                600: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="pb-14 " // ✅ Adds space for pagination dots
            >
            {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                <div className=" bg-white p-6 rounded-xl shadow text-center h-full flex flex-col items-center justify-between">
                    <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full mb-4"
                    />
                    <p className="text-gray-700 italic  lg:h-[5rem] h-[6rem] overflow-y-scroll hide-scrollbar">“{t.feedback}”</p>
                    <div className="mt-4">
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>


        {/* Spaced pagination bullets */}
        <div className="mt-6  swiper-pagination !relative !bottom-0 text-center" />
      </div>
    </section>
  );
};

export default Testimonials;
