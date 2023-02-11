import { timelineData } from "@/data/timeline";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { ProgressBar } from "../ProgressBar";
import { LinkIcon, ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import _classes from "./styles.module.css";

const isOdd = (n: number) => n % 2 === 0;
const classes = {
  section:
    "flex-col w-full snap-center max-h-[300px] relative shadow-md rounded-md p-5 mb-5 bg-zinc-900",
};

interface TimelineProps<Data> {
  /**
   * variants "distributed" | alignLeft | alignRight
   *
   *
   *
   */
  data: Data[];
}
const Timeline: FunctionComponent<PropsWithChildren<TimelineProps>> = ({
  data,
}) => {
  const rows = timelineData.length;
  const timelineClickableItems = timelineData.map(({ icon }) => icon);
  const timelineItems = timelineClickableItems.length;
  return (
    <>
      <div className="snap-center">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "40% 10% 40%",
            gridTemplateRows: `repeat(${rows}, minmax(100px, auto))`,
            gap: "10px",
            overflowY: "scroll",
            maxHeight: "30rem",
            overscrollBehaviorY: "contain",
            scrollSnapType: "y proximity",
          }}
        >
          <div className="relative row-span-full h-full">
            <div className="h-full text-center m-auto">
              <div
                className="bg-slate-300 h-full rounded-xl w-1/4 m-auto"
                style={{
                  display: "grid",
                  gridTemplateColumns: "subgrid",
                }}
              >
                {/* <TimelineItems items={items}/> */}
                {timelineClickableItems.map((t, i) => {
                  return (
                    <div key={i} className="flex flex-col justify-center">
                      <figure>{t}</figure>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {timelineData.map(
            (
              {
                date,
                description,
                icon,
                id,
                location,
                tag,
                title,
                hasMoreInfo,
              },
              i
            ) => {
              return (
                <section
                  key={id}
                  className={classes.section + ""}
                  style={{
                    gridColumn: `${isOdd(i) ? "1" : "3"}`,
                    gridRow: i + 1,
                  }}
                >
                  <header>
                    <div className="flex justify-between ">
                      <div>
                        <h3 className="text-lg font-medium  max-w-[250px]">
                          {title}
                        </h3>
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
                      <div className="LOCATION">
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
            }
          )}
        </div>
      </div>

      {/* <div className="grid grid-cols-3 overflow-y-scroll h-[30rem] overscroll-y-contain snap-y mx-5 ">


        {timelineData.map(
          ({
            date,
            description,
            icon,
            id,
            location,
            tag,
            title,
            hasMoreInfo,
          }) => {
            return (
              <section key={id} className={classes.section + ""}>
                <header>
                  <div className="flex justify-between ">
                    <div>
                      <h3 className="text-lg font-medium  max-w-[250px]">
                        {title}
                      </h3>
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
                    <div className="LOCATION">
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
          }
        )}
      </div> */}
    </>
  );
};

const TimelineItems: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div></div>;
};
export default Timeline;
