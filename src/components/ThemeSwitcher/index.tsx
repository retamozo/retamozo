import { useTheme } from "next-themes";
import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

type ChildComponentArgs = {
  mounted: boolean;
  onThemeChange: () => void;
  theme: unknown;
};

const ThemeSwitcher = ({ children }: PropsWithChildren<ChildComponentArgs>) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const onThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return React.Children.map(children, (child) => {
    if (React.isValidElement<ChildComponentArgs>(child)) {
      return React.cloneElement<ChildComponentArgs>(child, {
        mounted,
        onThemeChange,
        theme,
      });
    }
    return child;
  });
};

export default ThemeSwitcher;
