import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiPython,
  SiGit,
  SiGithub,
} from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "PG Life - Property Management Web Application",
      image: "/projects/PGLIFE.png",
      tech: [<SiReact />, <SiJavascript />, <SiMongodb />],
      github: "https://github.com/RajuKhorwal/pglife-property-management",
      live: "https://pglife-property-management-frontend.onrender.com",
      description:
        "A property management web application for students.",
    },
    {
      title: "RKShop - E-commerce Platform",
      image: "/projects/my-shop.png",
      tech: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
      github: "https://github.com/RajuKhorwal/Ecommerce-RKShop",
      live: "https://rkshop-frontend.onrender.com",
      description:
        "An e-commerce platform for buying and selling products online.",
    },
    {
      title: "Portfolio Website",
      image: "https://via.placeholder.com/400x250.png?text=Portfolio+Website",
      tech: [<SiReact />, <SiCss3 />, <SiJavascript />],
      github: "#",
      live: "#",
      description:
        "My personal portfolio website showcasing projects and skills.",
    },
    {
      title: "RKNEWS -App for Latest News",
      image: "/projects/RKNews.png",
      tech: [<SiReact />, <SiCss3 />, <SiJavascript />],
      github: "https://github.com/RajuKhorwal/RKNews",
      live: "https://rknews.onrender.com",
      description:
        "A news application that provides the latest news articles from various sources.",
    },
    { 
      title: "TextUtils - Text Manipulation Tool",  
      image: "/projects/TextUtils.png",
      tech: [<SiReact />, <SiCss3 />, <SiJavascript />],
      github: "https://github.com/RajuKhorwal/TextUtils",
      live: "https://textutils-m7ba.onrender.com/about",
      description:
        "A web application to manipulate and analyze text in various ways.",
    },
    {
      title: "To-Do List App",
      image: "/projects/ToDoList.png",
      tech: [<SiReact />, <SiCss3 />, <SiJavascript />],
      github: "https://github.com/RajuKhorwal/ToDoList",
      live: "https://todolist-lw7k.onrender.com/",
      description:
        "A simple and intuitive to-do list application to manage tasks effectively.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-slate-800/70 border border-slate-600/30 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  {project.tech.map((Icon, i) => (
                    <span key={i} className="text-2xl text-blue-500">
                      {Icon}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition"
                  >
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
