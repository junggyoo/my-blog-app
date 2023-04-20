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
        <div>
          <Link href="/" className="text-xl font-semibold">
            Seize Blog
          </Link>
        </div>
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
