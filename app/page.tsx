import { Button } from "@/components/ui/button"
import { ProjectCarousel } from "@/components/home/ProjectCarousel"
import { MotionSection, MotionDiv, MotionH1, MotionP } from "@/components/motion/MotionSection"
import Link from "next/link"
import { ArrowRight, Code, Rocket, Palette, Film, Mail } from "lucide-react"
import { ProjectCard } from "@/components/home/ProjectCard"
import Image from "next/image"

const FEATURED_PROJECTS = [
  {
    title: "ShopEase E-Commerce",
    description: "A modern e-commerce platform with a clean interface, product catalog, and shopping cart functionality",
    image: "https://raw.githubusercontent.com/hexocode24/ShopEase/main/images/hero-1.jpg",
    technologies: ["Next.js", "MongoDB", "TailwindCSS"],
    demoUrl: "https://hexocode24.github.io/ShopEase/"
  },
  {
    title: "3D Game Environment",
    description: "An immersive 3D game environment with dynamic lighting, physics, and interactive elements created in Unreal Engine.",
    image: "https://images.pexels.com/photos/7887135/pexels-photo-7887135.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop",
    technologies: ["Unreal Engine", "Blender", "C++", "3D Modeling"]
  },
  {
    title: "Real-time Object Detection",
    description: "Advanced computer vision system that detects and tracks multiple objects in real-time using deep learning models.",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop",
    technologies: ["Python", "TensorFlow", "YOLO", "OpenCV"]
  },
  {
    title: "3D Facial Motion Capture",
    description: "AI-powered facial tracking system that captures and analyzes facial expressions for animation and research purposes.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop",
    technologies: ["Python", "MediaPipe", "TensorFlow", "Blender"]
  },
  {
    title: "2D Character Animation",
    description: "A collection of animated characters and scenes for a storytelling app, featuring smooth transitions and expressive movements.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop",
    technologies: ["After Effects", "Illustrator", "Lottie", "React"]
  },
  {
    title: "Creative Brand Design",
    description: "Comprehensive brand identity design including logos, marketing materials, and visual guidelines for modern businesses.",
    image: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop",
    technologies: ["Photoshop", "Illustrator", "Figma", "InDesign"]
  },
  {
    title: "AI Image Analysis Suite",
    description: "Comprehensive AI toolkit for image processing, including object detection, facial recognition, and scene understanding.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop",
    technologies: ["Python", "TensorFlow", "PyTorch", "FastAPI"]
  }
] as const;

const TECHNOLOGIES = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "TypeScript", icon: "📘" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "���" }
    ]
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "TensorFlow", icon: "🧠" },
      { name: "PyTorch", icon: "🔥" },
      { name: "OpenCV", icon: "👁️" },
      { name: "YOLO", icon: "🎯" }
    ]
  },
  {
    category: "Design & Animation",
    items: [
      { name: "Blender", icon: "🎨" },
      { name: "After Effects", icon: "🎬" },
      { name: "Photoshop", icon: "🖌️" },
      { name: "Illustrator", icon: "✒️" }
    ]
  },
  {
    category: "Development Tools",
    items: [
      { name: "Git", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "VS Code", icon: "💻" },
      { name: "MongoDB", icon: "🗃️" }
    ]
  }
];

export default function Home() {
  return (
    <div className="space-y-24 overflow-x-hidden">
      {/* Hero Section */}
      <MotionSection 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 py-20"
      >
        <div className="relative">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-400">
            <Image
              src="/images/profile/ezekiel.jpg"
              alt="Ezekiel Chimuka Oputa"
              fill
              className="object-cover"
              priority
            />
          </div>
          <MotionH1 
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-200 bg-clip-text text-transparent animate-gradient">
              Welcome to Hexo Code
            </span>
          </MotionH1>
          <MotionDiv 
            className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <MotionP 
          className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Crafting innovative digital solutions with cutting-edge technology and creative excellence.
        </MotionP>

        <MotionDiv 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button size="lg" className="group" asChild>
            <Link href="/projects">
              View Projects 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="hover:bg-blue-950/50" asChild>
            <Link href="/about">About Me</Link>
          </Button>
        </MotionDiv>
      </MotionSection>

      {/* Services Section */}
      <MotionSection 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-4xl font-bold text-center text-gray-200">What I Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              icon: <Code className="h-8 w-8" />,
              title: "Web Development",
              description: "Building responsive and modern web applications"
            },
            {
              icon: <Rocket className="h-8 w-8" />,
              title: "Mobile Apps",
              description: "Creating cross-platform mobile experiences"
            },
            {
              icon: <Film className="h-8 w-8" />,
              title: "2D & 3D Animation",
              description: "Crafting engaging animated content and motion graphics"
            },
            {
              icon: <Palette className="h-8 w-8" />,
              title: "Graphics Design",
              description: "Creating stunning visuals and brand identities"
            }
          ].map((service, index) => (
            <MotionDiv
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-950/50 to-purple-950/50 p-6 rounded-xl border border-blue-900/50 hover:border-blue-500/50 transition-colors group"
            >
              <div className="space-y-4">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-200">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </MotionSection>

      {/* Featured Projects Carousel */}
      <MotionSection 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-4xl font-bold text-center text-gray-200">Featured Projects</h2>
        <div className="px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {FEATURED_PROJECTS.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <Button size="lg" variant="outline" className="group" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Skills Section */}
      <MotionSection 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-4xl font-bold text-center text-gray-200">Technologies I Work With</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {TECHNOLOGIES.map((category, categoryIndex) => (
            <MotionDiv
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-200 border-b border-blue-900/50 pb-2">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((tech, techIndex) => (
                  <MotionDiv
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (techIndex * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-950/50 to-purple-950/50 p-4 rounded-xl border border-blue-900/50 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <div>
                        <p className="text-gray-200 font-medium group-hover:text-blue-400 transition-colors">
                          {tech.name}
                        </p>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Additional Skills Indicator */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm">
            And many more technologies in my toolkit...
          </p>
        </MotionDiv>
      </MotionSection>

      {/* Contact CTA */}
      <MotionSection 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-32"
      >
        {/* Background Elements */}
        <MotionDiv
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/50 to-purple-950/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,rgba(0,0,0,0)_50%)]" />
        </MotionDiv>

        <div className="max-w-6xl mx-auto px-4 text-center space-y-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Whether it's AI development, animation, or creative design,
              I'm ready to bring your vision to life.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Quick Response",
                description: "Get a response within 24 hours",
                icon: "⚡"
              },
              {
                title: "Free Consultation",
                description: "Discuss your project needs",
                icon: "💡"
              },
              {
                title: "Custom Solutions",
                description: "Tailored to your requirements",
                icon: "🎯"
              }
            ].map((feature, index) => (
              <MotionDiv
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 rounded-xl p-6 text-center"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-gray-200 font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </MotionDiv>
            ))}
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="pt-8 space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="group min-w-[200px]" asChild>
                <Link href="/contact">
                  Start a Project
                  <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group min-w-[200px]" asChild>
                <Link href="mailto:ezekieloputa0@gmail.com">
                  Send Email
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <p className="text-gray-400 text-sm">
              Or connect with me on{' '}
              <Link href="https://linkedin.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                LinkedIn
              </Link>
              {' '}for professional inquiries
            </p>
          </MotionDiv>
        </div>
      </MotionSection>
    </div>
  )
}