import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import hey from "../assets/images/hey.gif";
import banner from "../assets/images/banner.png";

import "./Hero.css";

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Technical Trainer @ TAP Academy ",
        "Full-Stack Developer (MERN)",
        // "CSE’26 Undergrad | Future Top 1% Engineer <span style='color:initial'>🚀</span>",
        "SDE at TAP Academy",
        "AI-Augmented Builder",
        "Founder of HackChain",
        "Open-Source Contributor",
        "Crafting Scalable & Impactful Software",
        // "Future SDE | Dreaming Big, Building Bigger <span style='color:initial'>✨</span>",
        "Always Leveling Up <span style='color:initial'>⬆️</span>",
      ],

      typeSpeed: 90,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);


  // Bubble generator
  const bubbles = Array.from({ length: 12 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-md opacity-60"
      initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
      animate={{ y: ["100vh", "-10vh"], x: Math.random() * window.innerWidth }}
      transition={{
        duration: 8 + Math.random() * 5,
        repeat: Infinity,
        ease: "linear",
        delay: Math.random() * 5,
      }}
    />
  ));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Dotted background pattern */}
      <div
        className="absolute inset-0 pointer-events-none 
             bg-[radial-gradient(circle,hsla(0,0%,0%,0.86)_1px,transparent_1px)] 
             dark:bg-[radial-gradient(circle,hsla(0,0%,100%,0.8)_1px,transparent_1px)]"
        style={{
          backgroundSize: '25px 25px',
          opacity: 0.5
        }}
      />



      {/* ✅ Content - TOP */}
      <div className="section-container relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >

            <h1 className="flex items-center justify-center text-3xl sm:text-4xl lg:text-6xl font-bold font-heading text-[#504953] dark:text-white mb-4 sm:mb-6 mt-8 sm:mt-12 text-center">
              <img
                src={hey}
                alt="Hey"
                className="w-12 h-12 sm:w-16 sm:h-16 mr-2"
              />
              I'm{" "}
              <span className="bg-gradient-to-r from-primary-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-text-gradient ml-1">
                Md Sadique
              </span>
            </h1>

            <h2
              className="text-xl sm:text-2xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-center
             min-h-[3rem] sm:min-h-[4rem] lg:min-h-[5rem]"
            >
              <span
                ref={typedElement}
                className="bg-gradient-to-r from-primary-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
              ></span>
            </h2>


            <p className="text-base sm:text-lg lg:text-xl text-dark-600 dark:text-dark-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-center">
              {/* A passionate Full Stack Developer crafting innovative web
              solutions and bringing ideas to life through code. */}
              Full Stack Developer leveraging AI to craft innovative, scalable web solutions — turning ideas into real-world impact.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white 
                hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-2 rounded-full border-2 border-dark-300 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
          
            <img
              src={banner}
              alt="Profile"
              className="w-full h-full object-contain sm:object-cover rounded-lg"
            />



            {/* <div className="relative  h-[400px]  rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/rC8BYN1pkW4?autoplay=1&mute=1&loop=1&playlist=rC8BYN1pkW4&controls=0&modestbranding=1&showinfo=0"
                title="Intro Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div> */}


            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl"
            >
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                1+ Years Experience
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Frontend Development
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
