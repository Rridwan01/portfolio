import type { JSX } from "react";
import "./index.css";

const Contact = (): JSX.Element => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-start justify-center px-6 pt-32 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <a
            href="mailto:olalekanr04@gmail.com"
            className="bg-transparent border border-white/80 text-white/80 px-4 py-2 rounded-xl font-semibold hover:bg-white/80 hover:text-black transition-all duration-300"
          >
            Say Hello →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
