import { MutableRefObject, useEffect, useMemo, useState } from "react";
import isServer from "./isServer";

const useIntersectionObserver = (ref: MutableRefObject<any>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  if (isServer()) return;

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export default useIntersectionObserver;