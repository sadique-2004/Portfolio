import React from 'react';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/images/profile.jpg';

const About = () => {
  const whatIDo = [
    {
      title: 'Web Development',
      description: 'Building responsive and dynamic web applications using modern technologies like React, Node.js, and MongoDB.',
      icon: GlobeAltIcon,
    },
    {
      title: 'Mobile-First Design',
      description: 'Creating seamless experiences across all devices with a mobile-first approach and responsive design principles.',
      icon: DevicePhoneMobileIcon,
    },
    {
      title: 'Problem Solving',
      description: 'Transforming complex problems into simple, beautiful, and intuitive solutions.',
      icon: LightBulbIcon,
    },
  ];

  const skills = [
    {
      category: 'Frontend Development',
      items: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Framer Motion', 'Material-UI'],
      icon: CodeBracketIcon,
    },
    {
      category: 'Backend Development',
      items: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'RESTful APIs'],
      icon: CommandLineIcon,
    },
    {
      category: 'Tools & Version Control',
      items: ['Git', 'GitHub', 'VS Code', 'Postman','Hoppscatch', 'npm', 'Webpack'],
      icon: CodeBracketIcon,
    },
    {
      category: 'Cloud & Deployment',
      items: ['Netlify', 'Vercel', 'Firebase', 'Hostinger'],
      icon: CodeBracketIcon,
    },
  ];

  const achievements = [
    // {
    //   title: 'Hackathon Winner',
    //   description: 'First place in XYZ Hackathon 2023',
    //   icon: CodeBracketIcon,
    // },
    {
      title: 'Open Source Contributor',
      description: 'Participant in GirlScript Summer of Code 2024 and HacktoberFest 2024. Where I actively contribute to various open-source repositories',
      icon: CodeBracketIcon,
    },
    // {
    //   title: 'Certifications',
    //   description: 'AWS Certified Developer, MongoDB Certified Developer',
    //   icon: CommandLineIcon,
    // },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mdsadique5',
      icon: faLinkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sadique-2004',
      icon: faGithub,
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/md_sadique',
      icon: faHackerrank,
    },
    {
      name: 'Linktree',
      url: 'https://linktr.ee/Md_Sadique2004',
      icon: faLinkedin,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4 mb-4">
                A passionate Full Stack Developer with a love for creating elegant solutions
                and meaningful web experiences.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-64 h-64 rounded-full object-cover shadow-lg"
                  />
                </motion.div>

                <div className="flex flex-col items-center md:items-start gap-6">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faDownload} className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                      >
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white dark:bg-gray-700 shadow-md 
                                     border border-gray-200 dark:border-gray-600 
                                     transform transition-all duration-300 
                                     hover:scale-110 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400">
                          <FontAwesomeIcon
                            icon={link.icon}
                            className="w-6 h-6 text-gray-600 dark:text-gray-300 
                                     group-hover:text-blue-500 dark:group-hover:text-blue-400 
                                     transition-colors duration-300"
                          />
                        </div>
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                                       opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                       text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                          {link.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 text-left px-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Hello, I'm Md Sadique
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
                I specialize in building modern web applications using cutting-edge technologies. As a passionate full-stack developer with expertise in the <b>MERN stack</b>, I have a strong foundation in frontend and backend development, ensuring seamless user experiences and solving real-world problems.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
                I have professional experience as a <b>full-stack developer at BlinkFind</b>, where I contribute to creating innovative and optimized tech solutions. I am an active participant in open-source contributions, including <b>GirlScript Summer of Code 2024</b> and <b>HacktoberFest 2024</b>, where I collaborated on impactful projects. Currently, I am working on <b>Wanderlust</b>, a full-stack web application, and <b>RGI CSE-Connect</b>, a community platform designed for students and faculty to share knowledge and resources.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
                  When I'm not coding, you'll find me exploring new technologies, contributing
                  to open-source projects, or sharing my knowledge with the developer community.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
                Let's connect and create amazing things together! 🤝✨
                </p>
                
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 text-left"
          >
          </motion.div>

        </motion.div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What I Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatIDo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center justify-center mb-4">
                  <item.icon className="h-12 w-12 text-blue-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <skill.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  {skill.category}
                </h4>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <svg
                        className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className='flex flex-col justify-center'>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Achievements & Recognition
          </h3>
          <div className={`grid grid-cols-1 ${achievements.length === 1 ? 'place-items-center' : 'md:grid-cols-3'} gap-8`}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <achievement.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
