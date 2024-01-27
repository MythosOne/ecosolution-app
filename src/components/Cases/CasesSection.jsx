import React, { useState } from 'react';
import {
  Section,
  CasesCompanyTitle,
  MeterSlide,
  VerticalLine,
  HeaderSlider,
  SliderLeftBtn,
  SliderRightBtn,
  BlockBtn,
  SlideWindow,
  SlideItem,
} from './CasesSection.styled';

import { ArrowLeftImg, ArrowRightImg } from 'icons/IconsComponent';

import { SlideCard } from './SlideCard/SlideCard';

import data from 'data/data.js';

const PAGE_WIDTH_MOBILE = 320;
const PAGE_WIDTH_TABLET = 708;
const PAGE_WIDTH_DESKTOP = 1240;

export const CasesSection = () => {
  const [offset, setOffset] = useState(0);
  const [slideNUmber, setSlideNumber] = useState(1);

  const handleLeftArrowClick = () => {
    if (slideNUmber > 1) {
      setSlideNumber(slideNUmber - 1);
    }

    setOffset(prevState => {
      const newOffset = prevState + PAGE_WIDTH_MOBILE;

      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    if (slideNUmber <= data.length - 1) {
      setSlideNumber(slideNUmber + 1);
    }

    setOffset(prevState => {
      const newOffset = prevState - PAGE_WIDTH_MOBILE;
      const maxOffset = -PAGE_WIDTH_MOBILE * (data.length - 1);

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <Section id='Cases'>
      <CasesCompanyTitle>Successful cases of our company</CasesCompanyTitle>
      <VerticalLine />
        <HeaderSlider>
            <MeterSlide>
              <span>{slideNUmber.toString().padStart(2, '0')}</span>
              <span style={{ opacity: '0.2' }}>
                /{data.length.toString().padStart(2, '0')}
              </span>
            </MeterSlide>
          <BlockBtn>
            <SliderLeftBtn type='button'
              onClick={() => {
                handleLeftArrowClick();
              }}
            >
              <ArrowLeftImg width={'36'} height={'36'} />
            </SliderLeftBtn>
            <SliderRightBtn type='button'
              onClick={() => {
                handleRightArrowClick();
              }}
            >
              <ArrowRightImg width={'36'} height={'36'} />
            </SliderRightBtn>
          </BlockBtn>
        </HeaderSlider>
        <SlideWindow>
          {data.map(energyObjects => {
            return (
              <SlideItem
                key={energyObjects.id}
                offset={offset}
              >
                <SlideCard energyObject={energyObjects} />
              </SlideItem>
            );
          })}
        </SlideWindow>
    </Section>
  );
};
