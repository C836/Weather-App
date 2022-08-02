import { createContext, useState } from "react";

import GlobalStyled from "./global.styled";
import background from "./assets/img/background.jpg";

import { Home } from "./views/Home/Home";
import { Weather } from "./views/Weather/Weather";
import { Forecast } from "./views/Forecast/Forecast";
import { Interface } from "./views/Interface/Interface";
import { WeatherDataConfig } from "./types";

const defaultWeatherData: WeatherDataConfig = {
  search: undefined,
  locationList: undefined,
  weatherInfo: undefined,
  forecast: undefined,
};

const defaultOptions = {
  lang: "pt",
  scale: "F",
};

export const WeatherContext = createContext({
  weatherData: defaultWeatherData,
  options: defaultOptions,
});

function App() {
  const [weatherData, setData] = useState(defaultWeatherData);
  const [options, setOptions] = useState(defaultOptions);

  return (
    <WeatherContext.Provider value={{ weatherData: weatherData, options: options }}>
      <GlobalStyled background={background} />

      <Home setData={setData} />

      <Weather setData={setData} />

      <Forecast />

      <Interface setOptions={setOptions} setData={setData} />
    </WeatherContext.Provider>
  );
}

export default App;
