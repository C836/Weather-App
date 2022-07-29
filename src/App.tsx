import * as S from './App.styled'
import { useState } from 'react';
import 'ress'
import Input from './components/Input/Input'
import { Headline } from './components/Text/Text.styled';
import { Properties_Config } from './services/search.config';
import GlobalStyled from './global.styled';

function App() {
  const [location_list, setList] = useState<Properties_Config[] | undefined>();

  return (
    <div>
      <GlobalStyled />

      <S.Input_Wrapper>
        <Headline>
          Como está o tempo hoje?
        </Headline>
        <Input setList={setList} />
      </S.Input_Wrapper>
    </div>
  )
}

export default App
