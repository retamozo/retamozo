import React, {
  Children,
  FunctionComponent,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";
import { TimelieElements } from "@/data/timeline";
import { VerticalContainer } from "./Vertical";
import { HorizontalContainer } from "./Horizontal";

const validChildrenTypes = [VerticalContainer, HorizontalContainer];

/**
 * variants "distributed" | alignLeft | alignRight
 *
 *
 *
 */

interface TimelineProps {
  children: JSX.Element;
}

// TODO it could be less prop drilling  by composition
const Timeline: FunctionComponent<PropsWithChildren<TimelineProps>> = ({
  children,
}) => {
  // stufff with context. Further implementation
  const isValidChildren = validChildrenTypes.includes(children?.type);

  if (!children || !isValidChildren) {
    throw new Error(
      "You must provide either Vertical or Horizontal wrapper component provided by the API"
    );
  }

  return Children.only(children);
};

export default Timeline;
