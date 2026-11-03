import { socials } from '@/lib/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {socials.map(({ label, url }) => (
          <li key={label}>
            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <span className={styles.copyright}>© {new Date().getFullYear()} Satellite Respond</span>
    </footer>
  );
}
