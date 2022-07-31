import * as S from "./History.styled";
import { History_Config } from "./History.config";
import { get_date } from "../../utils/getDate";
import { capitalize } from "../../utils/capitalize";
import { getDegrees } from "../../utils/getDegrees";

export default function History({ location_history }: History_Config) {
  return (
    <S.History>
      {location_history?.map((item, index) => (
        <S.Row>
          <S.Column><b>{get_date(item.dt_txt)}</b></S.Column>
          <S.Column><img height={"45px"} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} /></S.Column>
          <S.Column>{getDegrees(item.main.temp_min)}</S.Column>
          <S.Bar/>
          <S.Column>{getDegrees(item.main.temp_max)}</S.Column>
          <S.Description>{capitalize(item.weather[0].description)}</S.Description>
        </S.Row>
      ))}
    </S.History>
  );
}
