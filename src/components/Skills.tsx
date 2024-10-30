"use client"
// import { motion } from "framer-motion"

// const skills = [
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Express",
//   "MongoDB",
//   "PostgreSQL",
//   "Supabase",
//   "TailwindCSS",
//   "Git",
//   "Docker",
//   // Add more skills
// ]

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 bg-background overflow-hidden">
//       <div className="container px-4 mx-auto">
//         <motion.h2 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="text-3xl font-bold text-center mb-12"
//         >
//           Skills
//         </motion.h2>
//         <motion.div 
//           initial={{ x: "100%" }}
//           animate={{ x: "-100%" }}
//           transition={{ 
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="flex gap-8 whitespace-nowrap"
//         >
//           {[...skills, ...skills].map((skill, index) => (
//             <div
//               key={index}
//               className="bg-primary/10 text-primary px-6 py-3 rounded-full text-lg font-medium"
//               style={{ opacity: index >= skills.length ? 0.5 : 1 }}
//             >
//               {skill}
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }



import { motion } from "framer-motion";
// import { Camera, Cpu, Database, GitBranch, Loader, Terminal } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "bg-yellow-100 text-yellow-800" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "bg-blue-100 text-blue-800" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "bg-cyan-100 text-cyan-800" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "bg-gray-100 text-gray-800" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "bg-green-100 text-green-800" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "bg-gray-100 text-gray-800" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "bg-green-100 text-green-800" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "bg-blue-100 text-blue-800" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", color: "bg-teal-100 text-teal-800" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "bg-cyan-100 text-cyan-800" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "bg-red-100 text-red-800" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "bg-blue-100 text-blue-800" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-8 py-5 rounded-full text-lg font-medium ${skill.color}`}
              style={{
                opacity: index >= skills.length ? 0.5 : 1,
              }}
            >
              <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
              {skill.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}