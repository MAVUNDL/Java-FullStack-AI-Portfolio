'use client';

export default function ExperienceSection() {

    const experiences = [
        {
            company: "Kion Consulting",
            role: "Murex Analyst Intern",
            date: "2025",
            description: "Specializing in financial software solutions. Working with Murex platforms to optimize trading workflows and system integration for banking clients.",
            stack: ["Java", "Excel VBA", "Murex", "Financial Concepts"]
        },
        {
            company: "QuantifyYourFuture (SAGEA)",
            role: "Quant Finance Intern",
            date: "2025",
            description: "Gained intensive exposure to quantitative finance, risk modeling, and algorithmic trading concepts. Collaborated on data-driven financial projects.",
            stack: ["Python", "Pandas", "Statistics", "Machine Learning"]
        },
        {
            company: "University of Johannesburg",
            role: "Marking Assistant (Computer Science)",
            date: "2025",
            description: "Assisted in grading and mentoring first-year Computer Science students. Reviewed code submissions for correctness, style, and efficiency.",
            stack: ["C++", "Algorithms", "Education", "Code Review"]
        }
    ];

    return (
        <section id="experience" className="w-full max-w-4xl mx-auto px-4 py-20">

            {/* --- UPDATED HEADER --- */}
            <div className="mb-20 text-center">
                {/* 1. Terminal Comment Badge instead of the blue line */}
                <div className="inline-block mb-3 opacity-70">
                    <span className="font-mono text-xs text-blue-400">
                        // career_log.json
                    </span>
                </div>

                {/* 2. Cleaner Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Experience
                </h3>

                {/* 3. Refined Sentence (Makes more sense for an engineer) */}
                <p className="text-white/50 text-sm max-w-lg mx-auto leading-relaxed">
                    A timeline of deploying financial systems, modeling data,
                    and mentoring the next generation of engineers.
                </p>
            </div>


            {/* --- TIMELINE (UNCHANGED) --- */}
            <div className="relative">

                {/* The Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                <div className="space-y-12">
                    {experiences.map((job, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}>

                            {/* CONTENT CARD */}
                            <div className="flex-1 ml-16 md:ml-0">
                                <div className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm 
                                    hover:border-white/20 hover:bg-white/10 transition-all duration-300 group
                                    ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}
                                `}>
                                    <div className={`flex flex-col mb-2 ${
                                        index % 2 === 0 ? 'md:items-start' : 'md:items-end'
                                    }`}>
                                        <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {job.company}
                                        </h4>
                                        <span className="text-xs font-mono text-white/40 mb-2 border border-white/10 rounded px-2 py-0.5 inline-block">
                                            {job.date}
                                        </span>
                                    </div>

                                    <h5 className="text-lg font-semibold text-white/90 mb-4">
                                        {job.role}
                                    </h5>

                                    <p className="text-sm text-white/60 leading-relaxed mb-6">
                                        {job.description}
                                    </p>

                                    <div className={`flex flex-wrap gap-2 ${
                                        index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                    }`}>
                                        {job.stack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CENTER NODE */}
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                                <div className="w-4 h-4 rounded-full bg-black border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 relative">
                                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20" />
                                </div>
                            </div>

                            {/* SPACER */}
                            <div className="flex-1 hidden md:block" />

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}