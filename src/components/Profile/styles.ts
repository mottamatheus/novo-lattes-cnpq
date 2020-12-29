import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  max-width: 120rem;
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
  height: 24rem;
`;

export const Image = styled.div`
  width: 20%;
  background-color: #fff;
  border-radius: 1.4rem;
  box-shadow: 1px 1px 1px 1px rgba(230, 230, 230, 0.7);
  background-size: cover;
  background-size: contain auto;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Info = styled.div`
  width: 75%;
  background-color: #fff;
  border-radius: 1.4rem;
  box-shadow: 1px 1px 1px 1px rgba(230, 230, 230, 0.7);
  padding: 2%;

  > p {
    margin-bottom: 0.7rem;
    font-weight: 500;
    color: var(--text-secondary);

    &:first-of-type {
      margin-top: 1.5rem;
    }

    span {
      font-weight: 400;
      color: var(--text-primary);
    }
  }

  h1 {
    font-size: 3rem;
    color: var(--text-secondary);
    margin-bottom: 0.2rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: 500;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 3rem;

    svg {
      color: var(--text-secondary);
    }

    p {
      font-size: 1.2rem;
      margin-left: 0.5rem;
    }
  }
`;

export const About = styled.div`
  width: 100%;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 1.4rem;
  box-shadow: 1px 1px 1px 1px rgba(230, 230, 230, 0.7);
  padding: 2%;
  margin-top: 4vh;

  h2 {
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.4rem;
    text-align: justify;
  }
`;
