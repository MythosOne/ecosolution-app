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
  SocialFacebook,
  SocialInstagram,
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
          <SocialFacebook
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
            aria-label="facebook"
          >
            <FaceBook fill={'#173D33'} stroke={'#173D33'} />
          </SocialFacebook>
          <SocialInstagram
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <Instagram stroke={'#173D33'} />
          </SocialInstagram>
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
