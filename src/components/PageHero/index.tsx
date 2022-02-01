import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { GitHubCountButton } from '../GitHubCountButton';
import { ActionButton } from '../ActionButton';
import { translate } from '@docusaurus/Translate';

const HeroContent = ({ title, tagLine }): JSX.Element => {
  return (
    <div className={styles.HeroContent}>
      <h1 className={styles.HeroTitle}>{title}</h1>
      <p className={styles.HeroDescription}>{tagLine}</p>
    </div>
  );
};

const CTAButtons = ({ buttons }): JSX.Element => {
  return (
    <div className={styles.ctaButtons}>
      {buttons &&
        buttons.map((button) => (
          <ActionButton
            key={button.id}
            href={useBaseUrl(button.href)}
            text={button.text}
            type={button.type}
            target={button.target}
          />
        ))}
    </div>
  );
};

const SocialButtons = ({ gitButtons }): JSX.Element => {
  return (
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
  );
};

const HeroImage = ({ title, image }): JSX.Element => {
  return (
    <div className={styles.HeroImage}>
      <img
        alt={translate({ message: title })}
        className={styles.HeroLogo}
        src={useBaseUrl(image)}
      />
    </div>
  );
};

const PageHero = ({ title, tagLine, image, buttons = [], gitButtons = [] }): JSX.Element => {
  return (
    <section className={styles.HeroContainer}>
      <HeroContent title={title} tagLine={tagLine} />
      <div className={styles.CallToActions}>
        <CTAButtons buttons={buttons} />
        <SocialButtons gitButtons={gitButtons} />
      </div>
      <HeroImage title={title} image={image} />
    </section>
  );
};

export { PageHero };
