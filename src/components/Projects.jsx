import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon as ExternalLinkIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import hackChainImage from "../assets/images/hackchain.png";
import trippyStayImage from "../assets/images/trippyStay.png";
import InvoicifyImage from "../assets/images/invoicify.jpg";
import learnMateImage from "../assets/images/learnMate.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projectVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Projects = () => {
  // State for showing all projects vs limited number
  const [showAll, setShowAll] = useState(false);

  // State for filters - selectedTechs is now an array for multi-select
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Search state for technology filter
  const [techSearch, setTechSearch] = useState("");

  const projects = [
    {
      title: "HackChain Network",
      description:
        "A community for developers and innovators to connect, join teams, learn, and build impactful solutions through hackathons & meetups.",
      image: hackChainImage,
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind",
        "Socket.io",
        "OpenAI API",
        "clerk",
        "cloudinary",
        "BotPress-bot",
        "react-router-dom"
      ],
      liveLink: "https://hackchain.space/",
      codeLink: "https://github.com/sadique-2004/HackChain-Network",
      status: "InDev",
      type: "Community",
    },
    {
      title: "LearnMate",
      description:
        "An AI-powered learning platform where students can ask doubts via AI, explore curated resources, post questions in a peer community, and receive personalized support — all in one unified experience.",
      image: learnMateImage,
      technologies: [
        "React",
        "Node.js",
        "Express",
        // "VectorDB",
        "Gemini API",
        // "RAG",
        "OpenAI",
        "TypeScript",
        "Tailwind",
        "Shadcn UI",
        "Clerk",
        "Cloudinary",
      ],
      liveLink: "https://lern-mate.vercel.app/",
      codeLink: "https://github.com/sadique-2004/LernMate",
      status: "In Dev",
      type: "Learning",
    },
    {
      title: "TrippyStay",
      description:
        "TrippyStay is a full-stack web application designed for travelers and hosts. Users can discover stays, add their own listings, leave reviews, and manage their places. Key features include authentication & authorization, CRUD operations, search functionality, and user-friendly UI. The app follows the MVC architecture, uses MongoDB Atlas for data storage, and is hosted on Render.",
      image: trippyStayImage, // Replace with your image variable or path
      technologies: [
        "EJS",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Express",
        "Bootstrap",
        "MVC",
        "Render",
        "Cloudinary",
        "Passport.js",
        "Multer",
      ],
      liveLink: "https://trippystay.onrender.com/listings",
      codeLink: "https://github.com/sadique-2004/TrippyStay.git", // Replace with your actual GitHub repo link
      status: "Completed",
      type: "Travel",
    },
    {
      title: "Invoicify",
      description:
        "Invoicify simplifies invoice management—create professional invoices in seconds and print or download with ease.",
      image: InvoicifyImage,
      technologies: [
        "React",
        "Typed.Js",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind",
        "Clerk",
        "BotPress-bot",
        "react-router-dom"
      ],
      liveLink: "https://invoicify-nine.vercel.app/",
      codeLink: "https://github.com/sadique-2004/Invoicify",
      status: "Completed",
      type: "Invoice",
    },
  ];

  // Calculate unique filters using useMemo to avoid recalculation on every render
  const filters = useMemo(() => {
    // Flatten the technologies array and remove duplicates
    const techs = new Set(projects.flatMap((p) => p.technologies));
    const types = new Set(projects.map((p) => p.type));
    const statuses = new Set(projects.map((p) => p.status));

    return {
      // Sort technologies alphabetically
      technologies: Array.from(techs).sort((a, b) => a.localeCompare(b)),
      types: ["All", ...Array.from(types)].sort(),
      statuses: ["All", ...Array.from(statuses)].sort(),
    };
  }, [projects]);

  // Filter technologies based on search input
  const filteredTechnologies = useMemo(() => {
    return filters.technologies.filter((tech) =>
      tech.toLowerCase().includes(techSearch.toLowerCase())
    );
  }, [filters.technologies, techSearch]);

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // For technologies, check if ANY of the selected techs are in the project
      const techMatch =
        selectedTechs.length === 0 ||
        selectedTechs.every((tech) => project.technologies.includes(tech));

      // For type and status, match exactly or 'All'
      const typeMatch = selectedType === "All" || project.type === selectedType;
      const statusMatch =
        selectedStatus === "All" || project.status === selectedStatus;

      return techMatch && typeMatch && statusMatch;
    });
  }, [projects, selectedTechs, selectedType, selectedStatus]);

  // Get the projects to display based on showAll state
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  // Handler for toggling technology selection
  const handleTechToggle = (tech) => {
    setSelectedTechs((prev) => {
      if (prev.includes(tech)) {
        return prev.filter((t) => t !== tech);
      } else {
        return [...prev, tech];
      }
    });
  };

  // Handler for clearing all technology filters
  const clearTechFilters = () => {
    setSelectedTechs([]);
    setTechSearch("");
  };

  // Custom button component for filters
  const FilterButton = ({ selected, onClick, children }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
        selected
          ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:border-gray-600"
      }`}
    >
      {children}
    </button>
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
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
            Here are some of my recent projects that showcase my skills and
            experience
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
                      onClick={() => setTechSearch("")}
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
                    {filters.types.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
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
                    {filters.statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Selected Technologies */}
            {selectedTechs.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Selected:
                </span>
                {selectedTechs.map((tech) => (
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
            <div
              className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto
                          scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 
                          scrollbar-track-transparent px-1 py-2"
            >
              {filteredTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => handleTechToggle(tech)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200
                            ${
                              selectedTechs.includes(tech)
                                ? "bg-blue-100 text-blue-700 dark:bg-blue-900/70 dark:text-blue-300 shadow-sm"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
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
            Found {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
          </p>
          {(selectedTechs.length > 0 ||
            selectedType !== "All" ||
            selectedStatus !== "All") && (
            <button
              onClick={() => {
                setSelectedTechs([]);
                setSelectedType("All");
                setSelectedStatus("All");
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
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full shadow-md ${
                        project.status === "Completed"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-500 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.type === "Major"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                      }`}
                    >
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
                               bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 
                               border-2 border-gradient-to-r from-blue-500 to-cyan-400 dark:border-gray-600 text-gray-700 
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
                  setSelectedType("All");
                  setSelectedStatus("All");
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
              {showAll
                ? "Show Less"
                : `Show ${filteredProjects.length - 3} more project`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
