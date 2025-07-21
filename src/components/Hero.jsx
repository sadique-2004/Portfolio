import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

import "./Hero.css";

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "CSE'26 Undergrad.",
        "Full-Stack Developer.",
        "Founder of HackChain.",
        "Web Dev Mentor (Soon).",
        "Future SDE.",
      ],
      typeSpeed: 90,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ✅ Content - TOP */}
      <div className="section-container relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#504953] dark:text-white mb-6 mt-12">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Md Sadique
              </span>
            </h1>
            <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-[#504953] dark:text-white mb-6">
              <span
                ref={typedElement}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
              ></span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-300 mb-8">
              A passionate Full Stack Developer crafting innovative web
              solutions and bringing ideas to life through code.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
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
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

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
