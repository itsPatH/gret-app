"use client";

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-lg p-4 mx-auto rounded-lg shadow-md bg-lightLavender">
      <h2 className="mb-4 font-serif text-2xl font-semibold text-center text-color2">Formulario de contacto</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-color2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-color2"
          required
        />
        <textarea
          placeholder="Mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-32 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-color2"
          required
        />
        <button type="submit" className="p-2 text-white transition duration-300 rounded bg-color4 hover:bg-color2">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
