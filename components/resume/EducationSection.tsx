"use client"

import { motion } from "framer-motion"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Tech University",
    period: "2013 - 2017",
    description: "Graduated with honors. Specialized in Software Engineering and Artificial Intelligence."
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

export function EducationSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-200 mb-6">Education</h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-6"
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-200">{edu.degree}</h3>
                <p className="text-blue-400">{edu.institution}</p>
              </div>
              <span className="text-gray-400">{edu.period}</span>
            </div>
            <p className="text-gray-300 mt-4">{edu.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}