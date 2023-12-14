import styled from '@emotion/styled';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const Figure = styled.figure`
  margin: 0;
`;

export const AboutImg = styled.img`
  width: 320px;
`;

export const AboutTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
`;

export const AboutText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const AboutList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const AboutItem = styled.li`
  list-style: none;
  box-sizing: border-box;

  width: 148px;
  height: 197px;

  padding: 12px;

  background: #eaedf1;
`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding-top: 13px;
  padding-bottom: 33px;

  color: #173d33;
  font-family: Oswald;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;

  border-bottom: 1px solid #97d28b;
`;

// export const CardImage = styled.img``;

export const CardTitle = styled.h3``;

export const CardText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  margin-top: 12px;
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
`;

export const VerticalLine = styled.hr`
  height: 48px;
  width: 1px;
  background: #97d28b;
  border: 0;
`;

export const MeterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
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

export const CasesCompanyTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
`;

export const BlockBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const SliderLeftBtn = styled.button`
  width: 66px;
  height: 66px;

  padding: 15px;

  border-radius: 100px;
  border: 1px solid #173d33;

  background-color: transparent;

  stroke: #173d33;

  &:hover {
    border: 1px solid #97d28b;
    stroke: #97d28b;
  }
`;

export const SliderRighttBtn = styled.button`
  width: 66px;
  height: 66px;

  padding: 15px;

  border-radius: 100px;
  border: 1px solid #173d33;

  background-color: transparent;

  stroke: #173d33;

  &:hover {
    border: 1px solid #97d28b;
    stroke: #97d28b;
  }
`;
