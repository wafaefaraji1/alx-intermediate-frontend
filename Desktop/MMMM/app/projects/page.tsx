'use client';

import { useEffect, useState } from 'react';
import { ExternalLink, Github, Globe, Smartphone, Brain, Palette, Database, Code } from 'lucide-react';

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const projects = [
    {
      id: 1,
      title: "Aurora UI Kit",
      description: "A comprehensive design system with 200+ components featuring soft gradients and elegant animations.",
      category: "frontend",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
      github: "#",
      demo: "#",
      icon: <Palette className="h-6 w-6" />,
      color: "pink"
    },
    {
      id: 2,
      title: "MindfulChat AI",
      description: "An empathetic AI chatbot designed to provide mental health support with a focus on female perspectives.",
      category: "ai",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "TensorFlow", "NLP", "FastAPI"],
      github: "#",
      demo: "#",
      icon: <Brain className="h-6 w-6" />,
      color: "purple"
    },
    {
      id: 3,
      title: "EcoTracker Mobile",
      description: "A beautifully designed mobile app for tracking personal carbon footprint with gamification elements.",
      category: "mobile",
      image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React Native", "TypeScript", "Firebase", "Redux"],
      github: "#",
      demo: "#",
      icon: <Smartphone className="h-6 w-6" />,
      color: "green"
    },
    {
      id: 4,
      title: "FlexiAPI Gateway",
      description: "A robust microservices API gateway with built-in rate limiting, authentication, and monitoring.",
      category: "backend",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Node.js", "Express", "Redis", "Docker"],
      github: "#",
      demo: "#",
      icon: <Database className="h-6 w-6" />,
      color: "blue"
    },
    {
      id: 5,
      title: "CreativeCode Portfolio",
      description: "An interactive portfolio platform showcasing creative coding projects with WebGL animations.",
      category: "frontend",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Three.js", "GSAP", "Vue.js", "WebGL"],
      github: "#",
      demo: "#",
      icon: <Code className="h-6 w-6" />,
      color: "orange"
    },
    {
      id: 6,
      title: "WellnessML Platform",
      description: "Machine learning platform analyzing wellness patterns and providing personalized health insights.",
      category: "ai",
      image: "https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "Scikit-learn", "Django", "PostgreSQL"],
      github: "#",
      demo: "#",
      icon: <Brain className="h-6 w-6" />,
      color: "teal"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 glitch-text bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            From elegant user interfaces to powerful AI systems, explore the magical solutions we've crafted 
            where creativity meets cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/80 text-gray-600 border border-pink-200 hover:border-pink-400 hover:text-pink-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="card-hover bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-pink-200 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`p-2 bg-${project.color}-500 text-white rounded-lg`}>
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-pink-100 text-pink-600 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl border border-pink-200">
            <Globe className="h-16 w-16 text-pink-500 mx-auto mb-6" />
            <h2 className="text-3xl font-orbitron font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're always excited to collaborate on new projects that push the boundaries of what's possible. 
              Let's create something magical together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start a Collaboration
              </a>
              <a 
                href="/join"
                className="border-2 border-pink-400 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}