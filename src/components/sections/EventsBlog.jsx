import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';

const MangaPanel = ({ event, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden bg-gray-900 border-2 border-gray-700 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[10px_10px_0px_0px_rgba(255,107,53,0.5)] transition-all duration-300"
        >
            {/* Image - Grayscale by default */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={event.image || `https://source.unsplash.com/random/800x600?tech,${index}`}
                    alt={event.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />

                {/* Manga Action Lines Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/comic-book.png')] opacity-30 mix-blend-overlay" />

                {/* Character Theme Overlay */}
                <div className={`absolute inset-0 bg-${event.color} mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />

                <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 border border-white font-jp font-bold transform rotate-6 z-10">
                    {event.character}
                </div>
            </div>

            {/* Content - Manga Box Style */}
            <div className="p-4 bg-gray-900 relative border-t border-gray-800">
                <div className="absolute -top-6 -left-2 bg-flame text-black px-3 py-1 font-marker text-sm transform -rotate-2 border-2 border-black shadow-sm">
                    EPISODE {index + 1}
                </div>

                <h3 className="text-xl font-cinzel font-black uppercase mt-4 border-b border-gray-700 pb-2 mb-2 text-white">
                    {event.title}
                </h3>

                <div className="flex items-center gap-4 text-xs font-bold font-inter mb-3 text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {event.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {event.location}</span>
                </div>

                <p className="text-sm font-medium italic border-l-4 border-flame pl-2 mb-4 bg-gray-800/50 p-2 text-gray-300">
                    "{event.quote}"
                </p>

                <ul className="text-xs space-y-1 font-mono text-gray-400">
                    {event.takeaways.map((item, i) => (
                        <li key={i}>- {item}</li>
                    ))}
                </ul>

                {/* Read Button */}
                <button className="mt-4 w-full bg-white text-black font-bold py-2 border-2 border-transparent hover:bg-flame hover:text-white hover:border-white transition-colors flex items-center justify-center gap-2">
                    READ CHAPTER <ExternalLink size={14} />
                </button>
            </div>

        </motion.div>
    );
};

const EventsBlog = () => {
    const events = [
        {
            title: "TechSprint Hackathon",
            date: "Oct 2025",
            location: "GDG Galgotias",
            character: "EREN",
            color: "flame",
            quote: "Move from 'I've heard of this' to 'I can build with this'.",
            takeaways: ["Organized Hands-on Session", "Gemini API Demo", "Agentic AI Workflow"],
            image: "/assets/images/techsprint-hackathon.jpeg"
        },
        {
            title: "InnoSpark Ideathon",
            date: "Oct 10, 2025",
            location: "Galgotias Univ",
            character: "GOJO",
            color: "l",
            quote: "Representing Google Gemini was a responsibility that pushed me beyond fear.",
            takeaways: ["Speaker for 100+ Students", "Live Nano Banana Demo", "Prompt Engineering"],
            image: "/assets/images/ideathon.jpeg"
        },
        {
            title: "GDG Internal Session",
            date: "Dec 2025",
            location: "Core Team",
            character: "LEVI",
            color: "wind",
            quote: "Architecture level thinking and ownership.",
            takeaways: ["Project Planning", "Execution Strategy", "Mentored Peers"],
            image: "/assets/images/gdg internal.jpeg"
        },
        {
            title: "Google Cloud Study Jam",
            date: "2024",
            location: "Campus",
            character: "SENKU",
            color: "thunder",
            quote: "10,000,000,000 points for Cloud Computing!",
            takeaways: ["Mentored 120+ Students", "Generated Cloud Skills", "Community Building"],
            image: "/assets/images/cloud study jam.jpeg"
        }
    ];

    return (
        <SectionContainer className="py-20 bg-black relative" id="events">
            {/* Starry Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse pointer-events-none" />
            {/* Background Dot Pattern (White dots on black) */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-16 relative">
                    <h2 className="text-5xl font-black text-white transform -rotate-2 inline-block bg-transparent px-4 pt-2 border-b-4 border-flame shadow-[0_4px_0px_0px_#FF6B35]">
                        EVENT CHRONICLES
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {events.map((event, index) => (
                        <MangaPanel key={index} event={event} index={index} />
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default EventsBlog;
