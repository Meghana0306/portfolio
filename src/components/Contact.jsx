import { useState } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaCode, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const hasRealConfig =
      serviceId &&
      templateId &&
      publicKey &&
      !serviceId.startsWith("your_") &&
      !templateId.startsWith("your_") &&
      !publicKey.startsWith("your_");

    if (!hasRealConfig) {
      setStatus({
        type: "error",
        message: "Email service is not configured. Add real EmailJS keys in .env and restart the app.",
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "meghana7182@gmail.com",
          reply_to: formData.email,
        },
        publicKey
      );

      setStatus({ type: "success", message: "Message sent successfully." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      const details =
        error?.text || error?.message || "Please check EmailJS service, template, and public key settings.";
      setStatus({ type: "error", message: `Failed to send message. ${details}` });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Element name="contact">
      <section id="contact" className="px-6 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">
              Open to internships, collaborations, and research opportunities in full-stack engineering and AI/ML.
            </p>
            <div className="mt-8 space-y-4 text-slate-200">
              <a href="mailto:meghana7182@gmail.com" className="flex items-center gap-3 hover:text-brand-300">
                <MdEmail className="text-xl" /> meghana7182@gmail.com
              </a>
              <a href="tel:+919346139699" className="flex items-center gap-3 hover:text-brand-300">
                <FaPhoneAlt className="text-lg" /> +91 9346139699
              </a>
              <a href="https://github.com/Meghana0306" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand-300">
                <FaGithub className="text-xl" /> github.com/Meghana0306
              </a>
              <a
                href="https://www.linkedin.com/in/meghana-0903sj/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-brand-300"
              >
                <FaLinkedin className="text-xl" /> linkedin.com/in/meghana-0903sj
              </a>
              <a href="https://leetcode.com/u/nxq5TWLgNd/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand-300">
                <FaCode className="text-xl" /> leetcode.com/u/nxq5TWLgNd
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card space-y-4"
            onSubmit={handleSubmit}
          >
            <h3 className="font-display text-xl font-semibold text-white">Send a Message</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400"
            />
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400"
            />
            {status.message && (
              <p className={status.type === "success" ? "text-sm text-green-400" : "text-sm text-red-400"}>
                {status.message}
              </p>
            )}
            <button
              type="submit"
              disabled={isSending}
              className="rounded-lg bg-brand-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-brand-400"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
