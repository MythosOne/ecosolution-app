import React from 'react';
import { LogoWrapper, TitleEco, TitleGreen, Green } from './Logo.styled';
import { LogoImg } from 'icons/IconsComponent';

export const Logo = () => {
  return (
      <LogoWrapper href="#Main">
        <LogoImg />
        <TitleEco >ecosolution</TitleEco>
        <TitleGreen>
        <Green>GREEN</Green>ERGY FOR LIFE
      </TitleGreen>
      </LogoWrapper>
  );
};
