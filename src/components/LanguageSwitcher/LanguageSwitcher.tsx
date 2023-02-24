import { useChangeLanguage } from "@/hooks/useChangeLanguage";
import { i18n } from "next-i18next";
import React, { FunctionComponent } from "react";

const LanguageSwitcher: FunctionComponent = () => {
  const { changeTranslation } = useChangeLanguage();

  const langClassName = (lang: string) =>
    i18n?.language === lang ? "underline underline-offset-4" : "";

  return (
    <div>
      <a
        className={langClassName("en-US")}
        href="#"
        onClick={() => changeTranslation("en-US")}
      >
        en
      </a>
      <span> / </span>
      <a
        className={langClassName("es-AR")}
        href="#"
        onClick={() => changeTranslation("es-AR")}
      >
        es
      </a>
    </div>
  );
};

export default LanguageSwitcher;
