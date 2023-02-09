import React from "react";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandGmail,
} from "@tabler/icons-react";

const LINKS = [
  {
    href: "https://www.linkedin.com/in/enzoretamozo/",
    element: <IconBrandLinkedin />,
    key: "linkedin",
  },
  {
    href: "https://www.github.com/retamozo",
    element: <IconBrandGithub />,
    key: "github",
  },
  {
    href: "mailto:eretamozo97@gmail.com?subject=Let's connect&body=Hey Enzo",
    element: <IconBrandGmail />,
    key: "email",
  },
];

export const Footer = () => {
  return (
    <footer className="mt-20 bg-neutrals-100 text-sm h-14">
      <article className="flex flex-col text-center p-2">
        <div className="text-5xl flex justify-center gap-3 mb-3">
          {LINKS.map(({ element, href, key }) => {
            return (
              <a
                href={href}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
                key={key}
              >
                {element}
              </a>
            );
          })}
        </div>
        <p>Talk less. Do more @ {new Date().getFullYear()}</p>
      </article>
    </footer>
  );
};
