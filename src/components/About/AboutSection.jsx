import React, { useState, useEffect } from 'react';
import {
  Section,
  AboutLink,
  Address,
  Mail,
  Figure,
  AboutImg,
  AboutMainValues,
  MainValuesTitle,
  MainValuesText,
  AboutList,
  AboutItem,
  CardItem,
  CardTitle,
  CardText,
  MeterContainer,
  AboutElectrTitle,
  VerticalLine,
  Meter,
  ElectricityMeter,
  Unit,
} from './AboutSection.styled';

import {
  OpennessImg,
  RespImg,
  InnovImg,
  QualityImg,
} from '../../icons/IconsComponent';

import img from '../../images/wind-turbine-clean-energy.png';

export const AboutSection = () => {
  const [number, setNumber] = useState(1134147804);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(number + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [number]);

  return (
    <Section id='about'>
      <AboutLink>
        <Address href="https://bit.ly/3n3ZUYY">
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </Address>
        <Mail href="mailto:office@ecosolution.com">office@ecosolution.com</Mail>
      </AboutLink>
      <Figure>
        <AboutImg src={img} alt="Wind turbine" />
      </Figure>
      <AboutMainValues>
        <MainValuesTitle>Main values of our company</MainValuesTitle>
        <MainValuesText>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </MainValuesText>
      </AboutMainValues>
      <AboutList>
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
      </AboutList>
      <MeterContainer>
        <AboutElectrTitle>
          Electricity we produced <br/> for all time
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
