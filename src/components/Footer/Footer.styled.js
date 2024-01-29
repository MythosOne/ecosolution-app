import styled from '@emotion/styled';

export const Section = styled.footer`
  max-width: 440px;

  display: grid;
  grid-template-areas:
    'logo arrow'
    'social social'
    'address address'
    'mail mail'
    'corp corp';

  align-items: center;
  justify-items: center;
  justify-content: space-between;

  border-top: 1px solid;
  border-color: #97d28b;

  padding-top: 24px;
  margin: 0px 20px;

  @media screen and (min-width: 480px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 767px) {
    max-width: none;
    width: 708px;

    display: grid;
    grid-template-areas:
      'logo social arrow'
      'address mail corp';
    align-items: start;
    justify-items: start;
    row-gap: 16px;

    padding: 40px 0;
    column-gap: 87px 40px;
    
  }

  @media screen and (min-width: 1279px) {
    width: 1240px;
  }
`;

export const ArrowUpBtn = styled.a`
  grid-area: arrow;
  justify-self: end;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background: #97d28b;
  border: 0;

  stroke: #173d33;

  &:hover {
    stroke: #97d28b;
    background: #173d33;
  }

  @media screen and (min-width: 767px) {
  }
`;

export const SocialItem = styled.div`
  grid-area: social;
  display: flex;
  gap: 8px;

  margin: 24px 0;

  @media screen and (min-width: 767px) {
    margin: 0;
  }
`;

export const SocialFacebook = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  fill: #173d33;
  stroke: #173d33;

  &:hover {
    fill: #97d28b;
    stroke: #97d28b;
  }
`;
export const SocialInstagram = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  stroke: #173d33;

  &:hover {
    stroke: #97d28b;
  }
`;

export const Address = styled.a`
  grid-area: address;
  color: #173d33;

  margin-bottom: 16px;

  color: #173d33;

font-family: Fira Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.64px;

text-decoration: none;

  @media screen and (min-width: 767px) {
    margin: 0;
  }
`;

export const Mail = styled.a`
  grid-area: mail;
  color: #173d33;

  margin-bottom: 16px;

  color: #173d33;

font-family: Fira Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.64px;

text-decoration: none;

  @media screen and (min-width: 767px) {
   margin: 0;
  }
`;
export const Corp = styled.a`
  grid-area: corp;
  color: #173d33;

  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  text-decoration: none;

  margin-bottom: 24px;

  @media screen and (min-width: 767px) {
    margin: 0;
  }
`;
