import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { GitHubCountButton } from '../GitHubCountButton';
import { ActionButton } from '../ActionButton';
import Typist from 'react-typist';
import { TwitterFollowButton } from 'react-twitter-embed';

const HeroContent = ({ title, tagLine }): JSX.Element => {
  return (
    <div className={styles.HeroContent}>
      <h1 className={styles.HeroTitle}>{title}</h1>
      <Typist avgTypingDelay={40} cursor={{ hideWhenDone: true, show: false }}>
        <p className={styles.HeroDescription}>{tagLine}</p>
      </Typist>
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

const SocialButtons = ({ gitButtons, showTwitter }): JSX.Element => {
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
      {showTwitter && <TwitterFollowButton screenName={'WasiqBhamla'} />}
    </div>
  );
};

const PageHero = ({
  title,
  tagLine,
  image,
  buttons = [],
  gitButtons = [],
  showTwitter = false,
}): JSX.Element => {
  return (
    <section
      className={styles.HeroContainer}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${useBaseUrl(
          image
        )})`,
      }}
    >
      <HeroContent title={title} tagLine={tagLine} />
      <div className={styles.CallToActions}>
        <CTAButtons buttons={buttons} />
        <SocialButtons gitButtons={gitButtons} showTwitter={showTwitter} />
      </div>
    </section>
  );
};

export { PageHero };
