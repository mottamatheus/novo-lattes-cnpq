import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/themes';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Navbar from '../components/Navbar';
// import About from '../components/About';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Header />
        <Projects />
        {/* <About /> */}
      </ThemeProvider>
      <Component {...pageProps} />

      <GlobalStyle />
    </>
  );
};

export default MyApp;
