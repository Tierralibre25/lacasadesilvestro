import Image from 'next/image';
import Link from 'next/link';

export default function Ayudanos() {
  return (
    <section className="bg-cream text-dark px-6 py-12 md:px-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">Ayúdanos</h2>

        {/* immagine illustrativa */}
        <div className="flex justify-center mb-10">
          {/* usa il file locale in /public */}
          <Image
            src="/ayudanos-gatos.png"
            alt="Gatos felices con donaciones"
            width={350}
            height={350}
          />
        </div>

        {/* 1. GoFundMe */}
        <h3 className="text-2xl font-bold mb-2">💛 Donación económica inmediata</h3>
        <p className="mb-6">
          Tu aporte, grande o pequeño, se convierte en pienso, atención veterinaria y
          refugio. <br />
          <Link
            href="https://www.gofundme.com/f/la-casa-de-silvestro"
            target="_blank"
            className="text-green underline font-semibold"
          >
            👉 Apóyanos en GoFundMe
          </Link>
        </p>

        {/* 2. Alimento y material */}
        <h3 className="text-2xl font-bold mb-2">🍽️ Alimento y material</h3>
        <p className="mb-2 italic">
          «Un saco de pienso hoy es un maullido feliz mañana.»
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Pienso seco y comida húmeda (adultos y cachorros)</li>
          <li>Leche especial para gatitos lactantes</li>
          <li>Arena ecológica para areneros</li>
          <li>Suplementos y vitaminas</li>
        </ul>
        <p className="mb-6">
          Para coordinar la entrega completa este&nbsp;
          <Link href="/contacto" className="underline text-green font-semibold">
            formulario de contacto
          </Link>
          .
        </p>

        {/* 3. Mantas y camitas */}
        <h3 className="text-2xl font-bold mb-2">🛏️ Mantas y camitas</h3>
        <p className="mb-6">
          Aceptamos mantas limpias, toallas, camitas y rascadores en buen estado para
          que ningún gato pase frío.
        </p>

        {/* 4. Utensilios */}
        <h3 className="text-2xl font-bold mb-2">🥣 Utensilios y enseres</h3>
        <ul className="list-disc list-inside mb-8">
          <li>Cuencos de acero o cerámica</li>
          <li>Cajitas de transporte (transportines)</li>
          <li>Juguetes resistentes</li>
          <li>Árboles o rascadores</li>
        </ul>

        {/* cierre */}
        <p className="text-center text-lg font-medium">
          Gracias por creer en un refugio sin jaulas, donde la libertad es de casa.🐾
        </p>
      </div>
    </section>
  );
}
