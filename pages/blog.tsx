import React from "react";
import Link from "next/link";

const posts = [
  {
    slug: "por-que-no-es-un-refugio-clasico",
    title: "Por qué La Casa de Silvestro no es un refugio “clásico”",
    excerpt:
      "La Casa de Silvestro no existe para acumular gatos, sino para tutelar situaciones. Un modelo basado en equilibrio, prevención y continuidad.",
    image: "/images/blog/articolo_4_genn.jpg",
    date: "4 de enero de 2026",
  },
  {
    slug: "ayudar-gatos-callejeros-no-siempre-llevarlos-solucion",
    title:
      "Ayudar de verdad a los gatos callejeros: por qué no siempre llevárselos es la solución",
    excerpt:
      "No todos los gatos de colonia necesitan ser llevados lejos. La verdadera protección empieza con la observación y la gestión responsable.",
    image: "/images/blog/articolo_8.jpg",
    date: "17 de diciembre de 2025",
  },
  {
    slug: "diario-santuario-pequenas-cosas-equilibrio",
    title:
      "DIARIO DEL SANTUARIO — Las pequeñas cosas que mantienen todo en equilibrio",
    excerpt:
      "Un día normal en La Casa de Silvestro: observación, rutina y atención constante. Hoy el equilibrio se sostiene.",
    image: "/images/blog/articolo_7.jpg",
    date: "16 de diciembre de 2025",
  },
  {
    slug: "por-que-santuario-natural-mejor-lugar-gato-colonia",
    title:
      "Por qué un santuario natural es el mejor lugar para un gato de colonia",
    excerpt:
      "Libertad con seguridad, menos estrés y un entorno que respeta la naturaleza felina. Descubre por qué un santuario natural es ideal.",
    image: "/images/blog/articolo_6_a.jpg",
    date: "15 de diciembre de 2025",
  },
  {
    slug: "historia-tres-primeros-polpetta-gritto-tutina",
    title:
      "Los tres primeros: la historia de Polpetta, Gritto y Tutina, los gatitos que marcaron el inicio del santuario",
    excerpt:
      "La historia de los primeros tres gatitos acogidos en La Casa de Silvestro, origen vivo del proyecto.",
    image: "/images/blog/articolo_4.jpg",
    date: "9 de diciembre de 2025",
  },
  {
    slug: "beneficios-concretos-proyecto-casa-de-silvestro-vida-gatos",
    title:
      "Los beneficios concretos del proyecto La Casa de Silvestro para la vida de los gatos",
    excerpt:
      "Un santuario felino rural donde los gatos viven libres, protegidos y con cuidados continuos.",
    image: "/images/blog/articolo_3.jpg",
    date: "5 de diciembre de 2025",
  },
  {
    slug: "terreno-hogar-renacer-gatos-traumatizados-la-casa-de-silvestro",
    title:
      "Cuando un terreno se convierte en hogar: el renacer de los gatos traumatizados en La Casa de Silvestro",
    excerpt:
      "Cómo un entorno natural y sin jaulas permite que gatos traumatizados vuelvan a confiar.",
    image: "/images/blog/articolo_2.jpg",
    date: "4 de diciembre de 2025",
  },
  {
    slug: "santuario-felino-villalonga-la-casa-de-silvestro",
    title:
      "Santuario felino en Villalonga: por qué La Casa de Silvestro es indispensable hoy",
    excerpt:
      "Por qué los santuarios felinos son más necesarios que nunca y qué hace único a La Casa de Silvestro.",
    image: "/images/blog/articolo_1.jpg",
    date: "3 de diciembre de 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Nuestro Blog
      </h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-2xl shadow flex flex-col md:flex-row overflow-hidden"
          >
            <div className="md:w-1/3">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-2/3 p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl md:text-2xl font-semibold mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
              </div>

              <div>
                <Link
                  href={`/blog/articulos/${post.slug}`}
                  className="text-green-700 font-semibold hover:underline"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
