import React from 'react';
import {
  Container,
  Picture,
  SlideLink,
  SlideBtn,
  SlideImg,
  SlideText,
  SignatureProject,
  ProjectName,
  ProjectDate,
} from './Slidecard.styled';

import { ArrowUpRightImg } from 'icons/IconsComponent';

export const SlideCard = ({ energyObject }) => {
  const { imgSrc, image, altImg, title, signature, date } = energyObject;

  return (
    <Container>
      <Picture>
        <source srcSet={image} media="(max-width: 767px)" />
        <source srcSet={image} media="(max-width: 1279px)" />
        <SlideImg
          srcSet={image}
          src={imgSrc}
          alt={altImg}
          width="596"
          loading="lazy"
        />
      </Picture>
      <SlideLink>
        <SlideText>{title}</SlideText>
        <SlideBtn
          type="button"
          aria-label="link-arrow"
          title="Link to successful project"
          onClick={() => {
            alert('Мы обязательно куди нить перейдём...)))');
          }}
        >
          <ArrowUpRightImg />
        </SlideBtn>
      </SlideLink>
      <SignatureProject>
        <ProjectName>{signature}</ProjectName>
        <ProjectDate>{date}</ProjectDate>
      </SignatureProject>
    </Container>
  );
};
