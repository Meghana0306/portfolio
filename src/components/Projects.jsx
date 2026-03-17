import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <Element name="projects">
      <section className="px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Selected projects blending full-stack engineering, algorithms, and AI/ML.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="card overflow-hidden p-0"
              >
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-600 bg-slate-800/60 px-3 py-1 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg border border-brand-500/40 px-4 py-2 text-sm font-semibold text-brand-300 transition hover:bg-brand-500 hover:text-slate-950"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://github.com/Meghana0306"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
            >
              <FaGithub />
              View More on GitHub
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
