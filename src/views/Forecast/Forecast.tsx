import { useContext } from "react";

import * as S from "./Forecast.styled";
import { ForecastConfig } from "./Forecast.config";

import { Headline, Paragraph } from "../../components/Text/Text.styled";
import { translations } from "../../assets";

import { capitalize, getDate, getTemp, getIconUrl } from "../../utils/index";

import { OptionsContext } from "../../App";

const Text = translations.Forecast

export function Forecast({ searchValue, locationForecast }: ForecastConfig) {
  const { lang, scale } = useContext(OptionsContext)

  return (
    <S.Forecast disabled={locationForecast ? false : true}>
      <Headline>{searchValue?.toUpperCase()}</Headline>

      <Paragraph size={"1.2rem"}>{(Text as any)[lang].forecast}</Paragraph>

      <S.Table>
        {locationForecast?.map((item, index) => (
          <S.Row>
            <S.Column>
              <b>{getDate(item.dt_txt, lang)}</b>
            </S.Column>

            <S.Column>
              <img height={"45px"} src={getIconUrl(item.weather[0].icon)} />
            </S.Column>

            <S.Column>
              {getTemp(item.main.temp_min, scale)}
            </S.Column>

            <S.Bar />

            <S.Column>
              {getTemp(item.main.temp_max, scale)}
            </S.Column>

            <S.Description>
              {capitalize(item.weather[0].description)}
            </S.Description>
          </S.Row>
        ))}
      </S.Table>
    </S.Forecast>
  );
}
