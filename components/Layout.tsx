// components/Layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>La Casa de Silvestro · Tierra Libre</title>
        <meta
          name="description"
          content="Un refugio sin jaulas, donde la libertad es de casa."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="article" />
<meta property="og:site_name" content="La Casa de Silvestro" />
<meta property="og:title" content="Santuario felino en Villalonga – La Casa de Silvestro" />
<meta property="og:description" content="Descubre por qué los santuarios felinos son esenciales hoy y cómo La Casa de Silvestro ofrece un hogar seguro y ético a decenas de gatos." />
<meta property="og:image" content="https://www.lacasadesilvestro.com/images/blog/articolo_1.jpg" />
<meta property="og:url" content="https://www.lacasadesilvestro.com/blog/articulos/santuario-felino-villalonga-la-casa-de-silvestro" />
      <header className="p-4 flex justify-between bg-cream">
      </Head>
        {/* logo → home */}
        <Link href="/" className="text-xl font-bold text-green hover:underline">
          TIERRA LIBRE
        </Link>

        {/* barra di navigazione */}
        <nav className="space-x-4 text-dark">
  <Link href="/filosofia" className="hover:underline">Nuestra Filosofía</Link>
  <Link href="/familia" className="hover:underline">Familia</Link>
  <Link href="/ayudanos" className="hover:underline">Apóyanos</Link>
  <Link href="/contacto" className="hover:underline">Contacto</Link>
  <Link href="/blog">Blog</Link>
</nav>
      </header>

      <main>{children}</main>

      {/* footer con contatore visite centrato */}
      <footer className="p-4 text-center text-sm text-dark bg-cream">
        © 2025 Cooperativa Tierra Libre
        <div className="mt-2 flex justify-center">
          <img
            src="https://hitscounter.dev/api/hit?url=https%3A%2F%2Fwww.lacasadesilvestro.com&label=Visitas&icon=emoji-heart-eyes-fill&color=%23198754"
            alt="Visitas"
          />
        </div>
      </footer>
    </>
  );
};

export default Layout;


