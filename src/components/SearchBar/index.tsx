import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container, Button } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <h1>Buscar Currículo Lattes</h1>
      <label htmlFor="soi">
        <p>Doutores</p>
        <input type="checkbox" name="soi" id="soi" />
      </label>

      <input type="text" />
      <Button>
        <FiSearch />
      </Button>
    </Container>
  );
};

export default SearchBar;
