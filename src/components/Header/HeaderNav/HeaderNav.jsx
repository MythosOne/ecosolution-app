import React from 'react';
import {
  Backdrop,
  Container,
  CloseBLock,
  CloseBtn,
  NavContain,
  NavList,
  NavItem,
  NavLink,
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
} from 'icons/IconsComponent';

export const HeaderNav = ({ handleClose }) => {
  const menuItems = [
    { id: 1, title: 'Main' },
    { id: 2, title: 'About' },
    { id: 3, title: 'Cases' },
    { id: 4, title: 'FAQ' },
    { id: 5, title: 'Contact Us' },
  ];

  return (
    <Backdrop>
      <NavContain>
        <Container>
          <CloseBLock>
            <CloseBtn type="button" onClick={handleClose}>
              <CloseLightImg />
              close
            </CloseBtn>
          </CloseBLock>
          <NavList>
            {menuItems.map(menu => {
              return (
                <NavItem key={menu.id}>
                  <NavLink href={`#${menu.title}`}>
                    {menu.title}
                    <ArrowNavImg />
                  </NavLink>
                </NavItem>
              );
            })}
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
    </Backdrop>
  );
};
