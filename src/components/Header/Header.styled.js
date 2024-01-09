import styled from '@emotion/styled';

export const Section = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 76px;
  background: #f3f5fa;

  z-index: 1;
  margin: 0px 20px;

  @media screen and (min-width: 480px) {
  }

  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
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
