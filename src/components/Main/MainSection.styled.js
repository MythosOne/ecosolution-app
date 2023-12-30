import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 146px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  border-bottom: 1px solid;
  border-color: #97d28b;
`;

export const MainTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 100% */
  text-transform: uppercase;
`;

export const MainText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const MainBtn = styled.a`
  text-decoration: none;
  margin-bottom: 24px;

  padding: 3px;

  width: 141px;
  height: 39px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;

  border-radius: 500px;
  border: 1px solid #97d28b;

  background: transparent;

  color: #173d33;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.64px;

  stroke: #173d33;

  &:hover {
    background: #173d33;
    color: #97d28b;
  }
`;

export const ButtonImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background: #97d28b;
  border: 0;
`;
