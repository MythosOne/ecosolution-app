import React from 'react';
import { Header } from '../Header/Header.jsx';
import { Main } from '../Main/Main.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { ContainerEco } from './App.styled.js';
import { ContactUs } from 'components/ContactUs/ContactUs.jsx';

function App() {
  return (
    <ContainerEco>
      <Header />
      <Main />
      <ContactUs/>
      <Footer />
    </ContainerEco>
  );
}

export default App;
