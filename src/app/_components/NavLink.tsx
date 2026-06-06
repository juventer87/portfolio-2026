"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // "/#work" lives on the homepage, so it is active when the path is "/".
  const target = href.startsWith("/#") ? "/" : href;
  const active = pathname === target;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`font-mono text-[12px] tracking-tight transition-colors duration-200 ${
        active ? "text-ink" : "text-faint hover:text-ink"
      }`}
    >
      {children}
    </Link>
  );
}
