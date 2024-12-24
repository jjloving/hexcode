"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, ChevronDown, ChevronUp, Palette, Code, Server } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Progress } from "@/components/ui/progress"

interface SkillCategory {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  skills: { name: string; level: number }[];
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export default function ResumePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("skills");
  
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend Development",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "React Native", level: 80 },
      ]
    },
    {
      name: "Backend Development",
      icon: <Server className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "Python/Django", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "GraphQL", level: 70 },
      ]
    },
    {
      name: "Graphics & Animation",
      icon: <Palette className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "Adobe Photoshop", level: 85 },
        { name: "Blender 3D", level: 80 },
        { name: "3D Modeling", level: 75 },
        { name: "Character Animation", level: 70 },
      ]
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Git", level: 90 },
        { name: "CI/CD", level: 75 },
      ]
    }
  ];

  const experience: ExperienceItem[] = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Company",
      period: "2021 - Present",
      description: [
        "Led development of enterprise-scale applications",
        "Managed team of 5 developers",
        "Implemented CI/CD pipelines",
      ]
    },
    // Add more experience items...
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/path/to/your/resume.pdf';
    link.download = 'your_resume_name.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      {/* Add an id to the content we want to capture */}
      <div id="resume-content">
        {/* Header Section - Kept from original but with enhanced animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-400">
          <Image
              src="/images/profile/ezekiel.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-200">Ezekiel Chimuka Oputa</h1>
          <p className="text-xl text-blue-400">Full Stack Developer</p>
        </div>
        
        {/* Contact Links */}
        <div className="flex justify-center space-x-4">
          <a 
              href="mailto:ezekieloputa0@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </motion.div>

        {/* Interactive Sections */}
        <div className="space-y-4">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => toggleSection('skills')}
              className="w-full bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 flex justify-between items-center group hover:bg-blue-900/20 transition-colors"
            >
              <h2 className="text-2xl font-bold text-gray-200">Skills & Expertise</h2>
              <motion.div
                animate={{ rotate: expandedSection === 'skills' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-blue-400" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {expandedSection === 'skills' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 grid gap-6 md:grid-cols-2"
                >
                  {skillCategories.map((category, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: idx * 0.1 }}
                      className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-6 hover:border-blue-400/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        {category.icon}
                        <h3 className="text-xl font-semibold text-gray-200">{category.name}</h3>
                      </div>
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIdx) => (
                          <motion.div
                            key={skillIdx}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: (idx * 0.1) + (skillIdx * 0.1) }}
                          >
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-300">{skill.name}</span>
                              <span className="text-blue-400">{skill.level}%</span>
                            </div>
                            <div className="relative">
                              <Progress value={skill.level} className="h-2" />
                              <motion.div
                                className="absolute top-0 left-0 bottom-0 bg-blue-400/20"
                                initial={{ width: "0%" }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 1,
                                  delay: (idx * 0.1) + (skillIdx * 0.1),
                                  ease: "easeOut"
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => toggleSection('experience')}
              className="w-full bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 flex justify-between items-center"
            >
              <h2 className="text-2xl font-bold text-gray-200">Professional Experience</h2>
              {expandedSection === 'experience' ? <ChevronUp /> : <ChevronDown />}
            </button>
            
            {expandedSection === 'experience' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-4 space-y-4"
              >
                {experience.map((item, idx) => (
                  <div key={idx} className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-200">{item.role}</h3>
                    <div className="text-blue-400 mb-2">{item.company} | {item.period}</div>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      {item.description.map((desc, descIdx) => (
                        <li key={descIdx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Download Section - Keep this outside the resume-content div */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-8 text-center space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-200">Download Complete Resume</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Get a detailed overview of my professional experience, skills, and achievements in a comprehensive PDF format.
        </p>
        <Button 
          onClick={handleDownload} 
          size="lg" 
          className="px-8"
        >
          <Download className="mr-2 h-5 w-5" />
          Download PDF Resume
        </Button>
      </motion.div>
    </div>
  )
}