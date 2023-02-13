import React, { ReactNode } from "react";
import { Timeline } from "@/components/Timeline";
import { timelineData } from "@/data/timeline";
import { VerticalContainer } from "@/components/Timeline/Vertical";
import { TimelineItem } from "@/components/Timeline/TimelineItem";
import { TimelineDot } from "@/components/Timeline/TimelineDot";

const timelineItemsIcons = new Array<ReactNode>(timelineData.length).fill(
  <div className="absolute rounded-full bg-slate-300 w-7 h-7 left-[-10px]" />
);

const Journey = () => {
  return (
    <Timeline>
      <VerticalContainer
        elements={timelineData}
        renderItem={(data, i) => <TimelineItem {...data} elementIndex={i} />}
        renderTimelineDots={<TimelineDot dotItems={timelineItemsIcons} />}
      />
    </Timeline>
  );
};

export default Journey;
