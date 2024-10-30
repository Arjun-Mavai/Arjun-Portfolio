"use client"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Platform",
    description: "Built with Next.js 14, TypeScript, and Supabase",
    longDescription: "A full-featured e-commerce platform with authentication, cart management, and payment processing using Stripe. Implemented real-time updates and serverless functions.",
    link: "https://github.com/yourusername/ecommerce",
    tech: ["Next.js", "TypeScript", "Supabase", "Stripe"]
  },
  {
    title: "Task Management App",
    description: "React-based project management tool",
    longDescription: "Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
    link: "https://github.com/yourusername/task-manager",
    tech: ["React", "Redux", "Socket.io"]
  },
  // Add more projects
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="gap-2">
                    View More <ArrowRight className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="mb-4">{project.longDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button asChild>
                      <Link href={project.link} target="_blank">
                        View Project
                      </Link>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}