'use client';

export default function ProjectsSection() {

    return (
        <section id="projects" className="w-full max-w-7xl mx-auto px-4 py-24">

            {/* Header */}
            <div className="mb-20">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Featured Systems
                </h3>
                <div className="flex items-center gap-2 opacity-70">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-white/60 text-sm font-mono">
                        // distinct_architectures.md --active
                    </p>
                </div>
            </div>

            <div className="space-y-24">

                {/* --- PROJECT 1: THE ADVANCED RAG SYSTEM --- */}
                <div className="group relative rounded-3xl bg-[#0A0A0A] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">

                    {/* Background Ambient Glow */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-500" />

                    <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-0 xl:gap-16 items-stretch">

                        {/* LEFT COLUMN: Deep Technical Breakdown */}
                        <div className="xl:col-span-7 p-8 md:p-12 flex flex-col h-full border-b xl:border-b-0 xl:border-r border-white/5">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-mono border border-blue-500/20">
                                    Agentic RAG Pipeline
                                </span>
                                <span className="text-white/30 text-xs font-mono">v2.0.0</span>
                            </div>

                            <h4 className="text-3xl font-bold text-white mb-6">
                                Enterprise Financial Intelligence Engine
                            </h4>

                            <p className="text-white/70 leading-relaxed mb-8 text-base">
                                A production-grade Retrieval-Augmented Generation system engineered for high-precision financial auditing.
                                Unlike simple RAGs, this architecture implements a <span className="text-blue-300 font-medium">"Thinker" agent</span> that reformulates queries before searching, ensuring complex context is captured.
                            </p>

                            {/* Key Features List */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="space-y-3">
                                    <h5 className="text-white font-medium text-sm border-b border-white/10 pb-2">Ingestion & Retrieval</h5>
                                    <ul className="space-y-2 text-sm text-white/60">
                                        <li className="flex gap-2"><span className="text-blue-500">▹</span> Apache Tika PDF Parsing</li>
                                        <li className="flex gap-2"><span className="text-blue-500">▹</span> Real-time File Watcher</li>
                                        <li className="flex gap-2"><span className="text-blue-500">▹</span> ChromaDB Vector Store</li>
                                    </ul>
                                </div>
                                <div className="space-y-3">
                                    <h5 className="text-white font-medium text-sm border-b border-white/10 pb-2">Intelligence Layer</h5>
                                    <ul className="space-y-2 text-sm text-white/60">
                                        <li className="flex gap-2"><span className="text-purple-400">▹</span> Query Transformation Agent</li>
                                        <li className="flex gap-2"><span className="text-purple-400">▹</span> Contextual Router</li>
                                        <li className="flex gap-2"><span className="text-purple-400">▹</span> Citation Guardrails</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="mt-auto pt-6 border-t border-white/5">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {["Java 21", "Spring Boot", "LangChain4j", "Docker Multi-Stage", "Amazon Corretto"].map((tech) => (
                                        <span key={tech} className="text-xs font-mono text-white/40 bg-white/5 px-2 py-1 rounded border border-white/5 hover:bg-white/10 hover:text-white transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a href="https://github.com/MAVUNDL/RAG-System" target="_blank" className="inline-flex items-center gap-2 text-white/80 font-medium hover:text-blue-400 transition-colors group/link">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    View Source Code <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: The Architecture Diagram */}
                        <div className="xl:col-span-5 bg-[#050505] p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
                            {/* Diagram Grid Overlay */}
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                            {/* THE VISUAL PIPELINE */}
                            <div className="relative w-full max-w-[300px] space-y-4 font-mono text-[10px] md:text-xs z-10">

                                {/* 1. User Input */}
                                <div className="flex justify-center">
                                    <div className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white/80 animate-pulse">
                                        User Query
                                    </div>
                                </div>

                                {/* Arrow Down */}
                                <div className="h-6 w-px bg-white/20 mx-auto" />

                                {/* 2. Router */}
                                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-200 text-center relative">
                                    <span className="block font-bold mb-1">Intelligent Router</span>
                                    <span className="text-[10px] opacity-60">"Technical" vs "Greeting"</span>
                                </div>

                                {/* Arrow Down */}
                                <div className="h-6 w-px bg-white/20 mx-auto" />

                                {/* 3. The "Thinker" (Query Transform) */}
                                <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-200 text-center">
                                    <span className="block font-bold mb-1">"Thinker" Agent</span>
                                    <span className="text-[10px] opacity-60">Reformulate & Expand Context</span>
                                </div>

                                {/* Arrow Down */}
                                <div className="h-6 w-px bg-white/20 mx-auto" />

                                {/* 4. Vector Search (Split) */}
                                <div className="flex gap-2">
                                    <div className="flex-1 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-200 text-center">
                                        <span className="block font-bold">ChromaDB</span>
                                        <span className="text-[10px] opacity-60">Semantic Search</span>
                                    </div>
                                    <div className="flex-1 p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-200 text-center">
                                        <span className="block font-bold">Metadata</span>
                                        <span className="text-[10px] opacity-60">Source Tracking</span>
                                    </div>
                                </div>

                                {/* Arrow Down */}
                                <div className="h-6 w-px bg-white/20 mx-auto" />

                                {/* 5. Guardrails */}
                                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-200 text-center">
                                    <span className="block font-bold">Guardrails</span>
                                    <span className="text-[10px] opacity-60">Strict Citation Enforcement</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* --- PROJECT 2: PORTFOLIO (Keeping it cleaner) --- */}
                <div className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
                    <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                        <div className="flex-1">
                            <h4 className="text-xl font-bold text-white mb-2">
                                Intelligent Developer Portfolio
                            </h4>
                            <p className="text-white/60 text-sm max-w-xl">
                                A Next.js 14 application featuring a custom terminal interface, glassmorphism UI,
                                and specific focus on "System Architecture" storytelling.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            {["Next.js", "React", "Tailwind", "Vercel"].map((tech) => (
                                <span key={tech} className="text-xs font-mono text-white/30 border border-white/10 px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}