import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center" >
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* PROJECT SECTION */}
                    <div className="border rounded-xl p-6 border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Project Title</h3>
                        <p className="text-gray-300 mb-4" >Here project description will come.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Flutter", "SQL Server", ".NET API"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="mr-2 bg-blue-500/10 text-blue-500 px-3 py-1 cursor-pointer rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors mt-4">View Project →</a>
                        </div>
                    </div>
                    {/* PROJECT SECTION */}
                    <div className="border rounded-xl p-6 border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Project Title</h3>
                        <p className="text-gray-300 mb-4" >Here project description will come.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Flutter", "SQL Server", ".NET API"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="mr-2 bg-blue-500/10 text-blue-500 px-3 py-1 cursor-pointer rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors mt-4">View Project →</a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}