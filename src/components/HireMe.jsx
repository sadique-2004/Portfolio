import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCode, faServer, faClock, faHandshake } from '@fortawesome/free-solid-svg-icons';

const HireMe = () => {
  const offerings = [
    {
      title: 'Frontend Development',
      description: 'React.js, Modern UI/UX, Responsive Design',
      icon: faCode,
    },
    {
      title: 'Backend Development',
      description: 'Node.js, Express.js, MongoDB',
      icon: faServer,
    },
    {
      title: 'Available For',
      description: 'Full-time Roles & Contract Work',
      icon: faClock,
    },
  ];

  return (
    <section id="hire-me" className="pt-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          {/* <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-3">
            <FontAwesomeIcon icon={faBriefcase} className="h-8 w-8 mr-2" />
            Hire Me
          </h2> */}
          <h2 className="text-4xl font-bold text-blue-500 dark:text-white mb-4 flex items-center justify-center">
            <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8 mr-2" />
            Hire Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Available for full-time positions and freelance projects. Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <FontAwesomeIcon 
                icon={offering.icon} 
                className="h-8 w-8 text-blue-500 dark:text-blue-400 mb-3" 
              />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {offering.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faHandshake} className="mr-2" />
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;
