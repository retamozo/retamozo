import React, { FunctionComponent, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { createPortal } from "react-dom";

type OverlayProps = {
  isPreviewing: boolean;
  isToggled: boolean;
};

const Overlay = ({ isToggled, isPreviewing }: OverlayProps) => {
  const overlay = document.querySelector("#overlay");

  if (!overlay) return null;

  return createPortal(
    <div
      className={`fixed backdrop-invert h-full skew-x-[30deg] -left-1/2 top-0 pointer-events-none transition-all duration-500 ${
        isPreviewing ? "w-full" : isToggled ? "w-[200%]" : "w-0"
      }`}
    />,
    overlay as HTMLElement
  );
};

export const ThemeSwitcher: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [{ isToggled, isPreviewing, isInteractive }, setState] = useState({
    isToggled: false,
    isPreviewing: false,
    isInteractive: true,
  });

  const onThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const icon = <>{isToggled ? <IconMoonFilled /> : <IconSunFilled />} </>;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <a
        role="button"
        onClick={() => {
          setState(({ isToggled }) => ({
            isPreviewing: false,
            isToggled: !isToggled,
            isInteractive: false,
          }));
        }}
        onMouseEnter={() => {
          if (!isInteractive) return;
          setState((state) => ({
            ...state,
            isPreviewing: true,
            isInteractive: true,
          }));
        }}
        onMouseLeave={() => {
          setState((state) => ({
            ...state,
            isPreviewing: false,
            isInteractive: true,
          }));
        }}
      >
        {icon}
      </a>
      <Overlay isPreviewing={isPreviewing} isToggled={isToggled} />
    </>
  );
};
