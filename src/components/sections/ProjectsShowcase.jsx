import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Music, Cpu, Brain, Layout, ChevronRight, ArrowRight } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import PinterestHoverButton from '../ui/PinterestHoverButton';
import PinterestSaveButton from '../ui/PinterestSaveButton';

const ProjectCard = ({ project, index }) => {
    const projectUrl = typeof window !== 'undefined' ? window.location.origin : 'https://sandeepp.in';
    const fullProjectUrl = project.url;
    const projectImage = project.image?.startsWith('/')
        ? `${projectUrl}${project.image}`
        : project.image;

    return (
        <PinterestHoverButton
            imageUrl={projectImage}
            description={`${project.title} - ${project.quote}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 100, rotate: index % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, type: "spring" }}
                viewport={{ once: true, margin: "-50px" }}
                className={`w-full h-[550px] relative rounded-xl overflow-hidden group border-2 border-${project.color} bg-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(var(--${project.color}-rgb),0.5)]`}
            >
                {/* Background - Character Image Placeholder */}
                <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                    <img
                        src={project.image || `https://source.unsplash.com/random/800x1200?anime,${project.character}`}
                        alt={project.character}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-110"
                    />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                    {/* Always visible content (no transform needed for better UX on mobile) */}
                    <div className="transform translate-y-0 transition-transform duration-300">
                        {/* Character Name/Theme Badge */}
                        <span className={`inline-block px-3 py-1 bg-${project.color} text-black font-bold text-xs uppercase mb-3 shadow-[0_0_10px_rgba(255,255,255,0.5)]`}>
                            {project.character} Theme
                        </span>

                        <h3 className="text-3xl font-cinzel font-bold text-white mb-3 leading-tight drop-shadow-lg">
                            {project.title}
                        </h3>

                        <p className="text-gray-300 text-sm mb-6 line-clamp-3 italic border-l-4 pl-4 border-white/30">
                            "{project.quote}"
                        </p>

                        {/* Tech Stack */}
                        <div className="flex gap-3 mb-8">
                            {project.stack.map((Icon, i) => (
                                <div key={i} className={`p-2 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-${project.color} hover:text-black transition-colors`}>
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 flex-wrap">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex-1 min-w-[150px] py-3 bg-${project.color} text-black font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 rounded-sm clip-path-polygon shadow-md cursor-pointer`}
                            >
                                View Project <ChevronRight size={18} />
                            </a>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3 border border-gray-500 text-white hover:border-white hover:text-white transition-colors rounded-sm bg-black/40 backdrop-blur cursor-pointer"
                            >
                                <Code size={24} />
                            </a>
                            <PinterestSaveButton
                                url={fullProjectUrl}
                                media={projectImage}
                                description={`${project.title} - ${project.quote}`}
                                className="px-4 py-3 text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Power Level / Progress Bar */}
                <div className="absolute top-6 right-6 text-right z-20">
                    <div className={`text-${project.color} font-black text-2xl font-bebas drop-shadow-md`}>LVL. MAX</div>
                    <div className="w-24 h-1 bg-gray-700/50 rounded-full mt-1 overflow-hidden backdrop-blur-sm">
                        <div className={`w-full h-full bg-${project.color} animate-pulse`} />
                    </div>
                </div>
            </motion.div>
        </PinterestHoverButton>
    );
};

const ProjectsShowcase = () => {
    const projects = [
        {
            title: "Tic Tac Toe Game",
            character: "GOJO SATORU",
            color: "kira",
            quote: "Throughout heaven and earth, I am the honored one.",
            stack: [Brain, Code, Layout],
            image: "/assets/images/project_jjk.png",
            url: "https://tik-tac-toe-rose.vercel.app",
            repo: "https://github.com/simplysandeepp"
        },
        {
            title: "Personal Portfolio",
            character: "KIRITO",
            color: "l",
            quote: "This is my world. I decide the rules.",
            stack: [Layout, Code, Globe],
            image: "/assets/images/project_kirito.png",
            url: "https://sandeepp.in",
            repo: "https://github.com/simplysandeepp/sandeep"
        },
        {
            title: "Image Captioning MISA",
            character: "SAITAMA",
            color: "mist", // AI/Brain Theme
            quote: "I'm just a hero for fun. Simple but OP.",
            stack: [Brain, Cpu, Code],
            image: "/assets/images/project_saitama.png",
            url: "https://github.com/simplysandeepp/image-captioner-misa/tree/main/task%203",
            repo: "https://github.com/simplysandeepp/image-captioner-misa"
        },
        {
            title: "Study Sphere",
            character: "SUNG JIN WOO",
            color: "titan-green",
            quote: "I have to work harder than anyone else! Arise!",
            stack: [Layout, Database, Globe],
            image: "/assets/images/project_solo.png",
            url: "https://studysphere11.vercel.app",
            repo: "https://github.com/simplysandeepp"
        },
        {
            title: "Spotify Clone",
            character: "CYBERPUNK",
            color: "titan-wall",
            quote: "I will keep moving forward... into the net.",
            stack: [Music, Code, Layout],
            image: "/assets/images/project_cyberpunk.png",
            url: "https://github.com/simplysandeepp/spotify-clone",
            repo: "https://github.com/simplysandeepp/spotify-clone"
        }
    ];

    return (
        <SectionContainer className="py-24 bg-black relative overflow-hidden" id="projects">
            {/* Background Texture - Solo Leveling */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <img src="/assets/images/project_solo.png" alt="solo leveling bg" className="w-full h-full object-cover grayscale opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
            </div>

            {/* Starry Background (from Footer) */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-cinzel text-white text-shadow-fire mb-4">PROJECTS</h2>
                    <p className="text-gray-400 text-xl font-marker max-w-md mx-auto">
                        A multiverse of code, guarded by legends.
                    </p>
                </div>

                {/* Grid Layout - replacing Horizontal Scroll */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default ProjectsShowcase;
