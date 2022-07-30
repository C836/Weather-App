import * as S from "./Input.styled";
import { Input_Config } from "./Input.config";
import { search_request } from "../../services/search";
import { useEffect, useState } from "react";

export default function Input({ location_list, setList }: Input_Config) {
  const [input, setInput] = useState({ value: "", active_list: false });

  useEffect(() => {
    const timer = setTimeout(() => {
      search_request(input.value).then((data) => setList(data));
    }, 500);

    return () => clearTimeout(timer);
  }, [input.value]);

  useEffect(() => {
    if (location_list?.length) {
      setInput({ ...input, active_list: true });
    } else {
      setInput({ ...input, active_list: false });
    }
  }, [location_list]);

  const Handle_Input = (event: any) => {
    const input_value = event.target.value;

    if (input_value.length) {
      setInput({ ...input, value: input_value });
    } else {
      setInput({ ...input, active_list: false });
      setList([]);
    }
  };

  return <S.Input active_list={input.active_list} onChange={Handle_Input} />;
}
