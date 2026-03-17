import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { skillGroups } from "../data/skills";

const Skills = () => {
  return (
    <Element name="skills">
      <section className="px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Tech stack and tools I use to design, build, and ship reliable products.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <h3 className="font-display text-xl font-bold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-sm text-brand-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Skills;
