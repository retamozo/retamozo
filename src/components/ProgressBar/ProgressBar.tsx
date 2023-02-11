import React, { FunctionComponent, useMemo } from "react";

type Align = "vertical" | "horizontal";
type Size = "sm" | "default" | "lg" | "xl";
interface ProgressBarProps {
  align: Align;
  done: number;
  size: Size;
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({
  align = "vertical",
  done = 50,
  size,
}) => {
  const styleMap = {
    horizontal: {
      container: "flex w-full bg-slate-300  rounded-full h-1.5 ",
      progress: "animate-grow-x bg-slate-600 h-1.5 rounded-full origin'left",
      progressCss: {
        width: `${done}%`,
      },
    },
    vertical: {
      container:
        "absolute min-h-full w-4 m-auto bg-slate-300 rounded-full left-0 right-0",
      progress:
        "animate-grow-y absolute bg-slate-600 w-4 rounded-full origin-top",
      progressCss: {
        height: `${done}%`,
        widht: "15px",
      },
    },
  };

  return (
    <div className="relative min-h-[450px] overflow-y-scroll">
      <div className={`${styleMap[align].container}`}>
        <div
          className={styleMap[align].progress}
          style={styleMap[align].progressCss}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
