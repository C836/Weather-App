export function toScale(temp: number, scale: string) {
  const K_ZERO = 273.15;

  if (scale === "C") {
    return temp - K_ZERO;
  } else if (scale === "F") {
    return (temp - K_ZERO) * 1.8 + 32;
  }
}
