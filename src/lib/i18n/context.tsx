'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type Language = 'fr' | 'en';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Dictionnaires de traduction
const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.projects': 'Projects',
    'nav.about': 'Journey',
    'nav.contact': 'Contact',
    'language.switch': 'Switch to English',
    'settings.title': 'Settings',
    'settings.language': 'Language',
    'settings.theme': 'Theme',
  },
  fr: {
    'nav.projects': 'Projets',
    'nav.about': 'Parcours',
    'nav.contact': 'Contact',
    'language.switch': 'Passer au français',
    'settings.title': 'Paramètres',
    'settings.language': 'Langue',
    'settings.theme': 'Thème',
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');

  // Charger la langue depuis localStorage au démarrage
  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-language') as Language;
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
      setLanguageState(savedLang);
    } else {
      // Détecter la langue du navigateur
      const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
      setLanguageState(browserLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
