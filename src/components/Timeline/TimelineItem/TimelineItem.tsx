import React, { FunctionComponent, PropsWithChildren, useRef } from "react";
import timelineItemClasses from "./styles.module.css";
import { useIntersectionObserver, useReadMoreReadLess } from "@/hooks";
import { cls } from "@/utils";
import { TimelineElementsProps } from "../types";

const TimelineItem: FunctionComponent<
  PropsWithChildren<TimelineElementsProps & { elementIndex: number }>
> = (props) => {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const { shortenText, isBigText, showLargeText, isShowingMore } =
    useReadMoreReadLess(props.description, 150);

  const entry = useIntersectionObserver(timelineRef, {});

  const { date, icon, id, location, tag, title, elementIndex } = props;

  const toggleTimelineItemVisibility = entry?.isIntersecting
    ? timelineItemClasses.show
    : timelineItemClasses.hidden;

  return (
    <>
      <section
        role={"contentinfo"}
        ref={timelineRef}
        key={id}
        className={cls(
          timelineItemClasses.container,
          toggleTimelineItemVisibility,
          "h-auto w-10/12 sm:w-90% snap-center shadow-md rounded-md p-5 m-auto dark:bg-zinc-900 flex flex-col justify-between"
        )}
        style={{
          gridRow: elementIndex + 1,
        }}
        tabIndex={elementIndex + 1}
      >
        <header>
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-medium max-w-[250px]">{title}</h3>
              <span className="text-sm">{date}</span>
            </div>
            <div>
              <figure>{icon}</figure>
            </div>
          </div>
        </header>
        <main className="py-4">
          {isBigText ? (
            <>
              <p>{shortenText}</p>
              <a
                role="button"
                aria-details="Read more description button"
                onClick={showLargeText}
                className="underline underline-offset-2"
              >
                {!isShowingMore ? "Read less" : "Read more"}
              </a>
            </>
          ) : (
            <p>{props.description}</p>
          )}
        </main>
        <footer>
          <div>
            <div>
              <span>📍 {location}</span>
            </div>
            <div className="TAGS AND CTA flex w-full justify-between">
              <div>
                {/* {!!tag.length &&
                  tag.map((t) => (
                    <span className="text-sm text-orange-400" key={t}>
                      #{t}{" "}
                    </span>
                  ))} */}
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default TimelineItem;
