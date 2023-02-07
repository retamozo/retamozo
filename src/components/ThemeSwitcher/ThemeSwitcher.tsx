import React, {
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { useTheme } from "next-themes";

type ThemeSwitcherRenderArgs = {
  setTheme: (theme: string) => void;
  theme: string | undefined;
};

export const ThemeSwitcher: FunctionComponent<
  PropsWithChildren<{ render: (args: ThemeSwitcherRenderArgs) => ReactElement }>
> = ({ render }) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return render({
    ...{ setTheme, theme },
  });
};
