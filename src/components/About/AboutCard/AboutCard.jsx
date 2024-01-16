import React from 'react';
import {
  CardList,
  CardItem,
  CardHead,
  CardTitle,
  CardText,
} from './AboutCard.styled';

import {
  OpennessImg,
  RespImg,
  InnovImg,
  QualityImg,
} from 'icons/IconsComponent';

export const AboutCard = () => {
  const cardItems = [
    {
      id: 1,
      img: <OpennessImg />,
      title: 'Openness',
      text: 'to the world, people, new ideas and projects',
    },
    {
      id: 2,
      img: <RespImg />,
      title: 'Responsibility',
      text: 'we are aware that the results of our work have an impact on our lives and the lives of future generations',
    },
    {
      id: 3,
      img: <InnovImg />,
      title: 'Innovation',
      text: 'we use the latest technology to implement non-standard solutions',
    },
    {
      id: 4,
      img: <QualityImg />,
      title: 'Quality',
      text: ' we do not strive to be the first among others, but we want to be the best in our business',
    },
  ];

  return (
    <>
      <CardList>
        {cardItems.map(card => {
          return (
            <CardItem key={card.id}>
              <CardHead>
                {card.img}
                <CardTitle>{card.title}</CardTitle>
              </CardHead>
              <CardText>{card.text}</CardText>
            </CardItem>
          );
        })}
      </CardList>
    </>
  );
};
