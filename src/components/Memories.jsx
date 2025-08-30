import React from "react";
import { motion } from "framer-motion";
import { Gallery } from "react-grid-gallery";

// 1. IMPORTS
import img1 from '../assets/memoriesImg/img1.jpg';
import img2 from "../assets/memoriesImg/img2.jpg";
import img3 from "../assets/memoriesImg/img3.jpg";
import img4 from "../assets/memoriesImg/img4.jpg";
import img5 from "../assets/memoriesImg/img5.jpg";
import img6 from "../assets/memoriesImg/img6.jpg";
import img7 from "../assets/memoriesImg/img7.jpg";
import img8 from "../assets/memoriesImg/img8.jpg";
import img9 from "../assets/memoriesImg/img9.jpg";
import img10 from "../assets/memoriesImg/img10.jpg";
import img11 from "../assets/memoriesImg/img11.jpg";
import img12 from "../assets/memoriesImg/img12.jpg";
import img13 from "../assets/memoriesImg/img13.jpg";
import img14 from "../assets/memoriesImg/img14.jpg";
import img15 from "../assets/memoriesImg/img15.jpg";
import img16 from "../assets/memoriesImg/img16.jpg";
import img17 from "../assets/memoriesImg/img17.jpg";
import img18 from "../assets/memoriesImg/img18.jpg";
import img19 from "../assets/memoriesImg/img19.jpg";
import img20 from "../assets/memoriesImg/img20.jpg";
import img21 from "../assets/memoriesImg/img21.jpg";
import img22 from "../assets/memoriesImg/img22.jpg";
import img23 from "../assets/memoriesImg/img23.jpg";
import img24 from "../assets/memoriesImg/img24.jpg";
import img25 from "../assets/memoriesImg/img25.jpg";
import img26 from "../assets/memoriesImg/img26.jpg";
import img27 from "../assets/memoriesImg/img27.jpg";
import img28 from "../assets/memoriesImg/img28.jpg";
import img29 from "../assets/memoriesImg/img29.jpg";
import img30 from "../assets/memoriesImg/img30.jpg";
import img31 from "../assets/memoriesImg/img31.jpg";
import img32 from "../assets/memoriesImg/img32.jpg";
import img33 from "../assets/memoriesImg/img33.jpg";
import img34 from "../assets/memoriesImg/img34.jpg";
import img35 from "../assets/memoriesImg/img35.jpg";
import img36 from "../assets/memoriesImg/img36.jpg";
import img37 from "../assets/memoriesImg/img37.jpg";
import img38 from "../assets/memoriesImg/img38.jpg";
import img39 from "../assets/memoriesImg/img39.jpg";
import img40 from "../assets/memoriesImg/img40.jpg";
import img41 from "../assets/memoriesImg/img41.jpg";
import img42 from "../assets/memoriesImg/img42.jpg";
import img43 from "../assets/memoriesImg/img43.jpg";
import img44 from "../assets/memoriesImg/img44.jpg";
import img45 from "../assets/memoriesImg/img45.jpg";
import img46 from "../assets/memoriesImg/img46.jpg";
import img47 from "../assets/memoriesImg/img47.jpg";
import img48 from "../assets/memoriesImg/img48.jpg";
import img49 from "../assets/memoriesImg/img49.jpg";
import img50 from "../assets/memoriesImg/img50.jpg";
import img52 from "../assets/memoriesImg/img52.jpg";
import img53 from "../assets/memoriesImg/img53.jpg";
import img54 from "../assets/memoriesImg/img54.jpg";
import img55 from "../assets/memoriesImg/img55.jpg";
import img56 from "../assets/memoriesImg/img56.jpg";
import img57 from "../assets/memoriesImg/img57.jpg";
import img58 from "../assets/memoriesImg/img58.jpg";
import img59 from "../assets/memoriesImg/img59.jpg";
import img60 from "../assets/memoriesImg/img60.jpg";
import img61 from "../assets/memoriesImg/img61.jpg";
import img62 from "../assets/memoriesImg/img62.jpg";
import img63 from "../assets/memoriesImg/img63.jpg";
import img64 from "../assets/memoriesImg/img64.jpg";
import img65 from "../assets/memoriesImg/img65.jpg";
import img66 from "../assets/memoriesImg/img66.jpg";
import img67 from "../assets/memoriesImg/img67.jpg";
import img68 from "../assets/memoriesImg/img68.jpg";
import img69 from "../assets/memoriesImg/img69.jpg";
import img70 from "../assets/memoriesImg/img70.jpg";
import img71 from "../assets/memoriesImg/img71.jpg";

