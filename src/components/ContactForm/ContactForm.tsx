"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageCircle, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "" // honeypot — must stay empty; bots tend to fill every field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "No se pudo enviar el mensaje.");
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "", website: "" });
      }, 3000);
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "No se pudo enviar el mensaje."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 px-6 bg-gradient-to-b from-fondo to-fondo-alt">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="w-20 h-20 bg-green-100 dark:bg-green-400/15 rounded-full flex items-center justify-center mx-auto">
              <FiCheck className="text-3xl text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-medium text-titulo">
              ¡Mensaje enviado!
            </h3>
            <p className="text-cuerpo">
              Gracias por contactarme. Te responderé a la brevedad posible.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-fondo to-fondo-alt">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-titulo mb-4">
            Contáctame
          </h2>
          <div className="w-16 h-px bg-borde-fuerte mx-auto mb-6"></div>
          <p className="text-cuerpo font-light max-w-md mx-auto">
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
          className="bg-superficie rounded-3xl p-8 sm:p-10 shadow-sm border border-borde space-y-8"
        >
          
          {/* Honeypot — hidden from real users, bots tend to fill every field */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] w-px h-px overflow-hidden"
          />

          {/* Name Field */}
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium text-cuerpo mb-3">
              Nombre completo
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-tenue group-focus-within:text-suave transition-colors">
                <FiUser className="text-lg" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 border border-borde-fuerte rounded-2xl bg-campo text-cuerpo focus:bg-superficie focus:border-suave focus:outline-none transition-all duration-200 placeholder:text-tenue"
                placeholder="Tu nombre completo"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-cuerpo mb-3">
              Correo electrónico
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-tenue group-focus-within:text-suave transition-colors">
                <FiMail className="text-lg" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 border border-borde-fuerte rounded-2xl bg-campo text-cuerpo focus:bg-superficie focus:border-suave focus:outline-none transition-all duration-200 placeholder:text-tenue"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium text-cuerpo mb-3">
              Mensaje
            </label>
            <div className="relative">
              <div className="absolute left-4 top-4 text-tenue group-focus-within:text-suave transition-colors">
                <FiMessageCircle className="text-lg" />
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full pl-12 pr-4 py-4 border border-borde-fuerte rounded-2xl bg-campo text-cuerpo focus:bg-superficie focus:border-suave focus:outline-none transition-all duration-200 placeholder:text-tenue resize-none"
                placeholder="Cuéntame en qué puedo ayudarte..."
              />
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div
              role="alert"
              className="flex items-center gap-2 text-sm text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-400/10 border border-red-200 dark:border-red-400/30 rounded-xl px-4 py-3"
            >
              <FiAlertCircle className="text-lg shrink-0" />
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-accion text-accion-texto rounded-2xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-suave focus:ring-offset-2 transition-all duration-200 font-medium group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-accion-texto/30 border-t-accion-texto rounded-full animate-spin" />
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
          <div className="pt-6 border-t border-borde">
            <p className="text-sm text-suave text-center">
              También puedes contactarme directamente por{" "}
              <a
                href="https://wa.me/584121176817"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
              >
                WhatsApp
              </a>
              {" "}o{" "}
              <a
                href="mailto:gretpediatra@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
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