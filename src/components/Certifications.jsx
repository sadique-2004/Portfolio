import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pwskillsCertificate from '../assets/images/PWSKILLS.jpg';
import postmanCertificate from '../assets/images/postman.jpg';
import girlscriptCertificate from '../assets/images/girlscript.jpg';
import internshalaC from '../assets/images/internshalaC.jpg';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    {
      title: 'Java with DSA & Basic System Design',
      organization: 'PW Skills',
      date: '3rd nov 2024',
      credentialId: '506583de-7cd1-477d-867b-5675abc11f3c',
      description: 'A course covering Core Java, OOP, DSA, and Basic System Design, providing essential skills for software development and problem-solving.',
      skills: ['Core Java', 'Object-Oriented Programming', 'HTML5', 'CSS3', 'DSA', 'Basic System-Design'],
      image: pwskillsCertificate,
      url: 'https://pwskills.com/learn/certificate/506583de-7cd1-477d-867b-5675abc11f3c/'
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      organization: 'Postman',
      date: '27th october 2024',
      credentialId: 'POSTMAN-2024',
      description: 'Mastery in API testing, documentation, and development using Postman.',
      skills: ['API Testing', 'API Documentation', 'Postman', 'REST APIs', 'API Development'],
      image: postmanCertificate,
      url: 'https://badgr.com/public/assertions/RiHW2y-9SU-hIKesDULZmg'
    },
    {
      title: 'GirlScript Summer of Code',
      organization: 'GirlScript Foundation',
      date: '10th november 2024',
      credentialId: 'GSC-2023',
      description: 'Participated in open-source development program, contributing to real-world projects.',
      skills: ['Open Source', 'Git', 'Collaboration', 'Software Development', 'Problem Solving'],
      image: girlscriptCertificate,
      url: 'YOUR_GIRLSCRIPT_CERTIFICATE_URL'
    },
    {
      title: 'C & C++ Programming',
      organization: 'Internshala',
      date: 'December 2022',
      credentialId: 'INTERNSHALA-C-2022',
      description: 'Comprehensive training in C and C++ programming fundamentals concepts.',
      skills: ['C', 'C++', 'Object-Oriented Programming', 'Problem Solving'],
      image: internshalaC,
      url: 'https://trainings.internshala.com/s/v/1404174/1ab73b47'
    },
    {
      "title": "Full Stack Web Development",
      "organization": "Apna College (Shradha Khapra)",
      "date": "October 2024",
      "credentialId": "MDB-DEV-789012",
      "description": "In-depth training in full-stack web development with expertise in frontend technologies (HTML, CSS, JavaScript, React) and backend development (Node.js, Express, MongoDB).",
      "skills": [
        "HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "ES6", "EJS", "MongoDB", "SQL", "Node.js", "Express.js", "React.js", "Git", "GitHub"
      ],
      "image": null
    }
  ];

  const displayedCertifications = showAll ? certifications : certifications.slice(0, 3);

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >

{/* text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4 */}
          <h2 className="text-4xl font-bold text-blue-500 dark:text-white mb-4 flex items-center justify-center">
            <FontAwesomeIcon icon={faCertificate} className="w-8 h-8 mr-2" />
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Professional certifications and achievements that validate my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCertifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              {cert.image ? (
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-64 object-contain bg-white dark:bg-gray-800 p-2"
                  />
                  {cert.url && cert.url !== '#' && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer flex items-center"
                      >
                        <CheckBadgeIcon className="w-5 h-5 mr-2" />
                        Verify
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-64 bg-white dark:bg-gray-800 p-8 flex flex-col items-center justify-center">
                  <CheckBadgeIcon className="h-16 w-16 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
                    {cert.organization}
                  </p>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <AcademicCapIcon className="w-5 h-5 mr-2" />
                  {cert.organization} • {cert.date}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full flex items-center"
                    >
                      <CheckBadgeIcon className="w-3 h-3 mr-1" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {certifications.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              {showAll ? 'Show Less' : 'Show More Certifications'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
