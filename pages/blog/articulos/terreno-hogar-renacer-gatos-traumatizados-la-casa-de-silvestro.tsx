import React from "react";
import Head from "next/head";

const articleUrl =
  "https://www.lacasadesilvestro.com/blog/articulos/terreno-hogar-renacer-gatos-traumatizados-la-casa-de-silvestro";

export default function TerrenoHogarGatosTraumatizados() {
  export default function SantuarioFelinoVillalonga() {
  const handleInstagramClick = async (e: any) => {
    e.preventDefault();

    try {
      if (
        typeof navigator !== "undefined" &&
        (navigator as any).clipboard &&
        (navigator as any).clipboard.writeText
      ) {
        await (navigator as any).clipboard.writeText(articleUrl);
        alert(
          "Link copiado. Ahora pégalo en tu historia o en la bio de Instagram 🐾"
        );
      }

      if (typeof window !== "undefined") {
        window.open("https://instagram.com", "_blank");
      }
    } catch (_err) {
      if (typeof window !== "undefined") {
        window.open("https://instagram.com", "_blank");
      }
    }
  };

  return (
    <>
      {/* META SPECÍFICOS DE ESTE ARTÍCULO */}
      <Head>
        <title>
          Cuando un terreno se convierte en hogar: el renacer de los gatos
          traumatizados en La Casa de Silvestro
        </title>

        <meta
          name="description"
          content="Cómo un terreno seguro y sin jaulas permite que gatos traumatizados vuelvan a confiar, jugar y vivir sin miedo en La Casa de Silvestro."
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="La Casa de Silvestro" />
        <meta
          property="og:title"
          content="Cuando un terreno se convierte en hogar – La Casa de Silvestro"
        />
        <meta
          property="og:description"
          content="El renacer de los gatos traumatizados cuando encuentran estabilidad, libertad y naturaleza en La Casa de Silvestro."
        />
        <meta
          property="og:image"
          content="https://www.lacasadesilvestro.com/images/blog/articolo_2.jpg"
        />
        <meta property="og:url" content={articleUrl} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Cuando un terreno se convierte en hogar: el renacer de los gatos
          traumatizados en La Casa de Silvestro
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Publicado el 4 de diciembre de 2025
        </p>

        {/* IMAGEN DEL ARTÍCULO */}
        <img
          src="/images/blog/articolo_2.jpg"
          alt="Grupo de gatos en libertad en un refugio felino"
          className="w-full rounded-xl shadow-lg mb-8"
        />

        {/* TEXTO DEL ARTÍCULO */}
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            Para muchos gatos abandonados o criados en la calle, el mundo es un
            lugar duro: hambre, enfermedades, lluvia, perros, personas que no
            los quieren o que los maltratan.
          </p>

          <p>
            La mayoría de nuestros gatos llega a La Casa de Silvestro con una
            mirada que cuenta una historia cerrada, como si volver a confiar
            fuese imposible. Y sin embargo ocurre algo que la ciencia ya conoce
            bien: cuando un animal encuentra estabilidad, espacio y ausencia
            total de amenazas, todo cambia de verdad.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            🌱 El poder de la seguridad: la clave que transforma el carácter de
            un gato
          </h2>

          <p>
            En nuestro terreno de 15.000 m² no existen jaulas, recintos
            estrechos, ansiedad ni ruido.
          </p>

          <p>Aquí los gatos comienzan, día tras día, a:</p>

          <ul className="list-disc list-inside space-y-1">
            <li>
              dormir profundamente (algo raro en gatos callejeros siempre en
              alerta);
            </li>
            <li>
              alimentarse con regularidad, fortaleciendo su sistema
              inmunológico;
            </li>
            <li>
              volver a jugar, un comportamiento que refleja equilibrio
              emocional;
            </li>
            <li>
              acercarse al ser humano, no por miedo sino por curiosidad.
            </li>
          </ul>

          <p>
            Este proceso es especialmente visible en los gatos que han sufrido
            violencia o abandono: tras semanas de libertad controlada, muchos
            muestran signos claros de recuperación psicológica.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            ☀️ Por qué la naturaleza los cura más que cualquier clínica
          </h2>

          <p>
            Uno de los factores más eficaces en la rehabilitación felina es la
            estimulación ambiental natural: olores, árboles, rocas, viento,
            insectos, sonidos no artificiales.
          </p>

          <p>Estos elementos:</p>

          <ul className="list-disc list-inside space-y-1">
            <li>reducen el estrés cerebral,</li>
            <li>mejoran el metabolismo,</li>
            <li>estimulan conductas sanas y territoriales,</li>
            <li>disminuyen los conflictos entre gatos.</li>
          </ul>

          <p>
            En lenguaje científico se llama enriquecimiento ambiental dinámico.
            Nosotros lo llamamos simplemente hogar.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            ❤️ Cuando un gato vuelve a confiar, ocurre algo maravilloso
          </h2>

          <p>
            Uno de los momentos más emocionantes es cuando un gato que durante
            meses te ha evitado empieza a:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>rozarte mientras come,</li>
            <li>seguir tus pasos,</li>
            <li>sentarse cerca sin huir.</li>
          </ul>

          <p>
            No es un milagro. Es el resultado de cuidado, tiempo y respeto por
            su ritmo emocional. En La Casa de Silvestro esto ocurre a menudo. Y
            es la confirmación de que vamos en la dirección correcta.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            🐾 Nuestro trabajo continúa, cada día
          </h2>

          <p>
            Aquí no “solo” salvamos gatos: les devolvemos el derecho a vivir sin
            miedo. Y lo haremos mientras tengamos fuerzas, recursos y el apoyo
            de quienes creen en nuestra misión.
          </p>

          <p>
            Si quieres ayudar — aunque sea compartiendo un artículo como este —
            ya estás marcando la diferencia.
          </p>
        </div>

        {/* BOTONES COMPARTIR */}
        <div className="mt-12 p-6 bg-white rounded-2xl shadow-md text-center">
          <h3 className="font-semibold text-lg mb-4">Comparte este artículo</h3>

          <div className="flex justify-center gap-4">
            {/* WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                articleUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white border-2 border-green-500 flex items-center justify-center shadow hover:bg-gray-100 transition"
            >
              <img
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                className="w-5 h-5"
              />
            </a>

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
                articleUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shadow hover:bg-blue-700 transition"
            >
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
            </a>

            {/* X / Twitter */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                articleUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-black flex items-center justify-center shadow hover:bg-gray-900 transition"
            >
              <img src="/icons/x.svg" alt="X" className="w-5 h-5" />
            </a>

           {/* Instagram – copia link y abre la app */}
<a
  href="https://instagram.com"
  onClick={handleInstagramClick}
  className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow hover:opacity-90 transition cursor-pointer"
>
  <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
</a>


            {/* Email */}
            <a
              href={`mailto:?subject=Artículo interesante&body=${encodeURIComponent(
                articleUrl
              )}`}
              className="w-11 h-11 rounded-full bg-gray-600 flex items-center justify-center shadow hover:bg-gray-700 transition"
            >
              <img src="/icons/mail.svg" alt="Email" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
