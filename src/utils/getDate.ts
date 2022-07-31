export function getDate(date: string) {
  const week = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const month = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

  const today = new Date(date);
  const tomorrow = new Date(today.setDate(today.getDate() + 1));
  
  const current_day = week[tomorrow.getDay()];
  const current_day_number = String(tomorrow.getDate()).padStart(2, "0");
  const current_month = month[tomorrow.getMonth()];

  return `${current_day}, ${current_day_number} ${current_month}`
}
