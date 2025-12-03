import Link from "next/link";

export default function Blog() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* TITOLO CENTRATO */}
      <h1 className="text-4xl font-bold mb-10 text-center">
        Il nostro blog
      </h1>

      {/* ARTICOLO 1 */}
      <article className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-col md:flex-row gap-4 items-start">
        <img
          src="/img/blog/25gatti1.jpg"
          alt="Colonia felina La Casa de Silvestro"
          className="w-full md:w-1/3 rounded-lg object-cover"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">
            Perché 25 gatti hanno bisogno di una casa sicura
          </h2>
          <p className="text-gray-600 mb-3">
            Viviamo in un terreno in affitto dove accudiamo 25 gatti salvati
            dalla strada. Il nostro obiettivo è acquistare un terreno stabile
            per garantire loro sicurezza e continuità…
          </p>

          <Link href="/blog/articoli/25-gatti-casa-sicura">
            <a className="text-blue-600 font-semibold">
              Leggi tutto →
            </a>
          </Link>
        </div>
      </article>

      {/* ARTICOLO 2 */}
      <article className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-col md:flex-row gap-4 items-start">
        <img
          src="/img/blog/cer1.jpg"
          alt="Metodo CER"
          className="w-full md:w-1/3 rounded-lg object-cover"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">
            Cos’è il metodo CER e perché è fondamentale
          </h2>
          <p className="text-gray-600 mb-3">
            Il metodo CER (Cattura, Sterilizzazione, Ritorno) è l’unico modo
            etico e intelligente per gestire una colonia felina, riducendo
            le nascite e migliorando la vita dei gatti e del quartiere…
          </p>

          <Link href="/blog/articoli/metodo-cer">
            <a className="text-blue-600 font-semibold">
              Leggi tutto →
            </a>
          </Link>
        </div>
      </article>
    </main>
  );
}
