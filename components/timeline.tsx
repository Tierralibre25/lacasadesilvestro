// components/Timeline.tsx
import React from 'react'

interface Event {
  month: string
  description: string
}

const events: Event[] = [
  { month: 'Enero', description: 'Llegada a Villalonga' },
  { month: 'Febrero', description: 'Construcción de puntos de comida y agua' },
  { month: 'Marzo', description: 'Construcción de refugio para la noche y la lluvia' },
  { month: 'Abril', description: 'Añadido pequeño parque de juegos con rascador' },
  { month: 'Mayo', description: 'Apertura de la recaudación de fondos en GoFundMe' },
]

const Timeline: React.FC = () => (
  <section id="timeline" className="py-12 bg-cream">
    <h2 className="text-2xl font-semibold text-center text-dark mb-8">
      Línea de tiempo
    </h2>
    <ol className="relative border-l-2 border-green max-w-4xl mx-auto">
      {events.map((e, i) => (
        <li key={i} className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-green rounded-full -left-4 ring-4 ring-cream">
            <span className="text-white font-bold">
              {e.month.slice(0, 3).toUpperCase()}
            </span>
          </span>
          <h3 className="text-lg font-semibold text-dark">{e.month}</h3>
          <p className="mt-1 text-base text-dark">{e.description}</p>
        </li>
      ))}
    </ol>
  </section>
)

export default Timeline
