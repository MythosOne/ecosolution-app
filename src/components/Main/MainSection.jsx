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
    <Section id='s1'>
      <MainTitle>RENEWABLE ENERGY For any task</MainTitle>
      <MainText>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </MainText>
      <MainBtn type='button' onClick={()=> console.log("MainBtn clicked")}>
        Learn more
        <ButtonImg>
          <ArrowRightImg width={"16"} height={"16"} />
        </ButtonImg>
      </MainBtn>
    </Section>
  );
};
