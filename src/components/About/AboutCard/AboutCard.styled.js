import styled from '@emotion/styled';

export const CardList = styled.ul`
  display: grid;

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

  @media screen and (min-width: 1279px) {
    width: 1240px;

    grid-column-gap: 48px;
    grid-row-gap: 48px;
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

  @media screen and (min-width: 1279px) {
    width: 274px;
    height: 339px;

    padding: 24px;
  }
`;

export const CardHead = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding-top: 13px;
  padding-bottom: 33px;

  border-bottom: 1px solid #97d28b;

  @media screen and (min-width: 1279px) {
    padding-top: 24px;
    padding-bottom: 94px;
  }
`;

export const SymbolCard = styled.div`
  width: 16px;
  height: 16px;

  @media screen and (min-width: 1279px) {
    width: 24px;
    height: 24px;
  }
`;

export const CardTitle = styled.h3`
  color: #173d33;
  font-family: Oswald;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;

  @media screen and (min-width: 767px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1279px) {
    font-size: 32px;
    line-height: 48px;
  }
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

  @media screen and (min-width: 1279px) {
    font-size: 16px;
    letter-spacing: -0.64px;

    margin-top: 24px;
  }
`;

export const Farm = styled.li`
  grid-area: farm;

  display: none;
  list-style: none;

  @media screen and (min-width: 767px) {
    display: block;

    width: 342px;
    height: 197px;
  }

  @media screen and (min-width: 1279px) {
    width: 594px;
    height: 339px;
  }
`;

export const Solar = styled.li`
  grid-area: solar;

  display: none;
  list-style: none;

  @media screen and (min-width: 767px) {
    display: block;
    width: 342px;
    height: 197px;
  }

  @media screen and (min-width: 1279px) {
    width: 594px;
    height: 339px;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const FarmsImg = styled.img`
  height: 100%;
`;

export const SolarImg = styled.img`
  height: 100%;
`;
