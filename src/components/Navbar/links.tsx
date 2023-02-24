import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { Translation } from "next-i18next";
import { ReactNode } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Path } from "./const";

type NavBarItems = {
  to?: string;
  children: ReactNode;
  key: string;
};

export const navbarItems: NavBarItems[] = [
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
    children: <LanguageSwitcher />,
  },
  {
    to: Path.Journey,
    key: "myjourney",
    children: (
      <Translation ns={["navbar"]}>{(t) => <>{t("timeline")}</>}</Translation>
    ),
  },
  {
    to: Path.Articles,
    key: "articles",
    children: (
      <Translation ns={["navbar"]}>{(t) => <>{t("article")}</>}</Translation>
    ),
  },
  {
    to: Path.Narratives,
    key: "narratives",
    children: (
      <Translation ns={["navbar"]}>{(t) => <>{t("narratives")}</>}</Translation>
    ),
  },
];
