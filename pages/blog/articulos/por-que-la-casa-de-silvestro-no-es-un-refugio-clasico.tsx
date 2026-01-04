import React from "react";
import Head from "next/head";

const articleUrl =
  "https://www.lacasadesilvestro.com/blog/articulos/por-que-la-casa-de-silvestro-no-es-un-refugio-clasico";

export default function NoEsUnRefugioClasico() {
  return (
    <>
      <Head>
        <title>Por qué La Casa de Silvestro no es un refugio “clásico”</title>

        <meta
          name="description"
          content="La Casa de Silvestro no nace para acumular gatos, sino para proteger situaciones: gestión, prevención, equilibrio y continuidad."
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="La Casa de Silvestro" />
        <meta
          property="og:title"
          content="Por qué La Casa de Silvestro no es un refugio “clásico”"
        />
        <meta
          property="og:description"
          content="La diferencia entre acoger y proteger: un modelo basado en gestión, equilibrio y continuidad."
        />
        <meta property="og:url" content={articleUrl} />
        <meta
          property="og:image"
          content="https://www.lacasadesilvestro.com/images/blog/articolo_4_genn.jpg"
        />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Por qué La Casa de Silvestro no es un refugio “clásico”
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Publicado el 4 de enero de 2026
        </p>

        <img
          src="/images/blog/articolo_4_genn.jpg"
          alt="Santuario felino rural: La Casa de Silvestro"
          className="w-full rounded-xl shadow-lg mb-8"
        />

        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            Muchas personas, cuando oyen hablar de un santuario, imaginan una
            estructura que “acoge gatos”. Esa definición es reducida y, en muchos
            casos, engañosa.
          </p>

          <p>
            La Casa de Silvestro no nace para acumular animales, sino para
            proteger situaciones. El centro del trabajo no es el número de gatos
            presentes, sino la calidad de las condiciones en las que viven —
            dentro y fuera del santuario.
          </p>

          <h2 className="text-2xl font-semibold">
            🧭 La diferencia entre acoger y proteger
          </h2>

          <p>Acoger significa llevarse encima un problema.</p>
          <p>Proteger significa reducir el problema desde la raíz.</p>

          <p>La protección incluye:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>control de nacimientos</li>
            <li>estabilización de los grupos</li>
            <li>gestión de territorios</li>
            <li>prevención sanitaria</li>
            <li>educación de las personas implicadas</li>
          </ul>

          <p>
            Sin esto, cualquier refugio se convierte en un contenedor que solo se
            llena.
          </p>

          <h2 className="text-2xl font-semibold">
            🧱 Por qué no podemos “recoger a todos”
          </h2>

          <p>
            Cada espacio tiene límites físicos, sanitarios y de gestión.
            Superarlos no es un acto de generosidad: es irresponsabilidad.
          </p>

          <p>Aceptar más gatos de los que se pueden gestionar provoca:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>descenso en la calidad de los cuidados</li>
            <li>estrés crónico en los animales</li>
            <li>aumento de enfermedades</li>
            <li>pérdida de control de todo el sistema</li>
          </ul>

          <p className="font-semibold">
            Decir “no” forma parte del trabajo serio.
          </p>

          <h2 className="text-2xl font-semibold">🧠 Nuestro modelo</h2>

          <p>El modelo de La Casa de Silvestro es sencillo e incómodo:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>primero se estabiliza el territorio</li>
            <li>después se reduce el número de nacimientos</li>
            <li>se crea equilibrio</li>
            <li>
              y se mantienen en el tiempo las condiciones alcanzadas
            </li>
          </ul>

          <p>
            Esto produce menos emergencias, menos sufrimiento y menos “rescates”
            espectaculares. Y es exactamente lo que debería ocurrir.
          </p>

          <h2 className="text-2xl font-semibold">🌱 El valor de la continuidad</h2>

          <p>
            La protección no se basa en picos emocionales, sino en constancia:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>mismos horarios</li>
            <li>mismos procedimientos</li>
            <li>mismas responsabilidades</li>
            <li>durante meses y años</li>
          </ul>

          <p>
            Es aburrido de contar, pero es lo único que funciona.
          </p>

          <h2 className="text-2xl font-semibold">
            🧭 Una identidad que no cambia con las modas
          </h2>

          <p>
            No perseguimos tendencias, formatos sociales o historias efectistas.
            Seguimos criterios técnicos, incluso cuando no gustan.
          </p>

          <p>
            No porque sea fácil, sino porque es la única forma de que la
            protección se sostenga en el tiempo.
          </p>

          <h2 className="text-2xl font-semibold">🐾 Conclusión</h2>

          <p>
            La Casa de Silvestro no existe para llenarse de gatos. Existe para
            que sufran menos.
          </p>

          <p className="font-semibold">
            Este es nuestro trabajo. Y sobre esto construimos cada decisión.
          </p>
        </div>
      </div>
    </>
  );
}
