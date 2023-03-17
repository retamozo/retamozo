import { createElement, ReactElement } from "react";
import { CreateAnchor, IconKind } from "./types";
import {
  AcademicCapIcon,
  BuildingOfficeIcon as SmallOfficeIcon,
  BuildingOffice2Icon as BigOfficeIcon,
  CommandLineIcon,
} from "@heroicons/react/20/solid";

const className = { className: "h-8 w-8" };

export const iconMap: Record<IconKind, ReactElement> = {
  bigOffice: <BigOfficeIcon {...className} />,
  education: <AcademicCapIcon {...className} />,
  smallOffice: <SmallOfficeIcon {...className} />,
  training: <CommandLineIcon {...className} />,
};

const base = {
  target: "_blank",
  referrerPolicy: "no-referrer",
  rel: "noreferrer",
};

export const LINKS = {
  acamica: "https://www.acamica.com/",
  oracle: "https://www.oracle.com/ar/cloud/oracle-at-oracle/cx/",
};

export const createAnchor: CreateAnchor = (child, props = {}) => {
  return createElement("a", { ...base, ...props }, child);
};
