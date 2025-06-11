// components/Familia.tsx
import Image from 'next/image';
const gatos = [
  {
    foto: '/gatos/nina.jpg',
    nombre: 'Nina',
    nota: 'La mamá cariñosa (1 año y 2 meses)',
  },
  {
    foto: '/gatos/dibujo.jpg',
    nombre: 'Dibujo',
    nota: 'La mamà independiente (1 año y 2 meses)',
  },
  {
    foto: '/gatos/ringhio.jpg',
    nombre: 'Ringhio',
    nota: 'El jefe (1 año y 2 meses)',
  }
  {
    foto: '/gatos/hambre.jpg',
    nombre: 'Hambre',
    nota: 'El tio que quiere siempre comida y jugar (1 año y 1 mese)',
  }
  {
    foto: '/gatos/ultimo.jpg',
    nombre: 'Ultimo',
    nota: 'El dulce juguetòn (1 año y 1 mese)',
  }
  {
    foto: '/gatos/pecoso.jpg',
    nombre: 'Pecoso',
    nota: 'El mejor niñero de todos (1 año y 2 meses)',
    {
        foto: '/gatos/pantalone.jpg',
        nombre: 'Pantalone',
        nota: 'El Rey del reino de arriba (1 año y 2 meses)',
      }
{
    foto: '/gatos/venuso.jpg',
    nombre: 'Venuso',
    nota: 'El gato elegante (1 año y 2 meses)',
  }
];

export default function Familia() {
  return (
    <section className="bg-cream text-dark px-6 py-12 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">Familia</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gatos.map((gato) => (
            <div key={gato.nombre} className="text-center">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={gato.foto}
                  alt={gato.nombre}
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{gato.nombre}</h3>
              <p className="text-sm text-gray-700">{gato.nota}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
