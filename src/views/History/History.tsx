import * as S from "./History.styled";
import { HistoryConfig } from "./History.config";

import { Headline, Paragraph } from "../../components/Text/Text.styled";

import { capitalize, getDate, getDegrees, getIconUrl } from "../../utils/index";

export function History({ searchValue, locationHistory }: HistoryConfig) {
  return (
    <S.History disabled={locationHistory ? false : true}>
      <Headline>{searchValue.toUpperCase()}</Headline>

      <Paragraph size={"1.2rem"}>Previsão para 5 dias</Paragraph>

      <S.Table>
        {locationHistory?.map((item, index) => (
          <S.Row>
            <S.Column>
              <b>{getDate(item.dt_txt)}</b>
            </S.Column>

            <S.Column>
              <img height={"45px"} src={getIconUrl(item.weather[0].icon)} />
            </S.Column>

            <S.Column>
              {getDegrees(item.main.temp_min)}
            </S.Column>

            <S.Bar />

            <S.Column>
              {getDegrees(item.main.temp_max)}
            </S.Column>

            <S.Description>
              {capitalize(item.weather[0].description)}
            </S.Description>
          </S.Row>
        ))}
      </S.Table>
    </S.History>
  );
}
