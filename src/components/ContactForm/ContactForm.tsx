"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageCircle, FiSend, FiCheck } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío (aquí integrarías con tu servicio de email)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <FiCheck className="text-3xl text-green-600" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900">
              ¡Mensaje enviado!
            </h3>
            <p className="text-gray-600">
              Gracias por contactarme. Te responderé a la brevedad posible.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            Contáctame
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto mb-6"></div>
          <p className="text-gray-600 font-light max-w-md mx-auto">
            ¿Tienes alguna pregunta? Escríbeme y te responderé lo antes posible
          </p>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 space-y-8"
        >
          
          {/* Name Field */}
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
              Nombre completo
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors">
                <FiUser className="text-lg" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl bg-gray-50/50 focus:bg-white focus:border-gray-300 focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                placeholder="Tu nombre completo"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
              Correo electrónico
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors">
                <FiMail className="text-lg" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl bg-gray-50/50 focus:bg-white focus:border-gray-300 focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
              Mensaje
            </label>
            <div className="relative">
              <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-gray-600 transition-colors">
                <FiMessageCircle className="text-lg" />
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl bg-gray-50/50 focus:bg-white focus:border-gray-300 focus:outline-none transition-all duration-200 placeholder:text-gray-400 resize-none"
                placeholder="Cuéntame en qué puedo ayudarte..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all duration-200 font-medium group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <FiSend className="text-lg transition-transform group-hover:translate-x-1" />
                  Enviar mensaje
                </>
              )}
            </button>
          </div>

          {/* Additional Info */}
          <div className="pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center">
              También puedes contactarme directamente por{" "}
              <a
                href="https://wa.me/584121176817"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                WhatsApp
              </a>
              {" "}o{" "}
              <a
                href="mailto:gretpediatra@gmail.com"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                email
              </a>
            </p>
          </div>

        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;