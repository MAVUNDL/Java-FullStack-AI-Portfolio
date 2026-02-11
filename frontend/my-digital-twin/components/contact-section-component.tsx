'use client';

import { useState, useEffect } from 'react';

export default function ContactSection() {
    const [isCopied, setIsCopied] = useState(false);
    const [time, setTime] = useState("");

    // Replace with your actual email
    const email = "skhumbuzo.bembe@outlook.com";

    // Effect to get live Mkhondo Time (SAST)
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-ZA', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Africa/Johannesburg'
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <section id="contact" className="w-full max-w-7xl mx-auto px-4 py-24">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                {/* LEFT COLUMN: The "Server Status" */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-mono text-green-400 font-semibold tracking-wide">ONLINE</span>
                        </div>
                        <span className="text-xs font-mono text-white/30">Latency: 24ms</span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Let's architect <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            something scalable.
                        </span>
                    </h3>

                    <p className="text-white/60 text-sm mb-10 leading-relaxed max-w-md">
                        I am currently available for freelance contracts and full-time engineering roles.
                    </p>

                    <div className="space-y-4">
                        <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest">Open Protocols</h4>
                        <div className="flex flex-wrap gap-2">
                            {["System Architecture", "Backend Engineering", "RAG Systems", "Data Pipelines"].map((tag) => (
                                <span key={tag} className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>


                {/* RIGHT COLUMN: The "Command Center" Actions */}
                <div className="relative">
                    {/* Decorative Background Blur */}
                    <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-2xl" />

                    <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

                        {/* Location / Time Header */}
                        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded bg-white/5">
                                    <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm">Mkhondo, SA</p>
                                    <p className="text-white/40 text-xs font-mono">Mpumalanga</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-white font-mono text-xl">{time}</p>
                                <p className="text-green-400 text-xs font-mono">SAST (GMT+2)</p>
                            </div>
                        </div>

                        {/* Primary Actions */}
                        <div className="space-y-4">
                            <a
                                href={`mailto:${email}`}
                                className="group w-full flex items-center justify-between p-4 rounded-xl bg-white text-black font-bold hover:bg-blue-50 transition-all active:scale-95"
                            >
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    <span>Initiate Email Protocol</span>
                                </div>
                                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                            </a>

                            <div className="grid grid-cols-[1fr,auto] gap-2">
                                <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3 overflow-hidden">
                                    <span className="text-white/40 font-mono select-none">$</span>
                                    <span className="text-white/80 font-mono text-sm truncate">{email}</span>
                                </div>
                                <button
                                    onClick={handleCopy}
                                    className="px-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/70"
                                >
                                    {isCopied ? (
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Secondary Links */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <a href="https://github.com/MAVUNDL" target="_blank" className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-white/70 hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                <span className="text-sm font-medium">GitHub</span>
                            </a>
                            <a href="https://linkedin.com/in/Skhumbuzo-Bembe" target="_blank" className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-white/70 hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                                <span className="text-sm font-medium">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/30 text-xs font-mono">
                    © 2026 Skhumbuzo Bembe. All systems nominal.
                </p>
                <div className="flex gap-6">
                    {/* You can add Resume / Privacy Policy links here later */}
                    <span className="text-white/20 text-xs hover:text-white/40 cursor-pointer transition-colors">v1.0.4-production</span>
                </div>
            </div>
        </section>
    );
}