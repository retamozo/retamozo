import React, { FunctionComponent } from "react";

type Align = "vertical" | "horizontal";
interface ProgressBarProps {
  align: Align;
  done: number;
}
const ProgressBar: FunctionComponent<Partial<ProgressBarProps>> = ({
  align = "horizontal",
  done = 30,
}) => {
  const containerClass: Record<Align, string> = {
    horizontal: "w-full min-w-full h-3",
    vertical: `h-full min-h-[500px]`,
  };

  const doneClass: Record<Align, string> = {
    horizontal: `w-[${done}%] h-3`,
    vertical: `h-[${done}%]`,
  };

  return (
    <div className="flex justify-center container mx-auto px-4 min-h-full min-w-full">
      <div className={`bg-slate-200 rounded-xl h- ${containerClass[align]}`}>
        <div className={`bg-slate-700 rounded-xl ${doneClass[align]}`} />
      </div>
    </div>
  );
};

export default ProgressBar;
