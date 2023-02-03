import React, { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="relative w-screen h-screen flex flex-col justify-center items-center">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
