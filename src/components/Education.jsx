import { motion } from "framer-motion";
import { Element } from "react-scroll";

const education = [
  {
    degree: "B.Tech Computer Science Engineering",
    school: "Lovely Professional University",
    score: "CGPA: 7.47",
  },
  {
    degree: "Intermediate",
    school: "NRI Arts and Science College",
    score: "96.1%",
  },
  {
    degree: "School",
    school: "VSN Siddartha School",
    score: "100%",
  },
];

const Education = () => {
  return (
    <Element name="education">
      <section className="px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="section-title">Education</h2>
          <div className="mt-10 space-y-5">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <h3 className="font-display text-xl font-semibold text-white">{item.degree}</h3>
                <p className="mt-1 text-slate-300">{item.school}</p>
                <p className="mt-2 text-brand-300">{item.score}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Education;
