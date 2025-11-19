// components/Hero.tsx
import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative">
      <img
        src="/images/hero.jpg"
        alt="Refugio felino La Casa de Silvestro en Villalonga"
        className="w-full h-[60vh] md:h-[70vh] object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          La Casa de Silvestro
        </h1>
        <p className="text-lg md:text-2xl text-white mb-6 max-w-2xl">
          Refugio felino sin jaulas en Villalonga, donde la libertad y el cuidado
          van de la mano para más de 20 gatos.
        </p>

        <a
          href="#support"
          className="inline-block px-8 py-3 bg-white text-green font-semibold rounded-xl shadow-md hover:opacity-90 transition"
        >
          Quiero ayudar a los gatos
        </a>
      </div>
    </section>
  )
}

export default Hero
