import React from 'react';
import {
  CasesCompanyTitle,
  MeterSlide,
  Slider,
  SliderLeftBtn,
  SliderRighttBtn,
  BlockBtn,
} from './CasesSection.styled';

import { ArrowLeftImg, ArrowRightImg } from '../../icons/IconsComponent';

import { SlideCard } from './SlideCard/SlideCard';

export const CasesSection = () => {
  return (
    <>
      <CasesCompanyTitle>Successful cases of our company</CasesCompanyTitle>
      <Slider>
        <BlockBtn>
          <MeterSlide>01/05</MeterSlide>
          <SliderLeftBtn>
            <ArrowLeftImg width={'36'} height={'36'} />
          </SliderLeftBtn>
          <SliderRighttBtn>
            <ArrowRightImg width={'36'} height={'36'} />
          </SliderRighttBtn>
        </BlockBtn>
        <SlideCard />
      </Slider>
    </>
  );
};
