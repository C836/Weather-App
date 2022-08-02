import React, { useContext, useEffect, useState } from "react";

import * as S from "./Home.styled";
import { HomeConfig } from "./Home.config";

import { Headline, Input, Select, Option } from "../../components/index";

import { searchRequest, weatherRequest } from "../../services/index";

import { WeatherContext } from "../../App";
import { translations } from "../../assets";

const GEOAPIFY_KEY = process.env.VITE_GEOAPIFY_KEY;
const WEATHER_KEY = process.env.VITE_WEATHER_KEY;

const Text = translations.Home;

export function Home({ setData }: HomeConfig) {
  const { weatherData, options: { lang }} = useContext(WeatherContext);
  const { search, locationList, weatherInfo } = weatherData

  const [input, setInput] = useState("");

  const Handle_Input = (event: any) => {
    const input_value = event.target.value;

    if(!weatherInfo){
      setInput(input_value);
    }

    if (!input_value.length) {
      setData({ ...weatherData, locationList: undefined });
    }
  };

  useEffect(() => {
      const timer = setTimeout(() => {
        if(input.length > 2) {
          searchRequest(input, GEOAPIFY_KEY!).then((response) =>
          setData({ ...weatherData, locationList: response })
        )}
      }, 200);

      return () => clearTimeout(timer);
  }, [input]);

  const Select_Option = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedLocation = event.currentTarget.value;

    setInput("");
    setData({ ...weatherData, search: selectedLocation, locationList: undefined})
  };

  useEffect(() => {
    weatherRequest(search!, lang, WEATHER_KEY!).then((response) =>
      setData({ ...weatherData, weatherInfo: response })
    );
  }, [search, lang]);

  return (
    <S.Home disabled={search ? true : false}>
      <Headline>{(Text as any)[lang].heading}</Headline>
      <Input
        placeholder={(Text as any)[lang].placeholder}
        activeList={locationList?.length ? true : false}
        value={input}
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
