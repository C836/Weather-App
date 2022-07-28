import * as S from "./Input.styled";
import { Input_Config } from "./Input.config";
import { search_request } from "../../services/search";
import { useEffect, useRef, useState } from "react";

export default function Input({setList}:Input_Config) {
  const [input, setInput] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
        search_request(input).then((data) => setList(data));
    }, 500)

    return () => clearTimeout(timer)
  }, [input])

  const Handle_Input = (event: any) => {
    const input = event.target.value;

    setInput(input)
  }

  return <S.Input onChange={Handle_Input} />;
}
