import React, { useState } from 'react';
import {
  Container,
  BlockChapter,
  BlockDescription,
  Chapter,
  Description,
  PlusBtn,
} from './FAQCard.styled';

import { PlusImg, MinusImg } from '../../../icons/IconsComponent';

export const FAQCard = ({ FAQ }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { chapter, description } = FAQ;

  return (
    <Container>
      <BlockChapter>
        <PlusBtn
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <MinusImg /> : <PlusImg />}
        </PlusBtn>
        <Chapter>{chapter}</Chapter>
      </BlockChapter>
      {isOpen && (
        <BlockDescription>
          <Description>{description}</Description>
        </BlockDescription>
      )}
    </Container>
  );
};
