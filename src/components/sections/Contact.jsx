import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import SectionContainer from '../ui/SectionContainer';
import Button from '../ui/Button';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.target);
        formData.append("access_key", "d5415784-1eb4-42f2-862f-8cb7afbda24d");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormState({ name: '', email: '', message: '' });
                // Optional: clear success message after some time
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus('error');
        }
    };

    return (
        <SectionContainer className="py-20 bg-black relative flex items-center justify-center">
            {/* Background - Amalgamation */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Character Montage / Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-white space-y-8"
                >
                    <div>
                        <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-flame via-honor to-water animate-pulse">
                            SAY HELLO
                        </h2>
                        <p className="text-gray-400 mt-4 text-xl font-marker">
                            "If you don't take risks, you can't create a future."
                        </p>
                    </div>

                    <div className="p-8 border-2 border-dashed border-gray-700 rounded-lg relative overflow-hidden bg-gray-900/50">
                        <div className="absolute top-0 right-0 p-2 bg-kira text-white font-bold text-xs uppercase">Warning</div>
                        <p className="font-mono text-green-400">
                            &gt; System Status: ONLINE<br />
                            &gt; Open for Collaboration: YES<br />
                            &gt; Power Level: OVER 9000
                        </p>
                    </div>
                </motion.div>

                {/* Right Side: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 p-8 rounded-xl border-4 border-double border-flame shadow-[0_0_30px_rgba(255,107,53,0.3)] relative"
                >
                    {/* Decorative Kanji */}
                    <div className="absolute -top-6 -right-6 text-8xl text-flame/10 font-jp font-bold pointer-events-none">
                        手紙
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="space-y-2 group">
                            <label className="text-sm text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <User size={14} className="text-flame" /> Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                className="w-full bg-black/50 border-b-2 border-gray-700 focus:border-flame focus:outline-none py-3 px-4 text-white transition-all duration-300 group-hover:bg-black/80"
                                placeholder="Tanjiro Kamado"
                            />
                        </div>

                        <div className="space-y-2 group">
                            <label className="text-sm text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <Mail size={14} className="text-water" /> Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                className="w-full bg-black/50 border-b-2 border-gray-700 focus:border-water focus:outline-none py-3 px-4 text-white transition-all duration-300 group-hover:bg-black/80"
                                placeholder="tanjiro@demoncorps.com"
                            />
                        </div>

                        <div className="space-y-2 group">
                            <label className="text-sm text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <MessageSquare size={14} className="text-thunder" /> Message
                            </label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full bg-black/50 border-b-2 border-gray-700 focus:border-thunder focus:outline-none py-3 px-4 text-white transition-all duration-300 group-hover:bg-black/80 resize-none"
                                placeholder="I want to build something insane..."
                            />
                        </div>

                        <Button
                            variant="thunder"
                            className="w-full mt-4"
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? 'SENDING...' : (
                                <>
                                    TOTAL CONCENTRATION: SEND <Send size={18} className="ml-2" />
                                </>
                            )}
                        </Button>

                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center text-green-400 font-bold font-marker text-xl mt-4"
                            >
                                MESSAGE DELIVERED! ARIGATO!
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center text-red-500 font-bold font-marker text-xl mt-4"
                            >
                                SOMETHING WENT WRONG. TRY AGAIN!
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default Contact;
