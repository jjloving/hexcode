"use client"

import { Button } from "@/components/ui/button"
import { Code2, Github, Linkedin, Mail, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

interface Skill {
  name: string;
  level: number;
  projects?: number;
}

export default function AboutPage() {
  const [activeSkillSet, setActiveSkillSet] = useState<'frontend' | 'backend' | 'graphics' | 'animation'>('frontend');

  const frontendSkills: Skill[] = [
    { name: "React & Next.js", level: 90, projects: 15 },
    { name: "React Native", level: 85, projects: 8 },
    { name: "TypeScript", level: 88, projects: 12 },
    { name: "TailwindCSS", level: 92, projects: 20 },
    { name: "HTML5 & CSS3", level: 95, projects: 25 }
  ];

  const backendSkills: Skill[] = [
    { name: "Python", level: 85, projects: 10 },
    { name: "Node.js", level: 82, projects: 8 },
    { name: "Express", level: 80, projects: 7 },
    { name: "MongoDB", level: 85, projects: 12 },
    { name: "PostgreSQL", level: 78, projects: 6 }
  ];

  const graphicsSkills: Skill[] = [
    { name: "Adobe Photoshop", level: 88, projects: 30 },
    { name: "Digital Illustration", level: 85, projects: 20 },
    { name: "Photo Manipulation", level: 90, projects: 25 },
    { name: "Logo Design", level: 85, projects: 15 },
    { name: "UI/UX Design", level: 82, projects: 10 }
  ];

  const animationSkills: Skill[] = [
    { name: "Blender 3D", level: 85, projects: 15 },
    { name: "3D Modeling", level: 80, projects: 12 },
    { name: "Character Animation", level: 75, projects: 8 },
    { name: "Rigging", level: 70, projects: 6 },
    { name: "Texture & Materials", level: 78, projects: 10 }
  ];

  return (
    <motion.div 
      className="max-w-4xl mx-auto space-y-16 p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Profile Section */}
      <motion.section 
        className="text-center space-y-6"
        variants={itemVariants}
      >
        <div className="relative w-48 h-48 mx-auto">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400">
            <Image
              src="/images/profile/ezekiel.jpg"
              alt="Profile"
              fill
              className="object-cover transition-transform hover:scale-110 duration-300"
            />
          </div>
        </div>
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl font-bold text-gray-200">Ezekiel Chimuka Oputa</h1>
          <p className="text-xl text-blue-400">Full Stack Developer</p>
        </motion.div>
        <motion.div 
          className="flex justify-center space-x-4"
          variants={itemVariants}
        >
          <Button 
            variant="outline" 
            size="icon" 
            className="hover:bg-blue-500/20 transition-colors"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="hover:bg-blue-500/20 transition-colors"
            asChild
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="hover:bg-blue-500/20 transition-colors"
            asChild
          >
            <a href="mailto:ezekieloputa0@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="space-y-6"
        variants={itemVariants}
      >
        <h2 className="text-3xl font-bold text-gray-200">About Me</h2>
        <div className="space-y-4 text-gray-300">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello! I'm a multidisciplinary creator specializing in full-stack development, graphics design, and 3D animation. My journey began with coding, but I've evolved to combine technical expertise with creative design, allowing me to build complete digital experiences from concept to deployment.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            In development, I craft responsive websites and mobile applications using React, Next.js, and React Native. My graphics design work focuses on creating stunning visuals with Adobe Photoshop, while I bring ideas to life through 3D modeling and animation using Blender. This unique combination allows me to handle every aspect of digital projects, from backend architecture to frontend design and engaging animations.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            When I'm not building applications or creating animations, I'm exploring new ways to merge technology with creative design. I'm passionate about creating immersive digital experiences that not only function flawlessly but also captivate users through beautiful design and smooth animations. My goal is to push the boundaries of what's possible in digital creation by combining code, design, and animation.
          </motion.p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="space-y-6"
        variants={itemVariants}
      >
        <h2 className="text-3xl font-bold text-gray-200">Technical Skills</h2>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant={activeSkillSet === 'frontend' ? 'default' : 'outline'}
              onClick={() => setActiveSkillSet('frontend')}
              className="min-w-[140px]"
            >
              Frontend Dev
            </Button>
            <Button
              variant={activeSkillSet === 'backend' ? 'default' : 'outline'}
              onClick={() => setActiveSkillSet('backend')}
              className="min-w-[140px]"
            >
              Backend Dev
            </Button>
            <Button
              variant={activeSkillSet === 'graphics' ? 'default' : 'outline'}
              onClick={() => setActiveSkillSet('graphics')}
              className="min-w-[140px]"
            >
              Graphics Design
            </Button>
            <Button
              variant={activeSkillSet === 'animation' ? 'default' : 'outline'}
              onClick={() => setActiveSkillSet('animation')}
              className="min-w-[140px]"
            >
              3D Animation
            </Button>
          </div>
          
          <motion.div
            key={activeSkillSet}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid gap-4"
          >
            {(() => {
              switch (activeSkillSet) {
                case 'frontend':
                  return frontendSkills;
                case 'backend':
                  return backendSkills;
                case 'graphics':
                  return graphicsSkills;
                case 'animation':
                  return animationSkills;
                default:
                  return frontendSkills;
              }
            })().map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-blue-950/30 p-4 rounded-lg border border-blue-900/50 hover:border-blue-400/50 transition-colors"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-200">{skill.name}</span>
                  <span className="text-blue-400">{skill.projects} projects</span>
                </div>
                <div className="h-2 bg-blue-950 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="text-center space-y-8 bg-blue-950/30 rounded-2xl p-12 border border-blue-900/50"
        variants={itemVariants}
      >
        <div className="space-y-4">
          <motion.h2 
            className="text-4xl font-bold text-gray-200 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Let's Create Something Amazing Together
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Whether you need a stunning website, captivating animations, or beautiful designs, 
            I'm here to turn your vision into reality. Let's collaborate and build something extraordinary.
          </motion.p>
        </div>

        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button 
            asChild
            size="lg"
            className="group bg-blue-500 hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            <Link href="mailto:ezekieloputa0@gmail.com">
              Start a Project
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="group hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/projects">
              View My Work
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        <motion.div 
          className="pt-6 border-t border-blue-900/50 mt-8 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>Available for freelance work and full-time opportunities</p>
          <p className="mt-2">Based in Nigeria • Open to Remote Work Worldwide</p>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}