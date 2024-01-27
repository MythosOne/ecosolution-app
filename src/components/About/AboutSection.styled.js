import styled from '@emotion/styled';

export const Section = styled.section`
  max-width: 440px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 24px;
  margin-bottom: 36px;

  @media screen and (min-width: 767px) {
    width: 708px;
    max-width: none;
    margin-top: 16px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1279px) {
    width: 1240px;
    margin-top: 12px;
    margin-bottom: 127px;
  }
`;

export const AboutLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    gap: 0;
    justify-content: flex-start;

    margin-bottom: 24px;
  }

  @media screen and (min-width: 1279px) {
    margin-bottom: 48px;
  }
`;

export const Address = styled.a`
  color: #173d33;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  text-decoration: none;

  @media screen and (min-width: 767px) {
    margin-right: 77px;
  }

  @media screen and (min-width: 1279px) {
    margin-right: 492px;
  }
`;

export const Mail = styled.a`
  color: #173d33;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  text-decoration: none;

  margin-bottom: 40px;

  @media screen and (min-width: 767px) {
    margin-bottom: 0;
    margin-right: 50px;
  }

  @media screen and (min-width: 1279px) {
    margin-right: 167px;
  }
`;

export const Copyright = styled.p`
  display: none;
  color: #173d33;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media screen and (min-width: 767px) {
    display: inline;
  }
`;

export const Picture = styled.picture`
  width: 100%;
  margin: 0;
`;

export const AboutImg = styled.img`
  width: 100%;
`;

export const AboutMainValues = styled.div`
  margin-top: 40px;
  margin-bottom: 36px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;

  @media screen and (min-width: 767px) {
    margin-top: 100px;
    margin-bottom: 100px;

    display: grid;
    grid-template-areas: 'title line article';
  }

  @media screen and (min-width: 1279px) {
    width: 1240px;
    margin-top: 124px;
    margin-bottom: 124px;

    justify-content: start;
    gap: 0;
  }
`;

export const MainValuesTitle = styled.h2`
  grid-area: title;

  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media screen and (min-width: 767px) {
    width: 344px;

    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (min-width: 1279px){
    width: 365px;

    font-size: 48px;
    line-height: 48px;

    margin-right: 254px;
  }
`;

export const VerticalLineMain = styled.hr`
  grid-area: line;

  display: none;
  height: 115px;
  width: 1px;
  background: #97d28b;
  border: 0;
  margin: 0;

  @media screen and (min-width: 767px) {
    display: block;
  }

  @media screen and (min-width: 1279px) {
    height: 90px;

    margin-right: 161px;
  }
`;

export const MainValuesText = styled.p`
  grid-area: article;

  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media screen and (min-width: 767px) {
      width: 342px;
  }

  @media screen and (min-width:1279px) {
      width: 459px;
  }
`;

export const MeterContainer = styled.div`
  margin-top: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 767px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 1279px) {
    margin-top: 121px;
    width: 960px;
  }
`;

export const AboutElectrTitle = styled.h2`
  color: #173d33;
  text-align: center;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  margin-bottom: 24px;

  @media screen and (min-width: 767px) {
    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (min-width: 1279px) {
    font-size: 48px;
    line-height: 48px;

    margin-bottom: 16px;
  }
`;

export const VerticalLine = styled.hr`
  height: 48px;
  width: 1px;
  background: #97d28b;
  border: 0;

  margin: 0 auto;

  @media screen and (min-width: 767px) {
    height: 87px;
  }
`;

export const Meter = styled.div`
  margin-top: 24px;
  width: 303px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 767px) {
    width: 602px;
  }

  @media screen and (min-width: 1279px) {
    width: 960px;

    margin-top: 16px;
  }
`;

export const ElectricityMeter = styled.div`
  color: #97d28b;
  text-align: center;
  font-family: Oswald;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;

  @media screen and (min-width: 767px) {
    width: 602px;
    font-size: 100px;
    line-height: 100px;
  }

  @media screen and (min-width: 1279px) {
    width: 960px;
    font-size: 164px;
    line-height: 164px;
  }
`;

export const Unit = styled.span`
  color: #173d33;
  text-align: center;
  font-family: Oswald;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 1279px) {
    font-size: 48px;
    line-height: 48px;
  }
`;
