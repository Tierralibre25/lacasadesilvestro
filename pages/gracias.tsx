export default function GraciasPage() {
    return (
      <section className="bg-cream min-h-screen flex flex-col items-center justify-center text-dark px-6">
        <h1 className="text-4xl font-semibold mb-4">¡Gracias por tu mensaje! 😻</h1>
        <p className="text-lg text-center max-w-lg">
          Hemos recibido tu correo y te responderemos lo antes posible.
          <br />
          Mientras tanto, sigue explorando La Casa de Silvestro y gracias por ayudar a nuestros gatos a vivir libres y felices.
        </p>
  
        <a
          href="/"
          className="mt-8 bg-green text-white px-6 py-2 rounded hover:opacity-90"
        >
          Volver a la página principal
        </a>
      </section>
    );
  }
  