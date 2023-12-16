import React from 'react';
import { Header } from '../Header/Header.jsx';
import { MainSection } from '../Main/MainSection.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { Main } from './App.styled.js';
import { ContactUsSection } from '../ContactUs/ContactUsSection.jsx';
import { AboutSection } from '../About/AboutSection.jsx';
import { SlideCard } from '../About/SlideCard/SlideCard.jsx';

function App() {
  return (
    <>
      <Header />
      <Main>
        <SlideCard />
        {/* <MainSection/>
        <AboutSection />
        <ContactUsSection /> */}
      </Main>
      <Footer />
    </>
  );
}

export default App;
