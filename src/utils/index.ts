export const cls = (...cls: string[]) => {
  return Array.from(cls).filter(Boolean).join(" ");
};

export const isOdd = (n: number) => n % 2 === 0;
