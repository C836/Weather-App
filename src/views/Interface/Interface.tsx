import { useContext } from "react";

import * as S from "./Interface.styled";
import { InterfaceConfig } from "./Interface.config";

import { en, es, pt, translations } from "./../../assets/index";
import { Language } from "../../components/index";

import { OptionsContext } from "../../App";
import { Paragraph } from "../../components/Text/Text.styled";

const Text = translations.Interface;

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

      <Paragraph align="center" size=".7">{Text[options.lang].selected}</Paragraph>
    </S.Interface>
  );
}
