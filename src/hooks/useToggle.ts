import { useState } from "react";

export function useToggle() {
  const [isToggle, setIsToggle] = useState(false);

  function handleToggle() {
    setIsToggle((pre) => !pre);
  }
  return { isToggle, handleToggle };
}
