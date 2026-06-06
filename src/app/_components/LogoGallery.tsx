import Link from "next/link";
import { creativeWork } from "./site-data";

// Logos were copied (read-only) from `All Pictures/` into `/public/logos`.
function logoSrc(slug: string) {
  return `/logos/${slug}.${slug === "zero-makeup" ? "jpg" : "png"}`;
}

export function LogoGallery() {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4">
      {creativeWork.map((w) => (
        <li key={w.slug}>
          <Link
            href={`/work/${w.slug}`}
            aria-label={`${w.title}, ${w.meta}`}
            className="logo-link group flex aspect-[3/2] items-center justify-center px-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc(w.slug)}
              alt={`${w.title} logo`}
              loading="lazy"
              decoding="async"
              className="logo-mark max-h-full max-w-full object-contain"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
