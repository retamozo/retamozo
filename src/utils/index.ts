export const cls = (...cls: string[]) => {
  return Array.from(cls).filter(Boolean).join(" ");
};

export const isOdd = (n: number) => n % 2 === 0;

export const calcReadingTimeInMinutes = (text: string) => {
  const HOW_MANY_WORDS_HUMANS_CAN_READ_AVERAGE = 250;
  const words = text.split(" ").length;
  const calc = Math.round(words / HOW_MANY_WORDS_HUMANS_CAN_READ_AVERAGE);
  return calc < 1 ? 1 : calc;
};
