import React from 'react';
import { LogoWrapper, LogoImg, TitleEco, TitleGreen } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg
        src="../../../images/logo.svg"
        alt="logo"
        width="31px"
        height="18px"
      />
      <TitleEco>ecosolution</TitleEco>
      <div style={{ width: 60, height: 18 }}>
        <TitleGreen>GREENERGY FOR LIFE</TitleGreen>
      </div>
    </LogoWrapper>
  );
};
