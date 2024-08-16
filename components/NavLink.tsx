"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface INavLinkProps {
  text: string;
  link: string;
}
export function NavLink({ text, link }: INavLinkProps) {
  const path = usePathname();
  return (
    <div className="p-2.5">
      <Link
        href={link}
        className={path === link ? "text-sky-600" : "text-sky-100"}
      >
        {text}
      </Link>
    </div>
  );
}
