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
  // AboutList,
  // AboutItem,
  // CardItem,
  // CardTitle,
  // CardText,
  // FarmsImg,
  // SolarImg,
  MeterContainer,
  AboutElectrTitle,
  VerticalLine,
  Meter,
  ElectricityMeter,
  Unit,
} from './AboutSection.styled';

import { AboutCard } from './AboutCard/AboutCard';

// import {
//   OpennessImg,
//   RespImg,
//   InnovImg,
//   QualityImg,
// } from 'icons/IconsComponent';

import imgWind from 'images/wind-turbine-clean-energy.png';
import imgWindTablet from 'images/wind-turbine-clean-energy-tablet.png';
// import imgFarms from 'images/wind-farms-fields.png';
// import imgSolar from 'images/man-worker-field-by-solar-panels.png';

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
        <Address href="https://bit.ly/3n3ZUYY">
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
        <MainValuesTitle>Main values of our company</MainValuesTitle>
        <VerticalLineMain />
        <MainValuesText>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </MainValuesText>
      </AboutMainValues>
      {/* <AboutList>
        <AboutItem>
          <CardItem>
            <OpennessImg />
            <CardTitle>Openness</CardTitle>
          </CardItem>
          <CardText>to the world, people, new ideas and projects</CardText>
        </AboutItem>
        <AboutItem>
          <CardItem>
            <RespImg />
            <CardTitle>Responsibility</CardTitle>
          </CardItem>
          <CardText>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </CardText>
        </AboutItem>
        <AboutItem>
          <CardItem>
            <InnovImg />
            <CardTitle>Innovation</CardTitle>
          </CardItem>
          <CardText>
            we use the latest technology to implement non-standard solutions
          </CardText>
        </AboutItem>
        <AboutItem>
          <CardItem>
            <QualityImg />
            <CardTitle>Quality</CardTitle>
          </CardItem>
          <CardText>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </CardText>
        </AboutItem>
      </AboutList> */}
      <AboutCard />
      {/* <Figure>
        <FarmsImg src={imgFarms} alt="Farms fields" />
      </Figure>
      <Figure>
        <SolarImg src={imgSolar} alt="Solar panels" />
      </Figure> */}
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
