export function getIconUrl(icon: string) {
  const BASE_URL = "http://openweathermap.org/img/wn/"
  const SCALE = "@2x.png"

  return BASE_URL + icon + SCALE
}