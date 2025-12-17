import React from "react";
import Head from "next/head";

const articleUrl =
  "https://www.lacasadesilvestro.com/blog/articulos/ayudar-gatos-callejeros-no-siempre-llevarlos-solucion";

export default function AyudarGatosCallejeros() {
  return (
    <>
      <Head>
        <title>
          Ayudar de verdad a los gatos callejeros: por qué no siempre
          llevárselos es la solución
        </title>

        <meta
          name="description"
          content="Ayudar a los gatos de colonia no siempre significa llevárselos. Descubre por qué la gestión responsable es la verdadera protección."
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="La Casa de Silvestro" />
        <meta
          property="og:title"
          content="Ayudar de verdad a los gatos callejeros"
        />
        <meta
          property="og:description"
          content="Por qué no siempre llevarse a un gato de colonia es la mejor solución y cuándo intervenir de verdad."
        />
        <meta property="og:url" content={articleUrl} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Ayudar de verdad a los gatos callejeros: por qué no siempre
          “llevárselos” es la solución
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Publicado el 17 de diciembre de 2025
        </p>

        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            Cuando se habla de gatos callejeros, la reacción más común es pensar
            que hay que “salvarlos” llevándolos lejos de la calle.
          </p>

          <p>
            Es una reacción comprensible, pero a menudo equivocada. Un gato de
            colonia no es automáticamente un gato en peligro.
          </p>

          <p>
            Muchos viven en un equilibrio preciso, construido con el tiempo,
            hecho de territorios conocidos, relaciones estables y rutinas
            consolidadas. Intervenir sin comprender ese equilibrio puede causar
            más daño que beneficio.
          </p>

          <h2 className="text-2xl font-semibold">
            🧠 Colonia no significa abandono
          </h2>

          <p>
            Una colonia felina bien gestionada es muy distinta de la imagen
            caótica que a menudo se imagina.
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>conocen su territorio</li>
            <li>saben dónde refugiarse</li>
            <li>reconocen a los miembros del grupo</li>
            <li>evitan conflictos innecesarios</li>
          </ul>

          <p>Arrancarlos de este contexto puede provocar:</p>

          <ul className="list-disc list-inside space-y-1">
            <li>estrés crónico</li>
            <li>pérdida de apetito</li>
            <li>comportamientos agresivos o depresivos</li>
            <li>problemas de salud ligados a la ansiedad</li>
          </ul>

          <h2 className="text-2xl font-semibold">
            ⚕️ La verdadera protección es la gestión, no el traslado
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>esterilizar</li>
            <li>monitorizar</li>
            <li>garantizar comida y agua</li>
            <li>ofrecer refugios</li>
            <li>intervenir solo cuando es necesario</li>
          </ul>

          <p>
            Este enfoque reduce sufrimiento, enfermedades y mortalidad mucho más
            que un rescate indiscriminado.
          </p>

          <h2 className="text-2xl font-semibold">
            🏡 Cuándo el rescate sí es necesario
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>heridas graves</li>
            <li>enfermedades evidentes</li>
            <li>cachorros sin madre</li>
            <li>situaciones de peligro real</li>
          </ul>

          <p>
            La verdadera protección empieza con la observación, no con el
            impulso.
          </p>

          <h2 className="text-2xl font-semibold">
            🌿 La filosofía de La Casa de Silvestro
          </h2>

          <p>
            En nuestro santuario no aplicamos una regla única para todos.
            Seguimos lo que es mejor para ese gato, en ese momento, en ese
            contexto.
          </p>

          <p className="font-semibold">
            Proteger no significa poseer. A veces significa simplemente dejar
            vivir, pero con seguridad.
          </p>
        </div>
      </div>
    </>
  );
}
