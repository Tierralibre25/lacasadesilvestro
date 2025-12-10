import React from "react";
import Link from "next/link";

const posts = [
  {
    slug: "por-que-santuario-natural-mejor-lugar-gato-colonia",
    title:
      "Por qué un santuario natural es el mejor lugar para un gato de colonia",
    excerpt:
      "Libertad en seguridad, menos estrés y un entorno que respeta la naturaleza felina. Descubre por qué un santuario natural es ideal para gatos de colonia.",
    image: "/images/blog/articolo_5_a.jpg",
    date: "10 de diciembre de 2025",
  },
  {
    slug: "historia-tres-primeros-polpetta-gritto-tutina",
    title:
      "Los tres primeros: la historia de Polpetta, Gritto y Tutina, los gatitos que marcaron el inicio del santuario",
    excerpt:
      "La historia de los primeros tres gatitos acogidos en La Casa de Silvestro, origen vivo del santuario y de muchas nuevas vidas.",
    image: "/images/blog/articolo_4.jpg",
    date: "9 de diciembre de 2025",
  },
  {
    slug: "beneficios-concretos-proyecto-casa-de-silvestro-vida-gatos",
    title:
      "Los beneficios concretos del proyecto La Casa de Silvestro para la vida de los gatos",
    excerpt:
      "Un santuario felino rural donde los gatos viven libres, protegidos y con cuidados continuos. Descubre los beneficios reales para su vida y bienestar.",
    image: "/images/blog/articolo_3.jpg",
    date: "5 de diciembre de 2025",
  },
  {
    slug: "terreno-hogar-renacer-gatos-traumatizados-la-casa-de-silvestro",
    title:
      "Cuando un terreno se convierte en hogar: el renacer de los gatos traumatizados en La Casa de Silvestro",
    excerpt:
      "Cómo un terreno sin jaulas y en plena naturaleza permite que gatos traumatizados vuelvan a confiar, jugar y vivir sin miedo.",
    image: "/images/blog/articolo_2.jpg",
    date: "4 de diciembre de 2025",
  },
  {
    slug: "santuario-felino-villalonga-la-casa-de-silvestro",
    title:
      "Santuario felino en Villalonga: por qué La Casa de Silvestro es indispensable hoy",
    excerpt:
      "Por qué los santuarios felinos son más necesarios que nunca y cómo La Casa de Silvestro ofrece un hogar seguro y ético a decenas de gatos.",
    image: "/images/blog/articolo_1.jpg",
    date: "3 de diciembre de 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
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
