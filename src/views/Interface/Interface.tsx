import { useContext } from "react";

import * as S from "./Interface.styled";
import { InterfaceConfig } from "./Interface.config";

import { en, es, pt } from "./../../assets/index";
import { Language } from "../../components/Language/Language.styled";

import { OptionsContext } from "../../App";

export const Languages = [
  { lang: "en", img: en },
  { lang: "es", img: es },
  { lang: "pt", img: pt },
];

export function Interface({ setOptions }: InterfaceConfig) {
  const options = useContext(OptionsContext);

  const changeLanguage = (event: React.MouseEvent<HTMLImageElement>) => {
    const language = event.currentTarget.alt;

    setOptions({ ...options, lang: language });
  };

  return (
    <S.Interface>
      {Languages.map((lang, index) => (
        <Language
          key={index}
          alt={lang.lang}
          src={lang.img}
          onClick={changeLanguage}
        />
      ))}
    </S.Interface>
  );
}
