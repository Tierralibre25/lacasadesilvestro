import React from "react";
import Head from "next/head";

const articleUrl =
  "https://www.lacasadesilvestro.com/blog/articulos/por-que-santuario-natural-mejor-lugar-gato-colonia";

export default function SantuarioNaturalMejorLugarGatosColonia() {
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
    } catch (err) {
      // ignorado
    } finally {
      window.open("https://instagram.com", "_blank");
    }
  };

  return (
    <>
      <Head>
        <title>
          Por qué un santuario natural es el mejor lugar para un gato de colonia
        </title>

        <meta
          name="description"
          content="Descubre por qué un santuario natural protege mejor a los gatos de colonia, reduciendo el estrés, respetando su libertad y ofreciendo cuidados constantes."
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="La Casa de Silvestro" />
        <meta
          property="og:title"
          content="Por qué un santuario natural es el mejor lugar para un gato de colonia"
        />
        <meta
          property="og:description"
          content="Un santuario natural permite libertad en seguridad, menos estrés, alimentación estable y relaciones sociales equilibradas para los gatos de colonia."
        />
        <meta
          property="og:image"
          content="https://www.lacasadesilvestro.com/images/blog/articolo_5_a.jpg"
        />
        <meta property="og:url" content={articleUrl} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Por qué un santuario natural es el mejor lugar para un gato de colonia
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Publicado el 10 de diciembre de 2025
        </p>

        {/* IMAGEN PRINCIPAL */}
        <img
          src="/images/blog/articolo_5_a.jpg"
          alt="Gato de colonia en santuario natural"
          className="w-full rounded-xl shadow-lg mb-8"
        />

        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            Cuando se habla de proteger a los gatos callejeros, muchas personas
            piensan inmediatamente en refugios cerrados, jaulas o habitaciones
            pequeñas.
          </p>

          <p>
            Pero no todos los gatos pueden vivir bien en un espacio confinado.
            Muchos han crecido siempre al aire libre, en autonomía, y la
            libertad es una parte esencial de su equilibrio.
          </p>

          <p>
            Aquí es donde entra en juego un santuario natural como La Casa de
            Silvestro: un lugar donde los gatos pueden vivir protegidos, pero
            libres, sin ser arrancados de su entorno natural.
          </p>

          {/* SEGUNDA IMAGEN */}
          <img
            src="/images/blog/articolo_5_b.jpg"
            alt="Gatos viviendo en libertad controlada"
            className="w-full rounded-xl shadow-lg mb-8"
          />

          <h2 className="text-2xl font-semibold">
            🌿 1. La libertad reduce el estrés y mejora la salud
          </h2>

          <p>
            Los gatos nacidos en la calle ven el mundo de forma diferente a los
            gatos domésticos. Para ellos, el aire libre, los olores del terreno,
            la posibilidad de esconderse, subirse o explorar son necesidades
            básicas.
          </p>

          <p>
            Cuando se les obliga a vivir en jaulas o espacios cerrados, muchos
            desarrollan:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>estrés crónico</li>
            <li>agresividad</li>
            <li>pérdida de apetito</li>
            <li>comportamientos depresivos</li>
          </ul>

          <p>
            En un santuario natural, en cambio, pueden moverse y mantener sus
            costumbres en un entorno seguro y controlado.
          </p>

          <h2 className="text-2xl font-semibold">
            🛖 2. Refugios sí, pero sin imposiciones
          </h2>

          <p>
            En nuestro santuario existen áreas cubiertas, casetas, zonas
            protegidas y lugares cálidos para descansar.
          </p>

          <p>
            La diferencia es que nadie obliga al gato a usarlos: él elige dónde
            se siente mejor. Esa capacidad de elección genera un sentido de
            control, esencial para su bienestar emocional.
          </p>

          <h2 className="text-2xl font-semibold">
            🍽️ 3. Comida y cuidados constantes sin quitarles su autonomía
          </h2>

          <p>
            Muchos gatos de colonia viven mal porque no encuentran comida
            suficiente o agua limpia.
          </p>

          <p>En un santuario natural:</p>

          <ul className="list-disc list-inside space-y-1">
            <li>la comida está garantizada</li>
            <li>el agua siempre es fresca</li>
            <li>los cuidados llegan cuando hacen falta</li>
          </ul>

          <h2 className="text-2xl font-semibold">
            ❤️ 4. Un entorno que permite desarrollar relaciones naturales
          </h2>

          <p>
            Los gatos de colonia tienen dinámicas sociales muy distintas a las
            de los gatos domésticos. Algunos forman pequeños grupos familiares,
            otros prefieren vivir más apartados.
          </p>

          <p>Un santuario abierto permite:</p>

          <ul className="list-disc list-inside space-y-1">
            <li>estabilidad en los grupos</li>
            <li>menos conflictos territoriales</li>
            <li>criar cachorros con seguridad</li>
            <li>convivencia equilibrada gracias a la esterilización</li>
          </ul>

          <h2 className="text-2xl font-semibold">
            ⚕️ 5. Libertad acompañada de supervisión constante
          </h2>

          <p>Libertad no significa abandono. Todo lo contrario:</p>

          <ul className="list-disc list-inside space-y-1">
            <li>observamos a los gatos cada día</li>
            <li>identificamos rápidamente quién necesita ayuda</li>
            <li>intervenimos con veterinarios siempre que es necesario</li>
          </ul>

          <h2 className="text-2xl font-semibold">🌞 Conclusión</h2>

          <p>
            Un santuario natural como La Casa de Silvestro no es simplemente un
            lugar donde viven gatos. Es un entorno diseñado para respetar lo que
            son, lo que han vivido y lo que realmente necesitan.
          </p>

          <p>
            No todos los gatos pueden vivir encerrados. Muchos necesitan
            libertad, hierba bajo sus patas, un rayo de sol y alguien que
            asegure que están bien.
          </p>

          <p>
            Eso es exactamente lo que intentamos construir, día tras día.
          </p>
        </div>

        {/* BOTONES */}
        <div className="mt-12 p-6 bg-white rounded-2xl shadow-md text-center">
          <h3 className="font-semibold text-lg mb-4">Comparte este artículo</h3>

          <div className="flex justify-center gap-4">
            {/* WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                articleUrl
              )}`}
              className="w-11 h-11 rounded-full bg-white border-2 border-green-500 flex items-center justify-center shadow"
            >
              <img src="/icons/whatsapp.svg" className="w-5 h-5" />
            </a>

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
                articleUrl
              )}`}
              className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shadow"
            >
              <img src="/icons/facebook.svg" className="w-5 h-5" />
            </a>

            {/* X */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                articleUrl
              )}`}
              className="w-11 h-11 rounded-full bg-black flex items-center justify-center shadow"
            >
              <img src="/icons/x.svg" className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              onClick={handleInstagramClick}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow cursor-pointer"
            >
              <img src="/icons/instagram.svg" className="w-5 h-5" />
            </a>

            {/* Email */}
            <a
              href={`mailto:?subject=Artículo interesante&body=${encodeURIComponent(
                articleUrl
              )}`}
              className="w-11 h-11 rounded-full bg-gray-600 flex items-center justify-center shadow"
            >
              <img src="/icons/mail.svg" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
