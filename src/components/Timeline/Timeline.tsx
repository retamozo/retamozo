import React, { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { TimelieElements } from "@/data/timeline";
import Vertical from "./Vertical/Vertical";

type Align = "vertical" | "horizontal";
interface TimelineProps {
  /**
   * variants "distributed" | alignLeft | alignRight
   *
   *
   *
   */
  data: unknown[];
  dotItems: ReactNode[];
  align?: Align;
}

// TODO it could be less prop drilling  by composition
const Timeline: FunctionComponent<PropsWithChildren<TimelineProps>> = ({
  data,
  dotItems,
  align = "vertical",
}) => {
  const componentMap: Record<Align, JSX.Element> = {
    vertical: (
      <Vertical elements={data as TimelieElements[]} dotItems={dotItems} />
    ),
    horizontal: <p>horizontal</p>,
  };

  return componentMap[align];
};

export default Timeline;
