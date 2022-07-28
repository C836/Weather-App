import * as S from "./Select.styled";
import { Select_Config } from "./Select.config";
import { Properties_Config } from "../../services/search.config";

export default function Select({location_list}:Select_Config) {

  return (
    <S.Select>
      {location_list?.map((item: Properties_Config) => (
        <S.Option label={item.city} value={item.city}>
          {item.city}
        </S.Option>
      ))}
    </S.Select>
  );
}
