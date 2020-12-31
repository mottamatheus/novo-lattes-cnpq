import styled from 'styled-components';

export const Container = styled.div`
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.4rem;
  background-color: var(--bg);
  margin: 2rem auto;

  a {
    text-decoration: none;
    color: var(--text-secondary);
    margin-right: 2rem;
  }

  img {
    height: 100%;
  }
`;
