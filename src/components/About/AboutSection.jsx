import React from 'react';
import {
  Section,
  Address,
  Link,
  AboutImg,
  AboutTitle,
  AboutList,
  AboutElectrTitle,
  AboutElectrContainer,
} from './AboutSection.styled';

export const AboutSection = () => {
  return (
    <Section>
      <Address></Address>
      <Link></Link>
      <AboutImg></AboutImg>
      <AboutTitle></AboutTitle>
      <AboutList></AboutList>
      <AboutElectrTitle></AboutElectrTitle>
      <AboutElectrContainer>1.134.147.814</AboutElectrContainer>
    </Section>
  );
};
