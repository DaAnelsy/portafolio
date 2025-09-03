import React, { useEffect, useState } from 'react';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const texts = [
    'Desarrolladora Full Stack',
    'Especialista en React',
    'Creadora de experiencias digitales',
    'Apasionada por la tecnología'
  ];

  useEffect(() => {
    const typeText = () => {
      const current = texts[currentIndex];
      if (isTyping) {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsTyping(false), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsTyping(true);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(typeText, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isTyping, texts]);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-300">
                Dev
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-dark-800 animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="block">¡Hola! Soy</span>
              <span className="bg-gradient-to-r from-primary-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Daisy Abigail RL Desarrolladora
              </span>
            </h1>
            
            {/* Animated Text */}
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium">
                {currentText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Transformo ideas en experiencias digitales extraordinarias. 
              Especializada en crear aplicaciones web modernas, escalables y centradas en el usuario.
            </p>
          </div>

         {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#proyectos"
              className="btn-primary group inline-flex items-center justify-center"
            >
              <span>Ver mis proyectos</span>
              <FiArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            
            <a
              href="/CV-daisy-abigail.pdf"
              download="CV-Daisy-Abigail-Desarrolladora.pdf"
              className="inline-block px-6 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-center"
            >
              Descargar CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: FiGithub, href: '#contacto', label: 'GitHub' },
              { icon: FiLinkedin, href: '#contacto', label: 'LinkedIn' },
              { icon: FiMail, href: '#contacto', label: 'Email' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="group p-3 rounded-full bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300 hover:scale-110"
              >
                <social.icon 
                  size={20} 
                  className="text-gray-600 dark:text-gray-400 group-hover:text-primary-500 transition-colors duration-300" 
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;