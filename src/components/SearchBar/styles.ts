import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  max-width: 120rem;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  border-radius: 1.4rem;
  box-shadow: 1px 1px 1px 1px rgba(230, 230, 230, 0.7);
  padding: 2rem;

  input {
    width: 90%;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid #ddd;

    &:focus {
      outline: none;
      border: 1px solid #aaa;
      border-radius: 1rem;
    }
  }
`;

export const Button = styled.div`
  width: 2rem;
  background: var(--bg);
`;
