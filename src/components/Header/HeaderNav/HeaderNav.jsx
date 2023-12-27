import React from 'react';
import {
  Container,
  CloseBLock,
  CloseBtn,
  NavContain,
  NavList,
  NavListItem,
  SocialList,
  SocialItem,
  SocialFacebook,
  SocialInstagram,
} from './HeaderNav.styled';
import {
  ArrowNavImg,
  CloseLightImg,
  FaceBookImg,
  InstagramImg,
} from '../../../icons/IconsComponent';

export const HeaderNav = ({ handleClose }) => {
  return (
    <NavContain>
      <Container>
        <CloseBLock>
          <CloseBtn type='button' onClick={handleClose}>
            <CloseLightImg />
            close
          </CloseBtn>
        </CloseBLock>
        <NavList>
          <NavListItem href='#s1'>
            Main <ArrowNavImg />
          </NavListItem>
          <NavListItem href='#s2'>
            About <ArrowNavImg />
          </NavListItem>
          <NavListItem href='#s3'>
            Cases <ArrowNavImg />
          </NavListItem>
          <NavListItem href='#s4'>
            FAQ <ArrowNavImg />
          </NavListItem>
          <NavListItem href='#s5'>
            Contact US <ArrowNavImg />
          </NavListItem>
        </NavList>
      </Container>
      <SocialList>
        <SocialItem>
          <SocialFacebook
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
            aria-label="facebook"
          >
            <FaceBookImg />
          </SocialFacebook>
        </SocialItem>
        <SocialItem>
          <SocialInstagram
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <InstagramImg />
          </SocialInstagram>
        </SocialItem>
      </SocialList>
    </NavContain>
  );
};
