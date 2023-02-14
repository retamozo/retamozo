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

export type TimelieElements = {
  id: number;
  tag: Tag[];
  location: string;
  title: ReactNode;
  description: string;
  date: string;
  icon: ReactElement;
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
    description: `Here's where everything started.
    I remember to have created my first static pages with HTML and CSS during web design classes.
    These subjects such as UI Design and Web Programming caught my attention completely and I felt like 'ok, definitely I need to know more'.
    `,
    date: "March, 2015",
    icon: iconMap["education"],
    location: "Buenos Aires, Argentina 🇦🇷",
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
    description: `My first proffesional approach to web programming and the community from Argentina.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima tenetur corrupti officia quasi, eligendi facere molestiae ratione. Sed, id consequatur? Architecto quod quibusdam ab? Enim minima culpa perferendis quasi asperiores.

      `,
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
    description: `Met incredible and talented people I could learn from.
    Definitely a thing you can label as 'start with the right foot'.
    As a CX Oracle consultant, my first and foremost ç
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aspernatur nostrum voluptatum,
    harum ratione nihil culpa natus ipsam iure modi sapiente incidunt delectus nobis aut ex,
    tempore debitis maxime aliquid.`,
    icon: iconMap["bigOffice"],
    location: "Buenos Aires, Argentina 🇦🇷",
  },
  {
    id: 4,
    tag: ["localCompany", "engineering"],
    date: "October 2019",
    title: "Frontend Developer, Fizzmod",
    description: "Joined the ecommerce world ",
    icon: iconMap["smallOffice"],
    location: "Buenos Aires, Argentina 🇦🇷",
  },
  {
    id: 5,
    tag: ["fintech", "start up"],
    date: "October 2019",
    title: "Frontend Developer / Team Lead, Blockfi",
    description: "One of my most meaningful experiences",
    icon: iconMap["bigOffice"],
    location: "Remote",
  },
];
