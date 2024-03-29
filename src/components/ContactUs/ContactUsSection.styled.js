import styled from '@emotion/styled';

export const Section = styled.section`
  max-width: 440px;
  width: 100%;

  display: grid;
  grid-template-areas:
    'title'
    'list'
    'form';

  margin-bottom: 36px;

  @media screen and (min-width: 767px) {
    grid-template-areas:
      'title title'
      'list form'
      'list form';
      
    column-gap: 122px;
    max-width: none;
    width: 708px;

    margin-bottom: 100px;
  }

  @media screen and (min-width: 1279px) {
    width: 1240px;

    column-gap: 178px;

    margin-bottom: 120px;
  }
`;

export const TitleSection = styled.h2`
  grid-area: title;

  text-align: center;

  color: #173d33;
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

    margin-bottom: 40px;
  }

  @media screen and (min-width: 1279px) {
    font-size: 48px;
    line-height: 48px;

    margin-bottom: 120px;
  }
`;

export const ContactList = styled.ul`
  grid-area: list;

  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;

  margin-bottom: 36px;

  @media screen and (min-width: 767px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1279px) {
    gap: 36px;
  }
`;

export const PhoneList = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  list-style: none;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 12px;
`;

export const PhoneItem = styled.li``;

export const TitleLine = styled.p`
  color: #173d33;
  margin-bottom: 8px;

  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  color: #173d33;

  text-align: justify;
  font-family: Fira Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;

  text-decoration: none;

  stroke: #173d33;

  &:hover {
    stroke: #97d28b;

    transition: all 0.2s ease-in-out;
  }

  @media screen and (min-width: 1279px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const MailItem = styled.li``;

export const AddressItem = styled.li``;

export const SocialItem = styled.li``;

export const NetworksList = styled.ul`
  display: flex;
  gap: 32px;

  list-style: none;
`;

export const FaceBookItem = styled.li`
  margin-left: 12px;
`;

export const InstagramItem = styled.li``;

export const SocialFacebook = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  fill: #173d33;
  stroke: #173d33;

  &:hover {
    fill: #97d28b;
    stroke: #97d28b;

    transition: all 0.2s ease-in-out;
  }
`;

export const SocialInstagram = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  stroke: #173d33;

  &:hover {
    stroke: #97d28b;

    transition: all 0.2s ease-in-out;
  }
`;
