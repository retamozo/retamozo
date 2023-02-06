import React, { FunctionComponent, PropsWithChildren } from "react";
import { Navbar, Footer } from "@/components";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="relative h-screen flex flex-col justify-center items-center">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
