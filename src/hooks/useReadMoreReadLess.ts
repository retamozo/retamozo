import { useCallback, useMemo, useState } from "react";

export type TUseReadMoreReadLess = (
  text: string,
  offset?: number
) => {
  shortenText: string;
  isBigText: boolean;
  isShowingMore: boolean;
  showLargeText: () => void;
};

export const useReadMoreReadLess: TUseReadMoreReadLess = (
  text,
  offset = 200
) => {
  const isBigText = text.length > offset;

  const [isShowingMore, setIsShowingMore] = useState(isBigText);

  const showLargeText = () => {
    setIsShowingMore((prev) => !prev);
  };

  const shortenText = useMemo(
    () =>
      isShowingMore && isBigText
        ? text.substring(0, offset).concat(" ...")
        : text,
    [isBigText, isShowingMore, offset, text]
  );

  return {
    shortenText,
    isBigText,
    isShowingMore,
    showLargeText,
  };
};
