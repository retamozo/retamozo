import React from "react";
import Dropdown from "../Dropdown";
import { CommandLineIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="container mx-auto p-5 bg-center m-auto h-14">
      <nav>
        <menu className="flex justify-between items-center">
          <Link href={"/"}>
            <li className="flex items-center">
              <CommandLineIcon
                width={"1rem"}
                height={"2rem"}
                className="mr-1"
              />
              <span>developedbyenzo</span>
              <span className="animate-toggle-visibility">_</span>
            </li>
          </Link>
          <li>
            <Dropdown />
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;
