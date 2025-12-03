import Layout from "../components/Layout";
import Link from "next/link";

export default function Blog() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">

        <h1 className="text-4xl font-bold mb-10">Blog – La Casa de Silvestro</h1>

        {/* ARTICOLO 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Perché 25 gatti hanno bisogno di una casa sicura
          </h2>
          <p className="text-gray-600 mb-4">
            Viviamo in un terreno in affitto dove accudiamo 25 gatti salvati dalla strada…
          </p>
          <Link href="/blog/articoli/25-gatti-casa-sicura">
            <span className="text-blue-600 font-semibold cursor-pointer">
              Leggi tutto →
            </span>
          </Link>
        </div>

        {/* ARTICOLO 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Cos’è il metodo CER e perché è fondamentale
          </h2>
          <p className="text-gray-600 mb-4">
            Il metodo CER è l’unico modo etico per gestire una colonia felina…
          </p>
          <Link href="/blog/articoli/metodo-cer">
            <span className="text-blue-600 font-semibold cursor-pointer">
              Leggi tutto →
            </span>
          </Link>
        </div>

      </div>
    </Layout>
  );
}
