import styled from '@emotion/styled';

export const Section = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 36px;
`;

export const TitleSection = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  margin-bottom: 24px;
`;

export const ContactList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 24px;
  list-style: none;
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
  fill: #173d33;
  stroke: #173d33;

  &:hover {
    fill: #97d28b;
    stroke: #97d28b;
  }
`;

export const SocialInstagram = styled.a`
  stroke: #173d33;

  &:hover {
    stroke: #97d28b;
  }
`;
