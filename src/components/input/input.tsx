"use client";
import { renderPasswordIcons } from "functions/renderPasswordIcons";
import { useInputSelected, useToggle } from "hooks";
import { InputProps } from "interfaces/ElementsHTML";
import { useVisibility } from "./hooks-input";

export function Input({ handleIcon, ...rest }: InputProps) {
  const { handleToggle, isToggle } = useToggle();
  const { inputSelectRef, handleInputSelection } = useInputSelected();
  const handleVisibility = useVisibility({
    handleToggle,
    handleInputSelection,
  });

  const displayedInputType =
    rest.type === "password" && isToggle ? "text" : rest.type;

  return (
    <section className="border border-black py-2 px-2 gap-1 flex items-center bg-slate-200 rounded-md">
      {handleIcon && handleIcon()}
      <input
        {...rest}
        ref={inputSelectRef}
        type={displayedInputType}
        className="w-full border-none outline-none bg-transparent hover:ease-in-out hover:duration-300"
      />
      {rest.type === "password" && (
        <button type="button" onClick={handleVisibility}>
          {renderPasswordIcons(isToggle)}
        </button>
      )}
    </section>
  );
}
