import React from 'react';
import {
  Section,
  TitleSection,
  ContactList,
  PhoneList,
  List,
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
} from './ContactUsSection.styled';

import {
  PhoneImg,
  MailImg,
  AddressImg,
  FaceBookImg,
  InstagramImg,
} from 'icons/IconsComponent';

import { ContactForm } from './ContactForm/ContactForm';

export const ContactUsSection = () => {
  return (
    <Section id="Contact Us">
      <TitleSection>CONTACT US</TitleSection>
      <ContactList>
        <PhoneList>
          <List>
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
          </List>
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
          <Link
            href="https://bit.ly/3n3ZUYY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AddressImg />
            79005, Ukraine, Lvivstreet.
            {window.innerWidth < 420 ? <br/> : " " }
            Shota Rustaveli, 7
          </Link>
        </AddressItem>
        <SocialItem>
          <TitleLine>Social-Networks:</TitleLine>
          <NetworksList>
            <FaceBookItem>
              <SocialFacebook
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook"
              >
                <FaceBookImg />
              </SocialFacebook>
            </FaceBookItem>
            <InstagramItem>
              <SocialInstagram
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <InstagramImg />
              </SocialInstagram>
            </InstagramItem>
          </NetworksList>
        </SocialItem>
      </ContactList>
      <ContactForm />
    </Section>
  );
};
