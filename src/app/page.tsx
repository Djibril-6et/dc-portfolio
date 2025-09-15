'use client';

import { useI18n } from '@/lib/i18n/context';
import styles from './page.module.scss';
import Image from 'next/image';
import profilePic from '../../public/assets/images/IMG_0580.jpg';
import IconCard from '@/components/IconCard/IconCard';
import GithubIcon from '../../public/assets/icons/github-icon.png';
import LinkedinIcon from '../../public/assets/icons/linkedin-icon.png';
import MaltIcon from '../../public/assets/icons/malt-icon.png';
import ResumeIcon from '../../public/assets/icons/resume-icon.png';

export default function Home() {
  const { t } = useI18n();

  return (
    <div className={styles.page}>
      <div className={styles.upper_wrapper}>
        <div className={styles.picture_wrapper}>
          <Image
            src={profilePic}
            alt="Picture of the author"
            className={styles.profile_picture}
            priority
          />
        </div>
        <div className={styles.text_wrapper}>
          <h1 className={styles.greeting}>{t('home.greeting')}</h1>
          <h2 className={styles.title}>{t('home.title')}</h2>
          <p className={styles.desc}>{t('home.description')}</p>
          <p className={styles.approach}>
            <strong>{t('home.approach')}</strong>
          </p>
          <p className={styles.cta}>
            <em>{t('home.cta')}</em>
          </p>
        </div>
      </div>

      <div className={styles.lower_wrapper}>
        <div className={styles.useful_links}>
          <h3>{t('home.useful_links')} :</h3>
        </div>

        <div className={styles.bracket_left}>
          <div className={styles.bracket_top}></div>
          <div className={styles.bracket_vertical}></div>
          <div className={styles.bracket_bottom}></div>
        </div>

        <div className={styles.links_wrapper}>
          <IconCard
            icon={GithubIcon}
            label="GitHub"
            href="https://github.com/Djibril-6et"
            external={true}
          />
          <IconCard
            icon={LinkedinIcon}
            label="LinkedIn"
            href="https://www.linkedin.com/in/djibril-cisse/"
            external={true}
          />
          <IconCard
            icon={MaltIcon}
            label="Malt"
            href="https://www.malt.fr/profile/djibrilcisse2"
            external={true}
          />
          <IconCard
            icon={ResumeIcon}
            label={t('home.resume')}
            href="/assets/docs/CV_CISSE_Djibril.pdf"
            external={true}
          />
        </div>

        <div className={styles.bracket_right}>
          <div className={styles.bracket_top}></div>
          <div className={styles.bracket_vertical}></div>
          <div className={styles.bracket_bottom}></div>
        </div>
      </div>
    </div>
  );
}
