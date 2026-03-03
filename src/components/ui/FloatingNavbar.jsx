import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Zap, Code, Sword, BookOpen, Mail, Sparkles } from 'lucide-react';

const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'skills', icon: Zap, label: 'Skills' },
    { id: 'projects', icon: Code, label: 'Projects' },
    { id: 'experience', icon: Sword, label: 'Exp' },
    { id: 'events', icon: BookOpen, label: 'Events' },
    { id: 'contact', icon: Mail, label: 'Contact' },
    { id: 'new-portfolio', icon: Sparkles, label: 'New Portfolio', href: '/new-portfolio/' },
];

const FloatingNavbar = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            });

            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="pointer-events-auto bg-black/30 backdrop-blur-xl border border-white/10 rounded-full px-10 py-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center gap-6 md:gap-8 ring-1 ring-white/5"
            >
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => item.href ? window.location.href = item.href : scrollTo(item.id)}
                        className={`relative p-2 rounded-full transition-all duration-300 group ${activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        {activeSection === item.id && (
                            <motion.div
                                layoutId="activePill"
                                className="absolute inset-0 bg-white/10 rounded-full border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            <item.icon size={20} className={`transition-transform duration-300 ${activeSection === item.id ? 'scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'group-hover:scale-110'}`} />
                            <span className={`text-xs font-bold font-inter hidden md:block overflow-hidden transition-all duration-300 ${activeSection === item.id ? 'max-w-[100px] opacity-100 ml-1' : 'max-w-0 opacity-0'}`}>
                                {item.label}
                            </span>
                        </span>
                    </button>
                ))}
            </motion.nav>
        </div>
    );
};

export default FloatingNavbar;
