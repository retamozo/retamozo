import { useRouter } from "next/router";
import { useCallback } from "react";

export function useChangeLanguage() {
  const { push, asPath } = useRouter();

  const changeTranslation = useCallback(
    (locale: string) => {
      push(asPath, asPath, { locale });
    },
    [asPath, push]
  );

  return {
    changeTranslation,
  };
}
