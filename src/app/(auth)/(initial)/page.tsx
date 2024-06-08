import { AUTH_ROUTES } from "constants/routes";
import Link from "next/link";

type HomeProps = {};

export default function Home(props: HomeProps) {
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <Link
        href={AUTH_ROUTES.SIGN_IN}
        className="hover:bg-slate-500 p-1 rounded-sm hover:ease-in-out"
      >
        Login
      </Link>
    </main>
  );
}
