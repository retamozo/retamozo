import React from "react";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandGmail,
} from "@tabler/icons-react";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation('footer')
  return (
    <footer className="flex h-full w-full justify-center items-center bg-neutrals-100 text-sm">
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
        <p>{t("label")} © {new Date().getFullYear()}</p>
      </article>
    </footer>
  );
};
