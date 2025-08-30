import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Custom Arrows
function PrevArrow({ className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${className} absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 
        bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-white p-2 rounded-full shadow-lg transition`}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
}

function NextArrow({ className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${className} absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 
        bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-white p-2 rounded-full shadow-lg transition`}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
}

function Achievements({ achievements }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => <ul className="flex justify-center gap-2 mt-4">{dots}</ul>,
    customPaging: () => <div className="w-3 h-3 bg-yellow-500 rounded-full hover:scale-125 transition" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const borderColors = [
    "border-yellow-500",
    "border-green-500",
    "border-blue-500",
    "border-purple-500",
    "border-pink-500",
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Section Title */}
      <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-12 flex items-center justify-center gap-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-400 drop-shadow-md">
        {/* <FontAwesomeIcon icon={faTrophy} className="h-8 w-8 animate-bounce text-yellow-500 dark:text-yellow-400" /> */}
        Hackathons & Highlights
        {/* <FontAwesomeIcon icon={faTrophy} className="h-8 w-8 animate-bounce text-yellow-500 dark:text-yellow-400" /> */}
      </h3>

      {/* Slider */}
      <div className="max-w-6xl mx-auto relative">
        <Slider {...settings}>
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="px-3"
            >
              <div
                className={`rounded-2xl overflow-hidden shadow-2xl border-l-4 ${borderColors[index % borderColors.length]} 
                  bg-white/70 dark:bg-gray-800/70 backdrop-blur-md hover:scale-105 transition transform`}
              >
                <div className="p-8 pt-4 min-h-[250px] flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex items-center mb-3 gap-3">
                    {/* <FontAwesomeIcon icon={achievement.icon} className="h-8 w-8 text-yellow-500 dark:text-yellow-400" /> */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{achievement.title}</h4>
                      {achievement.subtitle && (
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{achievement.subtitle}</p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 pl-1 leading-relaxed flex-grow">{achievement.description}</p>

                  {/* Link */}
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-500 dark:text-yellow-400 font-semibold hover:underline mt-3 block"
                    >
                      View LinkedIn Post
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Achievements;
