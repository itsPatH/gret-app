/** Clave de localStorage del tema. La comparten el botón y el script que
 *  layout.tsx inyecta en el <head>, así que vive aparte para que no puedan
 *  quedar desincronizados. */
export const CLAVE_TEMA = "gret-tema";

/** Se ejecuta en el <head>, antes del primer pintado, para que quien eligió
 *  el modo oscuro no vea un destello blanco al cargar. Sin tema guardado se
 *  queda en claro: el tema lo decide el botón, no el sistema operativo. */
export const scriptTema = `(function(){try{if(localStorage.getItem(${JSON.stringify(
  CLAVE_TEMA,
)})==="dark")document.documentElement.dataset.theme="dark"}catch(e){}})()`;
