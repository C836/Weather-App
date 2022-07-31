import { createContext, useState } from 'react';

import 'ress'
import GlobalStyled from './global.styled';
import background from "./assets/img/background.jpg"

import { Properties_Config } from './services/search.config';
import { Weather_Config } from './services/weather.config';
import { Forecast_List_Config } from './services/forecast.config';

import { Home } from './views/Home/Home';
import { Weather } from './views/Weather/Weather';
import { Forecast } from './views/Forecast/Forecast';
import { Interface }from './views/Interface/Interface';

export interface OptionsConfig {
  lang: string;
  scale: string;
}

const defaultOptions = {
  lang: "pt",
  scale: "C",
};

export const OptionsContext = createContext(defaultOptions);

function App() {
  const [location_list, setList] = useState<Properties_Config[] | undefined>();
  const [location_data, setLocation] = useState<{search: string, data: Weather_Config | undefined}>({search: "", data: undefined})
  const [location_forecast, setForecast] = useState<Forecast_List_Config[]>()

  const [options, setOptions] = useState<OptionsConfig>(defaultOptions);

  return (
    <OptionsContext.Provider value={options}>
      <GlobalStyled background={background} />

      <Home 
        locationList = {location_list}
        locationData = {location_data}
        setList = {setList}
        setLocation = {setLocation}
      />

      <Weather 
        locationData = {location_data}
        locationForecast = {location_forecast}
        setForecast = {setForecast}
      />

      <Forecast
        searchValue={location_data.search}
        locationForecast={location_forecast}
      />

      <Interface 
        setOptions={setOptions}
      />
    </OptionsContext.Provider>
  )
}

export default App
