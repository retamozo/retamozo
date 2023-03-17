import { ReactElement, ReactNode } from "react";

export type IconKind = "bigOffice" | "smallOffice" | "education" | "training";

export type CreateAnchor = (
  child: ReactNode,
  props?: Record<string, unknown>
) => ReactElement;

type EducationTags =
  | "design"
  | "programming"
  | "product"
  | "engineering"
  | "university";

type WorkTags = "corp" | "localCompany" | "fintech" | "start up";

type CursesType = "bootcamp" | "workshop" | "online course";

export type Tag = EducationTags | WorkTags | CursesType;

export type TimelineElementsProps = {
  id: number;
  tag: Tag;
  location: string;
  title: string;
  description: string;
  date: string;
  icon: ReactElement;
};
