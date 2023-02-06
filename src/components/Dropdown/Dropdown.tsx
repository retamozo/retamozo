import React, { PropsWithChildren, useState } from "react";
import { Fragment, FunctionComponent } from "react";
import { Menu, Switch, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ThemeSwitcher } from "../ThemeSwitcher";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Dropdown: FunctionComponent = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex items-center">
        menu
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
        <Menu.Items className="absolute flex-col right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none p-2">
          <Menu.Item as="div" className="flex justify-between text-right">
            <ThemeSwitcher />
          </Menu.Item>
          <Menu.Item as="div" className="text-right">
            <Menu.Item
              as="span"
              className="hover:cursor-pointer underline underline-offset-2"
            >
              about me
            </Menu.Item>
          </Menu.Item>
          <Menu.Item as="div" className="text-right">
            <Menu.Item
              as="span"
              className="hover:cursor-pointer underline underline-offset-2"
            >
              articles
            </Menu.Item>
          </Menu.Item>
          <Menu.Item as="div" className="text-right">
            <Menu.Item
              as="span"
              className="hover:cursor-pointer underline underline-offset-2"
            >
              social
            </Menu.Item>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
