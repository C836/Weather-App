import { useContext, useEffect } from "react";

import * as S from "./Weather.styled";
import { WeatherConfig } from "./Weather.config";

import { Anchor, Headline, Paragraph } from "../../components/index";
import { translations } from "../../assets";

import { forecast_request } from "../../services/forecast";

import { capitalize, getTemp, getIconUrl } from "../../utils";

import { OptionsContext } from "../../App";

const Text = translations.Weather

export function Weather({
  locationData: { search, data },
  locationForecast,
  setForecast,
}: WeatherConfig) {

  const { lang, scale } = useContext(OptionsContext)

  const getForecast = () => {
    forecast_request(search, lang)
    .then((response) => setForecast(response));
  };

  useEffect(() => {
    if(locationForecast) {
      getForecast()
    }
  }, [lang])

  return (
    <S.Weather disabled={search && !locationForecast ? false : true}>
      <Headline>{search.toUpperCase()}</Headline>

      <Paragraph size={"1.2rem"}>
        {data && capitalize(data.weather[0].description)}
      </Paragraph>

      <S.Display>
        <Paragraph size={"4rem"}>
          {data && getTemp(data?.main.temp, scale)}
        </Paragraph>

        <img src={data && getIconUrl(data?.weather[0].icon)}/>
      </S.Display>

      <Paragraph size={"1.2rem"}>
        <b>MAX: </b>
        {data && getTemp(data?.main.temp_max, scale)} 
        <b>MIN: </b>
        {data && getTemp(data?.main.temp_min, scale)}
      </Paragraph>

      <Paragraph size={".75rem"} lineHeight={5}>
        <Anchor onClick={getForecast}>
          {(Text as any)[lang].view_forecast}
        </Anchor>
      </Paragraph>
    </S.Weather>
  );
}
