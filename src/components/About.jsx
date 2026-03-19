import { motion } from "framer-motion";
import { Element } from "react-scroll";

const infoCards = [
  {
    label: "Education",
    line1: "B.Tech CSE (AI & ML)",
    // line2: "LPU | CGPA: 7.47",
  },
  {
    label: "Location",
    line1: "Punjab, India",
    line2: "Open to opportunities",
  },
  {
    label: "Email",
    line1: "meghana7182@gmail.com",
    // line2: "Available for Internships and Full-time roles",
  },
  {
    label: "Profiles",
    line1: "GitHub | LinkedIn",
    line2: "LeetCode | HackerRank",
  },
];

const About = () => {
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

          <div className="grid auto-rows-max content-start self-start gap-4 sm:grid-cols-2">
            {infoCards.map((card, index) => (
              <motion.article
                key={card.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-4 backdrop-blur-lg"
              >
                <div className="mb-3 flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-400">{card.label}</p>
                <p className="mt-3 text-base font-semibold leading-6 text-white md:text-lg">{card.line1}</p>
                <p className="mt-1 text-base font-semibold leading-6 text-slate-200 md:text-lg">{card.line2}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
