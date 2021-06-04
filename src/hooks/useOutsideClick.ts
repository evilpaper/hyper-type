import { createRef, useEffect } from "react";

export default function useOutsideClick<T extends HTMLElement>(
  callback: () => void
) {
  const ref = createRef<T>();

  useEffect(() => {
    function clickListener(event: MouseEvent) {
      const { current } = ref;
      if (!current) return;
      const target = event.target as Node;
      const isInside = current.contains(target);
      if (isInside) {
        return;
      }
      callback();
    }

    document.addEventListener("click", clickListener);
    return () => document.removeEventListener("click", clickListener);
  });

  return ref;
}
