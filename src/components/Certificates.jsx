import { useState } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { certificates } from "../data/certificates";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <Element name="certificates">
      <section className="px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="section-title">Certificates</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                {certificate.image ? (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="mb-4 h-40 w-full rounded-xl border border-slate-700 object-cover"
                  />
                ) : (
                  <div className="mb-4 flex h-40 items-center justify-center rounded-xl border border-dashed border-slate-600 bg-slate-900/70 text-sm text-slate-400">
                    Add Certificate Image Link
                  </div>
                )}

                <p className="font-medium text-slate-100">{certificate.title}</p>

                {certificate.image ? (
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    className="mt-4 inline-block rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
                  >
                    View Certificate
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="mt-4 inline-block cursor-not-allowed rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-400"
                  >
                    View Certificate
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {selectedCertificate && (
          <div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 px-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-5xl rounded-xl border border-slate-700 bg-slate-950 p-3"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="mb-3 rounded-md border border-slate-600 px-3 py-1 text-sm text-slate-200 hover:border-brand-400 hover:text-brand-300"
              >
                Close
              </button>
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-h-[80vh] w-full rounded-lg object-contain"
              />
            </div>
          </div>
        )}
      </section>
    </Element>
  );
};

export default Certificates;
