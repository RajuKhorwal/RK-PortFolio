import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
              <img src="/profile.jpeg" alt="Profile" className="w-64 h-64 rounded-2xl object-cover" />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I am a Computer Science undergraduate and an aspiring MERN Stack
              Developer with a strong interest in building modern, scalable web
              applications. I enjoy transforming ideas into clean, user-friendly
              digital experiences.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I have hands-on experience working with JavaScript, React,
              Node.js, and MongoDB through academic projects and hackathon-based
              learning. I am continuously improving my problem-solving skills
              and strengthening my foundation in core computer science concepts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-600/30 text-center">
                <h3 className="font-semibold mb-1">MERN Stack</h3>
                <p className="text-sm text-gray-400">React, Node, MongoDB</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-600/30 text-center">
                <h3 className="font-semibold mb-1">Projects</h3>
                <p className="text-sm text-gray-400">Academic & Hackathon</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-600/30 text-center">
                <h3 className="font-semibold mb-1">Career Goal</h3>
                <p className="text-sm text-gray-400">Software Developer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
