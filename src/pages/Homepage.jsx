import React from 'react';
import {Main} from 'components/App/App.styled';
import { MainSection } from 'components/Main/MainSection';
import { AboutSection } from 'components/About/AboutSection';
import { CasesSection } from 'components/Cases/CasesSection';
import { FAQSection } from 'components/FAQ/FAQSection';
import { ContactUsSection } from 'components/ContactUs/ContactUsSection';

export const Homepage = () => {
  return (
    <>
      <Main>
        <MainSection />
        <AboutSection />
        <CasesSection />
        <FAQSection />
        <ContactUsSection />
      </Main>
    </>
  );
};
