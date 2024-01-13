import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 146px;

  display: grid;
  /* flex-direction: column;
  align-items: center; */
  grid-row-gap: 24px;

  border-bottom: 1px solid;
  border-color: #97d28b;

  grid-template-areas:
    'title'
    'article'
    'button';

  @media screen and (min-width: 767px) and (max-width: 1280px) {
    width: 100%;
    grid-template-areas:
      'title article'
      'title button';
    grid-row-gap: 43px;
    grid-column-gap: 65px;
  }

  @media screen and (min-width: 1279px) {
    width: 100%;
    grid-template-areas:
      'title article'
      'title button';
    grid-row-gap: 20px;
    grid-column-gap: 296px;
  }
`;

export const MainTitle = styled.h2`
  grid-area: title;

  text-align: center;
  color: #173d33;
  font-family: Oswald;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 100% */
  text-transform: uppercase;

  @media screen and (min-width: 767px) and (max-width: 1280px) {
    /* width: 300px; */
    font-size: 48px;
    line-height: 48px;
    text-align: left;
  }

  @media screen and (min-width: 1279px) {
    width: 485px;
    font-size: 64px;
    line-height: 64px;
    text-align: left;
  }
`;

export const MainText = styled.p`
  grid-area: article;

  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media screen and (min-width: 1279px) {
    width: 363px;
  }
`;

export const MainBtn = styled.a`
  grid-area: button;

  text-decoration: none;
  margin: 0 auto 24px;

  padding: 3px;

  width: 141px;
  height: 39px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;

  border-radius: 500px;
  border: 1px solid #97d28b;

  background: transparent;

  color: #173d33;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.64px;

  stroke: #173d33;

  &:hover {
    background: #173d33;
    color: #97d28b;
  }

  @media screen and (min-width: 767px) and (max-width: 1279px) {
    margin: 0 0 24px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 0 28px;
  }
`;

export const ButtonImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background: #97d28b;
  border: 0;
`;
