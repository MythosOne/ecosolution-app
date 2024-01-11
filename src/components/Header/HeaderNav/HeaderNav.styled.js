import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  /* overflow-y: scroll; */
  width: 100%;
  height: 100%;

  display: flex;
  box-sizing: border-box;
  padding: 36px 20px;

  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);

  @media screen and ((min-width: 480px) and (max-width: 1280px)) {
    justify-content: flex-end;
    padding: 42px 30px;
  }

  @media screen and ((min-width: 1280px) ) {
    justify-content: flex-end;
    padding: 30px 100px;
  }
`;

export const NavContain = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 24px;
  box-sizing: border-box;

  position: relative;

  @media screen and (min-width: 480px) {
    width: 320px;
    height: 701px;
  }

  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);

  transition: all 3s;

  color: #fff;
  font-family: Fira Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
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

export const NavItem = styled.li``;

export const NavLink = styled.a`
  text-decoration: none;
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
