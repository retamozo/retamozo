import { useRef, useEffect, useState, RefObject } from "react";

type IntersectionObserverArgs = Pick<
  IntersectionObserver,
  "root" | "rootMargin"
>;

type HookArgs = {
  freezeOnVisible: boolean;
  threshold: number[];
} & IntersectionObserverArgs;

export const useIntersectionObserver = (
  ref: RefObject<Element>,
  {
    root = null,
    rootMargin = "100%",
    threshold = [0],
    freezeOnVisible = false,
  }: Partial<HookArgs>
): IntersectionObserverEntry | undefined => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = ref?.current;

    if (node !== null && !freezeOnVisible) {
      const observer = new IntersectionObserver(updateEntry, {
        root,
        rootMargin,
        threshold,
      });

      observer.observe(node);
      return () => observer.disconnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, root, rootMargin, JSON.stringify(threshold)]);

  return entry;
};
