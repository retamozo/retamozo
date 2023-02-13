import React, { PropsWithChildren, ReactNode } from "react";
import verticalClasses from "./styles.module.css";
import { cls } from "@/utils";

interface VerticalProps<TElementsData> {
  elements: TElementsData[];
  renderItem: (item: TElementsData, elementIndex: number) => ReactNode;
  renderTimelineDots: ReactNode;
}

function Vertical<TElementsData>({
  elements,
  renderItem,
  renderTimelineDots,
}: VerticalProps<TElementsData>) {
  return (
    <div
      role="grid"
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
            {!!elements.length && renderTimelineDots && (
              <>{renderTimelineDots}</>
            )}
          </div>
        </div>
      </div>
      {elements.map((data, elementIndex) => renderItem(data, elementIndex))}
    </div>
  );
}

export default Vertical;
