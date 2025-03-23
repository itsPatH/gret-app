"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-lg p-6 px-4 mx-auto bg-white shadow-lg w-[70%] sm:max-w-xl md:max-w-2xl rounded-xl shadow-gray-300 sm:px-6">
      <h2 className="mb-4 font-serif text-2xl font-semibold text-center text-color2">
        ¿Tienes alguna consulta? ¡Escríbeme!
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName((e.target as HTMLInputElement).value)}
          className="w-full p-2 text-gray-800 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lightLavender"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 text-gray-800 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lightLavender"
          required
        />
        <textarea
          placeholder="Mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-32 p-2 text-gray-800 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lightLavender"
          required
        />
        <button
          type="submit"
          className="w-full p-2 font-semibold text-white transition duration-300 rounded bg-color2 hover:bg-purple-600 hover:shadow-md"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
