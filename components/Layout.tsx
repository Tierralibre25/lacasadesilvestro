import React from "react";
import Head from "next/head";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>La Casa de Silvestro · Tierra Libre</title>

        <meta
          name="description"
          content="Un refugio sin jaulas, donde la libertad es de casa."
        />

        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph global */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="La Casa de Silvestro" />
        <meta
          property="og:title"
          content="La Casa de Silvestro – Santuario felino sin jaulas"
        />
        <meta
          property="og:description"
          content="Descubre por qué los santuarios felinos son esenciales hoy y cómo La Casa de Silvestro ofrece un hogar seguro y ético a decenas de gatos."
        />
        <meta
          property="og:image"
          content="https://www.lacasadesilvestro.com/images/blog/articolo_1.jpg"
        />
        <meta
          property="og:url"
          content="https://www.lacasadesilvestro.com/"
        />
      </Head>

      <div className="min-h-screen bg-cream text-gray-900 flex flex-col">
        {/* HEADER */}
        <header className="p-4 flex justify-between items-center bg-cream">
          {/* logo -> home */}
          <Link
            href="/"
            className="text-xl font-bold text-green-700 hover:underline"
          >
            TIERRA LIBRE
          </Link>

          {/* barra di navigazione */}
          <nav className="space-x-4 text-sm md:text-base">
            <Link href="/nuestra-filosofia" className="hover:underline">
              Nuestra Filosofía
            </Link>
            <Link href="/familia" className="hover:underline">
              Familia
            </Link>
            <Link href="/ayudanos" className="hover:underline">
              Apóyanos
            </Link>
            <Link href="/contacto" className="hover:underline">
              Contacto
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </nav>
        </header>

        {/* CONTENUTO PRINCIPALE */}
        <main className="flex-1">{children}</main>

        {/* FOOTER SEMPLICE */}
        <footer className="py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Cooperativa Tierra Libre
        </footer>
      </div>
    </>
  );
};

export default Layout;
