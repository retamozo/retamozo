import { lngs } from "@/lang";
import { useRouter } from "next/router";
import { useCallback } from "react";

type UseChangeLanguageReturn = {
  changeTranslation: (locale: string) => void;
  lngs: typeof lngs;
  current: string | undefined;
};

export function useChangeLanguage(): UseChangeLanguageReturn {
  const { push, asPath, locale } = useRouter();

  const changeTranslation = useCallback(
    (locale: string) => {
      push(asPath, asPath, { locale });
    },
    [asPath, push]
  );

  return {
    changeTranslation,
    lngs,
    current: locale,
  };
}
