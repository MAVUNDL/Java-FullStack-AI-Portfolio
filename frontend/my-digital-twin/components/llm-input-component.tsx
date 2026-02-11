'use client';

import { useState, useRef, useEffect } from 'react';

// Simulated delay helper
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function LlmInputComponent() {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Typewriter states
    const [fullAnswer, setFullAnswer] = useState('');
    const [displayedAnswer, setDisplayedAnswer] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const contentRef = useRef<HTMLDivElement>(null);

    // --- EFFECT: Typewriter Logic ---
    useEffect(() => {
        if (isTyping && fullAnswer) {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < fullAnswer.length) {
                    setDisplayedAnswer((prev) => prev + fullAnswer.charAt(i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);
                }
            }, 15); // Adjust speed: lower = faster

            return () => clearInterval(typingInterval);
        }
    }, [isTyping, fullAnswer]);

    // --- EFFECT: Auto-Scroll to bottom while typing ---
    useEffect(() => {
        if (isTyping && contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }, [displayedAnswer, isTyping]);

    const handleAsk = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setIsOpen(true);
        setLoading(true);
        setDisplayedAnswer('');
        setFullAnswer('');

        // 1. Simulate API
        await wait(1500);

        // 2. Logic
        const lowerQ = query.toLowerCase();
        let responseText = "I'm not sure about that, but feel free to ask about my work!";

        if (lowerQ.includes('work') || lowerQ.includes('experience')) {
            responseText = "I have over 5 years of experience in full-stack development, specializing in React, Node.js, and cloud architecture. My recent focus has been on building scalable web applications and leading development teams.";
            setTimeout(() => {
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        } else if (lowerQ.includes('project')) {
            responseText = "I've built e-commerce platforms handling 100k+ transactions and AI chat interfaces with real-time capabilities.";
            setTimeout(() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        } else if (lowerQ.includes('tech') || lowerQ.includes('stack')) {
            responseText = "My stack includes Next.js, TypeScript, Tailwind CSS, PostgreSQL, and Python for AI integration.";
            setTimeout(() => {
                document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        }

        setLoading(false);
        setFullAnswer(responseText);
        setIsTyping(true);
    };

    const handleReset = () => {
        setIsOpen(false);
        setTimeout(() => {
            setQuery('');
            setDisplayedAnswer('');
            setFullAnswer('');
        }, 300);
    };

    return (
        <div className="w-[700px] flex flex-col gap-2">

            {/* INPUT AREA */}
            <form onSubmit={handleAsk} className="relative z-20">
                <div
                    className={`flex w-full h-[52px] rounded-full border bg-white/5 backdrop-blur-md transition-all duration-300 ease-in-out
                    ${isOpen
                        ? 'border-white/60 shadow-[0_0_0_1px_rgba(255,255,255,0.3)] bg-white/10'
                        : 'border-white/20 hover:border-white/40 focus-within:border-white/60'
                    }
                    `}
                >
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Ask a question about my work, projects, or experience…"
                        className="w-full bg-transparent px-6 text-sm text-white placeholder-white/50 focus:outline-none"
                        disabled={loading || isTyping}
                    />

                    <button type="submit" disabled={!query || loading || isTyping} className="pr-4 pl-2 text-white/50 hover:text-white disabled:opacity-0 transition-all duration-200">
                        {loading ? (
                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                        ) : (
                            <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                        )}
                    </button>
                </div>
            </form>

            {/* ACCORDION RESPONSE AREA */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                style={{
                    // Calculate height based on the FULL answer (so the box doesn't jump while typing)
                    // OR the contentRef if we want it to grow as it types.
                    // Using scrollHeight of the inner container allows it to grow naturally.
                    height: isOpen ? contentRef.current?.scrollHeight : 0,
                }}
            >
                <div ref={contentRef} className="pb-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 mt-1">
                        <div className="flex justify-between items-start mb-3">
                            <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                                AI Response
                            </span>
                            <button onClick={handleReset} className="text-white/40 hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className="text-white/90 leading-relaxed text-sm min-h-[20px] font-mono">
                            {loading ? (
                                <div className="flex items-center gap-2 text-white/50">
                                    <span className="animate-pulse">Thinking...</span>
                                </div>
                            ) : (
                                <p>
                                    {displayedAnswer}
                                    {isTyping && <span className="animate-pulse ml-1">|</span>}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}