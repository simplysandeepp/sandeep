import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Instagram, Mail, Globe, Ghost, Pin } from 'lucide-react'; // Added Ghost and Pin
import SectionContainer from '../ui/SectionContainer';

const TitanCard = ({ name, type, icon: Icon, color, desc, delay, url }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay, type: "spring" }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
        >
            <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full"> {/* Wrapped in Anchor */}
                {/* Reduced Height and simplified visuals for cleaner look */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`h-60 w-full rounded-xl overflow-hidden relative border border-white/10 group-hover:border-${color} transition-all duration-300 bg-black/80 backdrop-blur-md`}
                >
                    {/* Steam Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className={`absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-${color}/20 to-transparent blur-md`} />
                    </div>

                    {/* Icon & Content - Compact */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4 text-center">
                        <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.3 }}
                            className={`p-3 rounded-full bg-${color}/10 mb-3 group-hover:bg-${color}/20 transition-colors`}
                        >
                            <Icon size={32} className={`text-${color}`} />
                        </motion.div>

                        <h3 className="text-xl font-cinzel font-bold text-white mb-1 group-hover:text-shadow-fire">{name}</h3>
                        <span className="text-[10px] font-inter tracking-widest text-gray-400 uppercase mb-2">{type}</span>

                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            whileHover={{ height: 'auto', opacity: 1 }}
                            className="overflow-hidden"
                        >
                            <p className="text-xs text-gray-300 font-inter">{desc}</p>
                        </motion.div>
                    </div>
                </motion.div>
            </a>
        </motion.div>
    );
};

const SocialTitans = () => {
    const titans = [
        {
            name: "LinkedIn",
            type: "Colossal Titan",
            icon: Linkedin,
            color: "titan-blood",
            desc: "Massive Professional Network",
            url: "https://www.linkedin.com/in/sandeep-prajapati-ba04451b3/"
        },
        {
            name: "GitHub",
            type: "Armored Titan",
            icon: Github,
            color: "titan-green",
            desc: "Impenetrable Code Base",
            url: "https://github.com/simplysandeepp"
        },
        {
            name: "Instagram",
            type: "Female Titan",
            icon: Instagram,
            color: "love-light",
            desc: "Versatile Visuals",
            url: "https://www.instagram.com/simplysandeepp?igsh=MTVwb3QwZGtiZXhjbA=="
        },
        {
            name: "Snapchat",
            type: "Cart Titan", // Fast, carries info
            icon: Ghost,
            color: "yellow-400",
            desc: "Quick Moments",
            url: "https://www.snapchat.com/add/simplysandeepp"
        },
        {
            name: "Pinterest",
            type: "War Hammer", // Creative/Crafty
            icon: Pin,
            color: "red-600",
            desc: "Visual Inspiration",
            url: "https://in.pinterest.com/simplysandeepp"
        },
        {
            name: "Twitter / X",
            type: "Jaw Titan",
            icon: Twitter,
            color: "blue-400",
            desc: "Tech Tweets",
            url: "https://x.com/simplysandeepp"
        }
    ];

    return (
        <SectionContainer className="py-20 bg-titan-wall/20 relative">
            {/* Background Image - Attack on Titan Wall Gen */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <img src="/assets/images/titan.png" alt="titan bg" className="w-full h-full object-cover grayscale" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-4 text-shadow-thunder">
                        Social Profile
                    </h2>
                    <div className="h-1 w-24 bg-titan-green mx-auto shadow-[0_0_10px_#00ff00]" />
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {titans.map((titan, index) => (
                        <TitanCard key={index} {...titan} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default SocialTitans;
