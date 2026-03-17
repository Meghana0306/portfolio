import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { FaGithub, FaLinkedin, FaCode, FaHackerrank, FaLaptopCode, FaPython, FaJava, FaCss3Alt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiJavascript, SiReact, SiNodedotjs, SiCplusplus, SiHtml5, SiMongodb } from "react-icons/si";

const softSkills = [
  "Problem Solving Skills",
  "Research-Oriented Approach",
  "Good Communication",
  "Time Management",
];
const heroPhoto = `${import.meta.env.BASE_URL}img.png`;
const orbitRings = [
  { size: "h-[350px] w-[350px]", border: "border-brand-400/35", duration: 16, direction: 360 },
  { size: "h-[380px] w-[380px]", border: "border-brand-400/25", duration: 20, direction: -360 },
  { size: "h-[410px] w-[410px]", border: "border-cyan-300/20", duration: 24, direction: 360 },
  { size: "h-[440px] w-[440px]", border: "border-brand-400/15", duration: 28, direction: -360 },
  { size: "h-[470px] w-[470px]", border: "border-cyan-300/15", duration: 34, direction: 360 },
];
const orbitIcons = [
  { Icon: FaGithub, label: "GitHub", size: 390, duration: 10, direction: 360, tone: "text-brand-300" },
  { Icon: FaCode, label: "LeetCode", size: 430, duration: 14, direction: -360, tone: "text-cyan-300" },
  { Icon: FaHackerrank, label: "HackerRank", size: 470, duration: 18, direction: 360, tone: "text-emerald-300" },
  { Icon: FaLaptopCode, label: "DSA", size: 510, duration: 22, direction: -360, tone: "text-sky-300" },
  { Icon: FaPython, label: "Python", size: 550, duration: 26, direction: 360, tone: "text-yellow-300" },
  { Icon: FaJava, label: "Java", size: 590, duration: 30, direction: -360, tone: "text-orange-300" },
  { Icon: SiHtml5, label: "HTML", size: 410, duration: 12, direction: -360, tone: "text-orange-400" },
  { Icon: FaCss3Alt, label: "CSS", size: 490, duration: 16, direction: 360, tone: "text-blue-300" },
  { Icon: SiJavascript, label: "JavaScript", size: 450, duration: 13, direction: 360, tone: "text-yellow-200" },
  { Icon: SiReact, label: "React", size: 530, duration: 17, direction: -360, tone: "text-cyan-200" },
  { Icon: SiNodedotjs, label: "Node.js", size: 570, duration: 21, direction: 360, tone: "text-green-300" },
  { Icon: SiMongodb, label: "MERN Stack", size: 630, duration: 27, direction: 360, tone: "text-emerald-300" },
  { Icon: SiCplusplus, label: "C++", size: 610, duration: 25, direction: -360, tone: "text-blue-300" },
];
const ringHoverVariants = {
  initial: { y: 0, scale: 1, boxShadow: "0 0 0 rgba(34, 211, 238, 0)" },
  hover: { y: 10, scale: 1.06, boxShadow: "0 0 24px rgba(34, 211, 238, 0.45)" },
};

const Hero = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  const [typedSkill, setTypedSkill] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = softSkills[skillIndex];
    let timeoutId;

    if (!isDeleting && typedSkill.length < currentSkill.length) {
      timeoutId = setTimeout(() => {
        setTypedSkill(currentSkill.slice(0, typedSkill.length + 1));
      }, 90);
    } else if (!isDeleting && typedSkill.length === currentSkill.length) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, 1100);
    } else if (isDeleting && typedSkill.length > 0) {
      timeoutId = setTimeout(() => {
        setTypedSkill(currentSkill.slice(0, typedSkill.length - 1));
      }, 45);
    } else if (isDeleting && typedSkill.length === 0) {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % softSkills.length);
      }, 250);
    }

    return () => clearTimeout(timeoutId);
  }, [typedSkill, isDeleting, skillIndex]);

  return (
    <Element name="home">
      <section className="relative overflow-hidden px-6 pb-20 pt-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 inline-block rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1 text-sm text-brand-300">
              Software Engineer | AI & ML Enthusiast
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Meghana <span className="text-brand-400">Pasupuleti</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300 md:text-xl">
              &gt; <span className="font-semibold text-brand-400">{typedSkill}</span>
              <span className="ml-1 animate-pulse text-brand-300">|</span>
            </p>
            <p className="mt-6 max-w-2xl text-slate-300">
              Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at
              Lovely Professional University. Passionate about building intelligent systems, scalable applications, and
              solving real-world problems through technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-brand-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-brand-400"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-slate-600 px-5 py-3 font-semibold text-slate-200 transition hover:border-brand-400 hover:text-brand-300"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5 text-2xl text-slate-300">
              <a href="https://github.com/Meghana0306" target="_blank" rel="noreferrer" className="hover:text-brand-400">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/meghana-0903sj/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-400"
              >
                <FaLinkedin />
              </a>
              <a href="https://leetcode.com/u/nxq5TWLgNd/" target="_blank" rel="noreferrer" className="hover:text-brand-400">
                <FaCode />
              </a>
              <a href="mailto:meghana7182@gmail.com" className="hover:text-brand-400">
                <MdEmail />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover="hover"
            animate="initial"
            className="relative mx-auto flex w-full max-w-md items-center justify-center py-8"
          >
            {orbitRings.map((ring) => (
              <motion.div
                key={ring.size}
                className={`absolute ${ring.size}`}
                variants={ringHoverVariants}
                transition={{ y: { duration: 0.25 }, scale: { duration: 0.25 }, boxShadow: { duration: 0.25 } }}
              >
                <motion.div
                  className={`h-full w-full rounded-full border ${ring.border}`}
                  animate={{ rotate: ring.direction }}
                  transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ))}
            <motion.div
              className="absolute h-[415px] w-[415px]"
              variants={ringHoverVariants}
              transition={{ y: { duration: 0.25 }, scale: { duration: 0.25 }, boxShadow: { duration: 0.25 } }}
            >
              <motion.div
                className="h-full w-full rounded-full border border-dashed border-cyan-300/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            {orbitIcons.map((item, index) => (
              <motion.div
                key={`${item.size}-${index}`}
                className="absolute rounded-full border border-dashed border-brand-400/20"
                style={{ width: item.size, height: item.size }}
                animate={{ rotate: item.direction }}
                transition={{ duration: item.duration, repeat: Infinity, ease: "linear" }}
              >
                <div className="group absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-400/40 bg-slate-950/85 p-2 shadow-glow">
                  <item.Icon className={`text-lg ${item.tone}`} />
                  <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-brand-400/30 bg-slate-950/95 px-2 py-1 text-[10px] font-semibold text-brand-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
            <div className="absolute -right-12 -top-8 h-28 w-28 rounded-full bg-brand-500/25 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-cyan-400/25 blur-2xl" />
            <img
              src={heroPhoto}
              alt="Meghana profile"
              className="relative z-10 h-[320px] w-[320px] rounded-full border-2 border-brand-400/60 object-cover object-top shadow-glow"
            />
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;

