import styled from '@emotion/styled';

export const Section = styled.footer`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;

  border-top: 1px solid;
  border-color: #97d28b;
`;

export const FooterList = styled.ul`
  width: 100%;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoItem = styled.li`
  display: flex;
  gap: 19px;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const ArrowUpBtn = styled.button`
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
`;

export const SocialItem = styled.li`
  display: flex;
  gap: 8px;

  margin-bottom: 24px;
`;

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

export const AddressItem = styled.li`
  color: #173d33;

  margin-bottom: 16px;
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

export const MailItem = styled.li`
  color: #173d33;

  margin-bottom: 16px;
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

export const CorpItem = styled.li`
  color: #173d33;

  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  margin-bottom: 51px;
`;
