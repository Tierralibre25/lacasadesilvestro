import React from "react";
import Head from "next/head";

const articleUrl =
  "https://www.lacasadesilvestro.com/blog/articulos/beneficios-concretos-proyecto-casa-de-silvestro-vida-gatos";

export default function BeneficiosConcretosCasaDeSilvestro() {
  const handleInstagramClick = async (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    try {
      if (
        typeof navigator !== "undefined" &&
        navigator.clipboard &&
        navigator.clipboard.writeText
      ) {
        await navigator.clipboard.writeText(articleUrl);
        alert(
          "Link copiado. Ahora pégalo en tu historia o en la bio de Instagram 🐾"
        );
      }
    } catch (_err) {
      // ignoramos errores de copia, no son críticos
    } finally {
      if (typeof window !== "undefined") {
        window.open("https://instagram.com", "_blank");
      }
    }
  };

  return (
    <>
      <Head>
        <title>
          Los beneficios concretos del proyecto La Casa de Silvestro para la
          vida de los gatos
        </title>

        <meta
          name="description"
          content="Cómo el santuario felino rural La Casa de Silvestro mejora de forma real y medible la vida de los gatos: libertad en seguridad, menos estrés, cuidados veterinarios y un hogar definitivo."
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="La Casa de Silvestro" />
        <meta
          property="og:title"
          content="Los beneficios concretos del proyecto La Casa de Silvestro para la vida de los gatos"
        />
        <meta
          property="og:description"
          content="Un santuario felino rural donde los gatos viven libres, protegidos y con cuidados continuos. Descubre los beneficios reales para su vida y bienestar."
        />
        <meta
          property="og:image"
          content="https://www.lacasadesilvestro.com/images/blog/articolo_3.jpg"
        />
        <meta property="og:url" content={articleUrl} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Los beneficios concretos del proyecto La Casa de Silvestro para la
          vida de los gatos
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Publicado el 5 de diciembre de 2025
        </p>

        {/* IMAGEN DEL ARTÍCULO */}
        <img
          src="/images/blog/articolo_3.jpg"
          alt="Gatos descansando y explorando en un refugio felino rural"
          className="w-full rounded-xl shadow-lg mb-8"
        />

        {/* TEXTO DEL ARTÍCULO */}
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            Proteger a los gatos no significa solo darles de comer. Significa
            ofrecerles condiciones de vida que respeten su naturaleza, sus
            necesidades y su seguridad. Ahí es donde entra en juego La Casa de
            Silvestro, un proyecto pensado no como un simple refugio, sino como
            un verdadero santuario felino rural, donde cada gato puede vivir
            libre, protegido y finalmente en paz.
          </p>

          <p>
            Muchos gatos de la calle viven vidas cortas y difíciles:
            enfermedades, hambre, envenenamientos, accidentes de tráfico,
            abusos, peleas territoriales. Un santuario amplio, natural y bien
            gestionado puede cambiar por completo su destino. Los beneficios son
            reales y medibles, y los vemos cada día con nuestros propios ojos.
          </p>

          <h2 className="text-2xl font-semibold mt-8">1. Libertad en seguridad</h2>

          <p>
            En nuestro terreno de 15.000 metros cuadrados los gatos pueden
            moverse, trepar, explorar y comportarse como verdaderos felinos.
          </p>

          <p>
            La diferencia es que lo hacen en un entorno protegido: sin coches,
            sin peligros urbanos, sin agresiones.
          </p>

          <p>
            Esta combinación — libertad + seguridad — para un gato vale oro.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            2. Reducción del estrés y mejora de la calidad de vida
          </h2>

          <p>Los gatos que viven en la calle están constantemente bajo presión.</p>

          <p>En La Casa de Silvestro encuentran:</p>

          <ul className="list-disc list-inside space-y-1">
            <li>espacios tranquilos,</li>
            <li>refugios cómodos,</li>
            <li>zonas elevadas donde sentirse seguros,</li>
            <li>rutinas diarias previsibles.</li>
          </ul>

          <p>
            El resultado es evidente: gatos más serenos, con mayor esperanza de
            vida y un comportamiento mucho más estable.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            3. Cuidados veterinarios continuos y específicos
          </h2>

          <p>Cada gato del santuario es:</p>

          <ul className="list-disc list-inside space-y-1">
            <li>esterilizado,</li>
            <li>tratado contra parásitos,</li>
            <li>monitorizado a lo largo del tiempo,</li>
            <li>atendido cuando tiene problemas crónicos.</li>
          </ul>

          <p>
            Esto no solo mejora su vida, sino que también contribuye a la salud
            de toda la colonia.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            4. Un entorno social equilibrado
          </h2>

          <p>
            En el santuario los gatos forman pequeños grupos estables, sin
            conflictos territoriales continuos.
          </p>

          <p>Esto mejora:</p>

          <ul className="list-disc list-inside space-y-1">
            <li>las relaciones entre individuos,</li>
            <li>su adaptación,</li>
            <li>su seguridad emocional.</li>
          </ul>

          <p>Incluso los más tímidos encuentran su lugar.</p>

          <h2 className="text-2xl font-semibold mt-8">
            5. Ninguna adopción forzada
          </h2>

          <p>
            Muchos gatos no son “adoptables” por carácter, edad o traumas. Con
            nosotros nadie es trasladado ni entregado en adopción.
          </p>

          <p>
            La Casa de Silvestro se convierte en su hogar definitivo, sin más
            interrupciones ni estrés.
          </p>

          <h2 className="text-2xl font-semibold mt-8">6. Un modelo replicable</h2>

          <p>
            Nuestro proyecto demuestra algo muy sencillo: con pocos recursos,
            pero con un compromiso constante, se puede crear un lugar donde los
            gatos vivan dignamente y en armonía con la naturaleza.
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

            {/* Instagram – copiar link y abrir la app */}
            <a
              href="https://instagram.com"
              onClick={handleInstagramClick}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow hover:opacity-90 transition cursor-pointer"
            >
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-5 h-5"
              />
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
