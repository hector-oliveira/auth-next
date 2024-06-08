import { useRef } from "react";

export function useInputSelected() {
  const inputSelectRef = useRef<HTMLInputElement | null>(null);

  function handleInputSelection() {
    setTimeout(() => {
      const input = inputSelectRef.current;
      if (input) {
        const len = input.value.length;
        input.focus();
        input.setSelectionRange(len, len);
      }
    }, 0);
  }
  return { inputSelectRef, handleInputSelection };
}
