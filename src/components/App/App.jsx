import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header/Header.jsx';
import { MainSection } from '../Main/MainSection.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { Main } from './App.styled.js';
import { ContactUsSection } from '../ContactUs/ContactUsSection.jsx';
import { AboutSection } from '../About/AboutSection.jsx';
import { CasesSection } from '../Cases/CasesSection.jsx';
import { FAQSection } from '../FAQ/FAQSection.jsx';
import { Homepage } from 'pages/Homepage.jsx';
import { Layout } from 'components/Layout/Layout.jsx';

function App() {
  return (
    <>
      <Header />
      <Homepage />
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/main" element={<MainSection/>} />
          <Route path="/about" element={<AboutSection/>} />
          <Route path="/cases" element={<CasesSection/>} />
          <Route path="/faq" element={<FAQSection/>} />
          <Route path="/contactUs" element={<ContactUsSection/>} />
        </Route>
      </Routes> */}

      <Footer />
    </>
  );
}

export default App;
