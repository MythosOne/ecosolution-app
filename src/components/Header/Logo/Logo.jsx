import React from 'react';
import { LogoWrapper, TitleEco, TitleGreen, Green } from './Logo.styled';
import { LogoImg } from 'icons/IconsComponent';

export const Logo = () => {
  return (
      <LogoWrapper>
        <LogoImg />
        <TitleEco href="/">ecosolution</TitleEco>
        <TitleGreen>
        <Green>GREEN</Green>ERGY FOR LIFE
      </TitleGreen>
      </LogoWrapper>
  );
};
