import styled from '@emotion/styled';

export const Section = styled.section`
  display: grid;
  grid-row-gap: 24px;
  margin: 0 auto;

  grid-template-areas:
    'title'
    'header'
    'slide';

  margin-bottom: 36px;

  @media screen and (min-width: 767px) {
    width: 708px;
    /* grid-row-gap: 24px;
    grid-column-gap: 12px; */
    grid-template-areas:
      'title line header'
      'slide slide slide';
  }

  @media screen and (min-width: 1279px) {
    width: 1240px;

    grid-row-gap: 72px;
  }
`;

export const CasesCompanyTitle = styled.h2`
  grid-area: title;

  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media screen and (min-width: 767px) {
    width: 264px;

    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (min-width: 1279px) {
    width: 398px;

    font-size: 48px;
    line-height: 48px;
  }
`;

export const VerticalLine = styled.hr`
  @media screen and (max-width: 767px) {
    display: none;
  }
  grid-area: line;
  height: 100%;
  width: 1px;
  background: #97d28b;
  border: 0;

  margin: 0 9px 0 90px;

  @media screen and (min-width: 1279px) {
    margin: 0 161px 0 221px;
  }
`;

export const HeaderSlider = styled.div`
  grid-area: header;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (min-width: 767px) {
    width: 342px;
  }

  @media screen and (min-width: 1279px) {
    width: 459px;
  }
`;

export const MeterSlide = styled.div`
  width: 72px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  color: #173d33;

  text-align: justify;
  font-family: Fira Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;
`;

export const BlockBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  @media screen and (min-width: 1279px) {
    gap: 24px;
  }
`;

export const SliderLeftBtn = styled.button`
  width: 66px;
  height: 66px;

  padding: 15px;

  border-radius: 100px;
  border: 1px solid #173d33;

  background-color: transparent;

  stroke: #173d33;

  &:hover {
    border: 1px solid #97d28b;
    stroke: #97d28b;
  }

  cursor: pointer;

  @media screen and (min-width: 1279px) {
    width: 84px;
    height: 84px;
  }
`;

export const SliderRightBtn = styled.button`
  width: 66px;
  height: 66px;

  padding: 15px;

  border-radius: 100px;
  border: 1px solid #173d33;

  background-color: transparent;

  stroke: #173d33;

  &:hover {
    border: 1px solid #97d28b;
    stroke: #97d28b;
  }

  cursor: pointer;

  @media screen and (min-width: 1279px) {
    width: 84px;
    height: 84px;
  }
`;

export const SlideWindow = styled.ul`
  grid-area: slide;

  display: flex;

  width: 320px;
  /* height: 318px; */
  overflow: hidden;

  margin: 0 auto;

  @media screen and (min-width: 767px) {
    width: 708px;
    /* overflow: visible; */
    margin: 0;
    gap: 24px;
  }

  @media screen and (min-width: 1279px) {
    width: 1240px;
    gap: 48px;
  }
`;

export const SlideItem = styled.li`
  list-style: none;
  /* min-width: 100%;
  max-width: 100%;
  height: 100%; */
  transform: translateX(${props => props.offset}px);
  transition: translate;
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
`;
