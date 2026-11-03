'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/music', label: 'Music' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="Satellite Respond — home">
        <Image src="/img/sr-wordmark.png" alt="" width={1857} height={93} priority />
      </Link>
      <nav className={styles.nav} aria-label="Main">
        {navItems.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`${styles.item} ${active ? styles.active : ''}`}
              aria-current={active ? 'page' : undefined}
            >
              <span>{label}</span>
              <span className={styles.dot} aria-hidden="true" />
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
