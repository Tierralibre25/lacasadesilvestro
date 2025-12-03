// pages/index.tsx
import Head from 'next/head'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Timeline from '../components/Timeline'
import Conocenos from '../components/Conocenos'
import Support from '../components/Support'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>La Casa de Silvestro · Refugio felino en Villalonga</title>
        <meta
          name="description"
          content="Refugio felino sin jaulas en Villalonga (Valencia). Cuidamos a más de 20 gatos callejeros ofreciéndoles comida, refugio y atención veterinaria. Ayúdanos con tu donación o colaboración."
        />
      </Head>
       <div className="text-center mt-16 mb-12">
  <Link href="/blog">
    <a className="inline-block bg-green-700 text-white text-xl font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-green-800 transition">
      Nuestro Blog
    </a>
  </Link>
</div>
      <Hero />
      <Stats />
      <Timeline />
      <Conocenos />
      <Support />
    </>
  )
}


