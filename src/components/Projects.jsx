import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Element } from "react-scroll";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

const methodStyles = {
  GET: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  POST: "border-brand-500/30 bg-brand-500/10 text-brand-200",
  PUT: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  DELETE: "border-rose-400/30 bg-rose-400/10 text-rose-300",
};

const roleStyles = {
  Admin: "bg-rose-400/10 text-rose-300",
  Public: "bg-emerald-400/10 text-emerald-300",
  Auth: "bg-brand-500/10 text-brand-200",
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project?.details) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          onClick={(event) => event.stopPropagation()}
          className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-brand-500/20 bg-slate-950/95 shadow-[0_0_50px_rgba(6,182,212,0.14)]"
        >
          <div className="border-b border-slate-800 bg-gradient-to-r from-brand-500/10 via-slate-950 to-transparent p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-3xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-brand-300">
                  {project.details.metaLine || project.tech.join(" | ")}
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
                  {project.details.tagline}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={onClose}
                className="rounded-full border border-slate-700 px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-brand-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-[1.3fr_0.9fr] md:p-8">
            <div className="space-y-6">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full rounded-2xl border border-slate-800 object-cover md:h-80"
              />

              <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h4 className="font-display text-xl font-semibold text-white">About the Project</h4>
                <p className="mt-3 leading-7 text-slate-300">{project.details.about}</p>
              </section>

              {project.details.highlight && (
                <section className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-6">
                  <h4 className="font-display text-xl font-semibold text-brand-200">
                    {project.details.highlightTitle || "Project Highlight"}
                  </h4>
                  <p className="mt-3 leading-7 text-slate-300">{project.details.highlight}</p>
                </section>
              )}

              {project.details.authFlows && (
                <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <h4 className="font-display text-xl font-semibold text-white">Authentication Flow</h4>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {project.details.authFlows.map((flow) => (
                      <div
                        key={flow.title}
                        className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                      >
                        <h5 className="font-semibold text-brand-200">{flow.title}</h5>
                        <div className="mt-3 space-y-2">
                          {flow.steps.map((step, index) => (
                            <div key={step} className="flex gap-3 text-sm leading-6 text-slate-300">
                              <span className="font-mono text-brand-300">{index + 1}.</span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.details.pipeline && (
                <section>
                  <h4 className="font-display text-xl font-semibold text-white">Pipeline</h4>
                  <div className="mt-4 space-y-3">
                    {project.details.pipeline.map((item) => (
                      <div
                        key={item.step}
                        className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:grid-cols-[56px_170px_1fr]"
                      >
                        <div className="font-mono text-sm font-bold text-brand-300">{item.step}</div>
                        <div className="font-semibold text-white">{item.title}</div>
                        <div className="text-sm leading-6 text-slate-300">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.details.pages && (
                <section>
                  <h4 className="font-display text-xl font-semibold text-white">Application Pages</h4>
                  <div className="mt-4 space-y-3">
                    {project.details.pages.map((page, index) => (
                      <div
                        key={page.path}
                        className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 md:grid-cols-[56px_140px_180px_1fr]"
                      >
                        <div className="font-mono text-sm font-bold text-slate-400">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="font-semibold text-brand-200">{page.name}</div>
                        <div className="font-mono text-xs text-slate-400">{page.path}</div>
                        <div className="text-sm leading-6 text-slate-300">{page.desc}</div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.details.architecture && (
                <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <h4 className="font-display text-xl font-semibold text-white">System Architecture</h4>
                  <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {project.details.architecture.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                      >
                        <h5 className="font-semibold text-brand-200">{item.title}</h5>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.details.problemObjective && (
                <section className="grid gap-4 md:grid-cols-2">
                  {project.details.problemObjective.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
                    >
                      <h4 className="font-display text-xl font-semibold text-white">{item.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
                    </div>
                  ))}
                </section>
              )}
            </div>

            <div className="space-y-6">
              {project.details.features && (
                <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <h4 className="font-display text-xl font-semibold text-white">Key Features</h4>
                  <div className="mt-4 grid gap-3">
                    {project.details.features.map((feature) => (
                      <div
                        key={feature.title}
                        className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                      >
                        <h5 className="font-semibold text-brand-200">{feature.title}</h5>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.details.stats && (
                <section className="grid grid-cols-2 gap-3">
                  {project.details.stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5"
                    >
                      <div className="font-display text-3xl font-bold text-brand-300">{item.value}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </section>
              )}

              {project.details.modules && (
                <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <h4 className="font-display text-xl font-semibold text-white">Core Modules</h4>
                  <div className="mt-4 grid gap-3">
                    {project.details.modules.map((module) => (
                      <div
                        key={module.name}
                        className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                      >
                        <div className="font-mono text-sm text-brand-200">{module.name}</div>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{module.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.details.conditions && (
                <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <h4 className="font-display text-xl font-semibold text-white">Deadlock Conditions</h4>
                  <div className="mt-4 grid gap-3">
                    {project.details.conditions.map((condition) => (
                      <div
                        key={condition.title}
                        className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                      >
                        <h5 className="font-semibold text-brand-200">{condition.title}</h5>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{condition.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.details.apis && (
                <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <h4 className="font-display text-xl font-semibold text-white">REST API Endpoints</h4>
                  <div className="mt-4 space-y-3">
                    {project.details.apis.map((api) => (
                      <div
                        key={`${api.method}-${api.endpoint}`}
                        className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-md border px-2 py-1 font-mono text-[11px] font-bold ${
                              methodStyles[api.method] || "border-slate-700 bg-slate-800 text-slate-300"
                            }`}
                          >
                            {api.method}
                          </span>
                          <span className="font-mono text-xs text-brand-200">{api.endpoint}</span>
                          <span
                            className={`rounded-md px-2 py-1 text-[11px] font-medium ${
                              roleStyles[api.role] || "bg-slate-800 text-slate-300"
                            }`}
                          >
                            {api.role}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-300">{api.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.details.techStack && (
                <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <h4 className="font-display text-xl font-semibold text-white">Tech Stack</h4>
                  <div className="mt-4 space-y-4">
                    {project.details.techStack.map((group) => (
                      <div key={group.category}>
                        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400">
                          {group.category}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs text-slate-200"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.details.outcome && (
                <section className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
                  <h4 className="font-display text-xl font-semibold text-emerald-300">Outcome</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.details.outcome}</p>
                </section>
              )}

              <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <h4 className="font-display text-xl font-semibold text-white">Links</h4>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
                  >
                    <FaGithub />
                    View GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-brand-500/40 px-4 py-3 text-sm font-semibold text-brand-200 transition hover:bg-brand-500/10"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.details && (
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
                      >
                        More Details
                      </button>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-brand-500/40 px-4 py-2 text-sm font-semibold text-brand-300 transition hover:bg-brand-500 hover:text-slate-950"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-brand-400 hover:text-white"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                  </div>
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

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </Element>
  );
};

export default Projects;
