import * as S from "./Weather.styled";
import { WeatherConfig } from "./Weather.config";
import { capitalize, getDegrees, getIconUrl } from "../../utils";
import { Anchor, Headline, Paragraph } from "../../components/Text/Text.styled";
import { forecast_request } from "../../services/forecast";
import { useContext, useEffect } from "react";
import { OptionsContext } from "../../App";

export function Weather({
  locationData: { search, data },
  locationForecast,
  setForecast,
}: WeatherConfig) {

  const { lang } = useContext(OptionsContext)

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
          {data && getDegrees(data?.main.temp)}
        </Paragraph>

        <img src={data && getIconUrl(data?.weather[0].icon)}/>
      </S.Display>

      <Paragraph size={"1.2rem"}>
        <b>MAX: </b>
        {data && getDegrees(data?.main.temp_max)} 
        <b>MIN: </b>
        {data && getDegrees(data?.main.temp_min)}
      </Paragraph>

      <Paragraph size={".75rem"} lineHeight={5}>
        <Anchor onClick={getForecast}>
          Ver previsão para os próximos 5 dias
        </Anchor>
      </Paragraph>
    </S.Weather>
  );
}
