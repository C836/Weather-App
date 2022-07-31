import * as S from './App.styled'
import { useEffect, useState } from 'react';
import 'ress'
import Input from './components/Input/Input'
import Select from './components/Select/Select';
import { Anchor, Headline, Paragraph } from './components/Text/Text.styled';
import { Properties_Config } from './services/search.config';
import background from "./assets/img/background.jpg"
import GlobalStyled from './global.styled';
import { weather_request } from './services/weather';
import { Weather_Config } from './services/weather.config';

import { capitalize } from './utils/capitalize'
import { getDegrees } from './utils/getDegrees';
import { history_request } from './services/history';
import { History_List_Config } from './services/history.config';
import { History } from './views/History/History';
import Home from './views/Home/Home';
import Weather from './views/Weather/Weather';

function App() {
  const [location_list, setList] = useState<Properties_Config[] | undefined>();
  const [location_data, setLocation] = useState<{search: string, data: Weather_Config | undefined}>({search: "", data: undefined})
  const [location_history, setHistory] = useState<History_List_Config[]>()

  const { search, data } = location_data

  useEffect(() => {
    weather_request(location_data.search)
    .then(response => setLocation({...location_data, data: response}));
  },[location_data.search])

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
        searchValue={search}
        locationHistory={location_history}
      />
    </div>
  )
}

export default App
