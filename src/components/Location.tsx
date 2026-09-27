import { IoLocationOutline, IoNavigateOutline } from "react-icons/io5";

const consultas = [
  {
    ciudad: "Barquisimeto",
    linea1: "Carrera 31 con Calle 20",
    linea2: "Centro Comercial Profesional Rosancar, piso 1",
    mapa: "https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Profesional+Rosancar+Barquisimeto",
  },
  {
    ciudad: "Cabudare",
    linea1: "Calle 1 entre Avenida 4 y 5",
    linea2: "Urbanización La Mata",
    mapa: "https://www.google.com/maps/search/?api=1&query=Urbanización+La+Mata+Cabudare",
  },
];

const Location = () => (
  <div className="space-y-4">
    {consultas.map((c) => (
      <div
        key={c.ciudad}
        className="bg-superficie border border-borde rounded-lg p-6 shadow-sm"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 shrink-0 rounded-lg bg-fondo-alt flex items-center justify-center">
            <IoLocationOutline className="text-xl text-cuerpo" />
          </div>
          <h3 className="text-lg font-medium text-titulo">{c.ciudad}</h3>
        </div>

        <p className="text-cuerpo leading-relaxed text-sm mb-4">
          {c.linea1}
          <br />
          {c.linea2}
        </p>

        <a
          href={c.mapa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-borde-fuerte text-cuerpo hover:text-titulo hover:border-suave transition-colors font-medium text-sm group/btn"
        >
          <IoNavigateOutline className="text-sm transition-transform group-hover/btn:rotate-12" />
          Ver mapa
        </a>
      </div>
    ))}
  </div>
);

export default Location;
