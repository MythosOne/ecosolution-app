import React from 'react';
import {
  Section,
  TitleSection,
  ContactList,
  PhoneList,
  PhoneItem,
  TitleLine,
  Link,
  MailItem,
  AddressItem,
  SocialItem,
  NetworksList,
  FaceBookItem,
  InstagramItem,
  SocialFacebook,
  SocialInstagram,
} from './ContactUsSection';

import {
  PhoneImg,
  MailImg,
  AddressImg,
  FaceBookImg,
  InstagramImg,
} from '../../icons/IconsComponent';

import {ContactForm} from './ContactForm/ContactForm'

export const ContactUsSection = () => {
  return (
    <Section>
      <TitleSection>CONTACT US</TitleSection>
      <ContactList>
        <PhoneList>
          <PhoneItem>
            <TitleLine>Phone:</TitleLine>
            <Link href="tel:+380981234567">
              <PhoneImg /> 38 (098) 12 34 567
            </Link>
          </PhoneItem>
          <PhoneItem>
            <Link href="+380931234567">
              <PhoneImg />
              38 (093) 12 34 567
            </Link>
          </PhoneItem>
        </PhoneList>
        <MailItem>
          <TitleLine>E-mail:</TitleLine>
          <Link href="mailto:office@ecosolution.com">
            <MailImg />
            office@ecosolution.com
          </Link>
        </MailItem>
        <AddressItem>
          <TitleLine>Address:</TitleLine>
          <Link href="https://bit.ly/3n3ZUYY">
            <AddressImg />
            79005, Ukraine, Lvivstreet. <br /> Shota Rustaveli, 7
          </Link>
        </AddressItem>
        <SocialItem>
          <TitleLine>Social-Networks:</TitleLine>
          <NetworksList>
            <FaceBookItem>
              <SocialFacebook
                href="https://www.facebook.com/"
                rel="noopener noreferrer"
                aria-label="facebook"
              >
                <FaceBookImg fill={'#173D33'} stroke={'#173D33'} />
              </SocialFacebook>
            </FaceBookItem>
            <InstagramItem>
              <SocialInstagram
                href="https://www.instagram.com/"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <InstagramImg stroke={'#173D33'} />
              </SocialInstagram>
            </InstagramItem>
          </NetworksList>
        </SocialItem>
        <ContactForm />
      </ContactList>
    </Section>
  );
};