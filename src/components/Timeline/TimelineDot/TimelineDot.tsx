import React, {
  cloneElement,
  createElement,
  FunctionComponent,
  isValidElement,
  ReactNode,
  useCallback,
} from "react";

interface TTimelineDot<TDot> {
  dotItems: ReactNode[];
  onClick?: () => ReactNode;
}

function TimelineDot<TDotElement>({
  dotItems,
  onClick,
}: TTimelineDot<TDotElement>) {
  const onItemClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return (
    <>
      {dotItems.map((el, i) => {
        return (
          <div
            key={i}
            className="flex flex-col justify-center"
            onClick={onItemClick}
          >
            {el}
          </div>
        );
      })}
    </>
  );
}

export default TimelineDot;
// (
//   <>
//     {dotItems.map((el, i) => {
//       return (
//         <div key={i} className="flex flex-col justify-center">
//           {el}
//         </div>
//       );
//     })}
//   </>
// );
