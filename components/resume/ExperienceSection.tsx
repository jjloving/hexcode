"use client"

import { motion } from "framer-motion"
import { Badge } from "../ui/badge"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Led development of enterprise-level web applications using Next.js and Python.",
    achievements: [
      "Implemented microservices architecture reducing system latency by 40%",
      "Mentored junior developers and conducted code reviews",
      "Developed CI/CD pipelines improving deployment efficiency",
    ],
    technologies: ["Next.js", "Python", "AWS", "Docker"]
  },
  {
    title: "Mobile Developer",
    company: "Mobile Solutions Ltd.",
    period: "2019 - 2021",
    description: "Developed cross-platform mobile applications using React Native.",
    achievements: [
      "Built and launched 5 successful mobile applications",
      "Implemented real-time features using WebSocket",
      "Optimized app performance improving load times by 50%",
    ],
    technologies: ["React Native", "TypeScript", "Redux", "Firebase"]
  },
  {
    title: "Full Stack Developer",
    company: "Web Creators Co.",
    period: "2017 - 2019",
    description: "Developed and maintained web applications for various clients.",
    achievements: [
      "Created responsive web applications using React",
      "Integrated third-party APIs and payment gateways",
      "Implemented automated testing reducing bugs by 30%",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

export function ExperienceSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-200 mb-6">Work Experience</h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-6 space-y-4"
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-200">{exp.title}</h3>
                <p className="text-blue-400">{exp.company}</p>
              </div>
              <span className="text-gray-400">{exp.period}</span>
            </div>
            <p className="text-gray-300">{exp.description}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}