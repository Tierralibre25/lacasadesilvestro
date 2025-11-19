import React from 'react'

const Support: React.FC = () => (
  <section id="support" className="py-16 bg-green text-white">
    <div className="max-w-2xl mx-auto text-center px-4">
      
      <h2 className="text-4xl font-bold mb-4">
        Ayuda a Casa de Silvestro
      </h2>

      <p className="mb-8 text-lg">
        Apoya nuestra campaña en GoFundMe para garantizar alimentación, cuidados y un
        refugio seguro para nuestros gatos callejeros. Cada aportación marca la diferencia.
      </p>

      <a
        href="https://www.gofundme.com/f/casa-para-gatos-libres-ayudanos-con-la-casa-de-silvestro?lang=es_ES"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-white text-green font-semibold rounded-xl shadow-md hover:opacity-90 transition"
      >
        Dona ahora en GoFundMe
      </a>

    </div>
  </section>
)

export default Support
