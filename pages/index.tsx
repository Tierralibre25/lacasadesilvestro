// pages/index.tsx
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Timeline from '../components/Timeline'
import Conocenos from '../components/Conocenos'
import Support from '../components/Support' 

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Timeline />
      <Conocenos />
      <Support />
    </>
  )
}
