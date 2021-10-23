import { Link } from '@docusaurus/router';
import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

export type ButtonProps = {
  className: string;
  to: string;
  iconClass?: string;
  text: string;
};

type HeroProps = {
  image: string;
  message: string;
  description: string;
  buttons?: ButtonProps[];
  gitButtons?: GitHubButton[];
};

type CTAProps = {
  buttons: ButtonProps[];
  gitButtons: GitHubButton[];
};

export type GitHubButton = {
  user: string;
  repo?: string;
  type: 'star' | 'watch' | 'fork' | 'follow';
  v2?: boolean;
};

function CTAButtons({ buttons, gitButtons }: CTAProps): JSX.Element {
  if (!buttons || buttons.length === 0) return;
  return (
    <>
      <div className={styles.indexCtas}>
        {gitButtons &&
          gitButtons.map((button) => (
            <GitHubCountButton
              key={button.type}
              user={button.user}
              repo={button.repo}
              type={button.type}
              v2={button.v2}
            />
          ))}
        {buttons.map((button) => (
          <>
            <Link
              key={button.to}
              className={clsx('button', button.className)}
              to={useBaseUrl(button.to)}
            >
              {button.iconClass && <i className={button.iconClass}></i>}
              {button.text}
            </Link>
          </>
        ))}
      </div>
    </>
  );
}

function GitHubCountButton({ user, repo = null, type, v2 = false }: GitHubButton): JSX.Element {
  const gitUrl = 'https://ghbtns.com/github-btn.html';
  const repoQuery = repo ? `repo=${repo}&` : '';
  const newVersion = v2 === true ? '&v=2' : '';
  const queries = `user=${user}&${repoQuery}type=${type}&count=true&size=large${newVersion}`;
  const source = `${gitUrl}?${queries}`;
  return (
    <>
      <span className={styles.indexCtasGitHubButtonWrapper}>
        <iframe
          className={styles.indexCtasGitHubButton}
          src={source}
          frameBorder='0'
          scrolling='0'
          width={160}
          height={30}
        />
      </span>
    </>
  );
}

function HeroContent({ image, message, description }): JSX.Element {
  return (
    <h1 className={styles.heroProjectTagline}>
      <img
        alt={translate({ message: message })}
        className={styles.heroLogo}
        src={useBaseUrl(image)}
      />
      <span
        className={styles.heroTitleTextHtml}
        dangerouslySetInnerHTML={{
          __html: translate({
            id: 'homepage.hero.title',
            message: message,
            description: description,
          }),
        }}
      />
    </h1>
  );
}

const HeroSection = ({
  image,
  message,
  description,
  buttons = [],
  gitButtons = [],
}: HeroProps): JSX.Element => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <HeroContent image={image} message={message} description={description} />
      </div>
      <CTAButtons buttons={buttons} gitButtons={gitButtons} />
    </section>
  );
};

export default HeroSection;
