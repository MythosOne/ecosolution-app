import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (min-width: 480px){
    margin: 0;
  }

  @media screen and (min-width: 767px) {
    /* margin-left: 30px;
    margin-right: 30px; */
  }

  @media screen and (min-width: 1279px) {
    /* margin-left: 100px;
    margin-right: 100px; */
  }
`;
