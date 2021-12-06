import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Features from '@components/Features';
import HeroSection, { ButtonProps, GitHubButton } from '@components/heroSection';
import ServiceList from '@contents/services.json';

const gitButtons: GitHubButton[] = [
  {
    id: 'gbtn-1',
    user: 'WasiqB',
    type: 'follow',
  },
];

const buttons: ButtonProps[] = [
  {
    id: 'btn-1',
    text: 'About',
    className: 'button--primary',
    to: '/about',
  },
];

function HomepageHeader({ title, description }): JSX.Element {
  return (
    <HeroSection
      image={'/img/home_banner.jpg'}
      description={description}
      message={title}
      buttons={buttons}
      gitButtons={gitButtons}
    />
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader
        title={`<b>${siteConfig.title}</b> - ${siteConfig.tagline}`}
        description={siteConfig.title}
      />
      <main>
        <Features features={ServiceList} />
      </main>
    </Layout>
  );
}
