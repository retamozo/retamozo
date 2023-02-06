import React from "react";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandGmail,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="bg-neutrals-100 text-sm h-14">
      <article className="flex flex-col text-center p-2">
        <div className="text-5xl flex justify-center gap-3 mb-3">
          <IconBrandLinkedin />
          <IconBrandGithub />
          <IconBrandGmail />
        </div>
        <p>
          Made with ♥ by{" "}
          <a
            href="https://github.com/retamozo/avocado-marketplace"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            Enzo Retamozo
          </a>
        </p>
      </article>
    </footer>
  );
};
