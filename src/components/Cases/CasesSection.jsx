import React, { useState, useEffect } from 'react';
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
const PAGE_WIDTH_TABLET = 732;
const PAGE_WIDTH_DESKTOP = 1264;

export const CasesSection = () => {
  const [offset, setOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(360);
  const [slideNumber, setSlideNumber] = useState(1);
  console.log(`windowWidth:${windowWidth}px`);
  console.log(`slideNumber: ${slideNumber}`);

  const handleLeftArrowClick = () => {
    if (windowWidth < 768) {
      if (slideNumber > 1) {
        setSlideNumber(slideNumber - 1);
      }
    }

    if (windowWidth >= 768) {
      if (slideNumber === data.length) {
        setSlideNumber(data.length - 1);
      } else if (slideNumber > 2) {
        setSlideNumber(slideNumber - 2);
      }
    }

    setOffset(prevState => {
      if (windowWidth < 768) {
        const newOffset = prevState + PAGE_WIDTH_MOBILE;
        return Math.min(newOffset, 0);
      }
      if (windowWidth >= 768 && windowWidth < 1280) {
        const newOffset = prevState + PAGE_WIDTH_TABLET;
        return Math.min(newOffset, 0);
      }
      if (windowWidth >= 1280) {
        const newOffset = prevState + PAGE_WIDTH_DESKTOP;
        return Math.min(newOffset, 0);
      }
    });
  };

  const handleRightArrowClick = () => {
    if (windowWidth < 768) {
      if (slideNumber <= data.length - 1) {
        setSlideNumber(slideNumber + 1);
      }
    }
    if (windowWidth >= 768) {
      if (slideNumber < data.length - 1) {
        setSlideNumber(slideNumber + 2);
      } else {
        setSlideNumber(data.length);
      }
    }

    setOffset(prevState => {
      if (windowWidth < 768) {
        const newOffset = prevState - PAGE_WIDTH_MOBILE;
        const maxOffset = -PAGE_WIDTH_MOBILE * (data.length - 1);
        return Math.max(newOffset, maxOffset);
      }
      if (windowWidth >= 768 && windowWidth < 1280) {
        const newOffset = prevState - PAGE_WIDTH_TABLET;
        const maxOffset = -PAGE_WIDTH_TABLET * (data.length - 3);
        return Math.max(newOffset, maxOffset);
      }
      if (windowWidth >= 1280) {
        const newOffset = prevState - PAGE_WIDTH_DESKTOP;
        const maxOffset = -PAGE_WIDTH_DESKTOP * (data.length - 3);
        return Math.max(newOffset, maxOffset);
      }
    });
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 480) {
      setSlideNumber(2);
    }
  }, []);

  return (
    <Section id="Cases">
      <CasesCompanyTitle>Successful cases of our company</CasesCompanyTitle>
      <VerticalLine />
      <HeaderSlider>
        <MeterSlide>
          <span>{slideNumber.toString().padStart(2, '0')}</span>
          <span style={{ opacity: '0.2' }}>
            /{data.length.toString().padStart(2, '0')}
          </span>
        </MeterSlide>
        <BlockBtn>
          <SliderLeftBtn
            type="button"
            onClick={() => {
              handleLeftArrowClick();
            }}
          >
            <ArrowLeftImg width={'36'} height={'36'} />
          </SliderLeftBtn>
          <SliderRightBtn
            type="button"
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
            <SlideItem key={energyObjects.id} offset={offset}>
              <SlideCard energyObject={energyObjects} />
            </SlideItem>
          );
        })}
      </SlideWindow>
    </Section>
  );
};
