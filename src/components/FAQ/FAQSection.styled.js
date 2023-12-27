import styled from '@emotion/styled';

export const Section = styled.section`
  /* width: 320px; */
  max-width: 480px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 36px;
`;

export const FAQSectionTitle = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  margin-bottom: 24px;
`;

export const FAQList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
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
`;

export const ContactUsBtn = styled.button`
  width: 130px;
  height: 39px;

  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border: none;
  border-radius: 500px;

  margin-top: 12px;

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
