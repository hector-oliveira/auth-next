import { iconDefaultProperties } from "constants/icon-default-properties.ts";
import { LuEye, LuEyeOff } from "react-icons/lu";

export function renderPasswordIcons(isVisiblePassword: boolean) {
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
