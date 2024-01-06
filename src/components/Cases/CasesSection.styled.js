import styled from '@emotion/styled';

export const Section = styled.section`
  display: grid;
  grid-row-gap: 24px;

  grid-template-areas:
    'title'
    'header'
    'slide';

  margin-bottom: 36px;

  @media screen and (min-width: 767px) {
    /* width: 100%; */
    grid-row-gap: 24px;
    grid-column-gap: 12px;
    grid-template-areas:
      'title line header'
      'slide slide slide';

    /* grid-template-columns: repeat (2, 342px); */
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
    width: 342px;
  }
`;

export const VerticalLine = styled.hr`
  @media screen and (max-width: 767px) {
    display: none;
  }
  grid-area: line;
  height: 65px;
  width: 1px;
  background: #97d28b;
  border: 0;
`;

export const HeaderSlider = styled.div`
  grid-area: header;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (min-width: 767px) {
    width: 342px;
  }
`;

export const BlockMeter = styled.div``;

export const MeterSlide = styled.div`
  width: 72px;

  display: flex;
  justify-content: space-between;

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
`;

export const SlideWindow = styled.ul`
  grid-area: slide;

  display: flex;

  width: 320px;
  height: 318px;
  overflow: hidden;

  margin: 0 auto;

  @media screen and (min-width: 767px) {
    width: 708px;
    /* overflow: visible; */
    margin: 0;
    gap: 24px;
  }
`;

export const SlideItem = styled.li``;
