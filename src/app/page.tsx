"use client";
import { Input } from "components";
import { iconDefaultProperties } from "constants/icon-default-properties.ts";
import { LuMail, LuLock } from "react-icons/lu";

export default function Home() {
  function renderMainIcon() {
    return <LuMail {...iconDefaultProperties} />;
  }

  function renderLockIcon() {
    return <LuLock {...iconDefaultProperties} />;
  }
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <form className="w-[300px] flex flex-col gap-3">
        <Input type="email" handleIcon={renderMainIcon} />
        <Input type="password" handleIcon={renderLockIcon} />
        <button
          type="submit"
          className="w-full bg-emerald-700 text-white py-2 rounded-md hover:bg-emerald-600 hover:ease-in-out hover:duration-300"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
