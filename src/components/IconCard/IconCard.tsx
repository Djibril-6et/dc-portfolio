// IconCard.tsx
import {StaticImageData} from 'next/image';
import Image from 'next/image';
import styles from './IconCard.module.scss';

interface IconCardProps {
  icon: string | StaticImageData; // Chemin vers l'image
  label: string; // Texte à afficher
  href: string; // Lien de destination
  alt?: string; // Texte alternatif pour l'image (optionnel)
  external?: boolean; // Si le lien est externe (optionnel, défaut: false)
}

export default function IconCard({ 
  icon, 
  label, 
  href, 
  alt, 
  external = false 
}: IconCardProps) {
  const linkProps = external 
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a 
      href={href} 
      className={styles.icon_card}
      {...linkProps}
    >
      <div className={styles.icon_wrapper}>
        <Image
          src={icon}
          alt={alt || label}
          width={40}
          height={40}
          className={styles.icon}
        />
      </div>
      <span className={styles.label}>{label}</span>
    </a>
  );
}