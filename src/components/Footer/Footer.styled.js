import styled from '@emotion/styled';

export const Section = styled.footer`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  bottom: 0;
  /* left: 0; */

  border-top: 1px solid;
  border-color: #97d28b;
`;

export const FooterList = styled.ul`
width: 100%;
  /* width: 100%; */
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
`;

export const SocialItem = styled.li`
  display: flex;
  gap: 8px;

  margin-bottom: 24px;

  &:focus,
  &:hover {
    fill: #97d28b;
    stroke: #97d28b;
  }
`;

export const SocialFacebook = styled.a``;
export const SocialInstagram = styled.a``;

export const AddressItem = styled.li`
  color: #173d33;

  font-family: Fira Sans, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  margin-bottom: 16px;
`;

export const MailItem = styled.li`
  color: #173d33;

  font-family: Fira Sans, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  margin-bottom: 16px;
`;

export const CorpItem = styled.li`
  color: #173d33;

  font-family: Fira Sans, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  margin-bottom: 51px;
`;
