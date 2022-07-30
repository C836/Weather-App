import * as S from "./Select.styled";
import { Select_Config } from "./Select.config";
import { Properties_Config } from "../../services/search.config";

export default function Select({location_list, setList, location_data, setLocation}:Select_Config) {

  const Select_Option = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selected_location = event.currentTarget.value;
    
    setLocation({ ...location_data, search: selected_location! })
    setList([])
  }

  return (
    <S.Select>
      {location_list?.map((item: Properties_Config) => (
        <S.Option value={item.city || item.country} onClick={Select_Option}>
          <p>
            {item.city || item.country}
          </p>
          <small>
            {item.city && item.country}
          </small>
        </S.Option>
      ))}
    </S.Select>
  );
}
