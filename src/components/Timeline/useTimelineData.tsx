import { useTranslation } from "next-i18next";
import { iconMap } from "./const";
import { Tag, TimelineElementsProps } from "./types";

export const useTimelineData = (): {
  timelineData: TimelineElementsProps[];
} => {
  const { t } = useTranslation("timeline");

  const getTags = (target: string) =>
    t(target, {
      defaultValue: "saraza",
      returnObjects: true,
    }) as Tag;

  const timelineData: TimelineElementsProps[] = [
    {
      id: 1,
      tag: getTags("davinci.tags"),
      title: t("davinci.title"),
      description: t("davinci.description"),
      date: "March, 2015",
      icon: iconMap["education"],
      location: "Buenos Aires, Argentina 🇦🇷",
    },
    {
      id: 2,
      tag: getTags("acamica.tags"),
      title: t("acamica.title"),
      date: "March, 2018",
      description: t("acamica.description"),
      icon: iconMap["training"],
      location: "Buenos Aires, Argentina 🇦🇷",
    },
    {
      id: 3,
      tag: getTags("oracle.tags"),
      title: t("oracle.title"),
      date: "October 2018",
      description: t("oracle.description"),
      icon: iconMap["bigOffice"],
      location: "Buenos Aires, Argentina 🇦🇷",
    },
    {
      id: 4,
      tag: getTags("fizzmod.tags"),
      date: "October 2019",
      title: t("fizzmod.title"),
      description: t("fizzmod.description"),
      icon: iconMap["smallOffice"],
      location: "Buenos Aires, Argentina 🇦🇷",
    },
    {
      id: 5,
      tag: getTags("blockfi.tags"),
      date: "October 2019",
      title: t("blockfi.title"),
      description: t("blockfi.description"),
      icon: iconMap["bigOffice"],
      location: "Remote",
    },
    {
      id: 6,
      tag: getTags("coderio.tags"),
      date: "February 2023",
      title: t("coderio.title"),
      description: t("coderio.description"),
      icon: iconMap["bigOffice"],
      location: "Remote",
    },
  ];

  return { timelineData };
};
