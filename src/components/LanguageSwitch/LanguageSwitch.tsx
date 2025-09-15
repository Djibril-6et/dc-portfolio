'use client';

import { useI18n } from '@/lib/i18n/context';
import styles from './LanguageSwitch.module.scss';

export default function LanguageSwitch() {
  const { language, setLanguage, t } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={styles.languageSwitch}
      aria-label={t('language.switch')}
      title={t('language.switch')}
    >
      <span className={styles.flag}>{language === 'fr' ? '🇺🇸' : '🇫🇷'}</span>
      <span className={styles.label}>{language === 'fr' ? 'EN' : 'FR'}</span>
    </button>
  );
}
