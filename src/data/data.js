import React from 'react';

import pic1 from 'images/wind-turbines.png';
import pic2 from 'images/solar-panels.png';
import pic3 from 'images/thermal-modules.png';
import pic4 from 'images/wind-power.png';
import pic5 from 'images/mini-nuclear-station.png';

const energyObjects = [
  {
    id: 1,
    image: pic1,
    title: 'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
    signature: 'Wind Power for auto field irrigation',
    date: 'July 2023',
  },
  {
    id: 2,
    image: pic2,
    title: 'Zhytomyr city Private Enterprise “Bosch”',
    signature: 'Solar Panels for industrial use',
    date: 'November 2023',
  },
  {
    id: 3,
    image: pic3,
    title: 'Rivne city Private Enterprise “Biotech”',
    signature: 'Thermal modules',
    date: 'October 2023',
  },
  {
    id: 4,
    image: pic4,
    title: 'Kherson city Private Enterprise “HealthyFarm”',
    signature: 'Wind power',
    date: 'September 2021',
  },
  {
    id: 5,
    image: pic5,
    title: 'Zaporizhia city Private Enterprise “Biotech”',
    signature: 'Mini nuclear stations',
    date: 'May 2021',
  },
];

export default energyObjects;
