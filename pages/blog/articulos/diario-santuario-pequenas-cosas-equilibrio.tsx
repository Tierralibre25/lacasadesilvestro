import React from "react";
import Head from "next/head";

const articleUrl =
  "https://www.lacasadesilvestro.com/blog/articulos/diario-santuario-pequenas-cosas-equilibrio";

export default function DiarioSantuarioPequenasCosasEquilibrio() {
  const handleInstagramClick = async (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(articleUrl);
        alert(
          "Link copiado. Ahora pégalo en tu historia o en la bio de Instagram 🐾"
        );
      }
    } catch (_err) {
      // ignorado
    } finally {
      window.open("https://instagram.com", "_blank");
    }
  };

  return (
    <>
      <Head>
        <title>
          Diario del Santuario: las pequeñas cosas que mantienen todo en
          equilibrio
        </title>

        <meta
          name="description"
          content="Un día normal en La Casa de Silvestro: observación, rutina y atención constante. Las pequeñas cosas que sostienen el equilibrio del santuario."
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="La Casa de Silvestro" />
        <meta
          property="og:title"
          content="Diario del Santuario — Las pequeñas cosas que mantienen todo en equilibrio"
        />
        <meta
          property="og:description"
          content="No emergencias constantes, sino atención constante. Un día normal donde el equilibrio se sostiene."
        />
        <meta
          property="og:image"
          content="https://www.lacasadesilvestro.com/images/blog/articolo_7.jpg"
        />
        <meta property="og:url" content={articleUrl} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          DIARIO DEL SANTUARIO — Las pequeñas cosas que mantienen todo en
          equilibrio
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Publicado el 16 de diciembre de 2025
        </p>

        {/* IMAGEN (opcional) */}
        <img
          src="/images/blog/articolo_7.jpg"
          alt="Un día tranquilo en La Casa de Silvestro"
          className="w-full rounded-xl shadow-lg mb-8"
        />

        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>Hoy en el santuario no ha ocurrido nada que salga en las noticias.</p>

          <p>Y eso es una buena noticia.</p>

          <p>Los gatos han seguido sus hábitos:</p>

          <p>
            quien ha comido primero, quien después, quien ha observado desde
            lejos, quien se ha metido en su refugio preferido.
          </p>

          <p>Los hemos revisado a todos, uno por uno, sin forzar a nadie.</p>

          <p>En el diario de hoy hay apuntes sencillos:</p>

          <ul className="list-disc list-inside space-y-1">
            <li>una gata que come un poco menos de lo habitual</li>
            <li>un macho que ha cambiado su zona de descanso</li>
            <li>un refugio que hay que arreglar antes de las lluvias</li>
          </ul>

          <p>Así es como funciona realmente un santuario.</p>

          <p>No emergencias constantes, sino atención constante.</p>

          <p>
            Es en estos días “normales” donde se entiende si el equilibrio se
            sostiene.
          </p>

          <p className="font-semibold">Y hoy se sostiene.</p>
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
              className="w-11 h-11 rounded-full border-2 border-green-500 flex items-center justify-center shadow"
            >
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
            </a>

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
                articleUrl
              )}`}
              className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shadow"
            >
              <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
            </a>

            {/* X */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                articleUrl
              )}`}
              className="w-11 h-11 rounded-full bg-black flex items-center justify-center shadow"
            >
              <img src="/icons/x.svg" alt="X" className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              onClick={handleInstagramClick}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow cursor-pointer"
            >
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-5 h-5"
              />
            </a>

            {/* Email */}
            <a
              href={`mailto:?subject=Diario del santuario&body=${encodeURIComponent(
                articleUrl
              )}`}
              className="w-11 h-11 rounded-full bg-gray-600 flex items-center justify-center shadow"
            >
              <img src="/icons/mail.svg" alt="Email" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
