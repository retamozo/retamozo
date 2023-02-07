import React, { Fragment, ReactElement, ReactNode } from "react";
import Link from "next/link";
import {
  CommandLineIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Disclosure, Transition } from "@headlessui/react";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";

const LanguageSwitcher = () => <p>en/es</p>;

type NavBarItems = {
  to: string | undefined;
  children: ReactNode;
  key: string;
};

const LIST: NavBarItems[] = [
  {
    to: undefined,
    key: "theme",
    children: (
      <ThemeSwitcher
        render={({ setTheme, theme }) => {
          return (
            <>
              {theme === "dark" ? (
                <IconMoonFilled
                  className="mt-1"
                  onClick={() => setTheme("light")}
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
    to: undefined,
    key: "language",
    children: <LanguageSwitcher />,
  },
  {
    to: "/about",
    key: "aboutMe",
    children: "about me",
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

export const Navbar = () => {
  return (
    <Disclosure as="header" className="container mx-auto">
      {({ open }) => {
        const backdropFilter = open && "backdrop-filter backdrop-blur-2xl";
        return (
          <nav className={`p-5 text-2xl lg:text-3xl `}>
            <menu className="flex p-1 justify-between items-center ">
              <div className={`flex z-${open ? "5" : "10"}`}>
                <li>
                  <Link href={"/"} className="flex items-center">
                    <span className="items-center">
                      <code>{">"}</code>
                    </span>
                    <span className="animate-toggle-visibility">_</span>
                  </Link>
                </li>
              </div>
              <div className="hidden lg:w-1/2 lg:flex lg:justify-around items-center align-middle">
                {LIST.map(({ key, children, to }) => {
                  const child = <li className="mt-1">{children}</li>;
                  return (
                    <Fragment key={key}>
                      {to ? <Link href={to}>{child}</Link> : child}
                    </Fragment>
                  );
                })}
              </div>
              <div className="flex relative lg:hidden z-10 mt-2">
                <li>
                  <Disclosure.Button className="inline-flex justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </li>
              </div>
              <div
                className={`absolute top-0 left-0 h-full w-full p-5 lg:hidden ${backdropFilter}`}
              >
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel as="div" className="left-0">
                    {LIST.map(({ key, children, to }) => {
                      const child = <li className="my-2">{children}</li>;
                      return (
                        <Fragment key={key}>
                          {to ? <Link href={to}>{child}</Link> : child}
                        </Fragment>
                      );
                    })}
                  </Disclosure.Panel>
                </Transition>
              </div>
            </menu>
          </nav>
        );
      }}
    </Disclosure>
  );
};
