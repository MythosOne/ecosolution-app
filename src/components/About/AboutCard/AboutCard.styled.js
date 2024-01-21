import styled from '@emotion/styled';

export const CardList = styled.ul`
  display: grid;
  /* grid-template-columns: repeat(2, 148px);
  grid-template-rows: repeat(2, 197px); */

  grid-template-areas:
    'open resp'
    'inno qual';

  grid-column-gap: 24px;
  grid-row-gap: 24px;

  @media screen and (min-width: 767px) {
    grid-template-areas:
      'open resp farm farm'
      'solar solar inno qual';
  }
`;

export const CardItem = styled.li`
  list-style: none;
  box-sizing: border-box;

  width: 148px;
  height: 197px;

  padding: 12px;

  background: #eaedf1;

  @media screen and (min-width: 767px) {
    width: 159px;
  }
`;

export const CardHead = styled.div`
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

export const CardTitle = styled.h3`
  color: #173d33;
  font-family: Oswald;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
`;

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

export const Figure = styled.figure`
  display: none;
  margin: 0;
  width: 320px;
  height: 197px;

  @media screen and (min-width: 767px) {
    display: block;
    width: 348px;
    height: 100%;
  }
`;

export const FarmsImg = styled.img`
  height: 100%;
`;

export const SolarImg = styled.img`
  height: 100%;
`;
