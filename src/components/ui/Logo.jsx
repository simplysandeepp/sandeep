import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, type: "spring" }}
            className="fixed top-6 left-6 z-[100] cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <div className="relative w-12 h-12 md:w-16 md:h-16">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-flame/20 rounded-full blur-xl group-hover:bg-flame/40 transition-all duration-500" />

                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(255,107,53,0.8)]">
                    <defs>
                        <linearGradient id="flameGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FF6B35" /> {/* Flame Orange */}
                            <stop offset="100%" stopColor="#F7C59F" />
                        </linearGradient>
                        <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00FFFF" /> {/* Cyan */}
                            <stop offset="100%" stopColor="#2E2E2E" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Tech/Circuitry Bottom Half of 'S' */}
                    <path
                        d="M 50 50 C 50 80, 20 80, 20 50 L 20 80 L 10 80 M 30 90 L 70 90 L 70 80"
                        fill="none"
                        stroke="url(#techGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="opacity-80 group-hover:opacity-100 transition-opacity"
                    />

                    {/* Main S Shape - Stylized */}
                    {/* Top Flame Curve */}
                    <motion.path
                        d="M 70 30 C 70 10, 40 10, 40 35 C 40 60, 80 60, 80 85 C 80 105, 50 105, 40 95"
                        fill="none"
                        stroke="url(#flameGradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        filter="url(#glow)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                    />

                    {/* Digital Datastream Dots */}
                    <circle cx="80" cy="85" r="3" fill="#00FFFF" className="animate-pulse" />
                    <circle cx="70" cy="30" r="2" fill="#FF6B35" className="animate-ping" />
                </svg>
            </div>
        </motion.div>
    );
};

export default Logo;
