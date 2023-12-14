import React from 'react';
import {
  LogoWrapper,
  TitleEco,
  TitleGreen,
  Green,
} from './Logo.styled';
import { LogoImg } from '../../../icons/IconsComponent';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg />
      <TitleEco href='/'>ecosolution</TitleEco>
      <div style={{ width: 60, height: 18 }}>
        <TitleGreen>
          <Green>GREEN</Green>ERGY FOR LIFE
        </TitleGreen>
      </div>
    </LogoWrapper>
  );
};
