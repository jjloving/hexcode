"use client"

import { motion } from "framer-motion"

const skills = {
  "Programming Languages": ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  "Frontend": ["React", "Next.js", "React Native", "TailwindCSS", "Redux"],
  "Backend": ["Node.js", "Express", "Django", "FastAPI"],
  "Databases": ["MongoDB", "PostgreSQL", "Redis"],
  "DevOps & Tools": ["Git", "Docker", "AWS", "CI/CD", "Jest"]
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
}

export function SkillsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-200 mb-6">Technical Skills</h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {Object.entries(skills).map(([category, skillList]) => (
          <motion.div
            key={category}
            variants={item}
            className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-blue-400 mb-4">{category}</h3>
            <div className="space-y-2">
              {skillList.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-blue-400 rounded-full" />
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}