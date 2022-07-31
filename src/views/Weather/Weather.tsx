import * as S from "./Weather.styled";
import { WeatherConfig } from "./Weather.config";
import { capitalize, getDegrees, getIconUrl } from "../../utils";
import { Anchor, Headline, Paragraph } from "../../components/Text/Text.styled";
import { history_request } from "../../services/history";
import { useContext } from "react";
import { OptionsContext } from "../../App";

export function Weather({
  locationData: { search, data },
  locationHistory,
  setHistory,
}: WeatherConfig) {

  const { lang } = useContext(OptionsContext)

  const getHistory = () => {
    history_request(search, lang)
    .then((response) => setHistory(response));
  };

  return (
    <S.Weather disabled={search && !locationHistory ? false : true}>
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
        <Anchor onClick={getHistory}>
          Ver previsão para os próximos 5 dias
        </Anchor>
      </Paragraph>
    </S.Weather>
  );
}
