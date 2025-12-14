import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import tanjiroDancing from '../../assets/images/tanjiro_dancing.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white border-t border-gray-800 relative overflow-hidden pt-16 pb-8">
            {/* Starry Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-cinzel font-bold text-white mb-4">SANDEEP PRAJAPATI</h2>
                        <p className="text-gray-500 font-inter text-sm mb-6 leading-relaxed">
                            Forging the next generation of web experiences using the breathing styles of modern engineering and the power of Titans.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/simplysandeepp" target="_blank" rel="noreferrer" className="p-2 bg-gray-900 rounded-full hover:bg-white hover:text-black transition-all duration-300"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/sandeep-prajapati-ba04451b3/" target="_blank" rel="noreferrer" className="p-2 bg-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"><Linkedin size={20} /></a>
                            <a href="https://x.com/simplysandeepp" target="_blank" rel="noreferrer" className="p-2 bg-gray-900 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold font-cinzel text-gray-200 mb-6 border-b border-gray-800 pb-2 inline-block">EXPLORE</h3>
                        <ul className="space-y-3 text-gray-400 text-sm font-inter">
                            <li><a href="#" className="hover:text-flame transition-colors flex items-center gap-2"><ArrowRight size={14} /> Home</a></li>
                            <li><a href="#skills" className="hover:text-water transition-colors flex items-center gap-2"><ArrowRight size={14} /> Skills</a></li>
                            <li><a href="#projects" className="hover:text-thunder transition-colors flex items-center gap-2"><ArrowRight size={14} /> Projects</a></li>
                            <li><a href="#experience" className="hover:text-green-500 transition-colors flex items-center gap-2"><ArrowRight size={14} /> Experience</a></li>
                        </ul>
                    </div>

                    {/* Legal/Contact */}
                    <div>
                        <h3 className="text-lg font-bold font-cinzel text-gray-200 mb-6 border-b border-gray-800 pb-2 inline-block">CONTACT</h3>
                        <ul className="space-y-3 text-gray-400 text-sm font-inter">
                            <li className="flex items-center gap-2">
                                <Linkedin size={16} className="text-flame" />
                                <a href="https://www.linkedin.com/in/sandeep-prajapati-ba04451b3/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                    Connect on LinkedIn
                                </a>
                            </li>
                            <li className="flex items-center gap-2">New Delhi, India</li>
                            <li className="pt-4">
                                <span className="block text-xs text-gray-600 uppercase tracking-widest mb-1">Status</span>
                                <span className="text-green-500 font-bold flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Open for Work</span>
                            </li>
                        </ul>
                    </div>

                    {/* Anime & Thanks */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mb-4"
                        >
                            <img
                                src={tanjiroDancing}
                                alt="Dancing Tanjiro"
                                className="w-32 h-32 object-contain filter drop-shadow-[0_0_10px_rgba(255,107,53,0.5)]"
                            />
                        </motion.div>
                        <h3 className="text-xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-2">
                            ARIGATO!
                        </h3>
                        <p className="text-gray-400 font-inter text-sm max-w-xs">
                            Thank you for visiting my website!
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
                    <p>&copy; {new Date().getFullYear()} Sandeep Prajapati. Crafted with <span className="text-red-500 animate-pulse">❤</span> and Anime.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
