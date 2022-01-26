import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Features from '../components/Features';
import ServiceList from '../contents/services.json';
import { ButtonType } from '../components/ActionButton';
import { GitHubButtonType } from '../components/GitHubCountButton';
import { PageHero } from '../components/PageHero';

const gitButtons: GitHubButtonType[] = [
  {
    id: 1,
    userId: 'WasiqB',
    type: 'Follow',
    repoName: undefined,
  },
];

const buttons: ButtonType[] = [
  {
    id: 1,
    type: 'button--primary',
    target: '_self',
    text: 'About',
    href: '/about',
  },
];

function HomepageHeader({ title, description }): JSX.Element {
  return (
    <PageHero
      image={'/img/home_banner.jpg'}
      tagLine={description}
      title={title}
      buttons={buttons}
      gitButtons={gitButtons}
    />
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader title={siteConfig.title} description={siteConfig.tagline} />
      <main>
        <Features features={ServiceList} />
      </main>
    </Layout>
  );
}
