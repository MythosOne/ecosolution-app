import React, { useState, useEffect } from 'react';
import {
  Section,
  AboutLink,
  Address,
  Mail,
  Copyright,
  // Figure,
  Picture,
  AboutImg,
  AboutMainValues,
  VerticalLineMain,
  MainValuesTitle,
  MainValuesText,
  MeterContainer,
  AboutElectrTitle,
  VerticalLine,
  Meter,
  ElectricityMeter,
  Unit,
} from './AboutSection.styled';

import { AboutCard } from './AboutCard/AboutCard';

import imgWind from 'images/wind-turbine-clean-energy.png';
import imgWindTablet from 'images/wind-turbine-clean-energy-tablet.png';

export const AboutSection = () => {
  const [number, setNumber] = useState(1134147804);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(number + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [number]);

  return (
    <Section id="About">
      <AboutLink>
        <Address href="https://bit.ly/3n3ZUYY" target='_blank' rel="noopener noreferrer">
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </Address>
        <Mail href="mailto:office@ecosolution.com">office@ecosolution.com</Mail>
        <Copyright>ecosolution © 2023</Copyright>
      </AboutLink>
      <Picture>
        <source srcSet={imgWindTablet} media="(min-width:767px)" />
        <AboutImg src={imgWind} alt="Wind turbine" />
      </Picture>
      <AboutMainValues>
        <MainValuesTitle>Main values of <br/> our company</MainValuesTitle>
        <VerticalLineMain />
        <MainValuesText>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </MainValuesText>
      </AboutMainValues>
      <AboutCard />
      <MeterContainer>
        <AboutElectrTitle>
          Electricity we produced <br /> for all time
        </AboutElectrTitle>
        <VerticalLine />
        <Meter>
          <ElectricityMeter>{number.toLocaleString('ru')}</ElectricityMeter>
          <Unit>kWh</Unit>
        </Meter>
      </MeterContainer>
    </Section>
  );
};
