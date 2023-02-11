import {
  AcademicCapIcon,
  BuildingOfficeIcon as SmallOfficeIcon,
  BuildingOffice2Icon as BigOfficeIcon,
  CommandLineIcon,
} from "@heroicons/react/20/solid";
import React, { createElement, ReactElement, ReactNode } from "react";

type IconKind = "bigOffice" | "smallOffice" | "education" | "training";

type EducationTags =
  | "design"
  | "programming"
  | "product"
  | "engineering"
  | "university";

type WorkTags = "corp" | "localCompany" | "fintech" | "start up";

type CursesType = "bootcamp" | "workshop" | "online course";

type Tag = EducationTags | WorkTags | CursesType;

const iconClass = "h-8 w-8";
const className = { className: iconClass };

const iconMap: Record<IconKind, ReactElement> = {
  bigOffice: <BigOfficeIcon {...className} />,
  education: <AcademicCapIcon {...className} />,
  smallOffice: <SmallOfficeIcon {...className} />,
  training: <CommandLineIcon {...className} />,
};

type TimelieElements = {
  id: number;
  tag: Tag[];
  location: string;
  title: ReactNode;
  description: string;
  date: string;
  icon: ReactElement;
  hasMoreInfo?: boolean;
};

type CreateAnchor = (
  child: ReactNode,
  props?: Record<string, unknown>
) => ReactElement;

const base = {
  target: "_blank",
  referrerPolicy: "no-referrer",
  rel: "noreferrer",
};

const LINKS = {
  acamica: "https://www.acamica.com/",
  oracle: "https://www.oracle.com/ar/cloud/oracle-at-oracle/cx/",
};
const createAnchor: CreateAnchor = (child, props = {}) => {
  return createElement("a", { ...base, ...props }, child);
};

export const timelineData: TimelieElements[] = [
  {
    id: 1,
    tag: ["university", "design"],
    title: "Da Vinci, Art School",
    description: "Degree in Multimedia Art, not finished.",
    date: "March, 2015",
    icon: iconMap["education"],
    location: "Buenos Aires, Argentina 🇦🇷",
    hasMoreInfo: true,
  },
  {
    id: 2,
    tag: ["bootcamp", "programming"],
    title: (
      <>
        Full Stack bootcamp at{" "}
        {createAnchor("Acamica", { href: LINKS.acamica })}
      </>
    ),
    date: "March, 2018",
    description: "description",
    icon: iconMap["training"],
    location: "Buenos Aires, Argentina 🇦🇷",
  },
  {
    id: 3,
    tag: ["corp", "engineering"],
    title: (
      <>
        Frontend Developer, CX Consultant at{" "}
        {createAnchor("Oracle", {
          href: LINKS.oracle,
        })}
      </>
    ),
    date: "October 2018",
    description: "First approach in the IT industry",
    icon: iconMap["bigOffice"],
    location: "Buenos Aires, Argentina 🇦🇷",
    hasMoreInfo: true,
  },
  {
    id: 4,
    tag: ["localCompany", "engineering"],
    date: "October 2019",
    title: "Frontend Developer",
    description: "Joined the ecommerce world ",
    icon: iconMap["smallOffice"],
    location: "Buenos Aires, Argentina 🇦🇷",
  },
  {
    id: 5,
    tag: ["fintech", "start up"],
    date: "October 2019",
    title: "Frontend Developer | Team Lead",
    description: "One of my most meaningful experiences",
    icon: iconMap["bigOffice"],
    location: "Remote",
    hasMoreInfo: true,
  },
];
