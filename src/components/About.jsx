import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const codeLines = [
  "const meghana = {",
  "  role: 'AI & ML Engineer',",
  "  education: 'B.Tech CSE (AI & ML)',",
  "  location: 'Punjab, India',",
  "  email: 'meghana7182@gmail.com',",
  "  skills: ['Python', 'C++', 'Machine Learning', 'Full Stack'],",
  "  profiles: ['GitHub', 'LinkedIn', 'LeetCode', 'HackerRank'],",
  "  problemsSolved: '150+',",
  "  certificates: 6,",
  "  focus: 'Building intelligent, scalable, real-world solutions'",
  "};",
];

const typingText = codeLines.join("\n");

const About = () => {
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    let timeoutId;

    if (typedCount < typingText.length) {
      timeoutId = setTimeout(() => {
        setTypedCount((count) => count + 1);
      }, 28);
    }

    return () => clearTimeout(timeoutId);
  }, [typedCount]);

  const visibleText = typingText.slice(0, typedCount);

  return (
    <Element name="about">
      <section className="relative overflow-hidden px-6 py-24">
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-extrabold text-white md:text-6xl"
            >
              About <span className="text-brand-400">Me</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-slate-300"
            >
              Transforming ideas into intelligent solutions through code and creativity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 space-y-4 text-lg leading-9 text-slate-300"
            >
              <p>
                I&apos;m an enthusiastic <span className="font-semibold text-white">AI and ML Engineer</span>,
                passionate about building intelligent applications using{" "}
                <span className="font-semibold text-brand-400">Python</span>,{" "}
                <span className="font-semibold text-brand-400">C++</span>, and{" "}
                <span className="font-semibold text-brand-400">Machine Learning</span>.
              </p>
              <p>
                Curious builder and problem solver who enjoys creating modern software applications and exploring
                innovative technologies. Works across full-stack development, data analysis, and Artificial
                Intelligence and Machine Learning systems, with a focus on clean architecture, scalability, and
                meaningful user experiences.
              </p>
              <p>
                Always learning, experimenting, and improving through real-world projects and technical challenges
                while exploring intelligent and data-driven solutions.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            whileHover={{ y: -6 }}
            className="self-start rounded-3xl border border-slate-700/60 bg-slate-900/80 p-5 backdrop-blur-lg"
          >
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-brand-400">
                  about-me.js
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  live profile
                </p>
              </div>

              <pre className="overflow-x-auto whitespace-pre-wrap break-words font-mono text-[13px] leading-7 text-slate-200">
                <code>
                  {visibleText}
                  <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-brand-400 align-middle" />
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default About;
