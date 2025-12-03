import React from "react";

export default function SantuarioFelinoVillalonga() {
  const articleUrl =
    "https://www.lacasadesilvestro.com/blog/articulos/santuario-felino-villalonga-la-casa-de-silvestro";

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">
        Santuario felino en Villalonga: por qué La Casa de Silvestro es
        indispensable hoy
      </h1>

      <p className="text-sm text-gray-600 mb-6">
        Publicado el 3 de diciembre de 2025
      </p>

      {/* IMMAGINE ARTICOLO */}
      <img
        src="/images/blog/articolo_1.jpg"
        alt="Santuario felino La Casa de Silvestro"
        className="w-full rounded-xl shadow-lg mb-8"
      />

      {/* TESTO ARTICOLO */}
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <p>
          En un mundo que corre cada vez más rápido, existe un lugar donde el
          tiempo se detiene y la vida encuentra espacio para renacer: La Casa
          de Silvestro. Aquí, en un terreno rural de 15.000 metros cuadrados en
          Villalonga, hemos creado un refugio seguro para decenas de gatos que
          no tenían otra oportunidad. Muchos de ellos llegan heridos,
          abandonados o simplemente nacen en el lugar equivocado. Para ellos,
          este terreno no es solo un hogar: es una segunda vida.
        </p>

        <p>
          Hoy los santuarios felinos son más necesarios que nunca. Las colonias
          no dejan de crecer, los ayuntamientos a menudo no tienen recursos y
          muchas protectoras trabajan al límite. Se necesitan lugares reales,
          espacios amplios y personas dispuestas a asumir la responsabilidad de
          ofrecer a los gatos libertad, cuidados y seguridad. No basta con
          “amar a los animales”, hay que construir algo concreto.
        </p>

        <p>
          Eso es lo que hacemos cada día en La Casa de Silvestro. Aquí los gatos
          viven al aire libre, lejos del tráfico y de los peligros urbanos, con
          zonas de sombra, casitas, puntos de alimentación, atención
          veterinaria y una dedicación constante. No los tratamos como
          “huéspedes temporales”: forman parte de nuestra familia para siempre.
          Nadie es dado en adopción fuera, nadie es trasladado. Para muchos
          gatos frágiles o difíciles, esta es la única opción verdaderamente
          ética.
        </p>

        <p>
          Un santuario felino no es un simple refugio: es un compromiso moral.
          Significa hacerse cargo de animales que no pueden ser reubicados.
          Significa garantizarles dignidad incluso cuando no son “adoptables”.
          Significa respetar su carácter, sus tiempos y sus límites. En nuestro
          santuario conviven gatos sociables, desconfiados, mayores, enfermos,
          recién nacidos y madres con sus crías. Cada uno tiene su lugar.
        </p>

        <p>
          En La Casa de Silvestro creemos que cada gato merece una vida plena,
          no una solución temporal. Creemos que los animales no son un estorbo
          que haya que esconder o desplazar, sino seres sensibles que necesitan
          protección. Y creemos que un santuario puede cambiar la vida no solo
          de ellos, sino también de quienes lo construyen: te obliga a frenar,
          a cuidar y a recordar qué es lo que realmente importa.
        </p>

        <p>
          Este proyecto nace del corazón, pero crece gracias a quienes lo
          apoyan. Si tú también crees que los gatos merecen un lugar seguro
          donde vivir libres y respetados, La Casa de Silvestro está aquí:
          sencilla, real y abierta a cualquiera que quiera echar una mano.
        </p>
      </div>

      {/* CONDIVIDI – SOLO ICONE PREMIUM */}
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
            className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center shadow hover:bg-green-600 transition"
          >
            <img
              src="/icons/whatsapp.svg"
              alt="WhatsApp"
              className="w-5 h-5"
            />
          </a>

          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
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

          {/* Instagram (solo apertura profilo/app) */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow hover:opacity-90 transition"
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
  );
}

