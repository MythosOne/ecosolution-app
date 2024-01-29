import React from 'react';
import { nanoid } from 'nanoid';
import {
  Section,
  FAQSectionTitle,
  FAQList,
  FAQItem,
  AskQuestion,
  QuestionText,
  ContactUsBtn,
} from './FAQSection.styled';

import { EllipseArrowDown } from 'icons/IconsComponent';

import faq from 'data/dataFAQ.js';

import { FAQCard } from './FAQCard/FAQCard.jsx';

export const FAQSection = () => {
  return (
    <Section id="faq">
      <FAQSectionTitle>Frequently Asked Questions</FAQSectionTitle>
        <FAQList>
          {faq.map(questions => {
            return (
              <FAQItem key={nanoid()}>
                <FAQCard FAQ={questions} />
              </FAQItem>
            );
          })}
        </FAQList>
        <AskQuestion>
          <QuestionText>Didn't find the answer to your question? </QuestionText>
          <ContactUsBtn type="button" href="#contactUs">
            Contact Us
            <EllipseArrowDown />
          </ContactUsBtn>
        </AskQuestion>
    </Section>
  );
};
