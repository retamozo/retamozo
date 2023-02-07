import React from "react";
import Image from "next/image";
import Enzito from "public/profile_2.jpeg";

export const Hero = () => {
  return (
    <Image
      src={Enzito}
      alt="Handsome guy"
      aria-label="prfile image"
      className="rounded-full w-80 h-80 mx-auto overflow-hidden"
      style={{
        objectFit: "cover",
      }}
    />
  );
};
