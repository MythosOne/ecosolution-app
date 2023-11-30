import React from 'react';
import {
    NavContain,
    NavList,
    NavListItem
} from './HeaderNav.styled';

export const HeaderNav = () => {
  return (
    <NavContain>
      <NavList>
        <NavListItem>Main</NavListItem>
        <NavListItem>About</NavListItem>
        <NavListItem>Cases</NavListItem>
        <NavListItem>FAQ</NavListItem>
        <NavListItem>Contact US</NavListItem>
      </NavList>
    </NavContain>
  );
};
