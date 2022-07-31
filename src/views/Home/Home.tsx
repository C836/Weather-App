import * as S from "./Home.styled";
import { HomeConfig } from "./Home.config";
import { Headline } from "../../components/Text/Text.styled";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";

export default function Home({
  locationList,
  locationData,
  setList,
  setLocation,
}: HomeConfig) {

  return (
    <S.Home disabled={locationData.search ? true : false}>
      <Headline>Como está o tempo hoje?</Headline>
      
      <Input locationList={locationList} setList={setList} />
      <Select
        locationList={locationList}
        setList={setList}
        locationData={locationData}
        setLocation={setLocation}
      />
    </S.Home>
  );
}
