import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 24px;
  margin-bottom: 36px;

  @media screen and (min-width: 767px) and (max-width: 1279px) {
    margin-top: 16px;
    margin-bottom: 100px;
  }
`;

export const AboutLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 767px) and (max-width: 1279px) {
    flex-direction: row;
    gap: 0;
    width: 100%;
    justify-content: space-between;

    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
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
    margin: 0;
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

export const Figure = styled.figure`
  margin: 0;
`;

export const AboutImg = styled.img`
  width: 320px;
`;

export const AboutMainValues = styled.div`
  margin-top: 40px;
  margin-bottom: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const MainValuesTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
`;

export const MainValuesText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

// export const AboutList = styled.ul`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 24px;
// `;

// export const AboutList = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(2, 148px);
//   grid-template-rows: repeat(2, 197px);
//   grid-column-gap: 24px;
//   grid-row-gap: 24px;
// `;

// export const AboutItem = styled.li`
//   list-style: none;
//   box-sizing: border-box;

//   width: 148px;
//   height: 197px;

//   padding: 12px;

//   background: #eaedf1;
// `;

// export const CardItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;

//   padding-top: 13px;
//   padding-bottom: 33px;

//   color: #173d33;
//   font-family: Oswald;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 24px;
//   text-transform: uppercase;

//   border-bottom: 1px solid #97d28b;
// `;

// // export const CardImage = styled.img``;

// export const CardTitle = styled.h3``;

// export const CardText = styled.p`
//   color: #173d33;
//   text-align: justify;
//   font-family: Fira Sans;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   letter-spacing: -0.56px;

//   margin-top: 12px;
// `;

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
    font-size: 38px;
    line-height: 36px;
  }
`;

export const VerticalLineMain = styled.hr`
  display: none;
  height: 110px;
  width: 1px;
  background: #97d28b;
  border: 0;
`;

export const VerticalLine = styled.hr`
  height: 48px;
  width: 1px;
  background: #97d28b;
  border: 0;

  @media screen and (min-width: 767px) {
    height: 87px;
  }
`;

export const FarmsImg = styled.img`
  display: none;
  width: 346px;
  height: 234px;
`;

export const SolarImg = styled.img`
  display: none;
  width: 346px;
  height: 234px;
`;

export const MeterContainer = styled.div`
  margin-top: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const Unit = styled.span`
  color: #173d33;
  text-align: center;
  font-family: Oswald;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
