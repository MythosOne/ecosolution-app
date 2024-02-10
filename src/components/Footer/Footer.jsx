import React from 'react';
import { Logo } from '../Header/Logo/Logo';
import {
  Section,
  SocialItem,
  Address,
  Mail,
  Corp,
  ArrowUpBtn,
  SocialFacebook,
  SocialInstagram,
} from './Footer.styled';

import { FaceBookImg, InstagramImg, ArrowUpImg } from 'icons/IconsComponent';

export const Footer = () => {
  return (
    <Section>
      <Logo styles={{ GridArea: 'logo' }} />
      <SocialItem>
        <SocialFacebook
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook"
        >
          <FaceBookImg />
        </SocialFacebook>
        <SocialInstagram
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram"
        >
          <InstagramImg />
        </SocialInstagram>
      </SocialItem>
      <ArrowUpBtn href="#main" title='Top of page'>
        <ArrowUpImg />
      </ArrowUpBtn>
      <Address
        href="https://bit.ly/3n3ZUYY"
        target="_blank"
        rel="noopener noreferrer"
      >
        79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
      </Address>
      <Mail href="mailto:office@ecosolution.com">office@ecosolution.com</Mail>
      <Corp href="/">ecosolution © 2023</Corp>
    </Section>
  );
};
