import Link from 'next/link';

const MENU_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Posts',
    href: '/posts',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default function Header() {
  return (
    <header className="py-4">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-semibold">Jungq Blog</h1>
        </Link>
        <div className="flex gap-3">
          {MENU_ITEMS.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="text-xs font-extralight"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
