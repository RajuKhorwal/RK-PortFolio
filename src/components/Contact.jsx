import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Get in <span className="text-blue-500">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-gray-300">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <span>rajukhorwalpeeh@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <FaPhone className="text-blue-500 text-2xl" />
              <span>+91 8824889274</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              <span>Udaipur, Rajasthan, India</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted! Replace with backend/API.");
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-slate-800/70 border border-slate-600/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-slate-800/70 border border-slate-600/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded bg-slate-800/70 border border-slate-600/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white py-3 rounded transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
