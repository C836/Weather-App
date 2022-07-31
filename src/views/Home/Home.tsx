import { useContext, useEffect, useState } from "react";

import * as S from "./Home.styled";
import { HomeConfig } from "./Home.config";

import { Headline, Input, Select, Option } from "../../components/index";

import { search_request } from "../../services/search";
import { weather_request } from "../../services/weather";

import { OptionsContext } from "../../App";
import { translations } from "../../assets";

const Text = translations.Home;

export function Home({
  locationList,
  locationData,
  setList,
  setLocation,
}: HomeConfig) {
  const { lang } = useContext(OptionsContext);

  const [input, setInput] = useState("");

  const Handle_Input = (event: any) => {
    const input_value = event.target.value;

    if (input_value.length) {
      setInput(input_value);
    } else {
      setList([]);
    }
  };

  useEffect(() => {
    if (input.length > 2) {
      const timer = setTimeout(() => {
        search_request(input).then((data) => setList(data));
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [input]);

  const Select_Option = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    const selectedLocation = event.currentTarget.value;

    setLocation({ ...locationData, search: selectedLocation! });
    setInput("");
    setList([]);
  };

  useEffect(() => {
    weather_request(locationData.search, lang)
    .then(response => setLocation({...locationData, data: response}));
  },[locationData.search, lang])

  return (
    <S.Home disabled={locationData.search ? true : false}>
      <Headline>{Text[lang].heading}</Headline>
      <Input
        placeholder={Text[lang].placeholder}
        activeList={locationList?.length ? true : false}
        onChange={Handle_Input}
      />

      <Select>
        {locationList?.map((item, index) => {
          const { city, country } = item;

          return (
            <Option 
            key={index} 
            value={city || country} 
            onClick={Select_Option}
            >
              <p>{city || country}</p>
              <small>{city && country}</small>
            </Option>
          );
        })}
      </Select>
    </S.Home>
  );
}
