import React from 'react';

import { Container } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <h1>Buscar Currículo Lattes</h1>
      <input type="checkbox" name="soi" id="soi" />
      <input type="text" />
    </Container>
  );
};

export default SearchBar;
