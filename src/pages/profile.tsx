import React from 'react';

import Head from 'next/head';
import Profile from '../components/Profile';

const ProfilePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Currículo Lattes - Katiele Rezer Menger - CNPq</title>
      </Head>
      <Profile />
    </>
  );
};

export default ProfilePage;
