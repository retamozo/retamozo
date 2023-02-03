import React from "react";
import Dropdown from "../Dropdown";

const Navbar = () => {
  return (
    <header className="container mx-auto p-5 bg-center m-auto h-14">
      <nav>
        <menu className="flex justify-between">
          <li>developedByEnzo</li>

          <li>
            <Dropdown />
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;
