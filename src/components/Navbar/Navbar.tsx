import React, { Fragment, FunctionComponent, PropsWithChildren } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Disclosure, Transition } from "@headlessui/react";
import { navbarItems } from "./links";
import { useRouter } from "next/router";

export const Navbar = () => {
  const { route } = useRouter();

  const currentPath = (to: string) =>
    to === route ? "underline  underline-offset-4" : "";

  return (
    <Disclosure
      as="header"
      className="h-20 container mx-auto overscroll-contain"
    >
      {({ open }) => {
        return (
          <nav className="p-5 text-2xl lg:text-3xl h-full">
            <menu className="flex p-1 justify-between items-center ">
              <div className="flex z-10">
                <li>
                  <Link href={"/"} className="flex items-center">
                    <span className="items-center">
                      <code>{">"}</code>
                    </span>
                    <span className="animate-toggle-visibility">_</span>
                  </Link>
                </li>
              </div>
              <div className="hidden lg:flex lg:justify-around items-center align-middle">
                {navbarItems.map(({ key, children, to }) => {
                  return (
                    <div className="px-2" key={key}>
                      {to ? (
                        <li className={currentPath(to)}>
                          <Link
                            href={to}
                            className="hover:underline underline-offset-4 mt-1"
                          >
                            {children}
                          </Link>
                        </li>
                      ) : (
                        <li>{children}</li>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex relative lg:hidden z-20 mt-2">
                <li>
                  <Disclosure.Button className="inline-flex justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MobileIcon open={open} />
                  </Disclosure.Button>
                </li>
              </div>
              <div className="ui-not-open:hidden absolute top-0 left-0 h-full w-full p-5 lg:hidden z-0 ui-open:z-10 ui-open:backdrop-filter ui-open:backdrop-blur-2xl">
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel as="div" className="left-0">
                    {navbarItems.map(({ key, children, to }) => {
                      const child = (
                        <li className={`my-2 ${currentPath(to || "")}`}>
                          {children}
                        </li>
                      );
                      return (
                        <Fragment key={key}>
                          {to ? (
                            <Disclosure.Button as={Link} href={to}>
                              {child}
                            </Disclosure.Button>
                          ) : (
                            child
                          )}
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

const MobileIcon: FunctionComponent<PropsWithChildren<{ open: boolean }>> = ({
  open,
}) => {
  return open ? (
    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
  ) : (
    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
  );
};
