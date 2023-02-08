import React, { FunctionComponent, PropsWithChildren } from "react";
import { Navbar, Footer } from "@/components";
import { motion, Variants } from "framer-motion";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
