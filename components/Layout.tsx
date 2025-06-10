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
        <h1 className="text-xl font-bold text-green">TIERRA LIBRE</h1>
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
      </footer>
    </>
  );
};

export default Layout;