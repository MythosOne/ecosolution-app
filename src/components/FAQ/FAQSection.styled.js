import styled from '@emotion/styled';

export const Section = styled.section`
  max-width: 440px;

  display: grid;
  grid-row: 3;
  margin-bottom: 36px;

  /* margin: 0 auto 36px; */

  grid-template-areas:
    'title'
    'list'
    'question';

  @media screen and (min-width: 767px) {
    grid-template-areas:
      'list title'
      'list title'
      'list question';

    grid-gap: 24px;
    width: 708px;
    max-width: none;
  }

  @media screen and (min-width: 1279px) {
    max-width: none;
    grid-column-gap: 185px;
    /* width: 100%; */
  }
`;

export const FAQSectionTitle = styled.h2`
  grid-area: title;

  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  margin-bottom: 24px;

  @media screen and (min-width: 767px) {
    margin: 0;
  }
`;

export const FAQList = styled.ul`
  grid-area: list;

  display: flex;
  flex-direction: column;

  list-style: none;

  @media screen and (min-width: 767px) {
    width: 342px;
  }
`;

export const AskQuestion = styled.div`
  grid-area: question;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
`;

export const QuestionText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  margin-top: 36px;

  @media screen and (min-width: 767px) {
    margin-top: 0;
  }
`;

export const ContactUsBtn = styled.a`
  text-decoration: none;
  box-sizing: border-box;
  width: 130px;
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
`;
