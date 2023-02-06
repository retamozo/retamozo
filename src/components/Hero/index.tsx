import Image from "next/image";
import React from "react";
import Enzito from "public/profile.jpeg";

const Hero = () => {
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

export default Hero;
