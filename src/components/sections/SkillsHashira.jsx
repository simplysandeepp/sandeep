import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flame, Droplets, Zap, Hexagon, CloudFog, Wind, Bug, GitMerge, Heart } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';

const HashiraCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative group h-40 p-4 rounded-xl border border-white/5 hover:border-${item.color} bg-black/80 backdrop-blur-md transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(var(--${item.color}-rgb),0.3)] flex items-center gap-4`}
        >
            {/* Elemental Glow on Hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-${item.color}`} />

            {/* Icon */}
            <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className={`p-3 rounded-full bg-${item.color}/10 flex-shrink-0`}
            >
                <item.icon size={32} className={`text-${item.color}`} />
            </motion.div>

            <div className="flex-1 relative z-10">
                <h3 className="text-lg font-cinzel font-bold text-white mb-1 group-hover:text-${item.color} transition-colors">{item.title}</h3>
                <p className={`text-[10px] font-jp text-${item.color}-light font-bold mb-1 tracking-widest uppercase`}>{item.breathing}</p>

                {/* Quote Reveal */}
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                    <p className="text-xs text-gray-400 italic">"{item.quote}"</p>
                </div>
            </div>
        </motion.div>
    );
};

const SkillsHashira = () => {
    // const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll(); // Global scroll fallback

    // Parallax effect for the background image
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]); // Stronger parallax range

    const skills = [
        {
            title: "Data Structures & Algorithms",
            breathing: "WATER BREATHING",
            icon: Droplets,
            color: "water",
            quote: "Total Concentration."
        },
        {
            title: "AI & ML",
            breathing: "THUNDER BREATHING",
            icon: Zap,
            color: "thunder",
            quote: "Thunderclap and Flash!"
        },
        {
            title: "Deep Learning (GenAI, LLMs)",
            breathing: "MIST BREATHING",
            icon: CloudFog,
            color: "mist",
            quote: "Obscuring Clouds."
        },
        {
            title: "Full Stack",
            breathing: "FLAME BREATHING",
            icon: Flame,
            color: "flame",
            quote: "Set your heart ablaze!"
        },
        {
            title: "SQL Database",
            breathing: "STONE BREATHING",
            icon: Hexagon,
            color: "stone",
            quote: "Immovable Resolve."
        },
        {
            title: "System Design",
            breathing: "SERPENT BREATHING",
            icon: GitMerge,
            color: "serpent",
            quote: "Twisting Serpent."
        },
        {
            title: "Cloud Computing",
            breathing: "WIND BREATHING",
            icon: Wind,
            color: "wind",
            quote: "Gale force winds!"
        },
        {
            title: "Backend Dev",
            breathing: "INSECT BREATHING",
            icon: Bug,
            color: "insect",
            quote: "Dance of the butterfly."
        },
        {
            title: "Open Source",
            breathing: "LOVE BREATHING",
            icon: Heart,
            color: "love",
            quote: "Passionate Coding!"
        }
    ];

    return (
        <SectionContainer className="py-24 bg-black relative overflow-hidden min-h-screen flex items-center">
            {/* Parallax Background Image */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 h-[120%]"
            >
                <img
                    src="/assets/images/hashira_vertical.png"
                    alt="All Hashira"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side: Text */}
                <div className="text-left">
                    <h2 className="text-5xl md:text-7xl font-cinzel font-black text-white mb-6 leading-tight drop-shadow-lg">
                        THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">NINE</span> <br />
                        PILLARS
                    </h2>
                    <p className="text-gray-400 text-lg max-w-md mb-8 border-l-4 border-red-600 pl-4">
                        Mastering the breathing techniques of modern software engineering to slay the demons of complexity.
                    </p>
                </div>

                {/* Right Side: Grid of Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <HashiraCard key={index} item={skill} index={index} />
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default SkillsHashira;
