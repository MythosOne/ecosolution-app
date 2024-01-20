import React from 'react';
import {
  CardList,
  CardItem,
  CardHead,
  CardTitle,
  CardText,
  Figure,
  FarmsImg,
  SolarImg,
} from './AboutCard.styled';

import {
  OpennessImg,
  RespImg,
  InnovImg,
  QualityImg,
} from 'icons/IconsComponent';

import imgFarms from 'images/wind-farms-fields.png';
import imgSolar from 'images/man-worker-field-by-solar-panels.png';

export const AboutCard = () => {
  const cardItems = [
    {
      id: 1,
      img: <OpennessImg />,
      title: 'Openness',
      text: 'to the world, people, new ideas and projects',
      area: 'open',
    },
    {
      id: 2,
      img: <RespImg />,
      title: 'Responsibility',
      text: 'we are aware that the results of our work have an impact on our lives and the lives of future generations',
      area: 'resp',
    },
    {
      id: 3,
      img: <InnovImg />,
      title: 'Innovation',
      text: 'we use the latest technology to implement non-standard solutions',
      area: 'inno',
    },
    {
      id: 4,
      img: <QualityImg />,
      title: 'Quality',
      text: ' we do not strive to be the first among others, but we want to be the best in our business',
      area: 'qual',
    },
  ];

  return (
    <>
      <CardList>
        {cardItems.map(card => {
          return (
            <CardItem key={card.id} style={{gridArea: card.area}}>
              <CardHead>
                {card.img}
                <CardTitle>{card.title}</CardTitle>
              </CardHead>
              <CardText>{card.text}</CardText>
            </CardItem>
          );
        })}
        <Figure style={{gridArea: "farm"}}>
          <FarmsImg src={imgFarms} alt="Farms fields" />
        </Figure>
        <Figure style={{gridArea: "solar"}}>
          <SolarImg src={imgSolar} alt="Solar panels" />
        </Figure>
      </CardList>
    </>
  );
};
