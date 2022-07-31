export function getTemp(temp: number, scale: string) {
  const K_ZERO = 273.15;

  if (scale === "C") {
    const result = temp - K_ZERO;
    return `${result.toFixed(0)}°`;
  } else if (scale === "F") {
    const result = (temp - K_ZERO) * 1.8 + 32;
    return `${result.toFixed(0)}°`;
  }
}
