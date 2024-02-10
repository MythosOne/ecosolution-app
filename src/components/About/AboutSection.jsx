import React, { useState, useEffect } from 'react';
import {
  Section,
  AboutLink,
  Address,
  Mail,
  Copyright,
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

import wind_mobile_1x from 'images/wind-turbine-clean-energy@1x_sm.jpg';
import wind_mobile_2x from 'images/wind-turbine-clean-energy@2x_sm.jpg';
import wind_tablet_1x from 'images/wind-turbine-clean-energy@1x_av.jpg';
import wind_tablet_2x from 'images/wind-turbine-clean-energy@2x_av.jpg';
import wind_desktop_1x from 'images/wind-turbine-clean-energy@1x_lg.jpg';
import wind_desktop_2x from 'images/wind-turbine-clean-energy@2x_lg.jpg';

export const AboutSection = () => {
  const [number, setNumber] = useState(1134147804);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(number + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [number]);

  return (
    <Section id="about">
      <AboutLink>
        <Address
          href="https://bit.ly/3n3ZUYY"
          target="_blank"
          rel="noopener noreferrer"
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </Address>
        <Mail href="mailto:office@ecosolution.com">office@ecosolution.com</Mail>
        <Copyright>ecosolution © 2023</Copyright>
      </AboutLink>
      <Picture>
        <source
          srcSet={`${wind_mobile_1x} 1x, ${wind_mobile_2x} 2x`}
          media="(max-width: 767px)"
        />
        <source
          srcSet={`${wind_tablet_1x} 1x, ${wind_tablet_2x} 2x`}
          media="(max-width: 1279px)"
        />
        <AboutImg
          srcSet={`${wind_desktop_1x} 1x, ${wind_desktop_2x} 2x`}
          src={`${wind_desktop_1x}`}
          width="1240"
          alt="wind-turbine"
          loading="lazy"
        />
      </Picture>
      <AboutMainValues>
        <MainValuesTitle>
          Main values of <br /> our company
        </MainValuesTitle>
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
