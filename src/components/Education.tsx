"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, ArrowUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const skills = [
  { name: "JavaScript", color: "bg-yellow-400" },
  { name: "TypeScript", color: "bg-blue-500" },
  { name: "React", color: "bg-cyan-400" },
  { name: "Next.js", color: "bg-black" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "Express", color: "bg-gray-600" },
  { name: "MongoDB", color: "bg-green-600" },
  { name: "PostgreSQL", color: "bg-blue-600" },
  { name: "Supabase", color: "bg-emerald-600" },
  { name: "TailwindCSS", color: "bg-sky-500" },
  { name: "Git", color: "bg-orange-600" },
  { name: "Docker", color: "bg-blue-700" },
]

const projects = [
  {
    title: "Yatra Corporate",
    description: "Travel Management Platform",
    longDescription: "Developed a comprehensive travel management solution for corporate clients. Improved web vitals from 60% to 95%, implementing performance optimizations and modern web practices.",
    image: "/placeholder.svg?height=200&width=400",
    tech: ["Next.js", "TypeScript", "Redux", "Node.js"],
    link: "https://github.com/yourusername/yatra"
  },
  {
    title: "Windwards Sailing Club",
    description: "Membership Management System",
    longDescription: "Built a full-featured membership and event management system for a sailing club. Implemented real-time booking and automated notification systems.",
    image: "/placeholder.svg?height=200&width=400",
    tech: ["React", "Firebase", "Stripe", "TailwindCSS"],
    link: "https://github.com/yourusername/windwards"
  },
  {
    title: "Comex Oman",
    description: "E-commerce Platform",
    longDescription: "Developed an e-commerce solution with multi-vendor support. Implemented advanced search and filtering capabilities, reducing page load times by 40%.",
    image: "/placeholder.svg?height=200&width=400",
    tech: ["Next.js", "MongoDB", "AWS", "Redux"],
    link: "https://github.com/yourusername/comex"
  },
  {
    title: "Growth School",
    description: "Learning Management System",
    longDescription: "Created an interactive learning platform with live sessions support and progress tracking. Improved user engagement by 65% through gamification features.",
    image: "/placeholder.svg?height=200&width=400",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    link: "https://github.com/yourusername/growth-school"
  }
]

const education = [
  {
    level: "Bachelor of Technology",
    institution: "MITS Gwalior",
    score: "7.0 CGPA",
    year: "2020-2024",
    description: "Specialized in Computer Science and Engineering with focus on web technologies and software development."
  },
  {
    level: "12th Standard",
    institution: "Your School Name",
    score: "85.4%",
    year: "2020",
    description: "Completed senior secondary education with focus on Physics, Chemistry, and Mathematics."
  },
  {
    level: "10th Standard",
    institution: "Your School Name",
    score: "85.6%",
    year: "2018",
    description: "Completed secondary education with distinction."
  }
]

function ScrollToTopButton() {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setVisible(latest > 0.2)
    })
  }, [scrollYProgress])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.button
      className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </motion.button>
  )
}

function Skills() {
  const colors = ["from-primary", "from-blue-500", "from-green-500", "from-yellow-500"]
  
  return (
    <section id="skills" className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.05 
              }}
              className={`px-6 py-3 rounded-full backdrop-blur-md bg-gradient-to-r ${colors[index % colors.length]} to-transparent border border-primary/20`}
            >
              <span className="font-medium text-foreground mix-blend-difference">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="gap-2">
                      View Details <ArrowRight className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <p className="mb-4">{project.longDescription}</p>
                      <Button asChild>
                        <Link href={project.link} target="_blank">
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  const scaleSpring = useSpring(1, {
    stiffness: 100,
    damping: 10
  })

  return (
    <section id="education" className="py-20 bg-muted/50 overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>
        <div className="flex flex-col items-center">
          {education.map((edu, index) => (
            <motion.div
              key={edu.level}
              className="relative w-full max-w-3xl"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`
                  bg-card rounded-xl p-6 shadow-lg mb-8
                  ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}
                  w-full md:w-2/3
                `}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{edu.level}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2 mb-4">
                      <span className="text-muted-foreground">{edu.year}</span>
                      <span className="font-semibold text-primary">{edu.score}</span>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Component() {
  return (
    <>
      <Skills />
      <Projects />
      <Education />
      <ScrollToTopButton />
    </>
  )
}