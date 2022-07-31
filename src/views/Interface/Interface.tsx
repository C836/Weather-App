import { useContext } from "react";

import * as S from "./Interface.styled";
import { InterfaceConfig } from "./Interface.config";

import { en, es, pt, translations, arrow } from "./../../assets/index";
import { Language } from "../../components/index";

import { OptionsContext } from "../../App";
import { Paragraph } from "../../components/Text/Text.styled";
import { Switch } from "../../components/Switch/Switch.styled";
import { Return } from "../../components/Return/Return.styled";

const Text = translations.Interface;

export const Languages = [
  { lang: "en", img: en },
  { lang: "es", img: es },
  { lang: "pt", img: pt },
];

export function Interface({ searchValue, goBack, setOptions }: InterfaceConfig) {
  const options = useContext(OptionsContext);

  const changeLanguage = (event: React.MouseEvent<HTMLImageElement>) => {
    const language = event.currentTarget.alt;

    setOptions({ ...options, lang: language });
  };

  const changeScale = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.checked
    const scale = input === true ? "C" : "F"

    setOptions({ ...options, scale: scale})
  }

  return (
    <S.Interface>
      <Return
        disabled={searchValue ? false : true}
        onClick={goBack}
        src={arrow}
      />

      <S.ScaleSelector>
        °F <Switch onChange={changeScale}/> °C
      </S.ScaleSelector>

      <S.LanguageSelector>
        <S.Languages>
          {Languages.map((lang, index) => (
            <Language
              key={index}
              alt={lang.lang}
              src={lang.img}
              onClick={changeLanguage}
            />
          ))}
        </S.Languages>

        <Paragraph align="center" size=".7">
          {(Text as any)[options.lang].selected}
        </Paragraph>
      </S.LanguageSelector>
    </S.Interface>
  );
}
