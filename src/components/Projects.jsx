import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowTopRightOnSquareIcon as ExternalLinkIcon, CodeBracketIcon, XMarkIcon } from '@heroicons/react/24/outline';
import rgiCseConnectImage from '../assets/images/RGI CSE-Connect.jpg';
import wanderlustImage from '../assets/images/wanderlust.jpg';
import hafizPortfolioImage from '../assets/images/hafizSarfrazAlamPortfoli.jpg';
import todoAppImage from '../assets/images/toDoApp.jpg';
import oneCodeImage from '../assets/images/oneCodeWithSadique.jpg';
import ticTacToeImage from '../assets/images/ticTacToe.jpg';
import sadiqueDevImage from '../assets/images/sadiqueDev.jpg';
import InvoicifyImage from '../assets/images/invoicify.jpg';
// import inDevImage from '../assets/images/inDev.jpg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const projectVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Projects = () => {
  // State for showing all projects vs limited number
  const [showAll, setShowAll] = useState(false);

  // State for filters - selectedTechs is now an array for multi-select
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Search state for technology filter
  const [techSearch, setTechSearch] = useState('');

  const projects = [
    {
      title: 'Invoicify',
      description: 'Invoicify simplifies invoice management—create professional invoices in seconds and print or download with ease.',
      image: InvoicifyImage,
      technologies: ['React', 'Typed.Js', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
      liveLink: 'https://invoicify-nine.vercel.app/',
      codeLink: 'https://github.com/sadique-2004/Invoicify',
      status: 'In Development',
      type: 'Major'
    },
    {
      title: 'Wanderlust',
      description: 'Wanderlust is a full-stack travel platform that helps users explore destinations, plan trips, and create personalized itineraries. Features include login/signup, reviews, ratings, adding places, Google Maps integration, and client-side form validation.it ensures seamless functionality with robust error handling.',
      image: wanderlustImage,
      technologies: ['ejs', 'Javascript', 'Node.js', 'MongoDB', 'Express', 'Bootstrap', 'google maps'],
      // liveLink: 'https://wanderlust-travel.netlify.app',
      // codeLink: 'https://github.com/yourusername/wanderlust',
      status: 'In Development',
      type: 'Major'
    },
    {
      title: 'RGI CSE-Connect',
      description: 'RGI CSE-Connect is a platform for CSE students to connect, share resources, and stay updated with department events. Features include login/signup, viewing and creating posts, and admin updates for events and hackathons.it includes client-side validation and robust error handling.',
      image: rgiCseConnectImage,
      technologies: ['ejs', 'Javascript', 'Typed.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      // liveLink: 'https://rgi-cse-connect.netlify.app',
      // codeLink: 'https://github.com/yourusername/rgi-cse-connect',
      status: 'In Development',
      type: 'Major'
    },
    {
      title: 'Sadique.Dev',
      description: 'Sadique.Dev is my portfolio website, showcasing my development skills, projects, education background, certifications, and professional experience. it provides an interactive and visually appealing interface to highlight my journey and achievements.',
      image: sadiqueDevImage,
      technologies: ['React', 'Javascript', 'Typed.js', 'Tailwind CSS', 'font awesome', 'Heroicons'],
      liveLink: 'https://sadique-dev.netlify.app',
      codeLink: 'https://github.com/yourusername/sadique-dev',
      status: 'Completed',
      type: 'Mini'
    },
    {
      title: 'Adopt A Pet Today',
      description: 'Adopt A Pet Today is a responsive pet adoption platform that allows users to browse pet listings, adopt pets directly, and provide feedback. It integrates APIs for random cat facts and success story comments to enhance user engagement. Razorpay is used for secure payment processing.',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      technologies: ['Html', 'CSS', 'Javascript', 'Bootstrap', 'Razorpay', 'Rest-API'],
      liveLink: 'https://adopt-a-pet-by-sadique.netlify.app/',
      codeLink: 'https://github.com/yourusername/adopt-a-pet',
      status: 'Completed',
      type: 'Mini'
    },
    {
      title: 'Hafiz Sarfraz Portfolio',
      description: 'Hafiz Sarfraz Portfolio is a responsive website dedicated to sharing Islamic teachings and knowledge. It features smooth animations and a "Watch Now" section for viewers to watch Islamic content through embedded YouTube videos.',
      image: hafizPortfolioImage,
      technologies: ['Html', 'CSS', 'Javascript', 'Bootstrap', 'Font Awesome', 'Framer Motion', 'Jquery'],
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
      technologies: ['Html', 'CSS', 'Javascript', 'Bootstrap', 'Font Awesome', 'Framer Motion', 'Jquery'],
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
      technologies: ['Html', 'CSS', 'Bootstrap', 'Javascript', 'font awesome', 'google fonts'],
      liveLink: 'https://spotify-clone-sadique.netlify.app',
      codeLink: 'https://github.com/yourusername/spotify-clone',
      status: 'Completed',
      type: 'Mini'
    },
    {
      title: 'Amazon Clone',
      description: 'Amazon user interface, designed to practice front-end development skills.An Amazon-inspired e-commerce platform with product listings, cart functionality, and user authentication. Features responsive design.',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3',
      technologies: ['Html', 'CSS', 'Bootstrap', 'font awesome', 'google fonts'],
      liveLink: 'https://amazon-clone-sadique.netlify.app',
      codeLink: 'https://github.com/yourusername/amazon-clone',
      status: 'Completed',
      type: 'Mini'
    }
  ];

  // Calculate unique filters using useMemo to avoid recalculation on every render
  const filters = useMemo(() => {
    // Flatten the technologies array and remove duplicates
    const techs = new Set(projects.flatMap(p => p.technologies));
    const types = new Set(projects.map(p => p.type));
    const statuses = new Set(projects.map(p => p.status));

    return {
      // Sort technologies alphabetically
      technologies: Array.from(techs).sort((a, b) => a.localeCompare(b)),
      types: ['All', ...Array.from(types)].sort(),
      statuses: ['All', ...Array.from(statuses)].sort()
    };
  }, [projects]);

  // Filter technologies based on search input
  const filteredTechnologies = useMemo(() => {
    return filters.technologies.filter(tech =>
      tech.toLowerCase().includes(techSearch.toLowerCase())
    );
  }, [filters.technologies, techSearch]);

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // For technologies, check if ANY of the selected techs are in the project
      const techMatch = selectedTechs.length === 0 ||
        selectedTechs.every(tech => project.technologies.includes(tech));

      // For type and status, match exactly or 'All'
      const typeMatch = selectedType === 'All' || project.type === selectedType;
      const statusMatch = selectedStatus === 'All' || project.status === selectedStatus;

      return techMatch && typeMatch && statusMatch;
    });
  }, [projects, selectedTechs, selectedType, selectedStatus]);

  // Get the projects to display based on showAll state
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  // Handler for toggling technology selection
  const handleTechToggle = (tech) => {
    setSelectedTechs(prev => {
      if (prev.includes(tech)) {
        return prev.filter(t => t !== tech);
      } else {
        return [...prev, tech];
      }
    });
  };

  // Handler for clearing all technology filters
  const clearTechFilters = () => {
    setSelectedTechs([]);
    setTechSearch('');
  };

  // Custom button component for filters
  const FilterButton = ({ selected, onClick, children }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${selected
          ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:border-gray-600'
        }`}
    >
      {children}
    </button>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-8"
        >
          <div className="flex flex-col gap-4">
            {/* Search and Type/Status Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-start">
              {/* Search Input */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    value={techSearch}
                    onChange={(e) => setTechSearch(e.target.value)}
                    placeholder="Search technologies..."
                    className="w-full px-4 py-2.5 pl-10 rounded-lg border-2 border-gray-200 dark:border-gray-600 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm
                             focus:border-blue-400 dark:focus:border-blue-500 outline-none
                             transition-all duration-200"
                  />
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {techSearch && (
                    <button
                      onClick={() => setTechSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 
                               hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Type and Status Filters */}
              <div className="flex flex-wrap gap-4 w-full md:w-1/2">
                {/* Type Filter */}
                <div className="w-full sm:w-auto flex-1">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 dark:border-gray-600 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm
                             focus:border-blue-400 dark:focus:border-blue-500 outline-none
                             transition-all duration-200"
                  >
                    {filters.types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Status Filter */}
                <div className="w-full sm:w-auto flex-1">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 dark:border-gray-600 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm
                             focus:border-blue-400 dark:focus:border-blue-500 outline-none
                             transition-all duration-200"
                  >
                    {filters.statuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Selected Technologies */}
            {selectedTechs.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">Selected:</span>
                {selectedTechs.map(tech => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium
                             bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300
                             border border-blue-200 dark:border-blue-800"
                  >
                    {tech}
                    <button
                      onClick={() => handleTechToggle(tech)}
                      className="ml-1.5 hover:text-blue-800 dark:hover:text-blue-200"
                    >
                      <XMarkIcon className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
                <button
                  onClick={clearTechFilters}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Technology Options */}
            <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto
                          scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 
                          scrollbar-track-transparent px-1 py-2">
              {filteredTechnologies.map(tech => (
                <button
                  key={tech}
                  onClick={() => handleTechToggle(tech)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200
                            ${selectedTechs.includes(tech)
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/70 dark:text-blue-300 shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8 px-1">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
          {(selectedTechs.length > 0 || selectedType !== 'All' || selectedStatus !== 'All') && (
            <button
              onClick={() => {
                setSelectedTechs([]);
                setSelectedType('All');
                setSelectedStatus('All');
              }}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg 
                         hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-md ${project.status === 'Completed'
                        ? 'bg-green-500 text-white'
                        : 'bg-yellow-500 text-white'
                      }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.type === 'Major'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      }`}>
                      {project.type}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-600 
                                   text-gray-800 dark:text-gray-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 
                               bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg 
                               hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 
                               border-2 border-gray-200 dark:border-gray-600 text-gray-700 
                               dark:text-gray-300 rounded-lg hover:bg-gray-50 
                               dark:hover:bg-gray-600 transition-all duration-300 hover:border-primary-500"
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                      View Code
                    </a>

                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                No projects match the selected filters.
              </p>
              <button
                onClick={() => {
                  setSelectedTechs([]);
                  setSelectedType('All');
                  setSelectedStatus('All');
                }}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-8 py-3 text-lg font-medium
                       bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg
                       hover:from-blue-700 hover:to-blue-600 transform hover:scale-105
                       transition-all duration-300 shadow-lg"
            >
              {showAll ? 'Show Less' : `Show All (${filteredProjects.length - 3} more)`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
