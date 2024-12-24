export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A responsive e-commerce website built with HTML, CSS, and JavaScript, featuring a modern design and smooth user experience",
    image: "/images/projects/ecom.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com",
    demoUrl: "https://hexocode24.github.io/ShopEase/"
  },
  {
    id: 2,
    title: "Mobile Exommerce App",
    description: "Secure and intuitive mobile ecommerce application",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    tags: ["React Native", "Node.js", "TypeScript"],
    link: "https://github.com",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "Content generation platform powered by machine learning",
    image: "/images/projects/1.png",
    tags: ["Python", "TensorFlow", "FastAPI", "Vite React"],
    link: "https://github.com",
    demoUrl: "https://ai-content-gen.vercel.app"
  },
  {
    id: 4,
    title: "AI Python Mod",
    description: "AI Motion Detector, Traffic Sign Recognition, and Face Recognition",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["OpenCV", "Python", "TensorFlow", "FastAPI",],
    link: "https://github.com",
    demoUrl: "#"
  },

  {
    id: "graphics-1",
    title: "Modern Brand Identity",
    description: "Complete brand identity design including logo, color palette, and brand guidelines",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=400&fit=crop",
    tags: ["Graphics Design"],
    link: "https://behance.net/yourusername",
    type: "design",
    demoUrl: "https://behance.net/project/brand-identity"
  },
  {
    id: "graphics-2",
    title: "Digital Art Collection",
    description: "Series of digital illustrations and artwork for various clients",
    image: "/images/projects/PASTORS.jpg",
    tags: ["Graphics Design"],
    // link: "https://behance.net/yourusername",
    type: "design",
    demoUrl: "https://behance.net/project/digital-art"
  },
  {
    id: "graphics-3",
    title: "Marketing Campaign Assets",
    description: "Social media graphics and marketing materials for product launch",
    image: "/images/projects/logo.png",
    tags: ["Graphics Design"],
    link: "https://behance.net/yourusername",
    type: "design",
    demoUrl: "https://behance.net/project/marketing-campaign"
  },
  {
    id: "animation-1",
    title: "Product Animation for Smart Airpod",
    description: "Dynamic 3D animation showcasing smart earbuds design, features, and seamless user experience",
    image: "/images/projects/airpod.png",
    tags: ["3D Animation", "Product Design"],
    link: "https://vimeo.com/yourusername",
    type: "animation",
    videoUrl: "/videos/4.mp4"
  },
  {
    id: "animation-2",
    title: "Product Visualization",
    description: "3D product animation and visualization for tech company",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=400&fit=crop",
    tags: ["3D Animation"],
    link: "https://vimeo.com/yourusername",
    type: "animation",
    videoUrl: "/videos/2.mp4"
  },
  {
    id: "animation-3",
    title: "Product Animation in Blender",
    description: "Elegant perfume bottle animation created for luxury fragrance brand, showcasing product details and brand aesthetics",
    image: "/images/projects/perfume.png",
    tags: ["3D Animation", "Blender"],
    link: "https://vimeo.com/yourusername",
    type: "animation",
    videoUrl: "/videos/5.mp4"
  },
  {
    id: "mixed-1",
    title: "Perfume Animation in Blender",
    description: "Stunning 3D perfume bottle animation created with Blender, featuring realistic materials and dynamic camera movements",
    image: "/images/projects/perfume.png",
    tags: ["Blender", "3D Animation"],
    link: "https://github.com/yourusername/3d-web",
    type: "animation",
    videoUrl: "/videos/3.mp4"
  },
  {
    id: "mixed-2",
    title: "Digital Marketing Package",
    description: "Combined web design and graphics package for startup",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    tags: ["Next.js", "Graphics Design"],
    link: "https://github.com/yourusername/marketing-site",
    type: "design",
    demoUrl: "https://behance.net/project/digital-marketing"
  }
]

// Add TypeScript interface for project type
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  demoUrl?: string;
  type?: 'design' | 'animation';
  videoUrl?: string;
}