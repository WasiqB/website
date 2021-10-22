import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Features, { FeatureItem } from '../components/Features';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HeroSection, { ButtonProps, GitHubButton } from '../components/heroSection';

const ServiceList: FeatureItem[] = [
  {
    title: 'Freelancing projects',
    image: '/img/undraw_Organizing_projects.svg',
    description: (
      <>
        I can help automate any product for any platform (e.g: Web, API, Android and iOS) or help
        you create Test automation frameworks.
      </>
    ),
  },
  {
    title: 'Personalized Training',
    image: '/img/undraw_personal_training.svg',
    description: (
      <>
        I can provide personalized training for any tech stack related to Test Automation and CI /
        CD.
      </>
    ),
  },
  {
    title: 'Mentoring',
    image: '/img/undraw_teacher.svg',
    description: (
      <>
        I can help mentor you in Test Automation space, understand different concepts and tools used
        for Automation and CI / CD.
      </>
    ),
  },
  {
    title: 'Knowledge sharing',
    image: '/img/undraw_knowledge.svg',
    description: (
      <>
        I like sharing my knowledge with the QA community. I am thinking of sharing my knowledge via
        blogs, YouTube videos, workshops, talks, etc.
      </>
    ),
  },
];

const gitButtons: GitHubButton[] = [
  {
    user: 'WasiqB',
    type: 'follow',
  },
];

const buttons: ButtonProps[] = [
  {
    text: 'About',
    className: 'button--primary',
    to: '/about',
  },
];

function HomepageHeader({ title, description }): JSX.Element {
  return (
    <HeroSection
      image={useBaseUrl('/img/home_banner.jpg')}
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
        title={`${siteConfig.title} - ${siteConfig.tagline}`}
        description={siteConfig.title}
      />
      <main>
        <Features features={ServiceList} />
      </main>
    </Layout>
  );
}
