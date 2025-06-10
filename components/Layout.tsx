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
      </Head>

      <header className="p-4 flex justify-between bg-cream">
      <Link href="/" className="text-xl font-bold text-green hover:underline">TIERRA LIBRE</Link>
        <nav className="space-x-4 text-dark">
          <Link href="/filosofia" className="hover:underline">Nuestra Filosofía</Link>
          <a href="#hosts" className="hover:underline">Nuestros Huéspedes</a>
          <a href="#family" className="hover:underline">Familia</a>
          <a href="#support" className="hover:underline">Apóyanos</a>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="p-4 text-center text-sm text-dark bg-cream">
  © 2025 Cooperativa Tierra Libre

  <div className="mt-2">
    <img
      src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Flacasadesilvestro.com&count_bg=%23F9C846&title_bg=%23000000&icon=cat&icon_color=%23FFFFFF&title=Visitantes&edge_flat=false"
      alt="Contador de visitas"
    />
  </div>
</footer>

    </>
  );
};

export default Layout;