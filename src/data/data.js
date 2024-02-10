import wind_turbines_1x from 'images/wind-turbines@1x_av.jpg';
import wind_turbines_2x from 'images/wind-turbines@2x_av.jpg';
import solar_panel_1x from 'images/solar-panels@1x_av.jpg';
import solar_panel_2x from 'images/solar-panels@2x_av.jpg';
import thermal_modules_1x from 'images/thermal-modules@1x_av.jpg';
import thermal_modules_2x from 'images/thermal-modules@2x_av.jpg';
import wind_power_1x from 'images/wind-power@1x_av.jpg';
import wind_power_2x from 'images/wind-power@2x_av.jpg';
import nuclear_station_1x from 'images/nuclear-station@1x_av.jpg';
import nuclear_station_2x from 'images/nuclear-station@2x_av.jpg';

const energyObjects = [
  {
    id: 1,
    imgSrc: wind_turbines_1x,
    image: `${wind_turbines_1x} 1x, ${wind_turbines_2x} 2x`,
    altImg: 'Wind turbines',
    title: 'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
    signature: 'Wind Power for auto field irrigation',
    date: 'July 2023',
  },
  {
    id: 2,
    imgSrc: solar_panel_1x,
    image: `${solar_panel_1x} 1x, ${solar_panel_2x} 2x`,
    altImg: 'Solar panel',
    title: 'Zhytomyr city Private Enterprise “Bosch”',
    signature: 'Solar Panels for industrial use',
    date: 'November 2023',
  },
  {
    id: 3,
    imgSrc: thermal_modules_1x,
    image: `${thermal_modules_1x} 1x, ${thermal_modules_2x} 2x`,
    altImg: 'Thermal modules',
    title: 'Rivne city Private Enterprise “Biotech”',
    signature: 'Thermal modules',
    date: 'October 2023',
  },
  {
    id: 4,
    imgSrc: wind_power_1x,
    image: `${wind_power_1x} 1x, ${wind_power_2x} 2x`,
    altImg: 'Wind Power',
    title: 'Kherson city Private Enterprise “HealthyFarm”',
    signature: 'Wind power',
    date: 'September 2021',
  },
  {
    id: 5,
    imgSrc: nuclear_station_1x,
    image: `${nuclear_station_1x} 1x, ${nuclear_station_2x} 2x`,
    altImg: 'Nuclear station',
    title: 'Zaporizhia city Private Enterprise “Biotech”',
    signature: 'Mini nuclear stations',
    date: 'May 2021',
  },
];

export default energyObjects;
