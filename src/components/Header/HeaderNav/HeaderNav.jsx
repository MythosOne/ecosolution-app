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
  ArrowRightImg,
  CloseLightImg,
  FaceBookImg,
  InstagramImg,
} from '../../../icons/IconsComponent';

export const HeaderNav = ({ handleClose }) => {
  return (
    <NavContain>
      <Container>
        <CloseBLock>
          <CloseBtn onClick={handleClose}>
            <CloseLightImg />
            close
          </CloseBtn>
        </CloseBLock>
        <NavList>
          <NavListItem>
            Fira Sans <ArrowRightImg />
          </NavListItem>
          <NavListItem>
            About <ArrowRightImg />
          </NavListItem>
          <NavListItem>
            Cases <ArrowRightImg />
          </NavListItem>
          <NavListItem>
            FAQ <ArrowRightImg />
          </NavListItem>
          <NavListItem>
            Contact US <ArrowRightImg />
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
