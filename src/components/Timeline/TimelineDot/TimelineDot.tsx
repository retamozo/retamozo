import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  dotItems: ReactNode[];
}

const TimelineDot: FunctionComponent<Props> = ({ dotItems }) => {
  return (
    <>
      {dotItems.map((el, i) => {
        return (
          <div key={i} className="flex flex-col justify-center">
            {el}
          </div>
        );
      })}
    </>
  );
};

export default TimelineDot;
