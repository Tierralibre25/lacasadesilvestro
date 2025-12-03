import Link from "next/link";

export default function Blog() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">

      {/* TÍTULO CENTRADO */}
      <h1 className="text-4xl font-bold mb-10 text-center">
        Nuestro Blog
      </h1>

      {/* PREVIEW DEL ARTÍCULO 1 */}
      <article className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-col md:flex-row gap-4 items-start">

        {/* IMAGEN A LA IZQUIERDA */}
        <img
          src="/images/blog/articolo_1.jpg"
          alt="Santuario felino en Villalonga – La Casa de Silvestro"
          className="w-full md:w-1/3 rounded-lg object-cover"
        />

        {/* TEXTO A LA DERECHA */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">
            Santuario felino en Villalonga: por qué La Casa de Silvestro es indispensable hoy
          </h2>

          <p className="text-gray-600 mb-3">
            En un mundo que corre cada vez más rápido, existe un lugar donde el tiempo se detiene
            y la vida encuentra espacio para renacer: La Casa de Silvestro, un santuario felino
            creado para ofrecer una segunda oportunidad a gatos sin hogar…
          </p>

          <Link href="/blog/articulos/santuario-felino-villalonga-la-casa-de-silvestro">
            <a className="text-blue-600 font-semibold">Leer más →</a>
          </Link>
        </div>

      </article>

    </main>
  );
}
