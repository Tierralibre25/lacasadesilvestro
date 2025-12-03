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
    <a className="inline-block bg-[#0b5e35] text-white text-lg font-semibold px-7 py-3 rounded-xl 
      shadow-[0_6px_12px_rgba(0,0,0,0.25),0_-3px_6px_rgba(255,255,255,0.25)]
      hover:shadow-[0_4px_8px_rgba(0,0,0,0.35),0_-2px_4px_rgba(255,255,255,0.2)]
      transition">
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




