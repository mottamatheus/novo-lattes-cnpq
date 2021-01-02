import React from 'react';

import Head from 'next/head';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

const ProfilePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Busca | Currículo Lattes - CNPq</title>
      </Head>
      <Navbar />
      <SearchBar />
    </>
  );
};

export default ProfilePage;
