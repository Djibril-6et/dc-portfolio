'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';
import Settings from '@/components/Settings/Settings';
import styles from './Header.module.scss';
import DCLogo from '../../../public/assets/logo/DCLogo';

export default function Header() {
  const pathname = usePathname();
  const { t } = useI18n();

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
            <Settings />
          </div>
          <div className={styles.nav_links}>
            <Link
              href="/projects"
              className={`${styles.nav_text} ${pathname === '/projects' ? styles.active : ''}`}
            >
              {t('nav.projects')}
            </Link>
          </div>
          <div className={styles.nav_links}>
            <Link
              href="/about"
              className={`${styles.nav_text} ${pathname === '/about' ? styles.active : ''}`}
            >
              {t('nav.about')}
            </Link>
          </div>
          <div className={styles.nav_links}>
            <Link href="/contact">
              <button className={styles.contact_button}>
                {t('nav.contact')}
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}