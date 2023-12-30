import React, { useState } from 'react';
import {
  Section,
  CasesCompanyTitle,
  MeterSlide,
  HeaderSlider,
  Slider,
  BlockMeter,
  SliderLeftBtn,
  SliderRightBtn,
  BlockBtn,
  SlideWindow,
} from './CasesSection.styled';

import { ArrowLeftImg, ArrowRightImg } from '../../icons/IconsComponent';

import { SlideCard } from './SlideCard/SlideCard';

import data from '../../data/data.js';

const PAGE_WIDTH = 320;

export const CasesSection = () => {
  const [offset, setOffset] = useState(0);
  const [slideNUmber, setSlideNumber] = useState(1);

  const handleLeftArrowClick = () => {
    if (slideNUmber > 1) {
      setSlideNumber(slideNUmber - 1);
    }

    setOffset(prevState => {
      const newOffset = prevState + PAGE_WIDTH;

      return Math.min(newOffset, 0);
    });
  };

  const handleRigthArrowClick = () => {
    if (slideNUmber <= data.length - 1) {
      setSlideNumber(slideNUmber + 1);
    }

    setOffset(prevState => {
      const newOffset = prevState - PAGE_WIDTH;
      const maxOffset = -PAGE_WIDTH * (data.length - 1);

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <Section id='cases'>
      <CasesCompanyTitle>Successful cases of our company</CasesCompanyTitle>
      <Slider>
        <HeaderSlider>
          <BlockMeter>
            <MeterSlide>
              <span>{slideNUmber.toString().padStart(2, '0')}</span>
              <span style={{ opacity: '0.2' }}>
                /{data.length.toString().padStart(2, '0')}
              </span>
            </MeterSlide>
          </BlockMeter>
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
                handleRigthArrowClick();
              }}
            >
              <ArrowRightImg width={'36'} height={'36'} />
            </SliderRightBtn>
          </BlockBtn>
        </HeaderSlider>
        <SlideWindow>
          {data.map(energyObjects => {
            return (
              <li
                style={{
                  listStyle: 'none',
                  minWidth: '100%',
                  maxWidth: '100%',
                  height: '100%',
                  transform: `translateX(${offset}px)`,
                  transition: 'translate',
                  transitionProperty: 'transform',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out',
                }}
                key={energyObjects.id}
              >
                <SlideCard energyObject={energyObjects} />
              </li>
            );
          })}
        </SlideWindow>
      </Slider>
    </Section>
  );
};
