import styled from '@emotion/styled';

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;

  text-decoration: none;
`;

export const LogoImg = styled.img``;

export const TitleEco = styled.p`

  color: #173d33;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 33px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.32px;

  &:hover {
    color: #97d28b;

    transition: all 0.2s ease-in-out;
  }
`;

export const TitleGreen = styled.p`
  width: 60px;

  color: #173d33;
  font-family: 'CA Saygon Text', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 9px;
  letter-spacing: -0.4px;
`;

export const Green = styled.span`
  color: #97d28b;
`;
