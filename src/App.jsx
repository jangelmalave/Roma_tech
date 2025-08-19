import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import ContactForm from '@/components/ContactForm';
import { Code, Shield, Monitor, ChevronDown, Zap, Users, Award } from 'lucide-react';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Code,
      title: "Desarrollo de Software",
      description: "Creamos soluciones de software personalizadas utilizando las últimas tecnologías y mejores prácticas de la industria.",
      features: ["Aplicaciones Web", "Apps Móviles", "APIs REST", "Microservicios"]
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description: "Protegemos tu infraestructura digital con soluciones avanzadas de seguridad y monitoreo continuo.",
      features: ["Auditorías de Seguridad", "Pentesting", "Monitoreo 24/7", "Respuesta a Incidentes"]
    },
    {
      icon: Monitor,
      title: "Consultoría IT",
      description: "Asesoramos en la transformación digital de tu empresa con estrategias tecnológicas innovadoras.",
      features: ["Arquitectura de Sistemas", "Cloud Computing", "DevOps", "Automatización"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>ROMA Tech - Soluciones Tecnológicas Innovadoras</title>
        <meta name="description" content="Impulsamos el futuro con tecnología de vanguardia. Desarrollo de software, ciberseguridad y consultoría IT para empresas modernas." />
        <meta property="og:title" content="ROMA Tech - Soluciones Tecnológicas Innovadoras" />
        <meta property="og:description" content="Impulsamos el futuro con tecnología de vanguardia. Desarrollo de software, ciberseguridad y consultoría IT para empresas modernas." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="circuit-bg min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="tech-lines"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src="https://horizons-cdn.hostinger.com/675f8b8a-248c-45ae-9d98-32dbdbfef13b/826251114869de4253dde46d7e82f497.png" 
                alt="ROMA Tech Logo" 
                className="mx-auto h-32 md:h-40 animate-float"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
            >
              SOLUCIONES TECNOLÓGICAS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                INNOVADORAS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Impulsamos el futuro con tecnología de vanguardia
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button
                onClick={() => scrollToSection('services')}
                className="btn-primary px-8 py-4 text-lg font-semibold rounded-full flex items-center gap-3"
              >
                <Zap className="w-5 h-5" />
                COMENZAR
              </Button>
              
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="glass-effect border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Contactar
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <ChevronDown 
                className="w-8 h-8 text-white/60 animate-bounce cursor-pointer"
                onClick={() => scrollToSection('services')}
              />
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-cyan-400/20 rounded-full animate-float"></div>
          <div className="absolute top-1/2 right-8 w-12 h-12 bg-blue-400/30 rounded-full animate-pulse-slow"></div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 tech-pattern">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                NUESTROS SERVICIOS
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="service-card p-8 rounded-2xl shadow-lg"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 circuit-bg">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Users, number: "100+", label: "Clientes Satisfechos" },
                { icon: Award, number: "50+", label: "Proyectos Completados" },
                { icon: Zap, number: "24/7", label: "Soporte Técnico" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 rounded-2xl"
                >
                  <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 circuit-bg">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                CONTÁCTANOS
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                ¿Listo para transformar tu negocio? Hablemos sobre tu próximo proyecto tecnológico
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <div className="glass-effect p-8 md:p-12 rounded-3xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-12">
          <div className="container mx-auto px-6 text-center">
            <img 
              src="Logo/RomaTech.png" 
              alt="ROMA Tech Logo" 
              className="mx-auto h-16 mb-6 opacity-80"
            />
            <p className="text-gray-400 mb-4">
              © 2024 ROMA Tech. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Impulsando el futuro con tecnología de vanguardia
            </p>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;