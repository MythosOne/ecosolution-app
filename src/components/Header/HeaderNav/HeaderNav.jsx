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
  ArrowRight,
  CloseLight,
  FaceBook,
  Instagram,
} from '../../../icons/IconsComponent';

export const HeaderNav = ({ handleClose }) => {
  return (
    <NavContain>
      <Container>
        <CloseBLock>
          <CloseBtn onClick={handleClose}>
            <CloseLight />
            close
          </CloseBtn>
        </CloseBLock>
        <NavList>
          <NavListItem>
            Fira Sans <ArrowRight />
          </NavListItem>
          <NavListItem>
            About <ArrowRight />
          </NavListItem>
          <NavListItem>
            Cases <ArrowRight />
          </NavListItem>
          <NavListItem>
            FAQ <ArrowRight />
          </NavListItem>
          <NavListItem>
            Contact US <ArrowRight />
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
            <FaceBook />
          </SocialFacebook>
        </SocialItem>
        <SocialItem>
          <SocialInstagram
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <Instagram />
          </SocialInstagram>
        </SocialItem>
      </SocialList>
    </NavContain>
  );
};
