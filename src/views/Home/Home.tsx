import { useContext, useEffect, useState } from "react";

import * as S from "./Home.styled";
import { HomeConfig } from "./Home.config";

import { Headline, Input, Select, Option } from "../../components/index";

import { searchRequest } from "../../services/search";
import { weatherRequest } from "../../services/weather";

import { WeatherContext } from "../../App";
import { translations } from "../../assets";

const Text = translations.Home;

export function Home({ setData }: HomeConfig) {
  const { weatherData, options: { lang }} = useContext(WeatherContext);
  const { search, locationList } = weatherData

  const [input, setInput] = useState("");

  const Handle_Input = (event: any) => {
    const input_value = event.target.value;

    if (input_value.length) {
      setInput(input_value);
    } else {
      setData({ ...weatherData, locationList: undefined });
    }
  };

  useEffect(() => {
    if (input.length > 2) {
      const timer = setTimeout(() => {
        searchRequest(input).then((response) =>
          setData({ ...weatherData, locationList: response })
        );
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [input]);

  const Select_Option = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedLocation = event.currentTarget.value;

    setData({ ...weatherData, search: selectedLocation! });
    setData({ ...weatherData, locationList: undefined });
    setInput("");
  };

  useEffect(() => {
    weatherRequest(search!, lang).then((response) =>
      setData({ ...weatherData, weatherInfo: response })
    );
  }, [search, lang]);

  return (
    <S.Home disabled={search ? true : false}>
      <Headline>{(Text as any)[lang].heading}</Headline>
      <Input
        placeholder={(Text as any)[lang].placeholder}
        activeList={locationList?.length ? true : false}
        onChange={Handle_Input}
      />

      <Select>
        {locationList?.map((item, index) => {
          const { city, country } = item;

          return (
            <Option key={index} value={city || country} onClick={Select_Option}>
              <p>{city || country}</p>
              <small>{city && country}</small>
            </Option>
          );
        })}
      </Select>
    </S.Home>
  );
}
