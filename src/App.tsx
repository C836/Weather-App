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

function App() {
  const [location_list, setList] = useState<Properties_Config[] | undefined>();
  const [location_data, setLocation] = useState<{search: string, data: Weather_Config | undefined}>({search: "", data: undefined})
  const [location_history, setHistory] = useState<History_List_Config[]>()

  const { search, data } = location_data

  useEffect(() => {
    weather_request(location_data.search)
    .then(response => setLocation({...location_data, data: response}));
  },[location_data.search])

  const get_history_handler = () => {
    history_request(location_data.search)
    .then(response => setHistory(response))
  }

  return (
    <div>
      <GlobalStyled background={background} />

      <S.Home disabled={location_data.search ? true : false}>
        <S.Input_Wrapper>
          <Headline>
            Como está o tempo hoje?
          </Headline>
          <Input 
            location_list={location_list} 
            setList={setList} />
          <Select 
            location_list={location_list}
            setList={setList}
            location_data={location_data}
            setLocation={setLocation} />
        </S.Input_Wrapper>
      </S.Home>

      <S.Weather disabled={location_data.search && !location_history ? false : true}>
        <Headline>
          {search.toUpperCase()}
        </Headline>

        <Paragraph size={"1.2rem"}>
          {data && capitalize(data.weather[0].description)}
        </Paragraph>

        <S.Weather_Wrapper>
          <Paragraph size={"4rem"}>{data && getDegrees(data?.main.temp)}</Paragraph>
          <img src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}/>
        </S.Weather_Wrapper>

        <Paragraph size={"1.2rem"}>
          <b>MAX: </b>{data && getDegrees(data?.main.temp_max)} 
          <b>MIN: </b>{data && getDegrees(data?.main.temp_min)}
        </Paragraph>
        
        <Paragraph size={".75rem"} lineHeight={5}>
          <Anchor onClick={get_history_handler}>Ver previsão para os próximos 5 dias</Anchor>
        </Paragraph>
      </S.Weather>

      <History
        searchValue={search}
        locationHistory={location_history}
      />
    </div>
  )
}

export default App
