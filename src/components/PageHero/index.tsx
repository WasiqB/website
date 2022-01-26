import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { GitHubButtonType, GitHubCountButton } from '../GitHubCountButton';
import { ActionButton, ButtonType } from '../ActionButton';
import { translate } from '@docusaurus/Translate';

interface HeroType {
  title: string;
  tagLine: string;
  image: string;
  buttons: Array<ButtonType>;
  gitButtons: Array<GitHubButtonType>;
}

export const PageHero = ({
  title,
  tagLine,
  image,
  buttons = [],
  gitButtons = [],
}: HeroType): JSX.Element => {
  return (
    <section className={styles.HeroContainer}>
      <div className={styles.HeroContent}>
        <h1 className={styles.HeroTitle}>{title}</h1>
        <p className={styles.HeroDescription}>{tagLine}</p>
      </div>
      <div className={styles.CallToActions}>
        <div className={styles.ctaButtons}>
          {buttons &&
            buttons.map((button) => (
              <ActionButton
                key={button.id}
                id={button.id}
                href={useBaseUrl(button.href)}
                text={button.text}
                type={button.type}
                target={button.target}
              />
            ))}
        </div>
        <div className={styles.SocialButtons}>
          {gitButtons &&
            gitButtons.map((button) => (
              <GitHubCountButton
                key={button.id}
                id={button.id}
                userId={button.userId}
                repoName={button.repoName}
                type={button.type}
              />
            ))}
        </div>
      </div>
      <div className={styles.HeroImage}>
        <img
          alt={translate({ message: title })}
          className={styles.HeroLogo}
          src={useBaseUrl(image)}
        />
      </div>
    </section>
  );
};
