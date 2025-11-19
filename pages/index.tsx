// pages/index.tsx
import Head from 'next/head'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Timeline from '../components/Timeline'
import Conocenos from '../components/Conocenos'
import Support from '../components/Support'

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

      <Hero />
      <Stats />
      <Timeline />
      <Conocenos />
      <Support />
    </>
  )
}

