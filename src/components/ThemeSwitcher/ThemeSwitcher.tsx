import React, { FunctionComponent, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { Toggle } from "../Toggle";

export const ThemeSwitcher: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const onThemeChange = () => {
    console.log("entre");
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return <Toggle onThemeChange={onThemeChange} theme={theme} />;
};
