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

export const SlideCard = () => {
  return (
    <Container>
      <Figure>
        <SlideImg
          src="../../../images/wind-turbines-holland.png"
          alt="wind power"
        />
      </Figure>
      <SlideLink>
        <SlideText>
          Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
        </SlideText>
        <SlideBtn onClick={()=>{console.log("SlideLinkButton")}}>
          <ArrowUpRightImg />
        </SlideBtn>
      </SlideLink>
      <SignatureProject>
        <ProjectName>Wind Power for auto field irrigation</ProjectName>
        <ProjectDate>July 2023</ProjectDate>
      </SignatureProject>
    </Container>
  );
};
