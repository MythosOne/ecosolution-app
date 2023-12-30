import React from 'react';
import { Logo } from '../Header/Logo/Logo';
import {
  Section,
  FooterList,
  ContainerLogo,
  LogoItem,
  SocialItem,
  ContainerContact,
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
import { Container } from 'components/ContactUs/ContactUsSection.styled';

export const Footer = () => {
  return (
    <Section>
      <FooterList>
        <ContainerLogo>
          <LogoItem>
            <Logo />
            <SocialItem>
              <SocialFacebook
                href="https://www.facebook.com/"
                rel="noopener noreferrer"
                aria-label="facebook"
              >
                <FaceBookImg />
              </SocialFacebook>
              <SocialInstagram
                href="https://www.instagram.com/"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <InstagramImg />
              </SocialInstagram>
            </SocialItem>
          </LogoItem>
          <ArrowUpBtn type="button" href="#main">
            <ArrowUpImg />
          </ArrowUpBtn>
        </ContainerLogo>
        <ContainerContact>
          <AddressItem>
            <Address href="https://bit.ly/3n3ZUYY">
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </Address>
          </AddressItem>
          <MailItem>
            <Mail href="mailto:office@ecosolution.com">
              office@ecosolution.com
            </Mail>
          </MailItem>
          <CorpItem>ecosolution © 2023</CorpItem>
        </ContainerContact>
      </FooterList>
    </Section>
  );
};
