import React from "react";
import ContactForm from "../../components/Forms/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-opacity-50 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/images/formbackground.jpg')",
      }}
    >
      <ContactForm />
    </div>
  );
};

export default ContactPage;
