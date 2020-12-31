import React from 'react';

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';

const ProfilePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Busca | Currículo Lattes - CNPq</title>
      </Head>
      <Navbar />
      <Profile />
    </>
  );
};

export default ProfilePage;
