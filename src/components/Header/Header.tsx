'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Header.module.scss';
import DCLogo from "../../../public/assets/logo/DCLogo"

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.left_part}>
        <Link href="/">
          <DCLogo />
        </Link>
      </div>
      <div className={styles.right_part}>
        <nav className={styles.nav}>
          <div className={styles.nav_links}>
            <Link 
              href="/projects" 
              className={`${styles.nav_text} ${pathname === '/projects' ? styles.active : ''}`}
            >
              Projects
            </Link>
          </div>
          <div className={styles.nav_links}>
            <Link 
              href="/about" 
              className={`${styles.nav_text} ${pathname === '/about' ? styles.active : ''}`}
            >
              Parcours
            </Link>
          </div>
          <div className={styles.nav_links}>
            <Link href="/contact">
              <button className={styles.contact_button}>Contact</button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}