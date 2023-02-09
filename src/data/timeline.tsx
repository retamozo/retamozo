import {
    AcademicCapIcon,
    BuildingOfficeIcon as SmallOfficeIcon,
    BuildingOffice2Icon as BigOfficeIcon,
    CommandLineIcon,
} from "@heroicons/react/20/solid";
import { ReactElement } from "react";

type IconKind = "bigOffice" | "smallOffice" | "education" | "training";

type EducationTags =
    | "design"
    | "programming"
    | "product"
    | "engineering"
    | "university";

type WorkTags = "corp" | "local company" | "fintech" | "start up";

type CursesType = "bootcamp" | "workshop" | "online course";

type Tag = EducationTags | WorkTags | CursesType;

const iconMap: Record<IconKind, ReactElement> = {
    bigOffice: <BigOfficeIcon />,
    education: <AcademicCapIcon />,
    smallOffice: <SmallOfficeIcon />,
    training: <CommandLineIcon />,
};

type TimelieElements = {
    id: number;
    tag: Tag[];
    location: string;
    title: string;
    description: string;
    date: string;
    icon: ReactElement;
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
    },
    {
        id: 2,
        tag: ["bootcamp", "programming"],
        title: "Full Stack bootcamp, Acamica",
        date: "March, 2018",
        description: "description",
        icon: iconMap["training"],
        location: "Buenos Aires, Argentina 🇦🇷",
    },
    {
        id: 3,
        tag: ["corp", "engineering"],
        title: "Frontend Developer, CX Consultant at Oracle",
        date: "October 2018",
        description: "First approach in the IT industry",
        icon: iconMap["bigOffice"],
        location: "Buenos Aires, Argentina 🇦🇷",
    },
    {
        id: 4,
        tag: ["local company", "engineering"],
        date: "October 2019",
        title: "Frontend Developer",
        description: "Joined the ecommerce world ",
        icon: iconMap["smallOffice"],
        location: "Buenos Aires, Argentina 🇦🇷"
    },
    {
        id: 5,
        tag: ["fintech", "start up"],
        date: "October 2019",
        title: "Frontend Developer | Team Lead",
        description: "One of my most meaningful experiences",
        icon: iconMap["bigOffice"],
        location: "Remote 📍🌐"
    }
];
