import React from 'react';
import Link from 'next/link';

import logoImg from '../../assets/lattes.svg';

import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Link href="/">Sobre</Link>
      <Link href="/search">Busca</Link>
      <Link href="/search">Instituições</Link>
      <Link href="/">Grupos de Pesquisa</Link>
      <Link href="/">Painel Lattes</Link>
    </Container>
  );
};

export default Navbar;
