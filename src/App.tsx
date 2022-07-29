import * as S from './App.styled'
import { useState } from 'react';
import 'ress'
import Input from './components/Input/Input'
import Select from './components/Select/Select';
import { Headline } from './components/Text/Text.styled';
import { Properties_Config } from './services/search.config';
import GlobalStyled from './global.styled';

function App() {
  const [location_list, setList] = useState<Properties_Config[] | undefined>();

  return (
    <div>
      <GlobalStyled />

      <S.Home>
        <S.Input_Wrapper>
          <Headline>
            Como está o tempo hoje?
          </Headline>
          <Input 
            location_list={location_list} 
            setList={setList} />
          <Select 
            location_list={location_list} />
        </S.Input_Wrapper>
      </S.Home>
    </div>
  )
}

export default App
