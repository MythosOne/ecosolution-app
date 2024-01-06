import styled from '@emotion/styled';

export const Section = styled.footer`

  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;

  border-top: 1px solid;
  border-color: #97d28b;

  margin: 0px 20px;

  @media screen and (min-width: 767px) {
    margin: 0px 30px;
  }
`;

export const FooterList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerLogo = styled.li`

  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 19px;

  @media screen and (min-width: 767px) {
    width: 100%;

    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;

    gap: 0px
  }
`;

export const LogoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    align-items: baseline;
  }
`;

export const ArrowUpBtn = styled.a`
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
margin-left: 254px;
  }
`;

export const SocialItem = styled.div`
  display: flex;
  gap: 8px;

  /* margin-bottom: 24px; */
  margin-left: 38px;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    align-items: baseline;

    margin-left: 94px;
  }
`;

export const ContainerContact = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    align-items: baseline;
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

export const AddressItem = styled.div`
  color: #173d33;

  margin-bottom: 16px;

  @media screen and (min-width: 767px) {
    margin-right: 77px;
    margin-bottom: 0;
  }
`;

export const Address = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  color: #173d33;

  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  text-decoration: none;
`;

export const MailItem = styled.div`
  color: #173d33;

  margin-bottom: 16px;

  @media screen and (min-width: 767px) {
    margin-right: 50px;
    margin-bottom: 0;
  }
`;

export const Mail = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  color: #173d33;

  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  text-decoration: none;
`;

export const CorpItem = styled.div`
  color: #173d33;

  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  margin-bottom: 24px;

  @media screen and (min-width: 767px) {
    margin-bottom: 40px;
  }
`;
