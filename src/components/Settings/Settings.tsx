'use client';

import { useState, useRef, useEffect } from 'react';
import { useI18n } from '@/lib/i18n/context';
import LanguageSwitch from '@/components/LanguageSwitch/LanguageSwitch';
import ThemeSwitch from '@/components/ThemeSwitch/ThemeSwitch';
import styles from './Settings.module.scss';
import Image from 'next/image';
import SettingsIcon from '../../../public/assets/icons/settings-icon.png'

export default function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();
  const modalRef = useRef<HTMLDivElement>(null);

  // Fermer la modal en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Fermer avec Échap
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <div className={styles.settingsContainer}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.settingsButton}
        aria-label="Ouvrir les paramètres"
        title="Paramètres"
      >
        <Image className={styles.gear} src={SettingsIcon} alt="Settings"/>
      </button>

      {isOpen && (
        <div className={styles.modalOverlay}>
          <div ref={modalRef} className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{t('settings.title')}</h3>
              <button
                onClick={() => setIsOpen(false)}
                className={styles.closeButton}
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            <div className={styles.modalContent}>
              <div className={styles.settingGroup}>
                <label className={styles.settingLabel}>{t('settings.language')}</label>
                <LanguageSwitch />
              </div>

              <div className={styles.settingGroup}>
                <label className={styles.settingLabel}>{t('settings.theme')}</label>
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}