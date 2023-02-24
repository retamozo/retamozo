import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { FunctionComponent, ReactNode, useCallback } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Path } from "./const";

type Props = {
  onChangeLanguage: (locale: string) => void;
};

const LanguageSwitcher: FunctionComponent<Props> = ({ onChangeLanguage }) => (
  <div>
    <a
      className="active:underline underline-offset-4"
      href="#"
      onClick={() => onChangeLanguage("en-US")}
    >
      en
    </a>
    <span> / </span>
    <a
      className="active:underline underline-offset-4"
      href="#"
      onClick={() => onChangeLanguage("es-AR")}
    >
      es
    </a>
  </div>
);

type NavBarItems = {
  to?: string;
  children: ReactNode;
  key: string;
};

export const useNavbarLinks = () => {
  const { t } = useTranslation("navbar");
  const { push, asPath } = useRouter();

  const changeTranslation = useCallback(
    (locale: string) => {
      push(asPath, asPath, { locale });
    },
    [asPath, push]
  );

  const LIST: NavBarItems[] = [
    {
      key: "theme",
      children: (
        <ThemeSwitcher
          render={({ setTheme, theme }) => {
            return (
              <>
                {theme === "dark" ? (
                  <IconMoonFilled
                    className="mt-1"
                    onClick={() => {
                      setTheme("light");
                    }}
                  />
                ) : (
                  <IconSunFilled
                    className="mt-1"
                    onClick={() => setTheme("dark")}
                  />
                )}
              </>
            );
          }}
        />
      ),
    },
    {
      key: "language",
      children: <LanguageSwitcher onChangeLanguage={changeTranslation} />,
    },
    {
      to: Path.Journey,
      key: "myjourney",
      children: t("timeline"),
    },
    {
      to: Path.Articles,
      key: "articles",
      children: t("article"),
    },
    {
      to: Path.Narratives,
      key: "narratives",
      children: t("narratives"),
    },
  ];

  return {
    LIST,
    changeTranslation,
  };
};
