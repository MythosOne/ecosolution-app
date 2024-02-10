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
    { id: 1, title: 'Main', link: "main" },
    { id: 2, title: 'About', link: "about" },
    { id: 3, title: 'Cases', link:  "cases"},
    { id: 4, title: 'FAQ', link: "faq" },
    { id: 5, title: 'Contact Us', link: "contactUs" },
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
                  <NavLink href={`#${menu.link}`}>
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
              target='_blank'
            >
              <FaceBookImg />
            </SocialFacebook>
          </SocialItem>
          <SocialItem>
            <SocialInstagram
              href="https://www.instagram.com/"
              rel="noopener noreferrer"
              aria-label="instagram"
              target='_blank'
            >
              <InstagramImg />
            </SocialInstagram>
          </SocialItem>
        </SocialList>
      </NavContain>
    </Backdrop>
  );
};
