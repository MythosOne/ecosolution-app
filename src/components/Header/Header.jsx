import { React, useState } from 'react';
import { Logo } from './Logo/Logo';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { HeaderSection, MenuBtn, ContainerBtn } from './Header.styled';
import { MenuBurger } from '../../icons/IconsComponent';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <HeaderSection>
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
    </HeaderSection>
  );
};