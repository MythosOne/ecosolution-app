import styled from '@emotion/styled';

export const Section = styled.section`
  margin-bottom: 36px;
`;

export const CasesCompanyTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-top: 24px;
`;

export const HeaderSlider = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
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
  display: flex;

  width: 320px;
  height: 318px;
  overflow: hidden;
`;
