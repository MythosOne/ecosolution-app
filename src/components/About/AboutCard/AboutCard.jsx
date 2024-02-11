import React from 'react';
import {
  CardList,
  CardItem,
  CardHead,
  SymbolCard,
  CardTitle,
  CardText,
  Farm,
  Solar,
  Picture,
  FarmsImg,
  SolarImg,
} from './AboutCard.styled';

import {
  OpennessImg,
  RespImg,
  InnovImg,
  QualityImg,
} from 'icons/IconsComponent';

import solar_panels_tablet_1x from 'images/man-worker-field-by-solar-panels@1x_av.jpg';
import solar_panels_tablet_2x from 'images/man-worker-field-by-solar-panels@2x_av.jpg';
import solar_panels_desktop_1x from 'images/man-worker-field-by-solar-panels@1x_lg.jpg';
import solar_panels_desktop_2x from 'images/man-worker-field-by-solar-panels@2x_lg.jpg';
import wind_farms_tablet_1x from 'images/wind-farms-fields@1x_av.jpg';
import wind_farms_tablet_2x from 'images/wind-farms-fields@2x_av.jpg';
import wind_farms_desktop_1x from 'images/wind-farms-fields@1x_lg.jpg';
import wind_farms_desktop_2x from 'images/wind-farms-fields@2x_lg.jpg';

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
            <CardItem key={card.id} style={{ gridArea: card.area }}>
              <CardHead>
                <SymbolCard>{card.img}</SymbolCard>
                <CardTitle>{card.title}</CardTitle>
              </CardHead>
              <CardText>{card.text}</CardText>
            </CardItem>
          );
        })}
        <Farm>
          <Picture>
            <source
              srcSet={`${wind_farms_tablet_1x} 1x, ${wind_farms_tablet_2x} 2x`}
              media="(max-width: 1279px)"
            />
            <FarmsImg
              srcSet={`${wind_farms_desktop_1x} 1x, ${wind_farms_desktop_2x} 2x`}
              src={wind_farms_desktop_1x}
              width="594"
              alt="Farms fields"
              loading="lazy"
            />
          </Picture>
        </Farm>
        <Solar>
          <Picture>
            <source
              srcSet={`${solar_panels_tablet_1x} 1x, ${solar_panels_tablet_2x} 2x`}
              media="(max-width: 1279px)"
            />
            <SolarImg
              srcSet={`${solar_panels_desktop_1x} 1x, ${solar_panels_desktop_2x} 2x`}
              src={solar_panels_desktop_1x}
              width="594"
              alt="Solar panels"
              loading="lazy"
            />
          </Picture>
        </Solar>
      </CardList>
    </>
  );
};
