import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Crear el cuerpo del email
      const emailBody = `
Nuevo mensaje de contacto desde ROMA Tech:

Nombre: ${formData.name}
Email: ${formData.email}

Mensaje:
${formData.message}

---
Enviado desde el sitio web de ROMA Tech
      `;

      // Crear el enlace mailto
      const mailtoLink = `mailto:jangelmalave@gmail.com?subject=Nuevo mensaje de contacto - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Abrir el cliente de correo
      window.location.href = mailtoLink;

      toast({
        title: "¡Mensaje enviado!",
        description: "Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.",
      });

      // Limpiar el formulario
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
          <Input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input pl-12 h-12 rounded-lg"
          />
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
          <Input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input pl-12 h-12 rounded-lg"
          />
        </motion.div>
      </div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <MessageSquare className="absolute left-3 top-4 text-white/60 w-5 h-5" />
        <Textarea
          name="message"
          placeholder="Cuéntanos sobre tu proyecto..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="form-input pl-12 rounded-lg resize-none"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full h-12 rounded-lg font-semibold text-lg flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar Mensaje
            </>
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;