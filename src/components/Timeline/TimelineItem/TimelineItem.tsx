import React, { FunctionComponent, useRef } from "react";
import timelineItemClasses from "./styles.module.css";
import { TimelieElements } from "@/data/timeline";
import { useIntersectionObserver } from "@/hooks";
import { LinkIcon } from "@heroicons/react/20/solid";
import { cls } from "@/utils";

const TimelineItem: FunctionComponent<{
  data: TimelieElements;
  index: number;
}> = (props) => {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const {
    data: { date, description, icon, id, location, tag, title, hasMoreInfo },
    index,
  } = props;

  const entry = useIntersectionObserver(timelineRef, {});

  const toggleVisibility = entry?.isIntersecting
    ? timelineItemClasses.show
    : timelineItemClasses.hidden;

  return (
    <section
      role={"contentinfo"}
      ref={timelineRef}
      key={id}
      className={cls(
        timelineItemClasses.container,
        toggleVisibility,
        "h-auto w-10/12 lg:h-5/6 sm:w-90% snap-center shadow-md rounded-md p-5 m-auto dark:bg-zinc-900 flex flex-col justify-between"
      )}
      style={{
        // not sure how to do this with css.
        gridRow: index + 1,
      }}
      tabIndex={index + 1}
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
      <main>
        <p>{description}</p>
      </main>
      <footer>
        <div>
          <div>
            <span>📍 {location}</span>
          </div>
          <div className="TAGS AND CTA flex w-full justify-between">
            <div>
              {tag.map((t) => (
                <span className="text-sm text-orange-400" key={t}>
                  #{t}{" "}
                </span>
              ))}
            </div>
            <div className="flex h-auto">
              {hasMoreInfo && (
                <>
                  <button onClick={() => {}}>more info </button>
                  <LinkIcon className="flex w-[1.2rem] h-[1.2rem] mt-1 ml-1" />
                </>
              )}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default TimelineItem;
