import React, { FunctionComponent, ReactNode } from "react";
import verticalClasses from "./styles.module.css";
import { TimelieElements, timelineData } from "@/data/timeline";
import { cls } from "@/utils";
import { TimelineDot } from "../TimelineDot";
import { TimelineItem } from "../TimelineItem";

interface VerticalProps {
  elements: TimelieElements[];
  dotItems: ReactNode[];
}

const Vertical: FunctionComponent<VerticalProps> = ({ elements, dotItems }) => {
  return (
    <div
      role={"grid"}
      className={cls(
        verticalClasses.timelineContainer,
        "container mx-auto p-5 overflow-x-hidden"
      )}
      style={{
        gridTemplateRows: `repeat(${elements.length}, minmax(250px, auto))`,
      }}
    >
      <div
        className={cls(
          verticalClasses.progressBar,
          "relative row-span-full h-full"
        )}
      >
        <div className="h-full text-center m-auto">
          <div className="bg-slate-300 h-full rounded-t-xl w-2 m-auto relative grid">
            {!!elements.length && <TimelineDot dotItems={dotItems} />}
          </div>
        </div>
      </div>

      {timelineData.map((data, i) => (
        <TimelineItem data={data} index={i} key={data.id} />
      ))}
    </div>
  );
};

export default Vertical;
