import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid #97d28b;

  @media screen and (min-width: 1279px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

export const BlockChapter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1279px) {
    gap: 24px;
  }
`;

export const BlockBtn = styled.div`
  width: 16px;
  height: 16px;

  @media screen and (min-width: 767px) {
    width: 28px;
    height: 28px;
  }
`;

export const PlusBtn = styled.button`
  width: 16px;
  height: 16px;

  border: none;
  background: transparent;
  padding: 0;

  @media screen and (min-width: 767px) {
    width: 28px;
    height: 28px;
  }
`;

export const Chapter = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media screen and (min-width: 1279px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const BlockDescription = styled.div`
  margin-top: 16px;
  padding-left: 24px;

  @media screen and (min-width: 767px){
    padding-left: 36px;
  }

  @media screen and (min-width: 1279px) {
    margin-top: 24px;
    padding-left: 52px;
  }
`;

export const Description = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media screen and (min-width: 1279px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
