// Skills.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, Database, Settings, Smartphone, Cloud } from 'lucide-react';

// Iconos de react-icons
import { FaReact, FaNodeJs, FaPython, FaJava, FaPhp, FaGitAlt, FaDocker, FaBeer, FaMicrosoft } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiVuedotjs, SiAngular, SiCss3, SiSass, SiBootstrap, SiVercel, SiNetlify } from 'react-icons/si';
import { DiMongodb, DiPostgresql, DiMysql } from 'react-icons/di';
import { SiFirebase, SiFlutter, SiSwift, SiKotlin, SiIonic, SiSupabase, SiSpringboot, SiLaravel, SiGooglecloud, SiExpress } from 'react-icons/si';

function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-purple-600',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'React', level: 95, color: 'bg-blue-500', icon: <FaReact className="w-6 h-6 text-white" />, description: 'Biblioteca de JavaScript' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600', icon: <SiTypescript className="w-6 h-6 text-white" />, description: 'JavaScript tipado' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500', icon: <SiJavascript className="w-6 h-6 text-white" />, description: 'Lenguaje fundamental' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500', icon: <SiTailwindcss className="w-6 h-6 text-white" />, description: 'Framework CSS' },
        { name: 'Angular', level: 78, color: 'bg-red-600', icon: <SiAngular className="w-6 h-6 text-white" />, description: 'Framework robusto' },
        { name: 'CSS3', level: 92, color: 'bg-blue-400', icon: <SiCss3 className="w-6 h-6 text-white" />, description: 'Estilos avanzados' },
        { name: 'SASS/SCSS', level: 85, color: 'bg-pink-500', icon: <SiSass className="w-6 h-6 text-white" />, description: 'Preprocesador CSS' },
        { name: 'Bootstrap', level: 88, color: 'bg-purple-600', icon: <SiBootstrap className="w-6 h-6 text-white" />, description: 'Framework CSS' }
      ]
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-600',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 88, color: 'bg-green-500', icon: <FaNodeJs className="w-6 h-6 text-white" />, description: 'Runtime JavaScript' },
        { name: 'Express.js', level: 85, color: 'bg-gray-700', icon: <SiExpress className="w-6 h-6 text-white" />, description: 'Framework web' },
        { name: 'Python', level: 80, color: 'bg-yellow-600', icon: <FaPython className="w-6 h-6 text-white" />, description: 'Lenguaje versátil' },
        { name: 'Java', level: 82, color: 'bg-red-600', icon: <FaJava className="w-6 h-6 text-white" />, description: 'Lenguaje empresarial' },
        { name: 'Spring Boot', level: 79, color: 'bg-red-300', icon: <SiSpringboot className="w-6 h-6 text-white" />, description: 'Framework Java' },
        { name: 'PHP', level: 85, color: 'bg-indigo-600', icon: <FaPhp className="w-6 h-6 text-white" />, description: 'Lenguaje web' },
        { name: 'Laravel', level: 73, color: 'bg-red-400', icon: <SiLaravel className="w-6 h-6 text-white" />, description: 'Framework PHP' },
        { name: 'C#', level: 80, color: 'bg-blue-700', icon: <FaBeer className="w-6 h-6 text-white" />, description: 'Lenguaje Microsoft' }
      ]
    },
    {
      title: 'Mobile Development',
      color: 'from-purple-500 to-pink-600',
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: 'React Native', level: 85, color: 'bg-blue-600', icon: <FaReact className="w-6 h-6 text-white" />, description: 'Desarrollo móvil' },
        { name: 'Flutter', level: 80, color: 'bg-blue-400', icon: <SiFlutter className="w-6 h-6 text-white" />, description: 'Framework Google' },
        { name: 'Kotlin', level: 78, color: 'bg-purple-600', icon: <SiKotlin className="w-6 h-6 text-white" />, description: 'Lenguaje Android' },
        { name: 'Ionic', level: 72, color: 'bg-blue-500', icon: <SiIonic className="w-6 h-6 text-white" />, description: 'Framework híbrido' },
      ]
    },
    {
      title: 'Database & Tools',
      color: 'from-orange-500 to-red-600',
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: 'MongoDB', level: 85, color: 'bg-green-600', icon: <DiMongodb className="w-6 h-6 text-white" />, description: 'Base NoSQL' },
        { name: 'PostgreSQL', level: 92, color: 'bg-blue-800', icon: <DiPostgresql className="w-6 h-6 text-white" />, description: 'Base relacional' },
        { name: 'MySQL', level: 90, color: 'bg-blue-600', icon: <DiMysql className="w-6 h-6 text-white" />, description: 'Base de datos' },
        { name: 'SupaBase', level: 90, color: 'bg-green-800', icon: <SiSupabase className="w-6 h-6 text-white" />, description: 'Cache en memoria' },
        { name: 'Git', level: 90, color: 'bg-orange-700', icon: <FaGitAlt className="w-6 h-6 text-white" />, description: 'Control de versiones' },
        { name: 'Docker', level: 75, color: 'bg-blue-600', icon: <FaDocker className="w-6 h-6 text-white" />, description: 'Contenedorización' },
        { name: 'Kubernetes', level: 70, color: 'bg-blue-500', icon: <SiGooglecloud className="w-6 h-6 text-white" />, description: 'Orquestación' },
        { name: 'Firebase', level: 83, color: 'bg-red-500', icon: <SiFirebase className="w-6 h-6 text-white" />, description: 'Backend como servicio' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      color: 'from-cyan-500 to-blue-600',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'Azure', level: 75, color: 'bg-blue-600', icon: <FaMicrosoft className="w-6 h-6 text-white" />, description: 'Microsoft Cloud' },
        { name: 'Google Cloud', level: 73, color: 'bg-red-500', icon: <SiGooglecloud className="w-6 h-6 text-white" />, description: 'Google Cloud Platform' },
        { name: 'Vercel', level: 85, color: 'bg-black', icon: <SiVercel className="w-6 h-6 text-white" />, description: 'Plataforma deployment' },
        { name: 'Netlify', level: 82, color: 'bg-teal-500', icon: <SiNetlify className="w-6 h-6 text-white" />, description: 'JAMstack platform' },
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mis <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Habilidades</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tecnologías y herramientas que uso para crear experiencias digitales excepcionales
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="w-full flex-shrink-0 p-8">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white mr-3`}>
                        {category.icon}
                      </div>
                      <h3 className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.title}
                      </h3>
                    </div>
                    <div className={`w-20 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            {skill.icon}
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">{skill.level}%</span>
                          </div>
                        </div>

                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {skill.description}
                        </p>

                        <div className="relative">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <div
                            className={`absolute top-0 w-2 h-2 ${skill.color} rounded-full transform -translate-y-0 transition-all duration-1000 ease-out`}
                            style={{ left: `${skill.level - 1}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {skillCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Siempre Aprendiendo
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              La tecnología evoluciona constantemente y yo evoluciono con ella.
              Actualmente explorando nuevas tecnologías emergentes y mejorando mis habilidades existentes.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'GraphQL', 'Rust', 'Go', 'WebAssembly', 'Machine Learning'].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;