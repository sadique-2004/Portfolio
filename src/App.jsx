import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import HireMe from "./components/HireMe";
import Contact from "./components/Contact";
import Memories from "./components/Memories";
import Footer from "./components/Footer";
import LoadingScreen from "./components/Loadingscreen"; // Import the LoadingScreen component

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  const handleLoaded = () => {
    setIsLoading(false); // Set loading to false after the loading screen is done
  };

  if (isLoading) {
    return <LoadingScreen onLoaded={handleLoaded} />; // Show loading screen
  }

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <HireMe />
                <Projects />
                <Experience />
                <Education />
                <Certifications />
                <Contact />
              </>
            }
          />
          <Route path="/memories" element={<Memories />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
