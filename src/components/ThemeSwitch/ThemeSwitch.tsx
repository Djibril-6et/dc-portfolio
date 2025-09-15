'use client';

import { useTheme } from '@/lib/theme/context';
import styles from './ThemeSwitch.module.scss';
import Image from 'next/image';
import MoonIcon from '../../../public/assets/icons/moon-icon.png'
import SunIcon from '../../../public/assets/icons/sun-icon.png'

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeSwitch}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <span className={styles.icon}>
        {theme === 'light' ? <Image src={SunIcon} alt='light' className={styles.theme_icon}/> : <Image src={MoonIcon} alt="dark" className={styles.theme_icon}/>}
      </span>
      <span className={styles.label}>
        {theme === 'light' ? 'LIGHT' : 'DARK'}
      </span>
    </button>
  );
}