import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGithub, FaGitlab } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si"

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-5xl" /> },
    { name: "React", icon: <FaReact className="text-sky-500 text-5xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-5xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800 text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-700 text-5xl" /> },
    { name: "GitLab", icon: <FaGitlab className="text-orange-500 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-5xl" /> },
  ]

  return (
    <section id="skills">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 border rounded-lg shadow hover:shadow-md transition"
          >
            {skill.icon}
            <span className="mt-2 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
