import React from 'react';

import { Container, Main, Image, About } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <Image />
        <About>
          <h1>Katiele Rezer Menger</h1>
          <span>Doutoranda e Mestre em Ciência Política</span>
        </About>
      </Main>
    </Container>
  );
};

export default Profile;
