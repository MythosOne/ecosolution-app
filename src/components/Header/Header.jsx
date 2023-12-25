import { React, useState } from 'react';
import { Logo } from './Logo/Logo';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { Section, MenuBtn } from './Header.styled';
import { MenuBurgerImg } from '../../icons/IconsComponent';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <Section>
      <Logo />
      {isOpen && <HeaderNav handleClose={handleClose}/>}
        <MenuBtn type='button'
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <MenuBurgerImg />
        </MenuBtn>
    </Section>
  );
};