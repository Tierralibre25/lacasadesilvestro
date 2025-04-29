// components/Hero.tsx
import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <img
        src="/images/hero.jpg"
        alt="Gatos libres en el prado"
        className="w-full h-[60vh] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-center items-center text-center p-4">
        <h2 className="text-4xl font-bold text-white mb-4">La Casa de Silvestro</h2>
        <p className="text-xl text-white mb-6">
          Un refugio sin jaulas, donde la libertad es de casa
        </p>
      </div>
    </section>
  )
}

export default Hero
