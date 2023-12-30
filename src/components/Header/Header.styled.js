import styled from '@emotion/styled';

export const Section = styled.header`
  /* right: 0;
  left: 0; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  height: 55px;
  background: #f3f5fa;
  /* background-color: transparent;  */
  /* background-color: #fff;  */
  z-index: 1;
  margin: 0px 20px;
  /* gap: 11px; */

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
  /* margin-left: 11px; */

  border-radius: 50%;
  background: #dcefd8;
  border: 0;

  &:hover {
    background: #97d28b;
  }
`;
