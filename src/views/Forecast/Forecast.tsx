import { useContext } from "react";

import * as S from "./Forecast.styled";

import { Headline, Paragraph } from "../../components/index";
import { translations } from "../../assets/index";

import { capitalize, getDate, getTemp, getIconUrl } from "../../utils/index";

import { WeatherContext } from "../../App";

const Text = translations.Forecast;

export function Forecast() {
  const {
    weatherData: { search, forecast },
    options: { lang, scale },
  } = useContext(WeatherContext);

  return (
    <S.Forecast disabled={forecast ? false : true}>
      <Headline>{search?.toUpperCase()}</Headline>

      <Paragraph size={"1.2rem"}>{(Text as any)[lang].forecast}</Paragraph>

      <S.Table>
        {forecast?.map((item, index) => (
          <S.Row key={index}>
            <S.Column>
              <b>{getDate(item.dt_txt, lang)}</b>
            </S.Column>

            <S.Column>
              <img height={"45px"} src={getIconUrl(item.weather[0].icon)} />
            </S.Column>

            <S.Column>{getTemp(item.main.temp_min, scale)}</S.Column>

            <S.Bar />

            <S.Column>{getTemp(item.main.temp_max, scale)}</S.Column>

            <S.Description>
              {capitalize(item.weather[0].description)}
            </S.Description>
          </S.Row>
        ))}
      </S.Table>
    </S.Forecast>
  );
}
