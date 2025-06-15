import Link from "next/link";
import { cn } from "@/lib/cn";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub  } from "react-icons/bs";

const NAV = [
  { slug: "/yar", label: "Я" },
  { slug: "/journal", label: "Подумав" },
  { slug: "/things", label: "Зробив" },
];

const SOCIAL = [
  {
    label: "Fasebook",
    slug: "https://www.facebook.com/yar.usenko",
    Icon: BsFacebook,
  },
  {
    label: "Instagram",
    slug: "https://www.instagram.com/yar.usenko",
    Icon: BsInstagram,
  },
  {
    label: "LinkedIn",
    slug: 'linkedin',
    Icon: BsLinkedin
  },
  {
    label: "GitHub",
    slug: "https://www.linkedin.com/in/yar-usenko-inc",
    Icon: BsGithub,
  },
];

export function Footer({ className = [] }: { className?: string[] }) {
  return (
    <footer className={cn("text-sm", ...className)}>
      <div className={cn("container", "mx-auto", "px-6", "py-4")}>
        <nav
          className={cn(
            "flex",
            "gap-4",
            "flex-wrap",
            "justify-start",
            "sm:justify-center",
            "mb-6"
          )}
        >
          {NAV.map(({ label, slug }) => (
            <Link
              key={`${label}-${slug}`}
              href={slug}
              className={cn("transition")}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div
          className={cn(
            "flex",
            "gap-4",
            "flex-wrap",
            "justify-start",
            "sm:justify-center",
            "mb-6"
          )}
        >
          {SOCIAL.map(({ label, slug, Icon }) => (
            <Link key={`${label}-${slug}`} href={slug}>
              <span className="sr-only">{label}</span>
                {Icon && <Icon target="_blank" className={cn('size-6')} />}
            </Link>
          ))}
        </div>
        <p className={cn("text-left", "sm:text-center")}>
          © 2025 Ярослав Усенко. Всі права залишаю за собою. Built by shadcn at Vercel. The source code is available on GitHub.
        </p>
      </div>
    </footer>
  );
}
