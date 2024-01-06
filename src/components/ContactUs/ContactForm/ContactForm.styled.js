import styled from '@emotion/styled';

export const Form = styled.form`
  grid-area: form;

  min-width: 320px;
  max-width: 480px;
  height: 559px;

  background-color: #eaedf1;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  padding-top: 8px;
  padding-left: 12px;
  padding-right: 12px;

  @media screen and (min-width: 767px) {
    width: 342px;
    margin-left: 122px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-top: 36px;
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const Input = styled.input`
  height: 36px;

  color: #173d33;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #97d28b;
`;

export const InputMessage = styled.textarea`
  height: 124px;

  color: #173d33;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #97d28b;
`;

export const BlockBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SendBtn = styled.button`
  margin-top: 16px;

  padding: 3px;

  width: 99px;
  height: 39px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;

  border-radius: 500px;
  border: 1px solid #97d28b;

  color: #173d33;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.64px;

  stroke: #173d33;

  &:hover {
    background: #173d33;
    color: #97d28b;
  }
`;

export const ButtonImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background: #97d28b;
  border: 0;

  stroke: #173d33;
`;
