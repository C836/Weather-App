import { capitalize } from "./capitalize";

export function getDate(date: string, lang: string) {

  const format_lang = lang.split("_")[0];
  const options: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "numeric" };

  const today = new Date(date);
  const tomorrow = new Date(today.setDate(today.getDate() + 1));
  const date_string = tomorrow
    .toLocaleDateString(format_lang, options)
    .replaceAll(/de |\.|\,/gi, "")
    .split(" ")

  const result = `${capitalize(date_string[0])}, ${date_string[1]} ${capitalize(date_string[2])}`;



  return result;
}
