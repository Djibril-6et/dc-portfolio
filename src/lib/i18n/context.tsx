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
    // HEADER
    'nav.projects': 'Projects',
    'nav.about': 'Journey',
    'nav.contact': 'Contact',
    'language.switch': 'Switch to English',
    'settings.title': 'Settings',
    'settings.language': 'Language',
    'settings.theme': 'Theme',
    // HOME
    'home.greeting': "Hello, I'm Djibril CISSÉ",
    'home.title': 'Fullstack Developer passionate about innovation',
    'home.description':
      "I'm a 24-year-old fullstack developer based in Paris, specializing in creating high-performance web and mobile applications. With expertise in React, Next.js, Node.js, and React Native, I transform your ideas into concrete digital solutions.",
    'home.approach':
      'My approach: combining technical excellence with exceptional user experience to create products that make a difference.',
    'home.cta': 'Ready to bring your next project to life?',
    'home.useful_links': 'Useful links',
    'home.resume': 'My resume',
  },
  fr: {
    // HEADER
    'nav.projects': 'Projets',
    'nav.about': 'Parcours',
    'nav.contact': 'Contact',
    'language.switch': 'Passer au français',
    'settings.title': 'Paramètres',
    'settings.language': 'Langue',
    'settings.theme': 'Thème',
    // HOME
    'home.greeting': 'Bonjour, je suis Djibril CISSÉ',
    'home.title': "Développeur Fullstack passionné par l'innovation",
    'home.description':
      "Je suis un développeur fullstack de 24 ans basé à Paris, spécialisé dans la création d'applications web et mobiles performantes. Avec une expertise en React, Next.js, Node.js et React Native, je transforme vos idées en solutions numériques concrètes.",
    'home.approach':
      'Mon approche : allier excellence technique et expérience utilisateur exceptionnelle pour créer des produits qui marquent la différence.',
    'home.cta': 'Prêt à donner vie à votre prochain projet ?',
    'home.useful_links': 'Liens utiles',
    'home.resume': 'Mon CV',
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
