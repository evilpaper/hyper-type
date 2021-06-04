import { createRef, useEffect } from "react";

export default function useOutsideClick(callback: () => void) {
  const ref = createRef();

  useEffect(() => {
    function clickListener(event: MouseEvent) {
      const { current } = ref;

      if (!current) return;

      const target = event.target;

      // const isInside = current.contains(target);
    }
    document.addEventListener("click", clickListener);
    return () => document.removeEventListener("click", clickListener);
  });
}
