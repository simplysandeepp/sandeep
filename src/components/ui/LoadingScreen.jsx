import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const techMessages = [
    "INITIALIZING CORE KERNEL...",
    "LOADING NEURAL INTERFACE...",
    "BYPASSING FIREWALLS...",
    "OPTIMIZING RENDER ENGINE...",
    "ESTABLISHING SECURE CONNECTION...",
    "SYSTEM READY"
];

const LoadingScreen = ({ onComplete }) => {
    const [messageIndex, setMessageIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Message cycler
        const messageInterval = setInterval(() => {
            setMessageIndex(prev => (prev < techMessages.length - 1 ? prev + 1 : prev));
        }, 350);

        // Progress bar simulation
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + Math.random() * 12;
            });
        }, 50);

        return () => {
            clearInterval(messageInterval);
            clearInterval(progressInterval);
        };
    }, []);

    return (
        <motion.div
            className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center overflow-hidden"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

            {/* Background Tech Data */}
            <div className="absolute top-10 left-10 text-[10px] text-cyan-900 font-mono flex flex-col gap-1 pointer-events-none hidden md:flex">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i}>0x{Math.random().toString(16).substr(2, 8).toUpperCase()} // PROCESS_{i}</div>
                ))}
            </div>

            {/* Central Hexagon/Tech Ring */}
            <div className="relative w-80 h-80 flex items-center justify-center mb-12">
                {/* Rotating Rings */}
                <motion.div
                    className="absolute inset-0 rounded-full border-t-2 border-r-2 border-cyan-500/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-2 rounded-full border-b-2 border-l-2 border-cyan-500/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-8 rounded-full border-2 border-dashed border-red-500/20"
                    animate={{ rotate: 180 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Core Glitch Text */}
                <div className="relative z-10 text-center">
                    <motion.h1
                        className="text-5xl font-black font-bebas text-white drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] tracking-widest"
                        animate={{
                            textShadow: ["0 0 10px #0ff", "0 0 20px #0ff", "0 0 10px #0ff"],
                            opacity: [1, 0.8, 1]
                        }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                    >
                        SYSTEM<br />ONLINE
                    </motion.h1>
                    <div className="text-xs font-mono text-cyan-400 mt-2 tracking-[0.5em] opacity-80 uppercase">Protocol: Override</div>
                </div>
            </div>

            {/* Progress Bar & Text */}
            <div className="w-80 relative">
                {/* Text Scramble */}
                <div className="h-8 mb-2 flex items-center justify-between text-xs font-mono text-cyan-500">
                    <motion.span
                        key={messageIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                    >
                        {techMessages[messageIndex]}
                    </motion.span>
                    <span className="font-bold">{Math.min(100, Math.round(progress))}%</span>
                </div>

                {/* Bar */}
                <div className="h-0.5 w-full bg-gray-900 overflow-hidden relative">
                    <motion.div
                        className="h-full bg-cyan-500"
                        style={{ width: `${progress}%` }}
                        animate={{ boxShadow: ["0 0 10px cyan", "0 0 20px cyan"] }}
                    />
                </div>

                {/* Decor lines */}
                <div className="flex justify-between mt-2 opacity-50 text-[10px] text-gray-600 font-mono">
                    <span>MEM: 64TB</span>
                    <span>CPU: QUANTUM</span>
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
