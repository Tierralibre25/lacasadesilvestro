export default function SantuarioFelinoVillalonga() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold mb-4">
        Santuario felino en Villalonga: por qué La Casa de Silvestro es indispensable hoy
      </h1>

      <p className="text-gray-500 mb-8">
        Publicado el 3 de diciembre de 2025
      </p>

      <img
        src="/images/blog/articolo_1.jpg"
        alt="Santuario felino La Casa de Silvestro"
        className="w-full rounded-xl shadow-lg mb-8"
      />

      <p className="text-gray-800 leading-relaxed mb-6">
        En un mundo que corre cada vez más rápido, existe un lugar donde el tiempo 
        se detiene y la vida encuentra espacio para renacer: La Casa de Silvestro. 
        Aquí, en un terreno rural de 15.000 metros cuadrados en Villalonga, hemos 
        creado un refugio seguro para decenas de gatos que no tenían otra oportunidad. 
        Muchos de ellos llegan heridos, abandonados o simplemente nacen en el lugar 
        equivocado. Para ellos, este terreno no es solo un hogar: es una segunda vida.
      </p>

      <p className="text-gray-800 leading-relaxed mb-6">
        Hoy los santuarios felinos son más necesarios que nunca. Las colonias no 
        dejan de crecer, los ayuntamientos a menudo no tienen recursos y muchas 
        protectoras trabajan al límite. Se necesitan lugares reales, espacios amplios 
        y personas dispuestas a asumir la responsabilidad de ofrecer a los gatos 
        libertad, cuidados y seguridad. No basta con “amar a los animales”, hay que 
        construir algo concreto.
      </p>

      <p className="text-gray-800 leading-relaxed mb-6">
        Eso es lo que hacemos cada día en La Casa de Silvestro. Aquí los gatos viven 
        al aire libre, lejos del tráfico y de los peligros urbanos, con zonas de 
        sombra, casitas, puntos de alimentación, atención veterinaria y una 
        dedicación constante. No los tratamos como “huéspedes temporales”: forman 
        parte de nuestra familia para siempre. Nadie es dado en adopción fuera, 
        nadie es trasladado. Para muchos gatos frágiles o difíciles, esta es la única 
        opción verdaderamente ética.
      </p>

      <p className="text-gray-800 leading-relaxed mb-6">
        Un santuario felino no es un simple refugio: es un compromiso moral. 
        Significa hacerse cargo de animales que no pueden ser reubicados. 
        Significa garantizarles dignidad incluso cuando no son “adoptables”. 
        Significa respetar su carácter, sus tiempos y sus límites. En nuestro santuario 
        conviven gatos sociables, desconfiados, mayores, enfermos, recién nacidos y 
        madres con sus crías. Cada uno tiene su lugar.
      </p>

      <p className="text-gray-800 leading-relaxed mb-8">
        En La Casa de Silvestro creemos que cada gato merece una vida plena, no una 
        solución temporal. Creemos que los animales no son un estorbo que haya que 
        esconder o desplazar, sino seres sensibles que necesitan protección. Y creemos 
        que un santuario puede cambiar la vida no solo de ellos, sino también de quienes 
        lo construyen: te obliga a frenar, a cuidar y a recordar qué es lo que realmente 
        importa.
      </p>

      <p className="text-gray-800 leading-relaxed mb-8">
        Este proyecto nace del corazón, pero crece gracias a quienes lo apoyan. Si tú 
        también crees que los gatos merecen un lugar seguro donde vivir libres y 
        respetados, La Casa de Silvestro está aquí: sencilla, real y abierta a cualquiera 
        que quiera echar una mano.
      </p>

      <div className="bg-yellow-100 p-4 border-l-4 border-yellow-500 rounded mb-8">
        <p className="text-gray-900">
          💛 Si quieres apoyar nuestro santuario felino, puedes hacerlo a través de 
          nuestra campaña de GoFundMe:&nbsp;
          <a
            href="https://gofund.me/6f301a41"
            className="text-blue-700 underline font-semibold"
          >
            La Casa de Silvestro – Santuario felino
          </a>
          {/* SHARE BUTTONS */}
<div className="mt-10 p-6 bg-white rounded-xl shadow-md text-center">

  <h3 className="text-lg font-semibold mb-4">Comparte este artículo</h3>

  <div className="flex flex-wrap justify-center gap-4">

    {/* WhatsApp */}
    <a
      href={`https://api.whatsapp.com/send?text=📝 Mira este artículo: ${typeof window !== "undefined" ? window.location.href : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
    >
      WhatsApp
    </a>

    {/* Facebook */}
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== "undefined" ? window.location.href : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
    >
      Facebook
    </a>

    {/* Twitter/X */}
    <a
      href={`https://twitter.com/intent/tweet?url=${typeof window !== "undefined" ? window.location.href : ""}&text=Mira este artículo de La Casa de Silvestro`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
    >
      X / Twitter
    </a>

    {/* Email */}
    <a
      href={`mailto:?subject=Artículo interesante&body=Mira este link: ${typeof window !== "undefined" ? window.location.href : ""}`}
      className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition"
    >
      Email
    </a>

    {/* Copiar enlace */}
    <button
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        alert("Enlace copiado ✔️");
      }}
      className="bg-yellow-600 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-700 transition"
    >
      Copiar enlace
    </button>

  </div>
</div>

        </p>
      </div>
    </div>
  );
}
