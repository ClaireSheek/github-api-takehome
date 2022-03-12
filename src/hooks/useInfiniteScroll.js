import { useState, useRef, useCallback, useEffect } from "react";

//This hook uses Intersection Observer API to create an "infinite scroll"

function useInfiniteScroll(customRoot) {
  const [page, setPage] = useState(1);
  const lastItem = useRef(null);

  const handleObserver = useCallback((entries) => {
    const [target] = entries;
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(
    (customRoot) => {
      const options = {
        root: customRoot || null,
        rootMargin: "0px",
        threshold: 1.0,
      };

      const observer = new IntersectionObserver(handleObserver, options);

      if (lastItem.current) observer.observe(lastItem.current);
    },
    [handleObserver, customRoot]
  );

  return { lastItem, page };
}

export default useInfiniteScroll;
