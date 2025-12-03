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
       <div className="text-center mt-10 mb-8">
  <Link href="/blog">
    <a className="inline-block bg-[#0b5e35] text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-xl hover:bg-[#094d2c] transition">
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



