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

import { Link } from 'react-router-dom';

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
          <Link to='/main'>
            Main <ArrowNavImg />
          </Link>
          <NavListItem href='#about'>
            About <ArrowNavImg />
          </NavListItem>
          <NavListItem href="#cases">
            Cases <ArrowNavImg />
          </NavListItem>
          <NavListItem href='#faq'>
            FAQ <ArrowNavImg />
          </NavListItem>
          <NavListItem href='#contactUs'>
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
