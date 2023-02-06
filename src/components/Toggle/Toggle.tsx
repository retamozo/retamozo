import React from "react";
import { Switch } from "@headlessui/react";
import { FunctionComponent, PropsWithChildren, useState } from "react";

export type ToggleComponentProps = {
  onThemeChange: () => void;
  theme: unknown;
};

export const Toggle: FunctionComponent<
  PropsWithChildren<ToggleComponentProps>
> = ({ onThemeChange, theme }) => {
  const [enabled, setEnabled] = useState(theme === "dark");
  const label = enabled ? "disable" : "enable";
  return (
    <Switch.Group>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={onThemeChange}
        className={`${
          enabled ? "bg-white" : "bg-gray-300"
        } relative inline-flex h-6 w-11 items-center rounded-full border-spacing-1`}
      >
        <span
          className={`${
            enabled ? "translate-x-6 bg-black" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white  transition`}
        />
      </Switch>
      <Switch.Label className="ml-2">{label} dark mode</Switch.Label>
    </Switch.Group>
  );
};
