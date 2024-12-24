import { Code2, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-950/50 backdrop-blur-sm border-t border-blue-900/50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Hexo Code
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Building innovative solutions with cutting-edge technology.
            </p>
          </div>

          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-blue-400 text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-gray-400 hover:text-blue-400 text-sm">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:ezekieloputa0@gmail.com" className="text-gray-400 hover:text-blue-400 text-sm flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  ezekieloputa0@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-900/50 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Hexo Code. All rights reserved.
        </div>
      </div>
    </footer>
  )
}