import styled from '@emotion/styled';

export const Section = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* height: 76px; */
  background: #f3f5fa;
  padding: 36px 20px 10px;

  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;

  @media screen and ((min-width: 480px) and (max-width: 1280px)) {
    padding: 42px 30px;
  }

  @media screen and ((min-width: 1280px)) {
    padding: 30px 100px;
  }
`;

export const BlockBtn = styled.div`
  display: flex;
  gap: 12px;
`;

export const MenuBtn = styled.button`
  display: flex;
  height: 40px;
  width: 40px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  border-radius: 50%;
  background: #dcefd8;
  border: 0;

  &:hover {
    background: #97d28b;
  }
`;

export const GetInBtn = styled.a`
  text-decoration: none;
  box-sizing: border-box;
  width: 140px;
  height: 39px;

  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border: none;
  border-radius: 500px;

  color: #173d33;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  background: #97d28b;
  fill: #173d33;

  &:hover {
    background: #173d33;
    color: #97d28b;
    fill: #97d28b;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 767px) {
    display: flex;
  }
`;
