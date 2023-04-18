import { useChangeLanguage } from "@/hooks/useChangeLanguage";
import { Langs } from "@/lang";
import { cls } from "@/utils";
import React, { FunctionComponent } from "react";

const LanguageSwitcher: FunctionComponent = () => {
  const { changeTranslation, lngs, current } = useChangeLanguage();

  return (
    <div>
      {Object.keys(lngs).map((lng) => {
        const underline = lng === current ? "underline underline-offset-4" : "";
        return (
          <a
            role={"button"}
            key={lng}
            className={cls("mr-2", underline)}
            onClick={() => changeTranslation(lng)}
          >
            {lngs[lng as Langs].label}
          </a>
        );
      })}
      {/* <a
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
      </a> */}
    </div>
  );
};

export default LanguageSwitcher;
