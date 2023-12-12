import React from 'react';
import {
  Section,
  Address,
  Mail,
  Figure,
  AboutImg,
  AboutTitle,
  AboutText,
  AboutList,
  AboutItem,
  CardItem,
  CardTitle,
  CardText,
  AboutElectrTitle,
  VerticalLine,
  MeterContainer,
  ElectricityMeter,
  Unit,
  CasesCompanyTitle,
} from './AboutSection.styled';

import {
  OpennessImg,
  RespImg,
  InnovImg,
  QualityImg,
} from '../../icons/IconsComponent';

export const AboutSection = () => {
  return (
    <Section>
      <Address href="https://bit.ly/3n3ZUYY">
        79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
      </Address>
      <Mail href="mailto:office@ecosolution.com">office@ecosolution.com</Mail>
      <Figure>
        <AboutImg
          src="../images/wind-turbine-clean-energy.png"
          alt="Wind turbine"
        />
      </Figure>
      <AboutTitle>Main values of our company</AboutTitle>
      <AboutText>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world's energy
        needs.
      </AboutText>
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
      <AboutElectrTitle>Electricity we produced for all time </AboutElectrTitle>
      <VerticalLine />
      <MeterContainer>
        <ElectricityMeter>1.134.147.814</ElectricityMeter>
        <Unit>kWh</Unit>
      </MeterContainer>
      <CasesCompanyTitle>Successful cases of our company</CasesCompanyTitle>
    </Section>
  );
};
