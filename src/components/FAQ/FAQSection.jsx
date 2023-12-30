import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Section,
  FAQSectionTitle,
  FAQList,
  QuestionText,
  ContactUsBtn,
} from './FAQSection.styled';

import { EllipseArrowDown } from '../../icons/IconsComponent';

import faq from '../../data/dataFAQ.js';

import { FAQCard } from './FAQCard/FAQCard.jsx';

export const FAQSection = () => {
  return (
    <Section id="faq">
      <FAQSectionTitle>Frequently Asked Questions</FAQSectionTitle>
      <FAQList>
        {faq.map(questions => {
          return (
            <li key={nanoid()}>
              <FAQCard FAQ={questions} />
            </li>
          );
        })}
      </FAQList>
      <QuestionText>Didn't find the answer to your question? </QuestionText>
      <ContactUsBtn type="button" href="#contactUs">
        Contact Us
        <EllipseArrowDown />
      </ContactUsBtn>
    </Section>
  );
};
