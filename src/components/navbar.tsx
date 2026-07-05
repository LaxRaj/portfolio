import Link from "next/link";

const links = [
  { label: "Life", href: "/life" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Coffee?", href: "/coffee" },
];

export function Navbar() {
  return (
    <nav className="nav" aria-label="Primary">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="nav-link">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
