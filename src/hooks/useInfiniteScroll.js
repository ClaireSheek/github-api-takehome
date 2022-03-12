import { useState, useRef, useCallback, useEffect } from "react";

//This hook uses Intersection Observer API to create an "infinite scroll"

function useInfiniteScroll(customRoot, dataArray) {
  const [page, setPage] = useState(1);
  const [prevArrayLength, setLength] = useState(0);
  const lastItem = useRef(null);

  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting) {
        // Quick fix to keep it from endlessly increasing the page count if there's no new data to pull
        // Wouldn't be necessisary if I updated the use-repos file to include totalPages from the API - future update
        if (dataArray && dataArray.length > prevArrayLength) {
          setPage((prev) => (prev += 1));
          setLength(dataArray.length);
        }
      }
    },
    [dataArray, prevArrayLength]
  );

  useEffect(
    (customRoot) => {
      const options = {
        root: customRoot || null,
        rootMargin: "0px",
        threshold: 1.0,
      };

      const observer = new IntersectionObserver(handleObserver, options);
      const target = lastItem.current;

      if (lastItem.current) observer.observe(lastItem.current);
      return () => {
        observer.disconnect(target);
      };
    },
    [handleObserver, customRoot, dataArray]
  );

  return { lastItem, page };
}

export default useInfiniteScroll;
