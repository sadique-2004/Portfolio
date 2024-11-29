import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon as ExternalLinkIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import rgiCseConnectImage from '../assets/images/RGI CSE-Connect.jpg';
import wanderlustImage from '../assets/images/wanderlust.jpg';
import hafizPortfolioImage from '../assets/images/hafizSarfrazAlamPortfoli.jpg';
import todoAppImage from '../assets/images/toDoApp.jpg';
import oneCodeImage from '../assets/images/oneCodeWithSadique.jpg';
import ticTacToeImage from '../assets/images/ticTacToe.jpg';
import sadiqueDevImage from '../assets/images/sadiqueDev.jpg';


const Projects = () => {
  const projects = [
    {
      title: 'Wanderlust',
      description: 'Wanderlust is a full-stack travel platform that helps users explore destinations, plan trips, and create personalized itineraries. Features include login/signup, reviews, ratings, adding places, Google Maps integration, and client-side form validation.it ensures seamless functionality with robust error handling.',
      image: wanderlustImage,
      technologies: ['ejs','javascript', 'Node.js', 'MongoDB', 'Express', 'Bootstrap','google maps'],
      liveLink: 'https://wanderlust-travel.netlify.app',
      codeLink: 'https://github.com/yourusername/wanderlust',
      status: 'In Development',
      type: 'Major'
    },
    {
      title: 'RGI CSE-Connect',
      description: 'RGI CSE-Connect is a platform for CSE students to connect, share resources, and stay updated with department events. Features include login/signup, viewing and creating posts, and admin updates for events and hackathons.it includes client-side validation and robust error handling.',
      image: rgiCseConnectImage,
      technologies: ['ejs','javascript','Typed.js','Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Heroicons'],
      liveLink: 'https://rgi-cse-connect.netlify.app',
      codeLink: 'https://github.com/yourusername/rgi-cse-connect',
      status: 'In Development',
      type: 'Major'
    },
    {
      title: 'Sadique.Dev',
      description: 'Sadique.Dev is my portfolio website, showcasing my development skills, projects, education background, certifications, and professional experience. it provides an interactive and visually appealing interface to highlight my journey and achievements.',
      image: sadiqueDevImage,
      technologies: ['React','javascript','Typed.js','Tailwind CSS', 'font awesome', 'Heroicons'],
      liveLink: 'https://sadique-dev.netlify.app',
      codeLink: 'https://github.com/yourusername/sadique-dev',
      status: 'Completed',
      type: 'Mini'
    },
    {
      title: 'Adopt A Pet Today',
      description: 'Adopt A Pet Today is a responsive pet adoption platform that allows users to browse pet listings, adopt pets directly, and provide feedback. It integrates APIs for random cat facts and success story comments to enhance user engagement. Razorpay is used for secure payment processing.',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      technologies: ['Html', 'CSS', 'Javascript', 'Bootstrap', 'Razorpay','Rest-API'],
      liveLink: 'https://adopt-a-pet-by-sadique.netlify.app/',
      codeLink: 'https://github.com/yourusername/adopt-a-pet',
      status: 'Completed',
      type: 'Mini'
    },
    {
      title: 'Hafiz Sarfraz Portfolio',
      description: 'Hafiz Sarfraz Portfolio is a responsive website dedicated to sharing Islamic teachings and knowledge. It features smooth animations and a "Watch Now" section for viewers to watch Islamic content through embedded YouTube videos.',
      image: hafizPortfolioImage,
      technologies: ['Html','Css', 'Javascript','Bootstrap', 'Font Awesome', 'Framer Motion','Jquery' ],
      liveLink: 'https://hafiz-sarfraz-alam-official.netlify.app/',
      codeLink: 'https://github.com/yourusername/hafiz-portfolio',
      status: 'Completed',
      type: 'Mini'
    },
    {
      title: 'Todo App',
      description: 'Todo App is a simple yet effective tool designed to help you organize your life and simplify your day. It allows you to manage tasks, set reminders, and stay on track with notifications. The app features sections like Home, Tasks, Calendar, and Contact Me, along with a login/signup system for personalized access.',
      image: todoAppImage,
      technologies: ['Html', 'CSS', 'Bootstrap', 'Javascript', 'font awesome'],
      liveLink: 'https://createyourtodo.netlify.app/',
      codeLink: 'https://github.com/yourusername/todo-app',
      status: 'In Development',
      type: 'Mini'
    },
    {
      title: 'One Code with Sadique',
      description: 'One Code with Sadique is an interactive coding tutorial platform designed to simplify web development learning. It offers programming lessons, code snippets, and examples through sections like Home, Get Certificate, Watch Now, and Learn Now. Users can log in or sign up for a personalized experience.',
      image: oneCodeImage,
      technologies: ['Html','Css', 'Javascript','Bootstrap', 'Font Awesome', 'Framer Motion','Jquery'],
      liveLink: 'https://onecodewithsadique.netlify.app/',
      codeLink: 'https://github.com/yourusername/one-code',
      status: 'In Development',
      type: 'Mini'
    },
    {
      title: 'Tic Tac Toe',
      description: 'A classic Tic Tac Toe game with a modern UI, smooth , and engaging features. The game highlights the winner, handles draw scenarios, and includes a YouTube search bar for quick access to related content. Additionally, it tracks web visitors with a live counter for added interactivity.',
      image: ticTacToeImage,
      technologies: ['Html', 'CSS', 'Bootstrap', 'Javascript', 'font awesome'],
      liveLink: 'https://tictactoebysadique.netlify.app/',
      codeLink: 'https://github.com/yourusername/tic-tac-toe',
      status: 'Completed',
      type: 'Mini'
    },
    {
      title: 'Spotify Clone',
      description: 'Spotify Clone is a static replica of Spotifys user interface, created to enhance development skills and practice front-end design techniques.',
      image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      technologies: ['Html', 'CSS', 'Bootstrap', 'Javascript', 'font awesome','google fonts'],
      liveLink: 'https://spotify-clone-sadique.netlify.app',
      codeLink: 'https://github.com/yourusername/spotify-clone',
      status: 'Completed',
      type: 'Mini'
    },
    {
      title: 'Amazon Clone',
      description: 'Amazon user interface, designed to practice front-end development skills.An Amazon-inspired e-commerce platform with product listings, cart functionality, and user authentication. Features responsive design.',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3',
      technologies: ['Html', 'CSS', 'Bootstrap', 'font awesome','google fonts'],
      liveLink: 'https://amazon-clone-sadique.netlify.app',
      codeLink: 'https://github.com/yourusername/amazon-clone',
      status: 'Completed',
      type: 'Mini'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with buttons */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-sm transition-colors duration-300"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-sm transition-colors duration-300"
                  >
                    <CodeBracketIcon className="h-4 w-4" />
                    View Code
                  </a>
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                  }`}>
                    {project.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.type === 'Major' 
                      ? 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100'
                  }`}>
                    {project.type} Project
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
