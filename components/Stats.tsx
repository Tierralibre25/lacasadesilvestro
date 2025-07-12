// components/Stats.tsx
import React, { useEffect, useState } from 'react'

interface StatsData {
  permanent: number
  newArrivals: number
  totalArea: number
}

const Stats: React.FC = () => {
  const [data, setData] = useState<StatsData>({
    permanent: 26,
    newArrivals: 9,
    totalArea: 1.45
  })

  useEffect(() => {
    // Qui potrai poi collegare i dati reali da Strapi
    setData({ permanent: 26, newArrivals: 9, totalArea: 1.49 })
  }, [])

  return (
    <section className="py-12 bg-cream text-center">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
        <div>
          <h3 className="text-3xl font-bold text-green">{data.permanent}</h3>
          <p>Huéspedes permanentes</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-green">{data.newArrivals}</h3>
          <p>Nuevas llegadas</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-green">{data.totalArea} ha</h3>
          <p>Superficie total</p>
        </div>
      </div>
    </section>
  )
}

export default Stats
