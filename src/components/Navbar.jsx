import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const navLinks = ["home", "about", "skills", "projects", "certificates", "achievements", "education", "contact"];

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur-xl"
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-lg font-bold tracking-wide text-white">
          Meghana<span className="text-brand-400">.dev</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              offset={-80}
              duration={500}
              className="cursor-pointer text-sm font-medium uppercase tracking-wider text-slate-300 transition hover:text-brand-400"
            >
              {item}
            </Link>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-lg border border-slate-600 px-3 py-2 text-lg text-slate-200 transition hover:border-brand-400 hover:text-brand-400"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-lg border border-slate-600 p-2 text-lg text-slate-200 transition hover:border-brand-400 hover:text-brand-400"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            className="text-2xl text-slate-200"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-slate-800 bg-slate-950 px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-sm font-medium uppercase tracking-wider text-slate-300 transition hover:text-brand-400"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
