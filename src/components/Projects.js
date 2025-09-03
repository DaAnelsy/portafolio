import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiCode, FiStar, FiEye, FiArrowDown } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython, FaJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript } from 'react-icons/si';
import ecommerceImage from '../assets/ecommerceCblazor.png';
import taskImage from '../assets/task.png';
import IAcontentGenImage from '../assets/IAcontentGenerator.png';
import movieFinderImagen from '../assets/movieFinder.png';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma completa de comercio electrónico con dashboard de administración, carrito de compras, procesamiento de pagos y sistema de inventario.",
      image: ecommerceImage,
      technologies: ["Blazor", ".Net", "SQL Server"],
      category: "fullstack",
      github: "https://github.com/DaAnelsy/Ecommerce",
      demo: ecommerceImage,
      features: ["Autenticación JWT", "Pagos Stripe", "Panel Admin", "Responsive Design"],
      status: "Completado",
      stars: 24
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real, asignación de tareas y seguimiento de progreso.",
      image: taskImage,
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      category: "frontend",
      github: "https://github.com/DaAnelsy/TaskManagement",
      demo: taskImage,
      features: ["Tiempo Real", "Drag & Drop", "Colaboración", "Notificaciones"],
      status: "Completado",
      stars: 18
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "Herramienta de generación de contenido impulsada por IA que ayuda a crear textos, títulos y descripciones para marketing y redes sociales.",
      image: IAcontentGenImage,
      technologies: ["Python", "Flask", "OpenAI API", "React"],
      category: "ai",
      github: "https://github.com/DaAnelsy/AIContentGenerator",
      demo: IAcontentGenImage,
      features: ["OpenAI Integration", "Templates", "Export Options", "API Rest"],
      status: "Completado", //En desarrollo por pago
      stars: 32
    },
    {
      id: 4,
      title: "Movie Finder",
      description: "Movie Finder es una aplicación web moderna desarrollada con Angular que permite a los usuarios buscar y explorar información detallada sobre película.",
      image: movieFinderImagen,
      technologies: ["Angular", "TypeScript", "OMDb API (RESTful)", "css"],
      category: "frontend",
      github: "https://github.com/DaAnelsy/MovieFinder",
      demo: "https://movie-finder-gray-iota.vercel.app",
      features: ["Búsqueda en tiempo real", "Integración con OMDb API", "Change Detection Strategy"],
      status: "Completado",
      stars: 15
    }
  ];

  const filters = [
    { id: 'all', name: 'Todos', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'ai', name: 'IA/ML', count: projects.filter(p => p.category === 'ai').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTechIcon = (tech) => {
    const icons = {
      'React': <FaReact className="text-blue-500" />,
      'Node.js': <FaNodeJs className="text-green-500" />,
      'Python': <FaPython className="text-yellow-500" />,
      'JavaScript': <FaJs className="text-yellow-400" />,
      'TypeScript': <SiTypescript className="text-blue-600" />,
      'MongoDB': <SiMongodb className="text-green-600" />,
      'PostgreSQL': <SiPostgresql className="text-blue-700" />,
      'Tailwind': <SiTailwindcss className="text-cyan-500" />,
    };
    return icons[tech] || <FiCode className="text-gray-500" />;
  };

  return (
    <section id="proyectos" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mis <span className="bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y pasión por crear soluciones innovadoras
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-dark-700 text-gray-600 dark:text-black-300 hover:bg-primary-50 dark:hover:bg-dark-600 shadow-md hover:shadow-lg'
              }`}
            >
              <span>{filter.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeFilter === filter.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 dark:bg-dark-600 text-gray-500 dark:text-gray-400'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={20} className="text-white" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={20} className="text-white" />
                  </a>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completado'
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title and Stars */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <FiStar size={16} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{project.stars}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 px-3 py-1 bg-black-100 dark:bg-dark-500 rounded-full text-sm"
                    >
                      {getTechIcon(tech)}
                      <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Características clave:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={16} />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiEye size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            ¿Interesado en trabajar conmigo?
          </p>
  
          <a 
            href='https://github.com/DaAnelsy'
            className="btn-primary group inline-flex items-center justify-center"
          >
            <span>Ver todos los proyectos en GitHub</span>
              <FiArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;