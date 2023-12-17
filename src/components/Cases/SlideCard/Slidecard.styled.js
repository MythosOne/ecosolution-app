import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #eaedf1;

  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Figure = styled.figure`
margin: 0`;

export const SlideImg = styled.img`
  width: 100%;
`;

export const SlideLink = styled.div`
  display: flex;
  align-items: center;
  gap: 61px;

  padding: 21px 12px;
  /* padding-top: 21px;
  padding-bottom: 21px; */

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
`;

export const SignatureProject = styled.div`
  display: flex;
  gap: 61px;

  margin-top: 12px;
  margin-bottom: 12px;
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
`;
