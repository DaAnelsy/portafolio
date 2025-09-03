import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

function Footer() {
  const socialLinks = [
    { icon: <FiGithub />, name: 'GitHub', url: 'https://github.com/DaAnelsy' },
    { icon: <FiLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/daisy-abigail-rlopez-sistemas' },
    { icon: <FiMail />, name: 'Email', url: 'mailto:daisyabigail01@gmail.com' },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">
              Daisy Abiagil RL Desarrolladora
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Creando experiencias digitales excepcionales con tecnologías modernas. 
              Apasionada por el código limpio y las soluciones innovadoras.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg hover:bg-primary-500 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.name}
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Mantente Conectado</h4>
            <p className="text-gray-400 mb-4">
              ¿Interesado en colaborar? Envíame un mensaje.
            </p>
            
            <a
              href="mailto:daisyabigail01@gmail.com"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
            >
              <FiMail />
              <span>Contactar</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; {currentYear} Daisy Abigail RL Desarrolladora. Todos los derechos reservados.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Hecho con</span>
              <FiHeart className="text-red-500 animate-pulse" />
              <span>usando React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;