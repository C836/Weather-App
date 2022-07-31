import * as S from "./History.styled";
import { History_Config } from "./History.config";
import { get_date } from "../../utils/getDate";
import { capitalize } from "../../utils/capitalize";

export default function History({ location_history }: History_Config) {
  return (
    <S.History>
      {location_history?.map((item, index) => (
        <S.Row>
          <S.Column>{get_date(item.dt_txt)}</S.Column>
          <S.Column><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} /></S.Column>
          <S.Column>{item.main.temp_min}</S.Column>
          <S.Column>{item.main.temp_max}</S.Column>
          <S.Column>{capitalize(item.weather[0].description)}</S.Column>
        </S.Row>
      ))}
    </S.History>
  );
}
