export default function ContactoForm() {
    return (
      <section className="bg-cream text-dark px-6 py-12 md:px-16">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Contáctanos
          </h2>
  
          {/* FormSubmit envía el correo directamente */}
          <form
            action="https://formsubmit.co/info@cooperativatierralibre.es"
            method="POST"
            className="space-y-4"
          >
            {/* oculta el captcha de FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            {/* redirección tras envío (opcional) */}
            <input type="hidden" name="_next" value="/gracias" />
  
            <div>
              <label className="block mb-1 font-medium">Nombre</label>
              <input
                type="text"
                name="nombre"
                required
                className="w-full border p-2 rounded"
              />
            </div>
  
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border p-2 rounded"
              />
            </div>
  
            <div>
              <label className="block mb-1 font-medium">Mensaje</label>
              <textarea
                name="mensaje"
                rows={5}
                required
                className="w-full border p-2 rounded"
              />
            </div>
  
            <button
              type="submit"
              className="bg-green text-white px-6 py-2 rounded hover:opacity-90"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    );
  }
  