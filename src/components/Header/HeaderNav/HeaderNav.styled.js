import styled from '@emotion/styled';

export const NavContain = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 320px;
  height: 701px;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  /* backdrop-filter: blur(12.5px); */
  z-index: 1;

  @media screen and ((min-width: 320px) and (max-width: 1279px)) {
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const NavListItem = styled.li``;
