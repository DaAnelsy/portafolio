import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Configuración de EmailJS
      const serviceId = 'service_0vte00g'; // Reemplaza con tu Service ID
      const templateId = 'template_00mxohp'; // Reemplaza con tu Template ID
      const publicKey = 'LoaW1wKVl47JbYocR'; // Reemplaza con tu Public Key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'daisyabigail01@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Éxito
      alert('¡Mensaje enviado exitosamente! Te responderé pronto.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo o contáctame directamente.');
    }
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      info: 'daisyabigail01@gmail.com',
      link: 'mailto:daisyabigail01@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Teléfono',
      info: '+502 44675475',
      link: 'tel:+50244675475'
    },
    {
      icon: <FiMapPin />,
      title: 'Ubicación',
      info: 'Quetzaltenango, Guatemala',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <FiGithub />, name: 'GitHub', url: 'https://github.com/DaAnelsy' },
    { icon: <FiLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/daisy-abigail-rlopez-sistemas' },
  ];

  return (
    <section id="contacto" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trabajemos <span className="bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent">Juntos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center p-4 bg-gray-50 dark:bg-dark-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {item.info}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Sígueme en
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-2">¡Disponible para proyectos!</h3>
              <p className="text-primary-100">
                Actualmente acepto proyectos freelance y oportunidades de colaboración.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 text-gray-900 dark:text-white"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 text-gray-900 dark:text-white"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 text-gray-900 dark:text-white"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 text-gray-900 dark:text-white resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;