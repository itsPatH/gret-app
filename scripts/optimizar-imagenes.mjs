/**
 * Optimiza las imágenes que dejes en public/images/sin-optimizar/ y escribe
 * el resultado en public/images/.
 *
 *   1. Copia los archivos originales a public/images/sin-optimizar/
 *   2. npm run imagenes
 *   3. Borra lo que quedó en sin-optimizar/ cuando estés conforme
 *
 * Qué hace con cada archivo:
 *   - lo reduce al ancho máximo útil (las fotos de móvil llegan a 4000 px
 *     para mostrarse a 400)
 *   - le quita los metadatos EXIF, que en fotos de teléfono incluyen modelo,
 *     fecha y a veces coordenadas
 *   - lo guarda como JPEG progresivo, o PNG si tiene transparencia
 *
 * La carpeta sin-optimizar/ está en .gitignore: los originales no entran al
 * repositorio, que es justo lo que lo tenía en 8,9 MB de imágenes.
 */
import sharp from "sharp";
import { readdirSync, statSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

const ENTRADA = "public/images/sin-optimizar";
const SALIDA = "public/images";

const ANCHO_MAXIMO = 1400; // suficiente para cualquier hueco del sitio en 2x
const CALIDAD = 84;

if (!existsSync(ENTRADA)) {
  mkdirSync(ENTRADA, { recursive: true });
  console.log(`Creada ${ENTRADA}. Deja ahí las imágenes y vuelve a ejecutar.`);
  process.exit(0);
}

const archivos = readdirSync(ENTRADA).filter((f) =>
  /\.(jpe?g|png|webp|avif|heic|tiff?)$/i.test(f),
);

if (archivos.length === 0) {
  console.log(`No hay imágenes en ${ENTRADA}.`);
  process.exit(0);
}

let antes = 0;
let despues = 0;

for (const archivo of archivos) {
  const origen = path.join(ENTRADA, archivo);
  const meta = await sharp(origen).metadata();

  // Solo conserva PNG lo que de verdad usa transparencia; una fotografía en
  // PNG pesa diez veces más sin ganar nada.
  const transparente = meta.hasAlpha && meta.format === "png";
  const base = archivo.replace(/\.\w+$/, "");
  const destino = path.join(SALIDA, `${base}.${transparente ? "png" : "jpg"}`);

  let img = sharp(origen)
    .rotate() // respeta la orientación EXIF antes de descartarla
    .resize(ANCHO_MAXIMO, null, {
      fit: "inside",
      withoutEnlargement: true,
      kernel: "lanczos3",
    })
    .sharpen({ sigma: 0.7 });

  img = transparente
    ? img.png({ compressionLevel: 9, palette: true })
    : img.jpeg({ quality: CALIDAD, progressive: true, mozjpeg: true });

  await img.toFile(destino); // sharp descarta EXIF salvo withMetadata()

  const a = statSync(origen).size;
  const d = statSync(destino).size;
  antes += a;
  despues += d;

  const salida = await sharp(destino).metadata();
  console.log(
    `${archivo.padEnd(28)} -> ${path.basename(destino).padEnd(26)} ` +
      `${salida.width}x${salida.height}  ` +
      `${(a / 1024).toFixed(0)} KB -> ${(d / 1024).toFixed(0)} KB ` +
      `(-${(100 * (1 - d / a)).toFixed(0)}%)`,
  );
}

console.log(
  `\n${archivos.length} imagen(es): ` +
    `${(antes / 1024 / 1024).toFixed(2)} MB -> ${(despues / 1024).toFixed(0)} KB`,
);
console.log(`Escritas en ${SALIDA}/. Revisa el resultado antes de commitear.`);
