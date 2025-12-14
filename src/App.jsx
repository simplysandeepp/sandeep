import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/sections/Hero';
import SocialTitans from './components/sections/SocialTitans';
import SkillsHashira from './components/sections/SkillsHashira';
import ExperienceDeathNote from './components/sections/ExperienceDeathNote';
import EventsBlog from './components/sections/EventsBlog';
import ProjectsShowcase from './components/sections/ProjectsShowcase';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import FloatingNavbar from './components/ui/FloatingNavbar';
import LoadingScreen from './components/ui/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for resources
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-red-500 selection:text-white relative">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FloatingNavbar />
            <div id="hero"><Hero /></div>
            <div id="social"><SocialTitans /></div>
            <div id="skills"><SkillsHashira /></div>
            <div id="projects"><ProjectsShowcase /></div>
            <div id="events"><EventsBlog /></div>
            <div id="experience"><ExperienceDeathNote /></div>
            <div id="contact"><Contact /></div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
