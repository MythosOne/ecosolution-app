import styled from '@emotion/styled';

export const Section = styled.header`
  /* position: fixed; */
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  background-color: transparent;
  z-index: 1;
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
  margin-left: 11px;

  border-radius: 50%;
  background: #dcefd8;
  border: 0;

  &:hover {
    background: #97d28b;
  }
`;

// export const ContainerBtn = styled.div`
// display: flex;
// height: 39px;
// width: 23px;
// padding: 4px 12px;
// justify-content: center;
// align-items: center;
// gap: 12px;
// flex-shrink: 0;
// margin-left: 11px;

// border-radius: 50%;
// background: #DCEFD8;
// `;
