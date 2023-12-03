import styled from '@emotion/styled';

export const HeaderSection = styled.div`
  /* position: fixed; */
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: transparent;
  z-index: 1;
`;

export const MenuBtn = styled.button`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  /* background-color: transparent; */
  border: 0;
  padding: 0;
`;

export const ContainerBtn = styled.div`
display: flex;
height: 39px;
width: 23px;
padding: 4px 12px;
justify-content: center;
align-items: center;
gap: 12px;
flex-shrink: 0;
margin-left: 11px;

border-radius: 50%;
background: #DCEFD8;
`;
