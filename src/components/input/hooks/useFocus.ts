import { useState } from "react";

export function useFocus() {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }
  return { isFocused, handleFocus, handleBlur };
}
