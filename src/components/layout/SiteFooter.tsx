import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { CONTACT_EMAIL, WHO_WE_ARE } from "@/lib/copy";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-24 border-t border-ink/10 px-4 py-16 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Image
            src="/images/logo-horizontal.png"
            alt="The Alter Ego Creative Studio"
            width={1024}
            height={320}
            className="h-12 w-auto md:h-14"
          />
          <p className="mt-3 max-w-sm font-body text-sm text-ink/65">{WHO_WE_ARE}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-block font-body text-sm font-semibold text-magenta hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <div className="flex flex-wrap gap-8">
          <ul className="space-y-2">
            {BRAND.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-xs font-semibold uppercase tracking-widest text-ink/60 hover:text-magenta"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="font-body text-xs text-ink/50">
            <p>© {new Date().getFullYear()} The Alter Ego</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
