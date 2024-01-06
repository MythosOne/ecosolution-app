import styled from '@emotion/styled';

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (min-width: 767px) {
    margin-left: 30px;
    margin-right: 30px;

    align-items: flex-start;
  }
`;
