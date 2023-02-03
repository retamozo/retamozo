import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const onThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <a onClick={onThemeChange}>
      {theme === "light" ? <IconMoonFilled /> : <IconSunFilled />}
    </a>
  ) : null;
};

export default ThemeSwitcher;
