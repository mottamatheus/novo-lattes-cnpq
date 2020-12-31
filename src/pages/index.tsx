import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>
          CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico
        </title>
      </Head>
      <main>
        <Navbar />
        <Link href="/profile">a</Link>
      </main>
    </div>
  );
};

export default Home;
