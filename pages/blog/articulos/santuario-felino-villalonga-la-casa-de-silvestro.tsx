import Image from "next/image";

export default function SantuarioFelinoVillalonga() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">
        Santuario felino en Villalonga: por qué La Casa de Silvestro es indispensable hoy
      </h1>

      <p className="text-sm text-gray-600 mb-6">
        Publicado el 3 de diciembre de 2025
      </p>

      <Image
        src="/images/blog/articolo_1.jpg"
        alt="Santuario felino La Casa de Silvestro"
        width={1200}
        height={600}
        className="rounded-lg shadow mb-8"
      />

      <div className="prose prose-lg">
        <p>
          En un mundo que corre cada vez más rápido, existe un lugar donde el tiempo se detiene y la vida encuentra espacio
          para renacer: La Casa de Silvestro. Aquí, en un terreno rural de 15.000 metros cuadrados en Villalonga, hemos creado
          un refugio seguro para decenas de gatos que no tenían otra oportunidad.
        </p>

        <p>
          Hoy los santuarios felinos son más necesarios que nunca. Las colonias no dejan de crecer, los ayuntamientos a menudo
          no tienen recursos y muchas protectoras trabajan al límite.
        </p>

        <p>
          Eso es lo que hacemos cada día en la Casa de Silvestro. Aquí los gatos viven al aire libre, lejos del tráfico y de los
          peligros urbanos, con zonas de sombra, casitas, puntos de alimentación, atención veterinaria y una dedicación constante.
        </p>

        <p>
          Un santuario felino no es un simple refugio: es un compromiso moral. Significa hacerse cargo de animales que no pueden
          ser reubicados. Significa garantizarles dignidad incluso cuando no son adoptables.
        </p>

        <p>
          En la Casa de Silvestro creemos que cada gato merece una vida plena, no una solución temporal. Creemos que los animales
          no son un estorbo que haya que esconder o desplazar, sino seres sensibles que necesitan protección.
        </p>

        <p>
          Este proyecto nace del corazón, pero crece gracias a quienes lo apoyan. Si tú también crees que los gatos merecen un lugar
          seguro donde vivir libres y respetados, La Casa de Silvestro está aquí: sencilla, real y abierta a cualquiera que quiera
          echar una mano.
        </p>
      </div>

      {/* Botones de compartir */}
      <div className="mt-12 p-6 bg-white rounded-xl shadow text-center">
        <h3 className="font-semibold text-lg mb-4">Comparte este artículo</h3>

        <div className="flex justify-center gap-4">
          <a href={`https://wa.me/?text=${encodeURIComponent("Mira este artículo: " + typeof window !== "undefined" ? window.location.href : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow">
            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
          </a>

          <a href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow">
            <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
          </a>

          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow">
            <Image src="/icons/x.svg" alt="Twitter/X" width={24} height={24} />
          </a>

          <a href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center shadow">
            <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>

          <a href={`mailto:?subject=Te comparto este artículo&body=${encodeURIComponent("Lee este artículo: " + (typeof window !== "undefined" ? window.location.href : ""))}`}
            className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center shadow">
            <Image src="/icons/mail.svg" alt="Email" width={24} height={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
