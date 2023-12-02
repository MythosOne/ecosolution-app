import { React, useState } from 'react';
import { Logo } from './Logo/Logo';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { Container, MenuBtn, ContainerBtn } from './Header.styled';
import { MenuBurger } from '../../icons/IconsComponent';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <Container>
      <Logo />
      {isOpen && <HeaderNav handleClose={handleClose}/>}
      <ContainerBtn>
        <MenuBtn
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <MenuBurger />
        </MenuBtn>
      </ContainerBtn>
    </Container>
  );
};