const Schedule = () => {
  const whatsappLink = "https://wa.me/584121176817";
  return (
    <div className="w-full text-center mt-10">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 text-white text-lg font-semibold rounded-full shadow-md transition duration-300"
      >
        📅 Agendar por WhatsApp
      </a>
    </div>
  );
};

export default Schedule;
