"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Code2, Menu, X } from 'lucide-react'
import { Button } from './ui/button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Resume', href: '/resume' },
  ]

  return (
    <nav className="bg-blue-950/50 backdrop-blur-sm border-b border-blue-900/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Hexo Code
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/admin">
              <Button variant="outline" className="ml-4">
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="outline" className="w-full">
                Admin
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar