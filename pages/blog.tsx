// /pages/blog.tsx
import Head from "next/head";
import Link from "next/link";

type Post = {
  title: string;
  excerpt: string;
  date: string; // es: "4 enero 2026"
  slug: string; // es: "santuario-felino-villalonga-la-casa-de-silvestro"
  cover: string; // path da /public
};

const posts: Post[] = [
  {
    title: "Santuario felino en Villalonga: por qué La Casa de Silvestro es indispensable hoy",
    excerpt:
      "En un mundo que corre cada vez más rápido, existe un lugar donde el tiempo se detiene y la vida encuentra espacio para renacer...",
    date: "3 diciembre 2025",
    slug: "santuario-felino-villalonga-la-casa-de-silvestro",
    cover: "/images/blog/articolo_1.jpg",
  },
  {
    title: "Cuando un terreno se convierte en hogar: el renacer de los gatos traumatizados",
    excerpt:
      "Cuando un animal encuentra estabilidad, espacio y ausencia total de amenazas, todo cambia de verdad. En nuestro terreno de 15.000 m² lo vemos cada día...",
    date: "4 diciembre 2025",
    slug: "terreno-hogar-renacer-gatos-traumatizados-la-casa-de-silvestro",
    cover: "/images/blog/articolo_2.jpg",
  },
  {
    title: "Beneficios concretos: cómo La Casa de Silvestro mejora la vida de los gatos",
    excerpt:
      "Proteger no significa solo alimentar. Significa ofrecer libertad con seguridad, reducir estrés, garantizar cuidados veterinarios y estabilidad social...",
    date: "5 diciembre 2025",
    slug: "beneficios-concretos-proyecto-casa-de-silvestro",
    cover: "/images/blog/articolo_3.jpg",
  },
  {
    title: "Los tres primeros: la historia de Polpetta, Gritto y Tutina",
    excerpt:
      "Antes de que La Casa de Silvestro se convirtiera en lo que es hoy, hubo tres gatitos que marcaron el inicio de todo...",
    date: "9 diciembre 2025",
    slug: "los-tres-primeros-polpetta-gritto-tutina",
    cover: "/images/blog/articolo_4.jpg",
  },
  {
    title: "Por qué La Casa de Silvestro no es un refugio “clásico”",
    excerpt:
      "No existimos para acumular animales, sino para tutelar situaciones: reducir nacimientos, estabilizar grupos, mantener condiciones en el tiempo...",
    date: "4 enero 2026",
    slug: "por-que-no-es-un-refugio-clasico",
    cover: "/images/blog/articolo_4_genn.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Nuestro Blog — La Casa de Silvestro</title>
        <meta
          name="description"
          content="Artículos y diario del santuario felino La Casa de Silvestro."
        />
      </Head>

      {/* HERO */}
      <section
        className="relative w-full h-[220px] md:h-[260px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/blog/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white text-center px-4">
          Nuestro Blog
        </h1>
      </section>

      {/* LISTA */}
      <section className="bg-amber-50 text-gray-800 py-10 px-5 md:px-12">
        <div className="max-w-5xl mx-auto space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/articulos/${post.slug}`}
              className="group block"
            >
              <article className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition">
                {/* immagine a sinistra */}
                <div className="md:w-[280px] w-full h-[190px] md:h-auto overflow-hidden bg-gray-100">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition"
                    loading="lazy"
                  />
                </div>

                {/* testo a destra */}
                <div className="flex-1 p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    Publicado el {post.date}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-green-800 font-semibold">
                    Leer artículo →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
