export default function NuestraFilosofia() {
    return (
      <section className="bg-amber-50 text-gray-800 py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-green-900 mb-6">Nuestra Filosofía</h2>
          <p className="text-lg leading-relaxed mb-8">
            En La Casa de Silvestro creemos en un mundo donde los animales no se encierran, se cuidan.
            Aquí, cada gato tiene nombre, historia y libertad. No usamos jaulas ni encerramos la vida:
            la dejamos florecer en paz.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Vivimos en el corazón de la naturaleza, en una finca libre donde los gatos pueden correr,
            trepar, descansar al sol o resguardarse bajo un árbol. Cuidamos su bienestar físico y emocional,
            ofreciendo refugio, alimento, atención veterinaria y, sobre todo, amor.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Este proyecto nace del deseo de convivir con respeto, de proteger sin poseer, de dar sin esperar.
            No somos un albergue convencional: somos una casa libre, una comunidad, una familia.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-10 mt-12">
            <div className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/96/tree.png" alt="Libertad" className="mb-2 w-16 h-16" />
              <p className="font-semibold text-green-900">Libertad<br /><span className="font-normal">con cuidado</span></p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/96/cat-footprint.png" alt="Respeto" className="mb-2 w-16 h-16" />
              <p className="font-semibold text-yellow-900">Respeto<br /><span className="font-normal">por cada vida</span></p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://img.icons8.com/color/96/like--v1.png" alt="Amor" className="mb-2 w-16 h-16" />
              <p className="font-semibold text-red-900">Amor<br /><span className="font-normal">sin condiciones</span></p>
            </div>
          </div>
          <p className="text-lg leading-relaxed mt-12">
            Queremos que La Casa de Silvestro sea también un espacio de encuentro, aprendizaje y conciencia.
            Si tú también sueñas con un mundo mejor para los animales, este lugar es tuyo.
          </p>
        </div>
      </section>
    );
  }
  