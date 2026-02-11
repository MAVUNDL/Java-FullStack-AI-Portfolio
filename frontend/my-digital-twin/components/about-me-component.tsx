'use client';

export default function AboutSection() {

    const skills = [
        {
            category: "Backend Engineering",
            icon: "⚡",
            items: ["Java (Spring Boot)", "Python (FastAPI)", "Node.js", "PostgreSQL"]
        },
        {
            category: "Data Engineering",
            icon: "🌊",
            items: ["Kafka (Event Streaming)", "Apache Airflow", "dlt (Data Load Tool)", "Apache Spark"]
        },
        {
            category: "AI & ML Systems",
            icon: "🤖",
            items: ["RAG Pipelines", "LangChain / LangGraph", "Vector Databases", "LLM Ops"]
        },
        {
            category: "DevOps & Cloud",
            icon: "☁️",
            items: ["Docker & Containers", "AWS Infrastructure", "CI/CD Pipelines", "Linux Administration"]
        }
    ];

    return (
        <section id="about" className="w-full max-w-7xl mx-auto px-6 py-24">

            {/* Concise Summary */}
            <div className="max-w-4xl mx-auto text-center mb-20">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                    I bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">mathematical thinking</span> to production systems.
                </h3>

                <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                    {/* Decorative quotes */}
                    <div className="absolute top-4 left-6 text-6xl text-white/10 font-serif">“</div>

                    <p className="text-white/80 text-lg md:text-sm leading-relaxed font-light relative z-10">
                        Through academic projects, internships, and hands-on engineering work,
                        I focus on building backend services, data pipelines, and AI-driven
                        systems that are scalable, structured, and reliable. My background in
                        mathematics shapes how I approach problems — emphasizing correctness,
                        clarity, and long-term maintainability.
                    </p>
                </div>

                <div className="mt-10 flex items-center justify-center gap-4 opacity-70">
                    <div className="h-px w-12 bg-white/30" />
                    <p className="text-white/60 text-sm font-mono uppercase tracking-widest">
                        System Architecture & Stack
                    </p>
                    <div className="h-px w-12 bg-white/30" />
                </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={skill.category}
                        className="group relative rounded-2xl border border-white/10 bg-white/5 p-6
                                   transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl"
                    >
                        {/* Hover Gradient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-xl">
                                    {skill.icon}
                                </span>
                                <h3 className="text-white font-bold text-lg tracking-wide">
                                    {skill.category}
                                </h3>
                            </div>

                            <ul className="space-y-3">
                                {skill.items.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-white/70 group-hover:text-white transition-colors">
                                        <span className="text-blue-400 font-mono mt-0.5">{`>`}</span>
                                        <span className="font-mono text-white/60 group-hover:text-white/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}