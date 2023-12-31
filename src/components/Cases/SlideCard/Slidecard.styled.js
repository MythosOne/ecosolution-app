import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #eaedf1;

  /* width: 100%;
  height: 100%; */
`;

export const Figure = styled.figure`
  margin: 0;
`;

export const SlideImg = styled.img`
  width: 320px;
  height: 174px;

  @media screen and (min-width: 767px) {
    width: 342px;
  }
`;

export const SlideLink = styled.div`
  /* width: 296px; */
  /* height: 107px; */
  margin-left: 12px;
  margin-right: 12px;

  display: flex;
  align-items: center;
  gap: 61px;

  padding-top: 21px;
  padding-bottom: 21px;

  border-bottom: 1px solid #97d28b;
`;

export const SlideText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
`;

export const SlideBtn = styled.button`
  width: 60px;
  height: 60px;
  padding: 16px;
  border: none;

  border-radius: 50%;
  background: #97d28b;

  stroke: #173d33;

  &:hover {
    stroke: #97d28b;
    background: #173d33;
  }
`;

export const SignatureProject = styled.div`
  /* width: 296px; */
  /* margin-left: 12px;
  margin-right: 12px; */

  display: flex;
  justify-content: space-between;
  gap: 76px;

  margin-top: 12px;
  margin-bottom: 12px;

  @media screen and (min-width: 767px) {
    gap: 62px;
  }
`;

export const ProjectName = styled.span`
  color: #173d33;

  text-align: justify;
  font-family: Fira Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media screen and (min-width: 767px) {
    font-size: 14px;
    letter-spacing: -0.56px;
  }
`;

export const ProjectDate = styled.span`
  color: #173d33;
  text-align: right;
  font-family: Fira Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media screen and (min-width: 767px) {
    font-size: 14px;
    letter-spacing: -0.56px;
  }
`;
