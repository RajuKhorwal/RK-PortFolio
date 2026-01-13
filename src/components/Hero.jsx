import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-28 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-3xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I’m <span className="text-blue-500">Raju Khorwal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Aspiring MERN Stack Developer | B.Tech CSE
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <a
            href="/Khorwal_Raju_Resume.pdf"
            className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-500 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
