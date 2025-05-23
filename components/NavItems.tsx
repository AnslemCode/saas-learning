"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Companions",
    href: "/companions",
  },
  {
    title: "My Journey",
    href: "/my-journey",
  },
];

const NavItems = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ title, href }) => (
        <Link
          key={title}
          href={href}
          className={cn(pathname === href && "text-primary font-semibold")}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
