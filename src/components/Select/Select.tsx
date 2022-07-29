import * as S from "./Select.styled";
import { Select_Config } from "./Select.config";
import { Properties_Config } from "../../services/search.config";

export default function Select({location_list, location_data, setLocation}:Select_Config) {

  const Select_Option = (event: React.MouseEvent<HTMLLIElement>) => {
    const selected_location = event.currentTarget.textContent
    setLocation({ ...location_data, search: selected_location! })
  }

  return (
    <S.Select>
      {location_list?.map((item: Properties_Config) => (
        <S.Option onClick={Select_Option}>
          <p>
            {item.city}
          </p> 
          <small>
            {item.country}
          </small>
        </S.Option>
      ))}
    </S.Select>
  );
}
