import { useState } from 'react';

import 'ress'
import GlobalStyled from './global.styled';
import background from "./assets/img/background.jpg"

import { Properties_Config } from './services/search.config';
import { Weather_Config } from './services/weather.config';
import { History_List_Config } from './services/history.config';

import { Home } from './views/Home/Home';
import { Weather } from './views/Weather/Weather';
import { History } from './views/History/History';

function App() {
  const [location_list, setList] = useState<Properties_Config[] | undefined>();
  const [location_data, setLocation] = useState<{search: string, data: Weather_Config | undefined}>({search: "", data: undefined})
  const [location_history, setHistory] = useState<History_List_Config[]>()

  return (
    <div>
      <GlobalStyled background={background} />

      <Home 
        locationList = {location_list}
        locationData = {location_data}
        setList = {setList}
        setLocation = {setLocation}
      />

      <Weather 
        locationData = {location_data}
        locationHistory = {location_history}
        setHistory = {setHistory}
      />

      <History
        searchValue={location_data.search}
        locationHistory={location_history}
      />
    </div>
  )
}

export default App
