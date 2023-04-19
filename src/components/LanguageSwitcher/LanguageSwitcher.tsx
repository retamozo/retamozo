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
    </div>
  );
};

export default LanguageSwitcher;
