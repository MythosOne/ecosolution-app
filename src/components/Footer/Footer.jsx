import React from 'react';
import { Logo } from '../Header/Logo/Logo';
import {
  Container,
  FooterList,
  LogoItem,
  SocialItem,
  AddressItem,
  MailItem,
  CorpItem,
  ArrowUpBtn,
} from './Footer.styled';

import { FaceBook, Instagram, ArrowUp } from '../../icons/IconsComponent';

export const Footer = () => {
  return (
    <Container>
      <FooterList>
        <LogoItem>
          <Logo />
          <ArrowUpBtn onClick={() => console.log('ArrowUp')}>
            <ArrowUp />
          </ArrowUpBtn>
        </LogoItem>
        <SocialItem>
          <FaceBook fill={'#173D33'} stroke={'#173D33'} />
          <Instagram stroke={'#173D33'} />
        </SocialItem>
        <AddressItem>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </AddressItem>
        <MailItem>office@ecosolution.com</MailItem>
        <CorpItem>ecosolution © 2023</CorpItem>
      </FooterList>
    </Container>
  );
};
