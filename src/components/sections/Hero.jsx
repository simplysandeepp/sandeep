import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from '../animations/ParticleBackground';
import SectionContainer from '../ui/SectionContainer';
import Button from '../ui/Button';
import { ChevronDown, Flame, BookOpen, Sword } from 'lucide-react';

const BreathingText = ({ text, delay = 0 }) => {
    const letters = text.split("");

    return (
        <div className="flex overflow-hidden">
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ y: 100, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: delay + index * 0.1,
                        type: "spring",
                        bounce: 0.4
                    }}
                    whileHover={{
                        scale: 1.2,
                        y: -10,
                        color: "#00ffff", // Neon Cyan on hover (Insane palette)
                        textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff",
                        transition: { duration: 0.2 }
                    }}
                    className="cursor-pointer inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 hover:text-white px-[1px] md:px-1"
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </div>
    );
};

const AnimeSymbol = ({ icon: Icon, color, position, delay, label }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay, duration: 1, type: "spring" }}
        className={`absolute ${position} flex flex-col items-center justify-center z-0 pointer-events-none hidden md:flex`}
    >
        <div className={`p-6 rounded-full border-2 border-${color} bg-${color}/10 backdrop-blur-md animate-float box-shadow-[0_0_30px_rgba(var(--${color}-rgb),0.5)]`}>
            <Icon size={64} className={`text-${color} drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]`} />
        </div>
    </motion.div>
);

const Hero = () => {
    const [showKanji, setShowKanji] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowKanji(true), 1500);
    }, []);

    return (
        <SectionContainer className="flex items-center justify-center bg-black relative overflow-hidden h-screen px-4">
            <ParticleBackground />

            {/* Background Kanji */}
            <AnimatePresence>
                {showKanji && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
                    >
                        <span className="text-[15rem] md:text-[30rem] font-jp font-bold text-transparent bg-clip-text bg-gradient-to-t from-flame to-transparent opacity-50">
                            火
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Anime Elements - Corners */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden text-white/20">
                <AnimeSymbol icon={Flame} color="flame" position="top-20 left-20" delay={2.5} label="DEMON SLAYER" />
                <AnimeSymbol icon={BookOpen} color="kira" position="bottom-20 right-20" delay={3.0} label="DEATH NOTE" />
                <AnimeSymbol icon={Sword} color="titan-green" position="top-20 right-20" delay={3.5} label="AOT" />
            </div>

            <div className="z-10 text-center relative w-full max-w-6xl mx-auto">

                {/* Top Decorative Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-12 opacity-50"
                />

                <div className="mb-8 relative py-4">
                    {/* Name - Correct Casing: Sandeep Prajapati */}
                    {/* Name - Correct Casing: Sandeep Prajapati */}
                    <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-black font-cinzel tracking-tight flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-white relative z-50 drop-shadow-[0_0_25px_rgba(0,0,0,1)] leading-none">
                        <BreathingText text="Sandeep" delay={1} />
                        <BreathingText text="Prajapati" delay={1.8} />
                    </h1>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3, duration: 1 }}
                    className="text-sm md:text-xl font-inter text-cyan-400 tracking-[0.8em] uppercase mb-16 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                >
                    Emerging AI-Driven Engineer
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3.5, duration: 0.5 }}
                >
                    <Button variant="primary" className="mx-auto border-cyan-500 text-cyan-500 hover:bg-cyan-500/20 hover:text-white transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)]" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                        <div className="flex items-center gap-3">
                            <span className="text-xl animate-pulse">⚡</span>
                            Enter The System
                            <span className="text-xl animate-pulse">⚡</span>
                        </div>
                    </Button>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-500/50"
            >
                <ChevronDown size={32} />
            </motion.div>
        </SectionContainer>
    );
};

export default Hero;
