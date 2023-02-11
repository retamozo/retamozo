import React, { FunctionComponent, PropsWithChildren } from "react";
import { Navbar, Footer } from "@/components";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
