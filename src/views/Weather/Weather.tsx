import React, { useContext, useEffect } from "react";

import * as S from "./Weather.styled";
import { WeatherConfig } from "./Weather.config";

import { Anchor, Headline, Paragraph } from "../../components/index";
import { translations } from "../../assets/index";

import { forecastRequest } from "../../services/index";

import { capitalize, getTemp, getIconUrl } from "../../utils/index";

import { WeatherContext } from "../../App";

const WEATHER_KEY = process.env.VITE_WEATHER_KEY;

const Text = translations.Weather;

export function Weather({ setData }: WeatherConfig) {
  const {
    weatherData,
    options: { lang, scale },
  } = useContext(WeatherContext);
  const { search, weatherInfo, forecast } = weatherData;

  function getForecast() {
    forecastRequest(search!, lang, WEATHER_KEY!).then((response) =>
      setData({ ...weatherData, forecast: response })
    );
  }

  useEffect(() => {
    if (forecast) {
      getForecast();
    }
  }, [lang]);

  return (
    <S.Weather disabled={search && !forecast ? false : true}>
      <Headline>{search?.toUpperCase()}</Headline>

      <Paragraph size={"1.2rem"}>
        {weatherInfo && capitalize(weatherInfo?.weather[0].description)}
      </Paragraph>

      <S.Display>
        <Paragraph size={"4rem"}>
          {weatherInfo && getTemp(weatherInfo?.main.temp, scale)}
        </Paragraph>

        <img src={weatherInfo && getIconUrl(weatherInfo?.weather[0].icon)} />
      </S.Display>

      <Paragraph size={"1.2rem"}>
        <b>MAX: </b>
        {weatherInfo && getTemp(weatherInfo?.main.temp_max, scale)}
         <b>MIN: </b>
        {weatherInfo && getTemp(weatherInfo?.main.temp_min, scale)}
      </Paragraph>

      <Paragraph size={".75rem"} lineHeight={"5"}>
        <Anchor onClick={getForecast}>
          {(Text as any)[lang].view_forecast}
        </Anchor>
      </Paragraph>
    </S.Weather>
  );
}
