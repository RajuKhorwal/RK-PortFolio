import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiGit,
  SiGithub,
  SiLinux,
} from "react-icons/si";
import { DiJava, DiCode } from "react-icons/di"; // DiCode as generic code icon

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Technical <span className="text-blue-500">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Frontend */}
          <SkillCard title="Frontend">
            <Skill
              icon={<SiHtml5 className="text-orange-500" />}
              name="HTML5"
            />
            <Skill icon={<SiCss3 className="text-blue-500" />} name="CSS3" />
            <Skill
              icon={<SiJavascript className="text-yellow-400" />}
              name="JavaScript"
            />
            <Skill icon={<SiReact className="text-cyan-400" />} name="React" />
          </SkillCard>

          {/* Backend / MERN */}
          <SkillCard title="Backend / MERN">
            <Skill
              icon={<SiNodedotjs className="text-green-500" />}
              name="Node.js"
            />
            <Skill
              icon={<SiExpress className="text-gray-300" />}
              name="Express.js"
            />
            <Skill
              icon={<SiMongodb className="text-green-400" />}
              name="MongoDB"
            />
            <Skill
              icon={<SiReact className="text-cyan-400" />}
              name="MERN Stack"
            />
          </SkillCard>

          {/* Languages & Tools */}
          <SkillCard title="Languages & Tools">
            <Skill icon={<DiJava className="text-red-500" />} name="Java" />
            <Skill
              icon={<DiCode className="text-blue-400" />}
              name="C / C++"
            />{" "}
            {/* Generic icon */}
            <Skill
              icon={<SiPython className="text-yellow-300" />}
              name="Python"
            />
            <Skill icon={<SiGit className="text-orange-400" />} name="Git" />
            <Skill icon={<SiGithub className="text-white" />} name="GitHub" />
            <Skill
              icon={<SiLinux className="text-yellow-300" />}
              name="Linux"
            />
          </SkillCard>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-slate-800/70 border border-slate-600/30"
    >
      <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-3 gap-6">{children}</div>
    </motion.div>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="text-4xl">{icon}</div>
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  );
}
