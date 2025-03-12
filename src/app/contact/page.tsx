import React from "react";
import ContactForm from "../../components/forms/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/images/formbackground.jpg')" }}
    >
      <ContactForm />
    </div>
  );
};

export default ContactPage;
