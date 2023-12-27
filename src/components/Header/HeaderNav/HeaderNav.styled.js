import styled from '@emotion/styled';

export const NavContain = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;

  position: absolute;

  @media screen and ((min-width: 360px) and (max-width: 479px)) {
    top: 36px;
    right: 20px;
    left: 20px;
  }

  @media screen and (min-width: 480px) {
    top: 30px;
    right: 100px;
  }

  width: 320px;
  height: 701px;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  z-index: 100;

  transition: all 3s;

  color: #fff;
  font-family: Fira Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;

  @media screen and ((min-width: 360px) and (max-width: 767px)) {
    width: 320px;
    height: 701px;
  }

  @media screen and ((min-width: 768px) and (max-width: 1279px)) {
    width: 365px;
    height: 873px;
  }

  @media screen and (min-width: 1279px) {
    width: 365px;
    height: 873px;
  }
`;

export const Container = styled.div`
  @media screen and (max-width: 767px) {
    width: 272px;
  }

  @media screen and (min-width: 768px) {
    width: 317px;
  }

  margin-top: 24px;
`;

export const CloseBLock = styled.div`
  display: flex;

  border-bottom: 1px solid #fff;

  padding-bottom: 8px;

  stroke: white;

  &:focus,
  &:hover {
    color: #97d28b;
    stroke: #97d28b;
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: flex-end;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;

  color: #fff;
  font-family: Fira Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;

  &:hover {
    color: #97d28b;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
  list-style: none;
`;

export const NavListItem = styled.a`
  color: rgba(255, 255, 255, 0.25);
  stroke: rgba(255, 255, 255, 0.25);

  &:focus,
  &:hover {
    color: #97d28b;
    stroke: #97d28b;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  margin-left: 24px;
  list-style: none;
`;

export const SocialItem = styled.li`
  stroke: white;

  &:focus,
  &:hover {
    stroke: #97d28b;
  }
`;

export const SocialFacebook = styled.a``;

export const SocialInstagram = styled.a``;
