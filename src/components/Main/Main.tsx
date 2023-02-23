import { useTranslation } from "next-i18next";
import React from "react";

const Main = () => {
  const { t } = useTranslation("main");
  return (
    <section className="text-center px-10">
      <h2 className="text-3xl md:text-5xl py-2 font-medium">Enzo Retamozo</h2>
      <h3 className="text-2xl py-2">{t("description")}</h3>
      <p className="text-md leading-8 text-gray-800"></p>
    </section>
  );
};

export default Main;
