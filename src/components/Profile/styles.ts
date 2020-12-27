import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  max-width: 120rem;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 23rem;
`;

export const Image = styled.div`
  width: 20%;
  background-color: #fff;
  border-radius: 1.4rem;
  box-shadow: 1px 1px 1px 1px rgba(230, 230, 230, 0.7);
`;

export const About = styled.div`
  width: 75%;
  background-color: #fff;
  border-radius: 1.4rem;
  box-shadow: 1px 1px 1px 1px rgba(230, 230, 230, 0.7);
  padding: 2%;

  h1 {
    font-size: 3rem;
    color: var(--text-secondary);
  }

  span {
    font-size: 1.4rem;
    font-weight: 400;
  }
`;
