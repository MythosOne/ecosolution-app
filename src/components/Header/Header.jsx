import React from 'react';
import { Logo } from './Logo/Logo';
import { HeaderNav } from './HeaderNav/HeaderNav';
import {Container} from './Header.styled'

export const Header = () => {
  return (
    <Container>
      <Logo />
      <HeaderNav />
    </Container>
  );
};
