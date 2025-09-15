'use client';

import { useI18n } from '@/lib/i18n/context';
import styles from './LanguageSwitch.module.scss';
import Image from 'next/image';
import USFlag from '../../../public/assets/icons/usa-flag-icon.png';
import FRFlag from '../../../public/assets/icons/france-flag-icon.png';

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
      <span className={styles.flag}>
        {language === 'fr' ? (
          <Image className={styles.flag_icon} src={FRFlag} alt="FR" />
        ) : (
          <Image className={styles.flag_icon} src={USFlag} alt="EN" />
        )}
      </span>
      <span className={styles.label}>
        {language === 'fr' ? 'FRANÇAIS' : 'ENGLISH'}
      </span>
    </button>
  );
}
