import React from 'react';
import { Logo } from '../Header/Logo/Logo';
import {
  Section,
  FooterList,
  LogoItem,
  SocialItem,
  AddressItem,
  Address,
  MailItem,
  Mail,
  CorpItem,
  ArrowUpBtn,
  SocialFacebook,
  SocialInstagram,
} from './Footer.styled';

import {
  FaceBookImg,
  InstagramImg,
  ArrowUpImg,
} from '../../icons/IconsComponent';

export const Footer = () => {
  return (
    <Section>
      <FooterList>
        <LogoItem>
          <Logo />
          <ArrowUpBtn onClick={() => console.log('ArrowUpButton Clicked')}>
            <ArrowUpImg />
          </ArrowUpBtn>
        </LogoItem>
        <SocialItem>
          <SocialFacebook
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
            aria-label="facebook"
          >
            <FaceBookImg fill={'#173D33'} stroke={'#173D33'} />
          </SocialFacebook>
          <SocialInstagram
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <InstagramImg stroke={'#173D33'} />
          </SocialInstagram>
        </SocialItem>
        <AddressItem>
          <Address href="https://bit.ly/3n3ZUYY">79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
        </AddressItem>
        <MailItem>
          <Mail href="mailto:office@ecosolution.com">office@ecosolution.com</Mail>
        </MailItem>
        <CorpItem>ecosolution © 2023</CorpItem>
      </FooterList>
    </Section>
  );
};
