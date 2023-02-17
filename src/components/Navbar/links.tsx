import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
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

export const LIST: NavBarItems[] = [
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
    children: "journey",
  },
  {
    to: "/articles",
    key: "articles",
    children: "articles",
  },
  {
    to: "/narratives",
    key: "narratives",
    children: "narratives",
  },
];
