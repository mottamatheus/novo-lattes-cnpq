import styled from 'styled-components';

export const Container = styled.div`
  height: 6vh;
  display: flex;
  max-width: 120rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.4rem;
  background-color: var(--bg);
  margin: 2rem auto;
  box-shadow: 1px 1px 1px 1px rgba(230, 230, 230, 0.7);

  a {
    text-decoration: none;
    color: var(--text-secondary);
    margin-right: 2rem;
  }

  img {
    height: 100%;
  }
`;
