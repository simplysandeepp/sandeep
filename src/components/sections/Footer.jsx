import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowRight } from 'lucide-react';

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
                            <li className="flex items-center gap-2"><Mail size={16} className="text-flame" /> contact@sandeep.dev</li>
                            <li className="flex items-center gap-2">Noida, Uttar Pradesh, India</li>
                            <li className="pt-4">
                                <span className="block text-xs text-gray-600 uppercase tracking-widest mb-1">Status</span>
                                <span className="text-green-500 font-bold flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Open for Work</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold font-cinzel text-gray-200 mb-6 border-b border-gray-800 pb-2 inline-block">NEWSLETTER</h3>
                        <p className="text-gray-500 text-sm mb-4">Join 1,000+ developers receiving monthly tech updates.</p>
                        <form className="flex flex-col gap-3">
                            <input type="email" placeholder="Enter your email" className="bg-gray-900 border border-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:border-flame transition-colors text-sm" />
                            <button className="bg-white text-black font-bold py-2 rounded hover:bg-flame hover:text-white transition-colors text-sm uppercase tracking-wider">
                                Subscribe
                            </button>
                        </form>
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
