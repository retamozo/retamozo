import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { ReactNode } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";
const LanguageSwitcher = () => (
  <div>
    <a className="active:underline underline-offset-4" href="#">
      en
    </a>
    <span> / </span>
    <a className="active:underline underline-offset-4" href="#">
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
  const { t } = useTranslation("navbar")

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
      children: <LanguageSwitcher />,
    },
    {
      to: "/journey",
      key: "myjourney",
      children: t("timeline"),
    },
    {
      to: "/articles",
      key: "articles",
      children: t("article"),
    },
    {
      to: "/narratives",
      key: "narratives",
      children: t("narratives"),
    },
  ];
  
  return LIST
  
}