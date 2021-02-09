import { useRef, useEffect } from "react";

//
// Stack overflow combine refs, seems like it's useless in this case
// but just keeping it to understand it abit better later
//
export const useCombinedRefs = (...refs) => {
  const targetRef = useRef();

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};
