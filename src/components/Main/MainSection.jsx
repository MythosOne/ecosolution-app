import React from 'react';
import {
  Section,
  MainTitle,
  MainText,
  MainBtn,
  ButtonImg,
} from './MainSection.styled';
import { ArrowRightImg } from '../../icons/IconsComponent';

export const MainSection = () => {
  return (
    <Section>
      <MainTitle>RENEWABLE ENERGY For any task</MainTitle>
      <MainText>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </MainText>
      <MainBtn onClick={()=> console.log("MainBtn clicked")}>
        Learn more
        <ButtonImg>
          <ArrowRightImg />
        </ButtonImg>
      </MainBtn>
    </Section>
  );
};
