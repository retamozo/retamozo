export enum Langs {
  EN = "en-US",
  ES = "es-AR",
}

export type LangsObject = Record<Langs, { label: string }>;

export const lngs: LangsObject = {
  [Langs.EN]: {
    label: "en",
  },
  [Langs.ES]: {
    label: "es",
  },
};
