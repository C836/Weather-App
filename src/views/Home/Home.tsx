import { useContext, useEffect, useState } from "react";

import * as S from "./Home.styled";
import { HomeConfig } from "./Home.config";

import { Headline, Input, Select, Option } from "../../components/index";

import { search_request } from "../../services/search";
import { weather_request } from "../../services/weather";

import { OptionsContext } from "../../App";

export function Home({
  locationList,
  locationData,
  setList,
  setLocation,
}: HomeConfig) {
  const [input, setInput] = useState({ value: "", activeList: false });

  useEffect(() => {
    const timer = setTimeout(() => {
      search_request(input.value).then((data) => setList(data));
    }, 500);

    return () => clearTimeout(timer);
  }, [input.value]);

  useEffect(() => {
    if (locationList?.length) {
      setInput({ ...input, activeList: true });
    } else {
      setInput({ ...input, activeList: false });
    }
  }, [locationList]);

  const Handle_Input = (event: any) => {
    const input_value = event.target.value;

    if (input_value.length) {
      setInput({ ...input, value: input_value });
    } else {
      setInput({ ...input, activeList: false });
      setList([]);
    }
  };

  const Select_Option = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedLocation = event.currentTarget.value;

    setLocation({ ...locationData, search: selectedLocation! });
    setList([]);
  };

  const { lang } = useContext(OptionsContext);

  useEffect(() => {
    weather_request(locationData.search, lang).then((response) =>
      setLocation({ ...locationData, data: response })
    );
  }, [locationData.search]);

  return (
    <S.Home disabled={locationData.search ? true : false}>
      <Headline>Como está o tempo hoje?</Headline>
      <Input activeList={input.activeList} onChange={Handle_Input} />
      
      <Select>
        {locationList?.map((item) => (
          <Option value={item.city || item.country} onClick={Select_Option}>
            <p>{item.city || item.country}</p>
            <small>{item.city && item.country}</small>
          </Option>
        ))}
      </Select>
    </S.Home>
  );
}
