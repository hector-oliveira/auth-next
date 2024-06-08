"use client";
import { iconDefaultProperties } from "interfaces/constantes";
import { useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  handleIcon?: () => JSX.Element;
};

export function Input({ handleIcon, ...rest }: InputProps) {
  const [isVisible, setIsVisible] = useState(false);
  const displayedInputType =
    rest.type === "password" && isVisible ? "text" : rest.type;

  function handleVisibility() {
    setIsVisible(!isVisible);
  }

  function renderPasswordIcons(isVisiblePassword: boolean) {
    return (
      <>
        {isVisiblePassword ? (
          <LuEyeOff {...iconDefaultProperties} />
        ) : (
          <LuEye {...iconDefaultProperties} />
        )}
      </>
    );
  }

  return (
    <section className="border border-black py-2 px-2 gap-1 flex items-center bg-slate-200 rounded-md">
      {handleIcon && handleIcon()}
      <input
        {...rest}
        type={displayedInputType}
        className="w-full border-none outline-none bg-transparent hover:ease-in-out hover:duration-300"
      />
      {rest.type === "password" && (
        <button type="button" onClick={handleVisibility}>
          {renderPasswordIcons(isVisible)}
        </button>
      )}
    </section>
  );
}
