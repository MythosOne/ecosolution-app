import React, { useState } from 'react';
import { Logo } from './Logo/Logo';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { Section, BlockBtn, MenuBtn, GetInBtn } from './Header.styled';
import { MenuBurgerImg } from 'icons/IconsComponent';
import { EllipseArrowDown } from 'icons/IconsComponent';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <Section>
      <Logo />
      {isOpen && <HeaderNav handleClose={handleClose} />}
      <BlockBtn>
        <MenuBtn
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <MenuBurgerImg />
        </MenuBtn>
        <GetInBtn type="button" href="#Contact Us">
          Get in touch
          <EllipseArrowDown />
        </GetInBtn>
      </BlockBtn>
    </Section>
  );
};
