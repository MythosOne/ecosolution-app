import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #eaedf1;

  width: 320px;
  height: 318px;

  @media screen and (min-width: 767px) {
    width: 342px;
    height: 322px;
  }

  @media screen and (min-width: 1279px) {
    width: 596px;
    height: 506px;
  }
`;

export const Figure = styled.figure`
  margin: 0;
`;

export const SlideImg = styled.img`
  width: 320px;
  height: 170px;

  @media screen and (min-width: 767px) {
    width: 342px;
  }

  @media screen and (min-width: 1279px) {
    width: 596px;
    height: 324px;
  }
`;

export const SlideLink = styled.div`
  margin-left: 12px;
  margin-right: 12px;

  display: flex;
  align-items: center;
  gap: 61px;
  height: 66px;

  margin-top: 21px;
  margin-bottom: 21px;

  @media screen and (min-width: 1279px) {
    margin-left: 48px;
    margin-right: 48px;

    gap: 83px;
  }
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

  @media screen and (min-width: 767px) {
    font-size: 20px;
    letter-spacing: -0.8px;

    height: 72px;
  }

  @media screen and (min-width: 1279px) {
    font-size: 24px;
    letter-spacing: -0.96px;

    height: 58px;
  }
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
  display: flex;
  justify-content: space-between;
  width: 296px;

  padding-top: 12px;
  
  border-top: 1px solid #97d28b;

  @media screen and (min-width: 767px) {
    width: 318px;
  }

  @media screen and (min-width: 1279px) {
    padding-top: 24px;
    width: 500px;
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

  @media screen and (min-width: 1279px) {
    font-size: 16px;
    letter-spacing: -0.64px;
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

  @media screen and (min-width: 1279px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
