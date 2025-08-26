import { useState, type JSX } from "react";
import { Link } from "react-scroll";
import "./index.css";

const Nav = (): JSX.Element => {
  const [active, setActive] = useState("Home");

  const navLinks = ["Home", "Projects", "About", "Contact"].map((link) => (
    <div key={link} onClick={() => setActive(link)}>
      <Link
        to={link.toLowerCase()}
        spy={true}
        smooth={true}
        duration={500}
        isDynamic={true}
        activeClass="text-yellow-400"
        className={`relative inline-block px-2 py-1 group cursor-pointer text-white/80`}
      >
        {link}
        <span
          className={`absolute bottom-0 left-0 bg-white/80 transition-all duration-300 h-[1px] 
          ${
            active === link
              ? "w-0 group-hover:w-full"
              : "w-0 group-hover:w-full"
          }`}
        />
      </Link>
    </div>
  ));

  return (
    <div className="hero-bg flex justify-center w-full">
      <nav className="fixed top-0 z-50 backdrop-blur-md bg-white/10 border-[0.5px] border-white/80 w-[350px] rounded-full mt-4">
        <div className="flex justify-center py-1 gap-4 text-[16px] font-semibold">
          {navLinks}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
