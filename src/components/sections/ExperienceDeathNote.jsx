import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Coffee, PenTool, Link, Check, Eye } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';

const ExperienceCard = ({ item, index, side }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className={`flex w-full mb-12 ${side === 'left' ? 'justify-start' : 'justify-end'} relative pointer-events-none md:pointer-events-auto`}>
            {/* Connector Line to Center */}
            <div className={`absolute top-8 w-1/2 h-px bg-current ${side === 'left' ? 'right-0 origin-right text-l-light' : 'left-0 origin-left text-kira'} transform scale-x-0 transition-transform duration-1000 delay-500 will-change-transform ${isInView ? 'scale-x-100' : ''}`} />

            {/* Card Content */}
            <motion.div
                initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`w-full md:w-[45%] bg-black/60 backdrop-blur-md p-6 border-l-2 ${side === 'left' ? 'border-l-light shadow-[0_0_15px_rgba(70,130,180,0.2)]' : 'border-kira shadow-[0_0_15px_rgba(220,20,60,0.2)]'} rounded-sm relative overflow-hidden`}
            >
                <div className={`absolute top-0 right-0 p-2 opacity-10 text-4xl font-black font-gothic ${side === 'left' ? 'text-l-light' : 'text-kira'}`}>
                    {side === 'left' ? 'L' : 'KIRA'}
                </div>

                <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${side === 'left' ? 'bg-l/10 text-l-light' : 'bg-kira/10 text-kira'}`}>
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-cinzel font-bold text-white">{item.company}</h3>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 border border-gray-700 px-2 py-1 rounded">{item.duration}</span>
                </div>

                <h4 className={`text-md font-bold mb-4 font-jp tracking-wider ${side === 'left' ? 'text-l-light' : 'text-kira'}`}>{item.role}</h4>

                {/* Animated Writing Text Effect */}
                <ul className="space-y-2 relative z-10">
                    {item.tasks.map((task, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + (i * 0.2) }}
                            className="flex items-center gap-2 text-sm text-gray-300 font-inter"
                        >
                            <Check size={12} className={side === 'left' ? 'text-l' : 'text-kira'} />
                            <span>{task}</span>
                        </motion.li>
                    ))}
                </ul>

                <p className="mt-4 pt-4 border-t border-gray-800 text-xs font-marker text-gray-500 italic relative z-10">
                    "{item.quote}"
                </p>
            </motion.div>
        </div>
    );
};

const ExperienceDeathNote = () => {
    const experiences = [
        {
            company: "Infosys Springboard",
            role: "AI Intern",
            duration: "Aug 2025 – Oct 2025",
            side: "right", // Light
            icon: <div className="text-xl">🍎</div>,
            tasks: ["Deep Learning Model (CNN + U-Net)", "Real-time Spill Detection", "Achieved 82% Accuracy"],
            quote: "I'll take a dataset... and TRAIN IT!"
        },
        {
            company: "Google Student Ambassador",
            role: "Technical Speaker & Organizer",
            duration: "2024 – Present",
            side: "left", // L
            icon: <div className="text-xl">🎙️</div>,
            tasks: ["Organized Google IO Extended", "Speaker on Gemini & Veo 3", "Mentored 100+ Students"],
            quote: "I am... REPRESENTING"
        },
        {
            company: "GDG on Campus",
            role: "Tech Lead",
            duration: "2024 – Present",
            side: "right",
            icon: <div className="text-xl">⚡</div>,
            tasks: ["Led Google Cloud Study Jam", "Mentored 120+ Students", "Organized TechSprint'26"],
            quote: "Just as planned."
        },
        {
            company: "EduSkills (AICTE-Google)",
            role: "AI/ML Virtual Intern",
            duration: "Jul 2025 - Sep 2025",
            side: "left",
            icon: <Link size={20} />,
            tasks: ["Cloud Computing", "TensorFlow", "Google Cloud Platform"],
            quote: "Access granted."
        },
        // Kept as per request or optional, removing unused placeholders to keep it clean
    ];

    return (
        <SectionContainer className="py-24 bg-gray-950 relative overflow-hidden">
            {/* Background Texture - Death Note Writer */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <img src="/assets/images/death_note.png" alt="death note bg" className="w-full h-full object-cover grayscale opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950" />
            </div>

            <div className="container mx-auto px-4 relative z-10 w-full md:w-3/4 lg:w-2/3">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-marker text-white tracking-widest mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                        DEATH NOTE: EXPERIENCE
                    </h2>
                    <p className="font-cinzel text-gray-500">
                        The human whose name is written in this note shall be... hired.
                    </p>
                </div>

                {/* Central Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-40 bottom-20 w-px bg-gradient-to-b from-kira via-white to-l-light transform -translate-x-1/2 opacity-30 md:opacity-100 hidden md:block box-shadow-[0_0_10px_white]" />

                <div className="flex flex-col">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} item={exp} index={index} side={exp.side} />
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default ExperienceDeathNote;
