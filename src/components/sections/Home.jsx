import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen w-full flex justify-center items-center relative">
            < RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold sm:mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                        Hi, I am Mohd Raza
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-lg mb-8 max-w-lg mx-auto">
                        A Flutter Developer
                    </p>
                    <div className="flex justify-center space-x-2 sm:space-x-4">
                        <a
                            href="#projects"
                            className="bg-blue-500 text-white px-2 sm:px-6 py-3 sm:py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-blue-500/50 text-blue-500 px-2 sm:px-6 py-3 sm:py-3 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}