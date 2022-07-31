import * as S from "./Input.styled";
import { Input_Config } from "./Input.config";
import { search_request } from "../../services/search";
import { useEffect, useState } from "react";

export default function Input({ locationList, setList }: Input_Config) {
  const [input, setInput] = useState({ value: "", activeList: false });

  useEffect(() => {
    const timer = setTimeout(() => {
      search_request(input.value).then((data) => setList(data));
    }, 500);

    return () => clearTimeout(timer);
  }, [input.value]);

  useEffect(() => {
    if (locationList?.length) {
      setInput({ ...input, activeList: true });
    } else {
      setInput({ ...input, activeList: false });
    }
  }, [locationList]);

  const Handle_Input = (event: any) => {
    const input_value = event.target.value;

    if (input_value.length) {
      setInput({ ...input, value: input_value });
    } else {
      setInput({ ...input, activeList: false });
      setList([]);
    }
  };

  return <S.Input activeList={input.activeList} onChange={Handle_Input} />;
}
