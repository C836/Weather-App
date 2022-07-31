import * as S from "./Select.styled";
import { Select_Config } from "./Select.config";
import { Properties_Config } from "../../services/search.config";

export default function Select({
  locationList,
  setList,
  locationData,
  setLocation,
}: Select_Config) {
  const Select_Option = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedLocation = event.currentTarget.value;

    setLocation({ ...locationData, search: selectedLocation! });
    setList([]);
  };

  return (
    <S.Select>
      {locationList?.map((item: Properties_Config) => (
        <S.Option value={item.city || item.country} onClick={Select_Option}>
          <p>{item.city || item.country}</p>
          <small>{item.city && item.country}</small>
        </S.Option>
      ))}
    </S.Select>
  );
}
