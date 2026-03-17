import { useState } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { FaExternalLinkAlt, FaHackerrank } from "react-icons/fa";

const codingProfiles = [
  {
    title: "LeetCode Profile",
    handle: "@nxq5TWLgNd",
    detail: "Solved 150+ DSA problems with consistent contest participation.",
    metric: "Contest rank 663",
    link: "https://leetcode.com/u/nxq5TWLgNd/",
  },
  {
    title: "HackerRank Badges",
    handle: "@meghana7182",
    detail: "Earned language and problem-solving badges through regular practice.",
    metric: "Java + C badges",
    link: "https://www.hackerrank.com/profile/meghana7182",
  },
];

const badges = [
  { name: "Java", level: "3 star", tone: "bg-orange-300/20 text-orange-200 border-orange-300/40" },
  { name: "C Language", level: "5 stars", tone: "bg-yellow-300/20 text-yellow-100 border-yellow-300/40" },
];

const certifications = [
  {
    name: "Software Engineer Verified",
    issuer: "HackerRank",
  },
];

const googleBadge = {
  name: "Google Generative AI Badge",
  issuer: "Google",
  image: "https://i.postimg.cc/85jtCGCr/Screenshot-2026-03-13-182253.png",
};

const Achievements = () => {
  const [selectedBadge, setSelectedBadge] = useState(null);

  return (
    <Element name="achievements">
      <section className="px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="section-title">Achievements</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5 lg:col-span-4"
            >
              <div className="card">
                <p className="text-sm text-slate-300">Coding Profile</p>
                <h3 className="mt-2 font-display text-3xl font-bold text-white">Meghana</h3>
                <p className="mt-1 text-slate-400">@meghana7182</p>
                <div className="mt-6 space-y-4">
                  {codingProfiles.map((profile) => (
                    <div key={profile.title} className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-slate-100">{profile.title}</p>
                          <p className="text-sm text-slate-400">{profile.handle}</p>
                        </div>
                        <a
                          href={profile.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-300 transition hover:text-brand-300"
                          aria-label={`Open ${profile.title}`}
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                      <p className="mt-2 text-sm text-slate-300">{profile.detail}</p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-300">
                        {profile.metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="space-y-5 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="card"
              >
                <h3 className="flex items-center gap-2 font-display text-2xl font-semibold text-white">
                  <FaHackerrank className="text-brand-300" /> Coding Achievements
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Badges and certifications from my coding profiles.
                </p>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">Badges</p>
                    <div className="mt-3 space-y-3">
                      {badges.map((badge) => (
                        <div key={badge.name} className={`rounded-xl border p-4 ${badge.tone}`}>
                          <p className="font-semibold">{badge.name}</p>
                          <p className="mt-1 text-sm opacity-90">{badge.level}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">Certifications</p>
                    <div className="mt-3 space-y-3">
                      {certifications.map((item) => (
                        <div key={item.name} className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
                          <p className="font-semibold text-slate-100">{item.name}</p>
                          <p className="mt-1 text-sm text-slate-400">{item.issuer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card"
              >
                <h3 className="font-display text-2xl font-semibold text-white">Google Badge</h3>
                <p className="mt-2 text-sm text-slate-300">
                  
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-700/70 bg-slate-950/60 p-4">
                  <div>
                    <p className="font-semibold text-slate-100">{googleBadge.name}</p>
                    <p className="mt-1 text-sm text-slate-400">{googleBadge.issuer}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedBadge(googleBadge)}
                    className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
                  >
                    View Badge
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {selectedBadge && (
          <div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 px-4"
            onClick={() => setSelectedBadge(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-5xl rounded-xl border border-slate-700 bg-slate-950 p-3"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedBadge(null)}
                className="mb-3 rounded-md border border-slate-600 px-3 py-1 text-sm text-slate-200 hover:border-brand-400 hover:text-brand-300"
              >
                Close
              </button>
              <img
                src={selectedBadge.image}
                alt={selectedBadge.name}
                className="max-h-[80vh] w-full rounded-lg object-contain"
              />
            </div>
          </div>
        )}
      </section>
    </Element>
  );
};

export default Achievements;

