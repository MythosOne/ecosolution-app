import React, { useState } from 'react';
import {
  Container,
  BlockChapter,
  BlockBtn,
  PlusBtn,
  Chapter,
  BlockDescription,
  Description,
} from './FAQCard.styled';

import { PlusImg, MinusImg } from 'icons/IconsComponent';

export const FAQCard = ({ FAQ }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { chapter, description } = FAQ;

  return (
    <Container>
      <BlockChapter>
        <BlockBtn>
          <PlusBtn
            type="button"
            aria-label='plus-button'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <MinusImg /> : <PlusImg />}
          </PlusBtn>
        </BlockBtn>
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
