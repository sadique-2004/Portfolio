import React, { useEffect, useRef } from 'react'; // Added useEffect and useRef for Typed.js
import { motion } from 'framer-motion';
import Typed from 'typed.js'; // Imported Typed.js

const Hero = () => {
  const typedElement = useRef(null); // Created a ref for the Typed.js target element

  useEffect(() => {
    // Initialized Typed.js
    const options = {
      strings: ["Frontend Developer.", "MERN-Stack Developer.", "CSE'26 Undergrad.","Open Source Contributor."], // Texts to type
      typeSpeed: 90, // Typing speed
      backSpeed: 50, // Backspacing speed
      loop: true, // Loop the typing animation
    };

    const typed = new Typed(typedElement.current, options); // Initialize Typed.js with the ref

    return () => {
      // Clean up the Typed.js instance when the component unmounts
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6" >
              Hi, I'm <span className="text-blue-600">Md Sadique</span>
              {/* Added span to display the Typed.js text */}
            </h1>
            <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              <span ref={typedElement} className=" text-blue-600"></span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A passionate Full Stack Developer crafting innovative web solutions and bringing ideas to life through code.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-2 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-colors duration-300"
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
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
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
