import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import hey from "../assets/images/hey.gif";

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
        "Software Engineer.",
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

            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-center">
              <span
                ref={typedElement}
                className="bg-gradient-to-r from-primary-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
              ></span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-dark-600 dark:text-dark-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-center">
              A passionate Full Stack Developer crafting innovative web
              solutions and bringing ideas to life through code.
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



// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Typed from "typed.js";
// import hey from "../assets/images/hey.gif";

// import "./Hero.css";

// const Hero = () => {
//   const typedElement = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(typedElement.current, {
//       strings: [
//         "CSE'26 Undergrad.",
//         "Full-Stack Developer.",
//         "Founder of HackChain.",
//         "Web Dev Mentor (Soon).",
//         "Future SDE.",
//         "Software Engineer.",
//       ],
//       typeSpeed: 90,
//       backSpeed: 50,
//       loop: true,
//     });

//     return () => typed.destroy();
//   }, []);

//   // Bubble generator
//   const bubbles = Array.from({ length: 12 }, (_, i) => (
//     <motion.div
//       key={i}
//       className="absolute w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-md opacity-60"
//       initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
//       animate={{ y: ["100vh", "-10vh"], x: Math.random() * window.innerWidth }}
//       transition={{
//         duration: 8 + Math.random() * 5,
//         repeat: Infinity,
//         ease: "linear",
//         delay: Math.random() * 5,
//       }}
//     />
//   ));

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"
//     >
//       {/* 🌟 Floating bubbles */}
//       <div className="absolute inset-0 overflow-hidden z-0">{bubbles}</div>

//       {/* 🌟 Glowing blobs background */}
//       <motion.div
//         className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute top-40 -right-40 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"
//         animate={{ scale: [1.1, 0.9, 1.1] }}
//         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* ✅ Content */}
//       <div className="section-container relative z-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* 👋 Text Side */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="flex items-center justify-center text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 mt-8 sm:mt-12 text-center drop-shadow-lg">
//               <img
//                 src={hey}
//                 alt="Hey"
//                 className="w-12 h-12 sm:w-16 sm:h-16 mr-2"
//               />
//               I'm{" "}
//               <span className="bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-text-gradient ml-1">
//                 Md Sadique
//               </span>
//             </h1>

//             <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-gray-200 mb-4 sm:mb-6 text-center">
//               <span
//                 ref={typedElement}
//                 className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
//               ></span>
//             </h2>

//             <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-center">
//               A passionate Full Stack Developer crafting innovative web
//               solutions and bringing ideas to life through code.
//             </p>

//             <div className="flex flex-wrap gap-4 justify-center">
//               <a
//                 href="#contact"
//                 className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white 
//                 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-primary-500/50"
//               >
//                 Get in Touch
//               </a>
//               <a
//                 href="#projects"
//                 className="px-6 py-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 transition-colors duration-300 text-white"
//               >
//                 View Projects
//               </a>
//             </div>
//           </motion.div>

//           {/* 👤 Image Side */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop"
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//             </div>

//             {/* Floating Badge */}
//             <motion.div
//               animate={{ y: [0, -12, 0] }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-cyan-400 p-4 rounded-2xl shadow-2xl"
//             >
//               <div className="text-sm font-semibold text-white">
//                 1+ Years Experience
//               </div>
//               <div className="text-xs text-gray-200">Frontend Development</div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

