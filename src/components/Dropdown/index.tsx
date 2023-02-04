import React, { PropsWithChildren, useState } from "react";
import { Fragment, FunctionComponent } from "react";
import { Menu, Switch, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ThemeSwitcher from "../ThemeSwitcher";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type ChildComponentArgs = {
  mounted: boolean;
  onThemeChange: () => void;
  theme: unknown;
};

export const Toggle: FunctionComponent<
  PropsWithChildren<ChildComponentArgs>
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

const Dropdown: FunctionComponent = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex items-center">
        theme
        <Menu.Button className="items-center">
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none p-2">
          <Menu.Item>
            <ThemeSwitcher>
              <div>
                <Toggle />
              </div>
            </ThemeSwitcher>
          </Menu.Item>
          <Menu.Item>
            <p>Curriculum</p>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
