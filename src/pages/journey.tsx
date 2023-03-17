import React, { ReactNode } from "react";
import { Timeline, useTimelineData } from "@/components/Timeline";
import { VerticalContainer } from "@/components/Timeline/Vertical";
import { TimelineItem } from "@/components/Timeline/TimelineItem";
import { TimelineDot } from "@/components/Timeline/TimelineDot";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Journey = () => {
  const { timelineData } = useTimelineData();
  const timelineItemsIcons = new Array<ReactNode>(timelineData.length).fill(
    <div className="absolute rounded-full bg-slate-300 w-7 h-7 left-[-10px]" />
  );

  return (
    <Timeline>
      <VerticalContainer
        elements={timelineData}
        renderItem={(data, i) => (
          <TimelineItem {...data} elementIndex={i} key={data.id} />
        )}
        renderTimelineDots={<TimelineDot dotItems={timelineItemsIcons} />}
      />
    </Timeline>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const props = await serverSideTranslations(locale!, [
    "footer",
    "timeline",
    "navbar",
  ]);

  return {
    props,
  };
};
export default Journey;
