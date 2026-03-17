import { useState } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { skillGroups, softSkills } from "../data/skills";
import { FaUsers, FaLightbulb, FaComments, FaClock, FaUserTie } from "react-icons/fa";
import { MdAutorenew } from "react-icons/md";

const iconMap = {
  communication: FaComments,
  leadership: FaUserTie,
  team: FaUsers,
  problem: FaLightbulb,
  time: FaClock,
  adapt: MdAutorenew,
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <Element name="skills">
      <section className="px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Tech stack and tools I use to design, build, and ship reliable products.</p>

          <div className="mt-8 inline-flex rounded-2xl border border-slate-700/70 bg-slate-900/70 p-2">
            <button
              type="button"
              onClick={() => setActiveTab("technical")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                activeTab === "technical"
                  ? "bg-brand-500 text-slate-950 shadow-glow"
                  : "text-slate-300 hover:text-brand-300"
              }`}
            >
              Technical Skills
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("soft")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                activeTab === "soft"
                  ? "bg-brand-500 text-slate-950 shadow-glow"
                  : "text-slate-300 hover:text-brand-300"
              }`}
            >
              Soft Skills
            </button>
          </div>

          <div className="mt-10">
            {activeTab === "technical" ? (
              <div className="grid gap-6 md:grid-cols-2">
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
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {softSkills.map((skill, index) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={skill.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="card flex min-h-[210px] flex-col items-center justify-center text-center"
                    >
                      {Icon ? <Icon className="text-3xl text-brand-300" /> : null}
                      <h3 className="mt-5 font-display text-2xl font-semibold text-white">{skill.title}</h3>
                      <p className="mt-3 max-w-xs text-slate-300">{skill.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Skills;
