import React from 'react';
import { FiArrowDown, FiAward, FiUsers, FiCoffee } from 'react-icons/fi';

function About() {
  const stats = [
    { icon: FiAward, number: '2+', label: 'Años de Experiencia' },
    { icon: FiUsers, number: '20+', label: 'Proyectos Completados' },
    { icon: FiCoffee, number: '500+', label: 'Tazas de Café' },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Stats */}
          <div className="relative">
            {/* Profile Image */}
            <div className="relative w-full max-w-lg mx-auto">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 flex items-center justify-center text-8xl text-primary-300 dark:text-primary-700 shadow-2xl">
                <span className="font-bold">D.✅</span>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce-slow">
                <FiAward className="text-white text-2xl" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center shadow-xl">
                <FiCoffee className="text-white text-xl" />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-dark-800 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <stat.icon className="w-6 h-6 mx-auto text-primary-500 mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Sobre <span className="bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent">Mí</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Soy un desarrolladora apasionada con más de 2 años de experiencia creando 
                  soluciones digitales innovadoras. Mi enfoque se centra en escribir código 
                  limpio, escalable y centrado en el usuario.
                </p>
                
                <p>
                  Especializado en el ecosistema de JavaScript, trabajo principalmente con 
                  React, Node.js y tecnologías modernas. Me encanta enfrentar desafíos 
                  complejos y transformar ideas en productos digitales exitosos.
                </p>
                
                <p>
                  Cuando no estoy programando, disfruto aprendiendo nuevas tecnologías, 
                  contribuyendo a proyectos open source y compartiendo conocimiento con 
                  la comunidad de desarrolladores.
                </p>
              </div>
            </div>

            {/* Skills Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                <h4 className="font-semibold text-primary-700 dark:text-primary-300 mb-2">Frontend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">React, Vue.js, TypeScript, Tailwind CSS</p>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Backend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Node.js, Express, Java, PHP, C#, MongoDB, SQL Server, PostgreSQL, MySQL</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                    href="/CV-daisy-abigail.pdf"
                    download="CV-Daisy-Abigail-Desarrolladora.pdf"
                    className="inline-block px-6 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                    Descargar CV
                </a>

                <a 
                    href="#contacto"
                    className="btn-primary group inline-flex items-center justify-center"
                >
                    <span>Contactarme</span>
                    <FiArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;