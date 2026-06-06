import Link from "next/link";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";

export function GlobalNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-6 sm:px-10">
        {/* Brand: theme-aware monogram + wordmark, links home */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Mohammed Vaseeuddin, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mv-logo.png" alt="" className="seal-mark h-6 w-auto" />
          <span className="hidden whitespace-nowrap font-display text-[16px] font-semibold tracking-[-0.02em] text-ink sm:inline">
            Mohammed Vaseeuddin
          </span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-7">
          <NavLink href="/bio">Bio</NavLink>
          <NavLink href="/#work">Work</NavLink>
          <NavLink href="/margins">Margins</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
