import React from 'react';
import {
  Container,
  Figure,
  SlideLink,
  SlideBtn,
  SlideImg,
  SlideText,
  SignatureProject,
  ProjectName,
  ProjectDate,
} from './Slidecard.styled';

import { ArrowUpRightImg } from '../../../icons/IconsComponent';

export const SlideCard = ({ energyObject }) => {
  const { image, title, signature, date } = energyObject;

  return (
    <Container>
      <Figure>
        <SlideImg src={image} alt="wind power" />
      </Figure>
      <SlideLink>
        <SlideText>{title}</SlideText>
        <SlideBtn
          onClick={() => {
            console.log('SlideLinkButton');
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
