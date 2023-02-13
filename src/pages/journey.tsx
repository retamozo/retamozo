import React, { ReactNode } from "react";
import { Timeline } from "@/components/Timeline";
import { timelineData } from "@/data/timeline";

const Journey = () => {
  const timelineItemsIcons = new Array<ReactNode>(timelineData.length).fill(
    <div className="absolute rounded-full bg-slate-300 w-7 h-7 left-[-10px]" />
  );

  return <Timeline data={timelineData} dotItems={timelineItemsIcons} />;
};

export default Journey;
