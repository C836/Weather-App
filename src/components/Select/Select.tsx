import { useContext, useEffect } from "react";

import * as S from "./Select.styled";
import { Select_Config } from "./Select.config";

import { weather_request } from "../../services/weather";
import { Properties_Config } from "../../services/search.config";

import { OptionsContext } from "../../App";

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

  const { lang } = useContext(OptionsContext)

  useEffect(() => {
    weather_request(locationData.search, lang)
    .then(response => setLocation({...locationData, data: response}));
  },[locationData.search])

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