// 2. GALLERY ARRAY
const images = [

  { src: img62, width: 7, height: 4 },
  { src: img63, width: 5, height: 6 },
  { src: img64, width: 8, height: 4  },
  { src: img65, width: 5, height: 6},
  { src: img69, width: 5, height: 6 },
  { src: img66, width: 7, height: 6 },
  { src: img67, width: 5, height: 6 },
  { src: img68, width: 5, height: 6 },
  
  { src: img70, width: 5, height: 5 },
  { src: img71, width: 8, height: 6},


  { src: img1, width: 6, height: 4 },
  { src: img2, width: 4, height: 3 },
  { src: img3, width: 8, height: 4 },

  { src: img37, width: 4, height: 3 },

  { src: img6, width: 6, height: 4 },
  { src: img7, width: 4, height: 4 },
  { src: img8, width: 6, height: 3 },
  { src: img9, width: 4, height: 4 },
  { src: img4, width: 4, height: 4 },
  { src: img10, width: 4, height: 3 },
  { src: img11, width: 3, height: 3 },
  { src: img12, width: 8, height: 5 },
  { src: img13, width: 8, height: 3 },
  { src: img23, width: 3, height: 4 },
  { src: img14, width: 4, height: 4 },
  { src: img15, width: 4, height: 3 },
  { src: img16, width: 7, height: 4 },
  { src: img17, width: 4, height: 4 },
  { src: img18, width: 5, height: 3 },
  { src: img19, width: 6, height: 5 },
  { src: img20, width: 4, height: 4 },
  { src: img21, width: 5, height: 3 },
  { src: img22, width: 6, height: 4 },
  { src: img24, width: 4, height: 3 },
  { src: img25, width: 3, height: 3 },
  { src: img26, width: 5, height: 4 },
  { src: img27, width: 3, height: 4 },
  { src: img28, width: 3, height: 3 },
  { src: img29, width: 5, height: 4 },
  { src: img30, width: 2, height: 3 },
  { src: img31, width: 6, height: 4 },
  { src: img32, width: 6, height: 4 },
  { src: img33, width: 7, height: 4 },
  { src: img34, width: 4, height: 3 },
  { src: img35, width: 3, height: 3 },
  { src: img36, width: 5, height: 3 },
  { src: img5, width: 4, height: 4 },
  { src: img39, width: 3, height: 3 },
  { src: img40, width: 6, height: 4 },
  { src: img41, width: 8, height: 4 },
  { src: img42, width: 8, height: 4 },
  { src: img43, width: 6, height: 4 },
  { src: img44, width: 5, height: 3 },
  { src: img46, width: 5, height: 3 },
  { src: img47, width: 4, height: 3 },
  { src: img48, width: 5, height: 5 },
  { src: img49, width: 4, height: 4 },
  { src: img50, width: 4, height: 4 },
  { src: img52, width: 4, height: 3 },
  { src: img53, width: 7, height: 4 },
  { src: img54, width: 3, height: 3 },
  { src: img55, width: 6, height: 3 },
  { src: img56, width: 4, height: 3 },
  { src: img57, width: 4, height: 3 },
  { src: img58, width: 4, height: 3 },
  { src: img59, width: 4, height: 3 },
  { src: img60, width: 6, height: 4 },
  { src: img61, width: 4, height: 3 },

  
];




const Memories = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 px-4 sm:px-6 lg:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold  mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            📸 <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">My Memories</span>
          </motion.h2>

          <motion.p
            className="text-md sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A glimpse into the <span className="font-semibold text-blue-600 dark:text-cyan-400">special moments</span> I've experienced — from attending and organizing tech events, participating in hackathons, to cherishing college life. Each photo reflects a <span className="font-semibold text-purple-500">unique memory</span> that has shaped my journey.
          </motion.p>
        </motion.div>


        <Gallery images={images} />
      </div>
    </section>
  );
};


export default Memories;
