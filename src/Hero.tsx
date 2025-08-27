import { type JSX } from "react";
import Nav from "./Nav";
import "./index.css";
import Socials from "./Socials";

const Hero = (): JSX.Element => {
  const stats = [
    {
      value: "3",
      label: "Years of Experience",
    },
    {
      value: "5+",
      label: "Projects Completed",
    },
    {
      value: "1",
      label: "Satisfied Clients",
    },
    {
      value: "7",
      label: "Tools Worked With",
    },
  ];
  return (
    <section id="home" className="min-h-[90vh]">
      <Nav />
      <div className="container mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between lg:justify-center gap-10 lg:gap-20 mt-36">
        <div className="flex-1 max-w-xl text-center md:text-left mt-[-25px]">
          <h1 className="text-white/80 text-4xl sm:text-3xl font-bold md:text-5xl lg:text-6xl">
            Software Engineer &amp; Web Developer
          </h1>
          <p className="mt-4 sm:mt-8 text-base sm:text-base lg:text-lg text-white/80">
            I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent font-bold text-lg sm:text-xl">
              Ridwan
            </span>
            . I turn ideas into smooth, responsive web experiences using React &
            Tailwind CSS.
          </p>
          <div className="my-5 sm:mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <div className="mt-4 flex flex-col-reverse gap-8 md:flex-row md:gap-4 md:items-center">
              <a
                href="#contact"
                className="max-w-36 flex items-center gap-1 bg-transparent border border-white/80 text-white/80 px-4 py-2 rounded-xl font-semibold hover:bg-white/80 hover:text-black transition-all duration-300"
              >
                Contact Me →
              </a>

              <div className="socials">
                <Socials />
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 sm:w-2/3 md:w-2/5 lg:w-1/3 max-w-md mb-[-80px] transform md:rotate-[-5deg] scale-[1.1] hover:transform hover:rotate-[0deg] transition-transform duration-300">
          <img
            src="/hero-holder.jpg"
            alt="My Portrait"
            className="w-full h-auto border-2 border-purple-500 rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mx-auto px-6 sm:px-8 pb-12 md:pb-0 pt-16 lg:mt-24 xl:pt-26">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-white/80 text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
