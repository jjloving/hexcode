"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

export function ResumeHeader() {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Ezekiel_Chimuka_Oputa_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-4 mb-12"
    >
      <h1 className="text-4xl font-bold text-gray-200">Resume</h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Full Stack Developer with expertise in Python, Next.js, React, and React Native
      </p>
      <Button onClick={handleDownload}>
        <Download className="mr-2 h-4 w-4" /> Download PDF
      </Button>
    </motion.div>
  )
}