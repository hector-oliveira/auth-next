import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = LinkProps & {
  children: React.ReactNode;
};

export function ActiveLink(props: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  return (
    <>
      <Link
        {...props}
        href={props.href}
        className={`px-3 py-1 ${
          isActive ? "bg-slate-500 text-white" : "text-slate-400"
        }`}
      >
        {props.children}
      </Link>
    </>
  );
}
