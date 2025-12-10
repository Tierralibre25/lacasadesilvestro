import React from "react";
import Head from "next/head";

const articleUrl =
  "https://www.lacasadesilvestro.com/blog/articulos/historia-tres-primeros-polpetta-gritto-tutina";

export default function HistoriaTresPrimerosPolpettaGrittoTutina() {
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
      // si falla la copia, no pasa nada grave
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
          Los tres primeros: la historia de Polpetta, Gritto y Tutina, los
          gatitos que marcaron el inicio del santuario
        </title>

        <meta
          name="description"
          content="La historia de los tres primeros gatitos de La Casa de Silvestro: Polpetta, Gritto y Tutina, el origen vivo del santuario felino."
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="La Casa de Silvestro" />
        <meta
          property="og:title"
          content="Los tres primeros: la historia de Polpetta, Gritto y Tutina"
        />
        <meta
          property="og:description"
          content="Tres gatitos huérfanos que marcaron el comienzo de La Casa de Silvestro y dieron vida a nuevas generaciones dentro del santuario."
        />
        <meta
          property="og:image"
          content="https://www.lacasadesilvestro.com/images/blog/articolo_4.jpg"
        />
        <meta property="og:url" content={articleUrl} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Los tres primeros: la historia de Polpetta, Gritto y Tutina, los
          gatitos que marcaron el inicio del santuario
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Publicado el 9 de diciembre de 2025
        </p>

        {/* IMAGEN DEL ARTÍCULO */}
        <img
          src="/images/blog/articolo_4.jpg"
          alt="Polpetta, Gritto y Tutina en La Casa de Silvestro"
          className="w-full rounded-xl shadow-lg mb-8"
        />

        {/* TEXTO DEL ARTÍCULO */}
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            Antes de que La Casa de Silvestro se convirtiera en el lugar que es
            hoy, hubo tres gatitos que marcaron el comienzo de todo: Polpetta,
            Gritto y Tutina.
          </p>

          <p>
            Fueron los primeros en ser acogidos, y gracias a ellos el santuario
            tomó su rumbo natural: proteger a quienes, solos, no habrían podido
            sobrevivir. Eran muy pequeños cuando fueron encontrados.
          </p>

          <p>
            Habían perdido a su madre y su vida corría un peligro real. Sin
            protección, sin calor y sin nadie que pudiera cuidarlos, no habrían
            tenido ninguna oportunidad.
          </p>

          <p>
            Logramos rescatarlos y durante los dos primeros meses de su vida
            vivieron dentro de la caravana, en un espacio cálido y estable. Allí
            encontraron seguridad, alimento y afecto constante. Allí crecieron,
            día tras día, sin miedo.
          </p>

          <p>
            Eran inseparables: un pequeño equipo que se movía como uno solo. En
            ese espacio reducido, entre mantas y cuencos, construyeron su
            primer recuerdo verdadero de un hogar.
          </p>

          <p>
            Hoy forman parte de la colonia estable del santuario. Han crecido,
            se han fortalecido y han contribuido a la vida del lugar de una
            forma maravillosa:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Polpetta</strong>, con su cola más corta y su pelaje gris
              y blanco con vetas suaves, ha dado a luz a muchos gatitos que hoy
              siguen viviendo aquí.
            </li>
            <li>
              <strong>Gritto</strong>, blanco con manchas negras, se ha
              convertido en padre de numerosos gatitos nacidos en el santuario.
            </li>
            <li>
              <strong>Tutina</strong>, mayoritariamente negro con manchas
              blancas, ha seguido el mismo camino, dando vida a nuevas
              generaciones.
            </li>
          </ul>

          <p>
            Su historia no es solo un recuerdo: es el origen de todo. Tres vidas
            salvadas que generaron muchas otras, creando un ciclo de amor,
            continuidad y pertenencia.
          </p>

          <p>
            Estos gatos nos recuerdan cada día por qué existe La Casa de
            Silvestro: para dar una oportunidad a quienes no la tuvieron.
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
