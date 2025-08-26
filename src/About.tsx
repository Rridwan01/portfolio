import type { JSX } from "react";
import "./index.css";

const About = (): JSX.Element => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-start justify-center px-6 pt-32 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition"></div>
          <img
            src="/hero-holder.jpg"
            alt="About me"
            className="relative rounded-2xl w-full h-[500px] object-cover shadow-2xl"
          />
        </div>

        <div className="text-white">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            I'm <span className="font-semibold">Ridwan</span>, a software
            engineer who builds experiences smoother than your favorite latte.
            My playground is React + Tailwind, where I turn messy ideas into
            sleek interfaces.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <p className="w-full pb-2">my skills →</p>
            {["HTML", "CSS", "React", "TailwindCSS", "TypeScript"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <a
            href="#projects"
            className="bg-transparent border border-white/80 text-white/80 px-4 py-2 rounded-xl font-semibold hover:bg-white/80 hover:text-black transition-all duration-300"
          >
            See My Work →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
